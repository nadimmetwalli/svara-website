interface PageHeroProps {
  tag: string
  title: string
  description: string
}

export default function PageHero({ tag, title, description }: PageHeroProps) {
  return (
    <section className="page-hero">
      <div className="container">
        <div className="page-hero-inner fade-up">
          <div className="section-tag">{tag}</div>
          <h1 className="page-hero-title">{title}</h1>
          <p className="page-hero-desc">{description}</p>
        </div>
      </div>
    </section>
  )
}
