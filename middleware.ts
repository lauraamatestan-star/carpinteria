import { NextRequest, NextResponse } from 'next/server';

export function middleware(request: NextRequest) {
  // Ejemplo: Añadir cabeceras de seguridad
  const response = NextResponse.next();
  response.headers.set('X-Frame-Options', 'SAMEORIGIN');
  response.headers.set('X-Content-Type-Options', 'nosniff');
  response.headers.set('Referrer-Policy', 'strict-origin-when-cross-origin');
  // Puedes añadir lógica de control de acceso aquí si lo necesitas
  return response;
}

export const config = {
  matcher: ['/((?!_next|favicon.ico|api).*)'],
};
