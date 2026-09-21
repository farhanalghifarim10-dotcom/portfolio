import Container from "@/components/ui/Container";
import { site } from "@/data/site";

export default function Home() {
  return (
    <Container className="py-24">
      <p className="font-mono text-sm text-accent">{site.role}</p>
      <h1 className="mt-4 text-4xl font-bold tracking-tight sm:text-6xl">
        {site.name}
      </h1>
      <p className="mt-6 max-w-xl text-lg text-muted">{site.tagline}</p>
    </Container>
  );
}