import Container from "@/components/ui/Container";
import HoverLift from "@/components/ui/HoverLift";
import Reveal from "@/components/ui/Reveal";
import SectionHeading from "@/components/ui/SectionHeading";
import ProjectCard from "@/components/sections/ProjectCard";
import { projects } from "@/data/projects";

export default function FeaturedProjects() {
  const featured = projects.filter((project) => project.featured);

  return (
    <section id="projects" className="py-24">
      <Container>
        <Reveal>
          <SectionHeading
            eyebrow="Proyek"
            title="Karya pilihan"
            description="Beberapa proyek yang paling mewakili kemampuan saya."
          />
        </Reveal>

        <div className="mt-12 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {featured.map((project, index) => (
            <Reveal
              key={project.slug}
              delay={(index % 3) * 0.1}
              className="h-full"
            >
              <HoverLift className="h-full">
                <ProjectCard project={project} />
              </HoverLift>
            </Reveal>
          ))}
        </div>
      </Container>
    </section>
  );
}