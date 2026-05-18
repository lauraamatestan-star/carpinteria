export default function NotFound() {
  return (
    <div className="flex flex-col items-center justify-center min-h-[60vh] text-center px-2">
      <h1 className="text-4xl sm:text-5xl font-bold mb-4 text-primary">Página no encontrada</h1>
      <p className="mb-6 text-muted-foreground text-lg">La página que buscas no existe o ha sido movida.<br />
        Si crees que es un error, contáctanos o vuelve al inicio.</p>
      <a href="/" className="bg-primary text-primary-foreground px-8 py-3 rounded-xl font-semibold shadow hover:bg-primary/90 transition text-lg focus:outline focus:ring-2 focus:ring-primary">Volver al inicio</a>
    </div>
  );
}
