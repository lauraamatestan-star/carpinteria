import Link from 'next/link';

export default function Navbar() {
  return (
    <nav className="w-full flex items-center justify-between px-4 sm:px-6 py-3 sm:py-4 bg-white/80 border-b border-border sticky top-0 z-50 backdrop-blur shadow-sm">
      <div className="font-bold text-lg sm:text-xl tracking-tight text-primary">
        <Link href="/">Los Artesanos</Link>
      </div>
      <ul className="hidden md:flex gap-6 text-base font-medium">
        <li><Link href="/sobre-nosotros" className="hover:text-primary transition-colors">Sobre Nosotros</Link></li>
        <li><Link href="/proyectos" className="hover:text-primary transition-colors">Galería</Link></li>
        <li><Link href="/contacto" className="hover:text-primary transition-colors">Contacto</Link></li>
      </ul>
      {/* Menú móvil */}
      <div className="md:hidden">
        <details className="relative">
          <summary className="list-none cursor-pointer px-2 py-1 rounded hover:bg-primary/10 focus:outline focus:ring-2 focus:ring-primary">☰</summary>
          <ul className="absolute right-0 mt-2 w-40 bg-white border border-border rounded shadow-lg flex flex-col text-base font-medium z-50 animate-fade-in">
            <li><Link href="/sobre-nosotros" className="block px-4 py-2 hover:bg-primary/10">Sobre Nosotros</Link></li>
            <li><Link href="/proyectos" className="block px-4 py-2 hover:bg-primary/10">Galería</Link></li>
            <li><Link href="/contacto" className="block px-4 py-2 hover:bg-primary/10">Contacto</Link></li>
          </ul>
        </details>
      </div>
    </nav>
  );
}
