import Link from "next/link";
import { ArrowRight, MapPin } from "lucide-react";
import type { Project } from "@/lib/content";
import { ProjectImage } from "./ProjectImage";
import { SectionHeading } from "./SectionHeading";

type Props = {
  projects: Project[];
  eyebrow?: string;
  title?: string;
  description?: string;
  cta?: { href: string; label: string };
};

export function ProjectGallery({
  projects,
  eyebrow = "Our Work",
  title = "Recent Projects",
  description = "A look at the residential and commercial projects we've delivered across East Texas.",
  cta,
}: Props) {
  return (
    <section className="py-20">
      <div className="container-px">
        <SectionHeading
          eyebrow={eyebrow}
          title={title}
          description={description}
        />

        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {projects.map((project) => (
            <article
              key={project.title}
              className="card group overflow-hidden p-0 hover:-translate-y-1"
            >
              <ProjectImage
                gradient={project.gradient}
                label={project.title}
                className="aspect-[4/3] w-full"
              />
              <div className="p-5">
                <span className="eyebrow">{project.category}</span>
                <h3 className="mt-2 font-display text-lg font-bold uppercase tracking-wide text-ink-900 dark:text-white">
                  {project.title}
                </h3>
                <p className="mt-2 text-sm text-ink-600 dark:text-ink-300">
                  {project.scope}
                </p>
                <p className="mt-3 flex items-center gap-1.5 text-xs font-medium text-ink-500 dark:text-ink-400">
                  <MapPin className="h-3.5 w-3.5" />
                  {project.location}
                </p>
              </div>
            </article>
          ))}
        </div>

        {cta && (
          <div className="mt-10 text-center">
            <Link href={cta.href} className="btn-secondary">
              {cta.label}
              <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        )}
      </div>
    </section>
  );
}
