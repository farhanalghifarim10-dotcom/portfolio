import Button from "@/components/ui/Button";
import Container from "@/components/ui/Container";
import { site } from "@/data/site";

const socialLabels: Record<string, string> = {
  github: "GitHub",
  linkedin: "LinkedIn",
  instagram: "Instagram",
};

export default function Hero() {
  return (
    <section className="flex min-h-[calc(100svh-4rem)] items-center py-16">
      <Container>
        <p className="inline-flex items-center gap-2 rounded-full border border-border px-3 py-1 font-mono text-xs text-muted">
          <span className="h-2 w-2 rounded-full bg-accent" aria-hidden="true" />
          {site.availability}
        </p>

        <h1 className="mt-6 text-4xl font-bold tracking-tight sm:text-6xl">
          Halo, saya <span className="text-accent">{site.name}</span>.
        </h1>

        <p className="mt-3 text-2xl font-semibold text-muted sm:text-3xl">
          {site.role}
        </p>

        <p className="mt-6 max-w-xl text-lg leading-relaxed text-muted">
          {site.tagline}
        </p>

        <div className="mt-10 flex flex-wrap gap-4">
          <Button href="/#projects">Lihat proyek</Button>
          <Button href={site.cvUrl} variant="secondary" download>
            Unduh CV
          </Button>
        </div>

        <div className="mt-10 flex gap-6 text-sm text-muted">
          {Object.entries(site.socials).map(([name, url]) => (
            <a 
              key={name}
              href={url}
              target="_blank"
              rel="noopener noreferrer"
              className="transition-colors hover:text-foreground"
            >
              {socialLabels[name] ?? name}
            </a>
          ))}
        </div>
      </Container>
    </section>
  );
}