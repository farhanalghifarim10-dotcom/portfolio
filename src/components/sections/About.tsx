import Container from "@/components/ui/Container";
import Reveal from "@/components/ui/Reveal";
import SectionHeading from "@/components/ui/SectionHeading";
import { site } from "@/data/site";

export default function About() {
  return (
    <section id="about" className="border-t border-border py-24">
      <Container>
        <Reveal>
          <SectionHeading eyebrow="Tentang" title="Sedikit tentang saya" />
        </Reveal>

        <Reveal delay={0.1}>
          <div className="mt-12 grid gap-12 md:grid-cols-3">
            <p className="text-lg leading-relaxed text-muted md:col-span-2">
              {site.bio}
            </p>

            <dl className="space-y-6 text-sm">
              <div>
                <dt className="font-mono text-xs text-muted">Lokasi</dt>
                <dd className="mt-1">{site.location}</dd>
              </div>
              <div>
                <dt className="font-mono text-xs text-muted">Email</dt>
                <dd className="mt-1">
                  <a
                    href={`mailto:${site.email}`}
                    className="text-accent hover:underline"
                  >
                    {site.email}
                  </a>
                </dd>
              </div>
              <div>
                <dt className="font-mono text-xs text-muted">Status</dt>
                <dd className="mt-1">{site.availability}</dd>
              </div>
            </dl>
          </div>
        </Reveal>
      </Container>
    </section>
  );
}