export default function Features(){
  const items = [
    {title:'Sustainably Sourced',desc:'We partner with local growers and choose eco-friendly packaging.'},
    {title:'Emerald Aesthetic',desc:'Signature palettes of greens with soft whites for a calm, modern vibe.'},
    {title:'Same‑Day Delivery',desc:'Order by 2pm and we’ll deliver across town the same day.'},
  ]
  return (
    <section id="about" className="py-16 sm:py-24">
      <div className="mx-auto max-w-6xl px-6">
        <div className="grid sm:grid-cols-3 gap-6">
          {items.map((f,i)=> (
            <div key={i} className="rounded-2xl bg-emerald-900/30 border border-emerald-600/30 p-6 hover:bg-emerald-900/40 transition">
              <h3 className="text-emerald-200 font-semibold text-lg">{f.title}</h3>
              <p className="text-emerald-100/80 mt-2 text-sm">{f.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
