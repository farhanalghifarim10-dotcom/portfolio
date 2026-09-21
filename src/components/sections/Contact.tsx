import Button from "@/components/ui/Button";
import Container from "@/components/ui/Container";
import Reveal from "@/components/ui/Reveal";
import SectionHeading from "@/components/ui/SectionHeading";
import { site } from "@/data/site";

export default function Contact() {
  return (
    <section id="contact" className="border-t border-border py-24">
      <Container>
        <Reveal>
          <SectionHeading
            eyebrow="Kontak"
            title="Mari berbincang"
            description="Punya proyek, lowongan, atau sekadar ingin menyapa? Kirim email, saya usahakan membalas dalam beberapa hari."
          />
        </Reveal>

        <Reveal delay={0.1}>
          <div className="mt-10 flex flex-wrap gap-4">
            <Button href={`mailto:${site.email}`}>Kirim email</Button>
            <Button
              href={site.socials.linkedin}
              variant="secondary"
              target="_blank"
              rel="noopener noreferrer"
            >
              Hubungi lewat LinkedIn
            </Button>
          </div>
        </Reveal>
      </Container>
    </section>
  );
}