import Image from "next/image";
import Badge from "@/components/ui/Badge";
import type { Project } from "@/types";

export default function ProjectCard({ project }: { project: Project }) {
  return (
    <article className="flex flex-col overflow-hidden rounded-xl border border-border transition-colors hover:border-muted">
      <div className="relative aspect-video bg-border">
        <Image
          src={project.image}
          alt={`Tampilan proyek ${project.title}`}
          fill
          sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
          className="object-cover"
        />
      </div>

      <div className="flex flex-1 flex-col p-6">
        <h3 className="text-xl font-semibold">{project.title}</h3>
        <p className="mt-2 text-muted">{project.summary}</p>

        <ul className="mt-4 flex flex-wrap gap-2" aria-label="Teknologi yang dipakai">
          {project.tech.map((item) => (
            <li key={item}>
              <Badge>{item}</Badge>
            </li>
          ))}
        </ul>

        {(project.liveUrl || project.repoUrl) && (
          <div className="mt-auto flex gap-5 pt-6 text-sm font-semibold">
            {project.liveUrl && (
              <a
                href={project.liveUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="text-accent hover:underline"
              >
                Live demo
              </a>
            )}
            {project.repoUrl && (
              <a
                href={project.repoUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-accent"
              >
                Kode
              </a>
            )}
          </div>
        )}
      </div>
    </article>
  );
}