import Link from 'next/link';

export default function Navbar() {
  return (
    <nav className="w-full flex items-center justify-between px-6 py-4 bg-white/80 border-b border-border sticky top-0 z-50 backdrop-blur">
      <div className="font-bold text-xl tracking-tight text-primary">
        <Link href="/">Los Artesanos</Link>
      </div>
      <ul className="flex gap-6 text-base font-medium">
        <li><Link href="/sobre-nosotros">Sobre Nosotros</Link></li>
        <li><Link href="/proyectos">Galería</Link></li>
        <li><Link href="/contacto">Contacto</Link></li>
      </ul>
    </nav>
  );
}
