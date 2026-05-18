import Image from 'next/image';

export default function SobreNosotros() {
  return (
    <div className="max-w-2xl sm:max-w-4xl mx-auto px-2 sm:px-4 py-8 sm:py-12 animate-fade-in">
      <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold mb-8 text-primary text-center tracking-tight drop-shadow animate-fade-in">Sobre Nosotros</h1>
      <div className="flex flex-col gap-10">
        {/* Card Historia */}
        <div className="bg-gradient-to-br from-primary/10 to-secondary/10 rounded-3xl shadow-xl border border-primary/10 p-6 sm:p-10 flex flex-col sm:flex-row items-center gap-6 animate-fade-up">
          <div className="flex-shrink-0 flex flex-col items-center sm:items-start">
            <span className="text-5xl mb-2">🏆</span>
            <h2 className="text-2xl font-bold text-secondary mb-2">Historia</h2>
            <p className="text-foreground text-base sm:text-lg mb-2 max-w-md">Desde 1985, fusionamos tradición y tecnología para crear muebles únicos y restaurar piezas con alma. Somos un taller familiar con pasión por la madera y el detalle.</p>
          </div>
          <div className="relative w-full aspect-[16/7] rounded-2xl overflow-hidden shadow-lg max-w-lg animate-fade-in flex items-center justify-center bg-gray-100">
            <Image
              src="https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=800&q=80"
              alt="Historia del taller de carpintería"
              width={640}
              height={280}
              className="object-cover w-full h-full rounded-2xl"
              priority
            />
          </div>
        </div>

        {/* Línea de tiempo visual */}
        <div className="relative flex flex-col items-center my-8 animate-fade-in">
          <div className="absolute left-1/2 -translate-x-1/2 w-1 h-full bg-primary/20 rounded" style={{zIndex:0}} />
          <div className="relative z-10 flex flex-col gap-8 w-full">
            <div className="flex flex-col sm:flex-row items-center gap-4">
              <div className="bg-primary text-primary-foreground rounded-full w-12 h-12 flex items-center justify-center text-2xl shadow-lg animate-bounce">1985</div>
              <div className="flex-1 text-center sm:text-left text-base sm:text-lg text-foreground">Nace el taller familiar en el corazón de la ciudad.</div>
            </div>
            <div className="flex flex-col sm:flex-row items-center gap-4">
              <div className="bg-primary text-primary-foreground rounded-full w-12 h-12 flex items-center justify-center text-2xl shadow-lg animate-bounce">2000</div>
              <div className="flex-1 text-center sm:text-left text-base sm:text-lg text-foreground">Innovamos con nuevas técnicas y maquinaria moderna.</div>
            </div>
            <div className="flex flex-col sm:flex-row items-center gap-4">
              <div className="bg-primary text-primary-foreground rounded-full w-12 h-12 flex items-center justify-center text-2xl shadow-lg animate-bounce">2020</div>
              <div className="flex-1 text-center sm:text-left text-base sm:text-lg text-foreground">Reconocidos por la excelencia artesanal y proyectos a medida.</div>
            </div>
          </div>
        </div>

        {/* Card Proceso Artesanal */}
        <div className="bg-gradient-to-br from-secondary/10 to-primary/10 rounded-3xl shadow-xl border border-primary/10 p-6 sm:p-10 flex flex-col-reverse sm:flex-row items-center gap-6 animate-fade-up">
          <div className="relative w-full aspect-[16/7] rounded-2xl overflow-hidden shadow-lg max-w-lg animate-fade-in flex items-center justify-center bg-gray-100">
            <Image
              src="https://images.unsplash.com/photo-1515378791036-0648a3ef77b2?auto=format&fit=crop&w=800&q=80"
              alt="Proceso artesanal de carpintería"
              width={640}
              height={280}
              className="object-cover w-full h-full rounded-2xl"
              priority
            />
            {/* Fallback por si la imagen no carga */}
            <noscript>
              <span className="text-gray-400">Imagen no disponible</span>
            </noscript>
          </div>
          <div className="flex-shrink-0 flex flex-col items-center sm:items-end">
            <span className="text-5xl mb-2">🪚</span>
            <h2 className="text-2xl font-bold text-secondary mb-2">Proceso Artesanal</h2>
            <ul className="text-foreground text-base sm:text-lg mb-2 max-w-md text-center sm:text-right space-y-2">
              <li>✔️ Selección de maderas nobles y sostenibles</li>
              <li>✔️ Técnicas tradicionales y acabados modernos</li>
              <li>✔️ Cada pieza es única, hecha a mano</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}