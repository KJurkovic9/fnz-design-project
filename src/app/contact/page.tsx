import ContactForm from '@/components/contact/ContactForm';
import PageCard from '@/components/ui/PageCard';

export default function ContactPage() {
  return (
    <section className="w-full h-[calc(100vh-2rem)] md:h-[calc(100vh-3rem)]">
      <PageCard isAnimate={false}>
        <ContactForm />
      </PageCard>
    </section>
  );
}
