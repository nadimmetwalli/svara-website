export interface DetailCard {
  title: string
  description: string
}

export interface DetailSplitBlock {
  type: 'split'
  id: string
  tone?: 'light' | 'muted'
  tag?: string
  title: string
  description?: string
  bullets: string[]
}

export interface DetailCardsBlock {
  type: 'cards'
  id: string
  tone?: 'light' | 'muted'
  tag?: string
  title: string
  description?: string
  cards: DetailCard[]
}

export interface DetailStepsBlock {
  type: 'steps'
  id: string
  tone?: 'light' | 'muted'
  tag?: string
  title: string
  description?: string
  steps: DetailCard[]
}

export type DetailBlock = DetailSplitBlock | DetailCardsBlock | DetailStepsBlock

function DetailSectionHeader({
  tag,
  title,
  description,
}: {
  tag?: string
  title: string
  description?: string
}) {
  return (
    <div className="detail-header fade-up">
      {tag && <div className="section-tag">{tag}</div>}
      <h2 className="section-h2">{title}</h2>
      {description && <p className="section-sub detail-sub">{description}</p>}
    </div>
  )
}

function SplitBlock({ block }: { block: DetailSplitBlock }) {
  return (
    <section className={`detail-section detail-tone-${block.tone ?? 'light'}`} id={block.id}>
      <div className="container">
        <div className="detail-split fade-up">
          <div className="detail-split-copy">
            <DetailSectionHeader tag={block.tag} title={block.title} description={block.description} />
          </div>
          <ul className="detail-list">
            {block.bullets.map((item) => (
              <li key={item}>
                <span className="detail-list-check" aria-hidden="true">✓</span>
                {item}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  )
}

function CardsBlock({ block }: { block: DetailCardsBlock }) {
  return (
    <section className={`detail-section detail-tone-${block.tone ?? 'muted'}`} id={block.id}>
      <div className="container">
        <DetailSectionHeader tag={block.tag} title={block.title} description={block.description} />
        <div className="detail-cards">
          {block.cards.map((card) => (
            <article key={card.title} className="detail-card fade-up">
              <h3>{card.title}</h3>
              <p>{card.description}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}

function StepsBlock({ block }: { block: DetailStepsBlock }) {
  return (
    <section className={`detail-section detail-tone-${block.tone ?? 'light'}`} id={block.id}>
      <div className="container">
        <DetailSectionHeader tag={block.tag} title={block.title} description={block.description} />
        <div className="detail-steps">
          {block.steps.map((step, index) => (
            <article key={step.title} className="detail-step fade-up">
              <div className="detail-step-num">{String(index + 1).padStart(2, '0')}</div>
              <div>
                <h3>{step.title}</h3>
                <p>{step.description}</p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}

export default function DetailSections({ blocks }: { blocks: DetailBlock[] }) {
  return (
    <>
      {blocks.map((block) => {
        if (block.type === 'split') return <SplitBlock key={block.id} block={block} />
        if (block.type === 'cards') return <CardsBlock key={block.id} block={block} />
        return <StepsBlock key={block.id} block={block} />
      })}
    </>
  )
}
