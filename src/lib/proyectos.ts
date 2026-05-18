// Archivo de datos local para proyectos de la galería
export type Proyecto = {
  slug: string;
  titulo: string;
  descripcion: string;
  imagen: string;
  materiales: string[];
};

export const proyectos: Proyecto[] = [
  {
    slug: 'mesa-roble-macizo',
    titulo: 'Mesa de Roble Macizo',
    descripcion: 'Mesa artesanal de comedor fabricada en roble macizo, con acabado natural, canto vivo y detalles en resina epoxi azul. Ideal para ambientes cálidos y modernos.',
    imagen: 'https://images.unsplash.com/photo-1519710164239-da123dc03ef4?auto=format&fit=crop&w=800&q=80',
    materiales: ['Roble macizo', 'Resina epoxi azul', 'Aceite natural'],
    galeria: [
      'https://images.unsplash.com/photo-1519710164239-da123dc03ef4?auto=format&fit=crop&w=800&q=80',
      'https://images.unsplash.com/photo-1503389152951-9c3d029fd6a0?auto=format&fit=crop&w=800&q=80',
      'https://images.unsplash.com/photo-1465101046530-73398c7f28ca?auto=format&fit=crop&w=800&q=80'
    ],
    detalles: 'Esta mesa fue realizada a medida para un cliente que buscaba un diseño robusto y elegante. El tablero de roble macizo se seleccionó cuidadosamente para resaltar la veta natural de la madera. El canto vivo y la resina epoxi azul aportan un toque contemporáneo. El acabado con aceite natural protege la superficie y realza el color cálido del roble. Las patas metálicas en negro mate completan el conjunto, aportando estabilidad y estilo industrial.'
  },
  {
    slug: 'reforma-loft',
    titulo: 'Reforma Loft',
    descripcion: 'Reforma integral de loft con estructura de madera y mobiliario a medida. Espacios abiertos, vigas vistas y acabados modernos.',
    imagen: 'https://images.unsplash.com/photo-1524758631624-e2822e304c36?auto=format&fit=crop&w=800&q=80',
    materiales: ['Pino', 'Hierro', 'Barniz ecológico'],
    galeria: [
      'https://images.unsplash.com/photo-1524758631624-e2822e304c36?auto=format&fit=crop&w=800&q=80',
      'https://images.unsplash.com/photo-1512918728675-ed5a9ecdebfd?auto=format&fit=crop&w=800&q=80'
    ],
    detalles: 'Proyecto de reforma en un loft urbano, donde se diseñaron y fabricaron vigas, altillos y mobiliario a medida para aprovechar al máximo la luz y el espacio. Se utilizaron materiales sostenibles y acabados modernos.'
  },
  {
    slug: 'restauracion-silla',
    titulo: 'Restauración de Silla Clásica',
    descripcion: 'Recuperación y restauración de silla antigua con técnicas tradicionales de carpintería y tapicería artesanal.',
    imagen: 'https://images.unsplash.com/photo-1519125323398-675f0ddb6308?auto=format&fit=crop&w=800&q=80',
    materiales: ['Nogal', 'Tapicería artesanal'],
    galeria: [
      'https://images.unsplash.com/photo-1519125323398-675f0ddb6308?auto=format&fit=crop&w=800&q=80',
      'https://images.unsplash.com/photo-1515378791036-0648a3ef77b2?auto=format&fit=crop&w=800&q=80'
    ],
    detalles: 'La silla fue desmontada, tratada contra xilófagos y restaurada respetando la estructura original. Se aplicó un acabado natural y se retapizó con lino artesanal.'
  },
];

export function getProyectos() {
  return proyectos;
}

export function getProyectoPorSlug(slug: string) {
  return proyectos.find((p) => p.slug === slug);
}
