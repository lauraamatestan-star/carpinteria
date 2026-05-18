import { getProyectoPorSlug } from '@/lib/proyectos';
import Image from 'next/image';
import { notFound } from 'next/navigation';

export async function generateStaticParams() {
  const proyectos = (await import('@/lib/proyectos')).getProyectos();
  return proyectos.map((p: any) => ({ slug: p.slug }));
}

export async function generateMetadata({ params }: { params: { slug: string } }) {
  const proyecto = getProyectoPorSlug(params.slug);
  if (!proyecto) return {};
  return {
    title: `${proyecto.titulo} | Carpintería Los Artesanos`,
    description: proyecto.descripcion,
    openGraph: {
      title: proyecto.titulo,
      description: proyecto.descripcion,
      images: [
        {
          url: proyecto.imagen,
          width: 1200,
          height: 630,
          alt: proyecto.titulo,
        },
      ],
    },
  };
}

export default function ProyectoDetalle({ params }: { params: { slug: string } }) {
  const proyecto = getProyectoPorSlug(params.slug);
  if (!proyecto) return notFound();
  return (
    <div className="max-w-3xl mx-auto px-4 py-12">
      <h1 className="text-3xl md:text-4xl font-bold mb-6 text-primary">{proyecto.titulo}</h1>
      {/* Galería de imágenes si existe */}
      {proyecto.galeria ? (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
          {proyecto.galeria.map((img: string, i: number) => (
            <Image key={img} src={img} alt={`${proyecto.titulo} foto ${i+1}`} width={500} height={320} className="rounded shadow object-cover w-full h-64" />
          ))}
        </div>
      ) : (
        <Image src={proyecto.imagen} alt={proyecto.titulo} width={700} height={400} className="rounded shadow mb-6" />
      )}
      <p className="text-muted-foreground mb-4">{proyecto.descripcion}</p>
      {/* Detalles ampliados si existen */}
      {proyecto.detalles && (
        <div className="mb-4 text-base text-gray-700 bg-muted rounded p-4 shadow-inner">{proyecto.detalles}</div>
      )}
      <div className="mb-2">
        <span className="font-semibold">Materiales:</span>
        <ul className="list-disc list-inside ml-4">
          {proyecto.materiales.map((mat: string) => (
            <li key={mat}>{mat}</li>
          ))}
        </ul>
      </div>
    </div>
  );
}
