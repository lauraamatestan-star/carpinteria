import ContactForm from './contact-form';

export default function ContactoPage() {
  return (
    <div className="max-w-xl mx-auto px-4 py-12">
      <h1 className="text-3xl md:text-4xl font-bold mb-8 text-primary">Contacto</h1>
      <ContactForm />
    </div>
  );
}