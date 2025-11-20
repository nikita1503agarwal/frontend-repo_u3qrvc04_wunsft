import { useEffect, useState } from 'react'

const API_BASE = import.meta.env.VITE_BACKEND_URL || ''

export default function Catalog(){
  const [items, setItems] = useState([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    fetch(`${API_BASE}/api/products`).then(r=>r.json()).then(d=>{
      setItems(d.items || [])
    }).catch(()=>{}).finally(()=> setLoading(false))
  }, [])

  return (
    <section id="catalog" className="py-16 sm:py-24">
      <div className="mx-auto max-w-6xl px-6">
        <div className="flex items-end justify-between mb-6">
          <h2 className="text-2xl sm:text-3xl font-bold text-white">Fresh Picks</h2>
          <a href="#" className="text-emerald-300/80 text-sm hover:text-emerald-200">View all</a>
        </div>
        {loading ? (
          <p className="text-emerald-200">Loading...</p>
        ) : (
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {items.map((p) => (
              <div key={p._id} className="group rounded-2xl bg-emerald-900/30 border border-emerald-600/30 p-4 hover:bg-emerald-900/40 transition">
                <div className="aspect-[4/3] rounded-xl bg-gradient-to-br from-emerald-700/40 to-emerald-900/40 mb-3 overflow-hidden">
                  {p.image ? (
                    <img src={p.image} alt={p.title} className="w-full h-full object-cover group-hover:scale-105 transition" />
                  ) : null}
                </div>
                <div className="flex items-center justify-between">
                  <div>
                    <h3 className="text-emerald-100 font-semibold">{p.title}</h3>
                    <p className="text-emerald-200/70 text-sm">${'{'}p.price.toFixed(2){'}'}</p>
                  </div>
                  <button className="rounded-lg bg-emerald-500 text-emerald-950 px-3 py-2 text-sm font-semibold hover:bg-emerald-400">Add to cart</button>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </section>
  )
}
