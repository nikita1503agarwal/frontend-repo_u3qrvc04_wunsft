import Hero from './components/Hero'
import Features from './components/Features'
import Catalog from './components/Catalog'
import Footer from './components/Footer'

function App() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-emerald-950 via-emerald-900 to-emerald-950 relative text-white">
      <div className="absolute inset-0 pointer-events-none bg-[radial-gradient(circle_at_20%_10%,rgba(16,185,129,0.08),transparent_40%),radial-gradient(circle_at_80%_20%,rgba(5,150,105,0.1),transparent_45%),radial-gradient(circle_at_30%_80%,rgba(16,185,129,0.06),transparent_40%)]" />
      <div className="relative">
        <Hero />
        <Features />
        <Catalog />
        <Footer />
      </div>
    </div>
  )
}

export default App
