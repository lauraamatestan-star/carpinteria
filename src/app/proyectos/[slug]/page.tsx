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
    <div className="max-w-2xl sm:max-w-3xl mx-auto px-2 sm:px-4 py-8 sm:py-12">
      <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-4 sm:mb-6 text-primary text-center break-words">{proyecto.titulo}</h1>
      {/* Galería de imágenes si existe */}
      {proyecto.galeria ? (
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4 mb-5 sm:mb-6">
          {proyecto.galeria.map((img: string, i: number) => (
            <div key={img} className="relative w-full aspect-[16/10] rounded-xl overflow-hidden shadow">
              <Image src={img} alt={`${proyecto.titulo} foto ${i+1}`} fill className="object-cover w-full h-full" />
            </div>
          ))}
        </div>
      ) : (
        <div className="relative w-full aspect-[16/10] rounded-xl overflow-hidden shadow mb-5 sm:mb-6">
          <Image src={proyecto.imagen} alt={proyecto.titulo} fill className="object-cover w-full h-full" />
        </div>
      )}
      <p className="text-muted-foreground mb-3 sm:mb-4 text-base sm:text-lg text-center">{proyecto.descripcion}</p>
      {/* Detalles ampliados si existen */}
      {proyecto.detalles && (
        <div className="mb-3 sm:mb-4 text-sm sm:text-base text-gray-700 bg-muted rounded p-3 sm:p-4 shadow-inner">{proyecto.detalles}</div>
      )}
      <div className="mb-2 text-center">
        <span className="font-semibold">Materiales:</span>
        <ul className="list-disc list-inside ml-4 inline-block text-left">
          {proyecto.materiales.map((mat: string) => (
            <li key={mat}>{mat}</li>
          ))}
        </ul>
      </div>
    </div>
  );
}
