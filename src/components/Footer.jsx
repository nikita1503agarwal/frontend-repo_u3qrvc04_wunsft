export default function Footer(){
  return (
    <footer className="py-10 border-t border-emerald-700/30 mt-10">
      <div className="mx-auto max-w-6xl px-6 flex flex-col sm:flex-row items-center justify-between gap-4">
        <p className="text-emerald-200/70 text-sm">© {new Date().getFullYear()} Emerald Flower Shop</p>
        <nav className="flex items-center gap-6 text-emerald-300/80 text-sm">
          <a href="#about" className="hover:text-emerald-200">About</a>
          <a href="#catalog" className="hover:text-emerald-200">Shop</a>
          <a href="#" className="hover:text-emerald-200">Contact</a>
        </nav>
      </div>
    </footer>
  )
}
