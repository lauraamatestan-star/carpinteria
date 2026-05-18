"use client";

import { useState } from 'react';
import { collection, addDoc } from 'firebase/firestore';
import { db } from '@/lib/firebase';

export default function ContactForm() {
  const [status, setStatus] = useState<'idle' | 'success' | 'error'>('idle');
  const [form, setForm] = useState({ nombre: '', email: '', mensaje: '' });
  const [errors, setErrors] = useState<{ nombre?: string; email?: string; mensaje?: string }>({});

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    // Validación simple
    const newErrors: typeof errors = {};
    if (!form.nombre) newErrors.nombre = 'El nombre es obligatorio';
    if (!form.email || !/^[^@\s]+@[^@\s]+\.[^@\s]+$/.test(form.email)) newErrors.email = 'Email inválido';
    if (!form.mensaje) newErrors.mensaje = 'El mensaje es obligatorio';
    setErrors(newErrors);
    if (Object.keys(newErrors).length > 0) return;
    // Guardar en Firestore
    try {
      await addDoc(collection(db, 'contactos'), {
        nombre: form.nombre,
        email: form.email,
        mensaje: form.mensaje,
        fecha: new Date().toISOString(),
      });
      setStatus('success');
      setForm({ nombre: '', email: '', mensaje: '' });
    } catch {
      setStatus('error');
    }
  }

  return (
    <form className="space-y-5 sm:space-y-6 bg-card p-4 sm:p-6 rounded-2xl shadow max-w-xl mx-auto border border-border" onSubmit={handleSubmit} noValidate>
      <div>
        <label className="block mb-1 font-medium">Nombre</label>
        <input
          className="w-full border border-border rounded px-3 py-2 text-base focus:ring-2 focus:ring-primary focus:outline-none"
          value={form.nombre}
          onChange={e => setForm(f => ({ ...f, nombre: e.target.value }))}
          required
        />
        {errors.nombre && <p className="text-destructive text-sm mt-1">{errors.nombre}</p>}
      </div>
      <div>
        <label className="block mb-1 font-medium">Email</label>
        <input
          className="w-full border border-border rounded px-3 py-2 text-base focus:ring-2 focus:ring-primary focus:outline-none"
          type="email"
          value={form.email}
          onChange={e => setForm(f => ({ ...f, email: e.target.value }))}
          required
        />
        {errors.email && <p className="text-destructive text-sm mt-1">{errors.email}</p>}
      </div>
      <div>
        <label className="block mb-1 font-medium">Mensaje</label>
        <textarea
          className="w-full border border-border rounded px-3 py-2 text-base focus:ring-2 focus:ring-primary focus:outline-none resize-none"
          rows={4}
          value={form.mensaje}
          onChange={e => setForm(f => ({ ...f, mensaje: e.target.value }))}
          required
        />
        {errors.mensaje && <p className="text-destructive text-sm mt-1">{errors.mensaje}</p>}
      </div>
      <button
        type="submit"
        className="bg-primary text-primary-foreground px-6 py-2 rounded-xl font-semibold shadow hover:bg-primary/90 transition w-full text-base focus:outline focus:ring-2 focus:ring-primary"
        disabled={status === 'success'}
      >
        {status === 'success' ? 'Enviado' : 'Enviar'}
      </button>
      {status === 'success' && <p className="text-green-600 text-center font-medium mt-2">¡Mensaje enviado correctamente!</p>}
      {status === 'error' && <p className="text-destructive text-center font-medium mt-2">Error al enviar. Intenta de nuevo.</p>}
    </form>
  );
}
