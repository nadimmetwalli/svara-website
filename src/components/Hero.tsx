import { Link } from 'react-router-dom'
import { ROUTES } from '../routes'

export default function Hero() {
  return (
    <section className="hero" id="home">
      <div className="hero-bg">
        <div className="hero-glow-1" />
        <div className="hero-glow-2" />
        <div className="hero-glow-3" />
        <div className="hero-noise" />
      </div>

      <div className="hero-center">
        <p className="hero-eyebrow">AI powered voice intelligence for modern hospitality operations</p>
        <h1 className="hero-h1">
          The voice your<br />guests remember,<br /><em>in every language.</em>
        </h1>
      </div>

      <div className="hero-bottom">
        <div className="hero-bottom-inner">
          <div className="hero-bottom-left">
            <div className="hero-rating">
              <span className="rating-stars">★★★★★</span>
              <span className="rating-score">4.8</span>
              <span className="rating-source">Prototron</span>
            </div>
            <p className="hero-bottom-desc">
              The first multilingual AI voice agent that sounds like your best employee — answering every call, in any language, 24/7.
            </p>
          </div>
          <div className="hero-bottom-right">
            <Link to={ROUTES.product} className="hero-demo-btn">
              <span>Hear It Live</span>
              <div className="demo-orb" />
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}
