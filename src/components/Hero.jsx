import { useEffect, useState } from 'react'

const API_BASE = import.meta.env.VITE_BACKEND_URL || ''

export default function Hero() {
  const [greeting, setGreeting] = useState('')
  useEffect(() => {
    fetch(`${API_BASE}/api/hello`).then(r => r.json()).then(d => setGreeting(d.message)).catch(()=>{})
  }, [])

  return (
    <section className="relative overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_left,rgba(16,185,129,0.15),transparent_60%),radial-gradient(ellipse_at_bottom_right,rgba(5,150,105,0.2),transparent_60%)]" />
      <div className="relative mx-auto max-w-6xl px-6 pt-20 pb-16 sm:pt-28 sm:pb-24 text-center">
        <span className="inline-flex items-center gap-2 rounded-full bg-emerald-900/30 border border-emerald-500/30 px-3 py-1 text-emerald-200 text-xs mb-4">
          <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
          Fresh blooms daily
        </span>
        <h1 className="text-4xl sm:text-6xl font-bold tracking-tight text-white">
          Emerald Flower Shop
        </h1>
        <p className="mt-4 text-emerald-100/90 text-lg max-w-2xl mx-auto">
          Lush, eco-conscious arrangements in an elegant emerald palette. We deliver same-day across the city.
        </p>
        {greeting && (
          <p className="mt-2 text-emerald-300/70 text-sm">{greeting}</p>
        )}
        <div className="mt-8 flex items-center justify-center gap-4">
          <a href="#catalog" className="rounded-xl bg-emerald-500 hover:bg-emerald-400 text-emerald-950 font-semibold px-6 py-3 transition">Shop bouquets</a>
          <a href="#about" className="rounded-xl bg-emerald-900/40 border border-emerald-600/30 text-emerald-100 hover:bg-emerald-800/50 px-6 py-3 transition">About us</a>
        </div>
      </div>
    </section>
  )
}
