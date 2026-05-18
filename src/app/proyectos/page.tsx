import { Suspense } from 'react';
import GaleriaProyectos from './proyectos-lista';

export default function ProyectosPage() {
  return (
    <div className="max-w-5xl mx-auto px-4 py-12">
      <h1 className="text-3xl md:text-4xl font-bold mb-8 text-primary">Galería de Proyectos</h1>
      <Suspense fallback={<div className="animate-pulse h-40 bg-muted rounded mb-6" />}> 
        <GaleriaProyectos />
      </Suspense>
    </div>
  );
}