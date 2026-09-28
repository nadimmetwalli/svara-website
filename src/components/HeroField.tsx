import { useEffect, useRef } from 'react'

/* HeroField — the quiet light behind the hero.

   A small WebGL fragment shader: slow, low-contrast silk in the
   SVARA purples, and a soft lavender light that drifts toward the
   pointer like a lamp being carried across a dark room. It is meant
   to be noticed on the second look, not the first.

   Cost and comfort controls:
   - rendered at reduced resolution and scaled up by CSS (the field
     is blurry by design, so this is invisible);
   - stops rendering while the hero is off-screen;
   - with prefers-reduced-motion it draws one still frame and never
     follows the pointer;
   - if WebGL is unavailable the canvas stays empty and the hero
     simply sits on the page ground. */

const VERT = `
attribute vec2 p;
void main() { gl_Position = vec4(p, 0.0, 1.0); }
`

const HERO_FIELD_FRAG = `
precision mediump float;
uniform vec2  uRes;
uniform float uTime;
uniform vec2  uMouse;   // 0..1, y up
uniform float uEnergy;  // 0..1, rises gently while the pointer moves

float hash(vec2 p) { return fract(sin(dot(p, vec2(127.1, 311.7))) * 43758.5453); }
float noise(vec2 p) {
  vec2 i = floor(p), f = fract(p);
  vec2 u = f * f * (3.0 - 2.0 * f);
  return mix(mix(hash(i), hash(i + vec2(1.0, 0.0)), u.x),
             mix(hash(i + vec2(0.0, 1.0)), hash(i + vec2(1.0, 1.0)), u.x), u.y);
}
float fbm(vec2 p) {
  float v = 0.0, a = 0.5;
  for (int i = 0; i < 4; i++) { v += a * noise(p); p = p * 2.03 + 11.0; a *= 0.5; }
  return v;
}

void main() {
  vec2 uv = gl_FragCoord.xy / uRes;
  float asp = uRes.x / uRes.y;
  vec2 q = uv * vec2(asp, 1.0);
  vec2 m = uMouse * vec2(asp, 1.0);

  float t = uTime * 0.018;

  // A very small bend around the pointer; the field barely parts.
  vec2 d = q - m;
  float near = exp(-dot(d, d) * 1.6);
  q += normalize(d + 1e-4) * near * 0.022;

  vec2 w = vec2(fbm(q * 1.2 + t), fbm(q * 1.2 - t + 3.7));
  float f = fbm(q * 1.0 + w * 1.4);

  vec3 ground = vec3(0.039, 0.035, 0.063); // #0A0910, the page ground
  vec3 brand  = vec3(0.122, 0.090, 0.220); // #1F1738
  vec3 dusk   = vec3(0.235, 0.200, 0.360); // a lifted lavender, used faintly

  vec3 col = mix(ground, brand, smoothstep(0.3, 0.85, f) * 0.85);
  col = mix(col, dusk, smoothstep(0.65, 0.95, f) * 0.18);

  // The lamp: wide, soft, low. Movement only warms it slightly.
  col += vec3(0.46, 0.40, 0.72) * near * (0.05 + 0.03 * uEnergy);

  // Settle into the page ground towards the bottom edge.
  col = mix(col, ground, smoothstep(0.5, 0.0, uv.y));

  gl_FragColor = vec4(col, 1.0);
}
`

const SCALE = 0.5 // render at half resolution

export default function HeroField() {
  const canvasRef = useRef<HTMLCanvasElement>(null)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return
    const gl = canvas.getContext('webgl', { antialias: false, premultipliedAlpha: false })
    if (!gl) return

    const compile = (type: number, src: string) => {
      const s = gl.createShader(type)!
      gl.shaderSource(s, src)
      gl.compileShader(s)
      return gl.getShaderParameter(s, gl.COMPILE_STATUS) ? s : null
    }
    const vs = compile(gl.VERTEX_SHADER, VERT)
    const fs = compile(gl.FRAGMENT_SHADER, HERO_FIELD_FRAG)
    if (!vs || !fs) return
    const prog = gl.createProgram()!
    gl.attachShader(prog, vs)
    gl.attachShader(prog, fs)
    gl.linkProgram(prog)
    if (!gl.getProgramParameter(prog, gl.LINK_STATUS)) return
    gl.useProgram(prog)

    const buf = gl.createBuffer()
    gl.bindBuffer(gl.ARRAY_BUFFER, buf)
    gl.bufferData(gl.ARRAY_BUFFER, new Float32Array([-1, -1, 3, -1, -1, 3]), gl.STATIC_DRAW)
    const loc = gl.getAttribLocation(prog, 'p')
    gl.enableVertexAttribArray(loc)
    gl.vertexAttribPointer(loc, 2, gl.FLOAT, false, 0, 0)

    const uRes = gl.getUniformLocation(prog, 'uRes')
    const uTime = gl.getUniformLocation(prog, 'uTime')
    const uMouse = gl.getUniformLocation(prog, 'uMouse')
    const uEnergy = gl.getUniformLocation(prog, 'uEnergy')

    const reduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches

    // Pointer target, and a slow critically-damped follower (no overshoot).
    const target = { x: 0.62, y: 0.55 } // starts behind the product window
    const pos = { ...target }
    let energy = 0
    let lastMove = 0

    const resize = () => {
      const r = canvas.getBoundingClientRect()
      const dpr = Math.min(window.devicePixelRatio || 1, 1.5)
      canvas.width = Math.max(1, Math.round(r.width * dpr * SCALE))
      canvas.height = Math.max(1, Math.round(r.height * dpr * SCALE))
      gl.viewport(0, 0, canvas.width, canvas.height)
      gl.uniform2f(uRes, canvas.width, canvas.height)
    }

    const draw = (time: number) => {
      pos.x += (target.x - pos.x) * 0.025
      pos.y += (target.y - pos.y) * 0.025
      const moving = time - lastMove < 160 ? 1 : 0
      energy += (moving - energy) * 0.02
      gl.uniform1f(uTime, time / 1000)
      gl.uniform2f(uMouse, pos.x, pos.y)
      gl.uniform1f(uEnergy, energy)
      gl.drawArrays(gl.TRIANGLES, 0, 3)
    }

    let raf = 0
    let visible = true
    const loop = (time: number) => {
      draw(time)
      if (visible) raf = requestAnimationFrame(loop)
    }

    const onMove = (e: PointerEvent) => {
      const r = canvas.getBoundingClientRect()
      target.x = (e.clientX - r.left) / r.width
      target.y = 1 - (e.clientY - r.top) / r.height
      lastMove = performance.now()
    }

    resize()
    window.addEventListener('resize', resize)

    if (reduced) {
      draw(8000)
      return () => window.removeEventListener('resize', resize)
    }

    const io = new IntersectionObserver(([entry]) => {
      visible = entry.isIntersecting
      cancelAnimationFrame(raf)
      if (visible) raf = requestAnimationFrame(loop)
    })
    io.observe(canvas)
    window.addEventListener('pointermove', onMove, { passive: true })

    return () => {
      cancelAnimationFrame(raf)
      io.disconnect()
      window.removeEventListener('resize', resize)
      window.removeEventListener('pointermove', onMove)
    }
  }, [])

  return <canvas ref={canvasRef} aria-hidden="true" />
}
