import Badge from "@/components/ui/Badge";
import Container from "@/components/ui/Container";
import Reveal from "@/components/ui/Reveal";
import SectionHeading from "@/components/ui/SectionHeading";
import { skills } from "@/data/skills";

export default function Skills() {
  return (
    <section id="skills" className="border-t border-border py-24">
      <Container>
        <Reveal>
          <SectionHeading
            eyebrow="Keahlian"
            title="Tools dan teknologi"
            description="Teknologi yang saya pakai dalam proyek-proyek saya."
          />
        </Reveal>

        <div className="mt-12 grid gap-10 sm:grid-cols-2 lg:grid-cols-3">
          {skills.map((group, index) => (
            <Reveal key={group.category} delay={(index % 3) * 0.1}>
              <div>
                <h3 className="font-semibold">{group.category}</h3>
                <ul className="mt-4 flex flex-wrap gap-2">
                  {group.items.map((item) => (
                    <li key={item}>
                      <Badge>{item}</Badge>
                    </li>
                  ))}
                </ul>
              </div>
            </Reveal>
          ))}
        </div>
      </Container>
    </section>
  );
}