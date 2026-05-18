import { getProyectos } from '@/lib/proyectos';
import Image from 'next/image';
import Link from 'next/link';

export default async function GaleriaProyectos() {
  const proyectos = getProyectos();
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
      {proyectos.map((proyecto) => (
        <Link key={proyecto.slug} href={`/proyectos/${proyecto.slug}`} className="group bg-card p-4 rounded shadow hover:shadow-lg transition flex flex-col items-center">
          <Image
            src={proyecto.imagen}
            alt={proyecto.titulo}
            width={320}
            height={200}
            className="rounded mb-3 object-cover"
            placeholder="blur"
            blurDataURL="/placeholder.jpg"
          />
          <h3 className="font-semibold text-lg text-center group-hover:text-primary transition">{proyecto.titulo}</h3>
          <p className="text-muted-foreground text-center text-sm">{proyecto.descripcion}</p>
        </Link>
      ))}
    </div>
  );
}