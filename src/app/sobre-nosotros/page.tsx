import Image from 'next/image';

export default function SobreNosotros() {
  return (
    <div className="max-w-4xl mx-auto px-4 py-12">
      <h1 className="text-3xl md:text-4xl font-bold mb-6 text-primary">Sobre Nosotros</h1>
      <section className="mb-10">
        <h2 className="text-2xl font-semibold mb-2">Historia del Taller</h2>
        <p className="text-muted-foreground mb-4">
          Fundada en 1985, Carpintería Los Artesanos ha sido un referente en la creación de muebles a medida y restauración de piezas únicas. Nuestro taller combina tradición y tecnología para ofrecer resultados excepcionales.
        </p>
        <Image src="https://images.unsplash.com/photo-1515378791036-0648a3ef77b2?auto=format&fit=crop&w=700&q=80" alt="Historia del taller" width={700} height={350} className="rounded shadow mb-4" />
      </section>
      <section>
        <h2 className="text-2xl font-semibold mb-2">Proceso Artesanal</h2>
        <p className="text-muted-foreground mb-4">
          Cada proyecto es abordado con dedicación, seleccionando materiales de primera calidad y aplicando técnicas artesanales transmitidas de generación en generación. La innovación y el detalle son nuestra firma.
        </p>
        <Image src="https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=700&q=80" alt="Proceso artesanal" width={700} height={350} className="rounded shadow" />
      </section>
    </div>
  );
}