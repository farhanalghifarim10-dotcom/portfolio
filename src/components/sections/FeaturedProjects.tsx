import Container from "@/components/ui/Container";
import SectionHeading from "@/components/ui/SectionHeading";
import ProjectCard from "@/components/sections/ProjectCard";
import { projects } from "@/data/projects";

export default function FeaturedProjects() {
  const featured = projects.filter((project) => project.featured);

  return (
    <section id="projects" className="py-24">
      <Container>
        <SectionHeading
          eyebrow="Proyek"
          title="Karya pilihan"
          description="Beberapa proyek yang paling mewakili kemampuan saya."
        />

        <div className="mt-12 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {featured.map((project) => (
            <ProjectCard key={project.slug} project={project} />
          ))}
        </div>
      </Container>
    </section>
  );
}