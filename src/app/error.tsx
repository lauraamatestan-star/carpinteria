"use client";

export default function Error({ error, reset }: { error: Error; reset: () => void }) {
  return (
    <div className="flex flex-col items-center justify-center min-h-[60vh] text-center px-2">
      <h1 className="text-2xl sm:text-3xl font-bold mb-3 sm:mb-4 text-destructive">¡Vaya! Algo salió mal.</h1>
      <p className="mb-4 sm:mb-6 text-muted-foreground text-base sm:text-lg">Ha ocurrido un error inesperado. Por favor, inténtalo de nuevo o vuelve más tarde.</p>
      <button
        onClick={reset}
        className="bg-primary text-primary-foreground px-6 py-2 rounded-xl font-semibold shadow hover:bg-primary/90 transition text-base focus:outline focus:ring-2 focus:ring-primary"
      >
        Reintentar
      </button>
    </div>
  );
}
