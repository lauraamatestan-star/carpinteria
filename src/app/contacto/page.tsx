import ContactForm from './contact-form';

export default function ContactoPage() {
  return (
    <div className="max-w-md sm:max-w-xl mx-auto px-2 sm:px-4 py-8 sm:py-12">
      <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-4 sm:mb-8 text-primary text-center">Contacto</h1>
      <ContactForm />
    </div>
  );
}