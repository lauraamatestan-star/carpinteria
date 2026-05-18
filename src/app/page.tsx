

import Image from 'next/image';
import Link from 'next/link';
import { getProyectos } from '@/lib/proyectos';

const servicios = [
  {
    icon: '🪑',
    titulo: 'Muebles a medida',
    descripcion: 'Diseño y fabricación de muebles únicos adaptados a tu espacio y estilo.',
    img: 'https://images.unsplash.com/photo-1515378791036-0648a3ef77b2?auto=format&fit=crop&w=400&q=80',
  },
  {
    icon: '🛠️',
    titulo: 'Restauración',
    descripcion: 'Recuperamos piezas antiguas devolviéndoles su esplendor original.',
    img: 'https://images.unsplash.com/photo-1464983953574-0892a716854b?auto=format&fit=crop&w=400&q=80',
  },
  {
    icon: '🏗️',
    titulo: 'Carpintería estructural',
    descripcion: 'Estructuras de madera para reformas, ampliaciones y proyectos arquitectónicos.',
    img: 'https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=400&q=80',
  },
];

export default function HomePage() {
  const proyectos = getProyectos().slice(0, 3);
  return (
    <div className="w-full max-w-6xl mx-auto px-2 sm:px-4 py-6 sm:py-10">
      {/* Hero Mejorado */}
      <section className="relative flex flex-col md:flex-row items-center gap-6 sm:gap-8 mb-10 sm:mb-16 min-h-[260px] sm:min-h-[340px] rounded-2xl overflow-hidden shadow-card animate-fade-in">
        <Image
          src="https://images.unsplash.com/photo-1515378791036-0648a3ef77b2?auto=format&fit=crop&w=900&q=80"
          alt="Taller de carpintería Los Artesanos"
          fill
          className="object-cover absolute inset-0 z-0 opacity-80"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black/70 to-transparent z-10" />
        <div className="relative z-20 flex-1 p-4 sm:p-10 text-center md:text-left">
          <h1 className="text-3xl sm:text-5xl md:text-6xl font-heading font-bold mb-3 sm:mb-4 text-white drop-shadow-lg leading-tight">Carpintería Los Artesanos</h1>
          <p className="text-base sm:text-xl text-white/90 mb-6 sm:mb-8 max-w-xl drop-shadow mx-auto md:mx-0">Muebles a medida, restauración y carpintería estructural de alta calidad en cada proyecto.</p>
          <Link href="/contacto" className="inline-block bg-primary text-primary-foreground px-6 sm:px-8 py-3 sm:py-4 rounded-xl font-semibold shadow-lg hover:bg-primary/90 transition text-base sm:text-lg focus:outline focus:ring-2 focus:ring-primary">
            Solicita tu presupuesto
          </Link>
        </div>
      </section>

      {/* Servicios Mejorados */}
      <section className="mb-10 sm:mb-16">
        <h2 className="text-2xl sm:text-3xl font-heading font-bold mb-6 sm:mb-8 text-primary text-center">Servicios Destacados</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-5 sm:gap-8">
          {servicios.map((serv) => (
            <div key={serv.titulo} className="bg-card p-5 sm:p-8 rounded-2xl shadow-card flex flex-col items-center group hover:scale-105 transition-transform animate-fade-in border border-border hover:border-primary/40">
              <span className="text-4xl sm:text-5xl mb-3 sm:mb-4" aria-hidden>{serv.icon}</span>
              <Image src={serv.img} alt={serv.titulo} width={100} height={100} className="mb-3 sm:mb-4 rounded-xl object-cover shadow" />
              <h3 className="font-heading font-semibold text-lg sm:text-xl mb-1 sm:mb-2 text-secondary group-hover:text-primary transition-colors text-center">{serv.titulo}</h3>
              <p className="text-muted-foreground text-center text-sm sm:text-base">{serv.descripcion}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Proyectos recientes mejorados */}
      <section>
        <h2 className="text-3xl font-heading font-bold mb-8 text-primary">Proyectos recientes</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {proyectos.map((proyecto) => (
            <Link key={proyecto.slug} href={`/proyectos/${proyecto.slug}`} className="group bg-card p-4 rounded-xl shadow-card hover:shadow-lg transition flex flex-col items-center animate-fade-in">
              <Image
                src={proyecto.imagen || 'https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=400&q=80'}
                alt={proyecto.titulo}
                width={320}
                height={200}
                className="rounded-xl mb-3 object-cover shadow"
                placeholder="blur"
                blurDataURL="/placeholder.jpg"
              />
              <h3 className="font-heading font-semibold text-lg text-center group-hover:text-primary transition">{proyecto.titulo}</h3>
              <p className="text-muted-foreground text-center text-sm">{proyecto.descripcion}</p>
            </Link>
          ))}
        </div>
      </section>
    </div>
  );
}

