import { getProyectos } from '@/lib/proyectos';
import Image from 'next/image';
import Link from 'next/link';

export default async function GaleriaProyectos() {
  const proyectos = getProyectos();
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 md:gap-8">
      {proyectos.map((proyecto) => (
        <Link
          key={proyecto.slug}
          href={`/proyectos/${proyecto.slug}`}
          className="group bg-card p-3 sm:p-4 rounded-2xl shadow hover:shadow-xl transition flex flex-col items-center border border-border hover:border-primary/40 focus:outline focus:ring-2 focus:ring-primary"
        >
          <div className="w-full aspect-[16/10] relative mb-3 overflow-hidden rounded-xl">
            <Image
              src={proyecto.imagen}
              alt={proyecto.titulo}
              fill
              className="object-cover group-hover:scale-105 transition-transform duration-300"
              placeholder="blur"
              blurDataURL="/placeholder.jpg"
            />
          </div>
          <h3 className="font-heading font-semibold text-base sm:text-lg text-center group-hover:text-primary transition mb-1 line-clamp-2">{proyecto.titulo}</h3>
          <p className="text-muted-foreground text-center text-xs sm:text-sm line-clamp-3">{proyecto.descripcion}</p>
        </Link>
      ))}
    </div>
  );
}