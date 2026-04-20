const LANGUAGES = [
  'English','Finnish','Estonian','Swedish','Norwegian','German','French',
  'Spanish','Portuguese','Italian','Dutch','Polish','Russian','Japanese',
  'Mandarin','Arabic','Korean','Turkish','Hindi','Greek',
]

const PROPERTY_TYPES = [
  'Boutique Hotels','Restaurants','City Hotels','Spa & Wellness','Spa Resorts',
  'Airport Hotels','Luxury Resorts','Vacation Rentals','Bed & Breakfasts',
  'Serviced Apartments','Hostels','Conference Hotels','Eco Lodges',
  'Golf Resorts','Design Hotels','Heritage Properties',
]

function MarqueeRow({ items, reverse = false }: { items: string[]; reverse?: boolean }) {
  const doubled = [...items, ...items]
  return (
    <div className="marquee-track">
      <div className={`marquee-inner${reverse ? ' marquee-inner-reverse' : ''}`}>
        {doubled.map((item, i) => (
          <span key={i}>
            {i > 0 && <span className="mq-sep"> · </span>}
            {item}
          </span>
        ))}
      </div>
    </div>
  )
}

export default function Marquee() {
  return (
    <section className="marquee-section">
      <p className="marquee-label">Speaks your guests' language natively</p>
      <MarqueeRow items={LANGUAGES} />
      <p className="marquee-label marquee-label-2">Built for every property type</p>
      <MarqueeRow items={PROPERTY_TYPES} reverse />
    </section>
  )
}
