import Link from "next/link";
import { ArrowRight, CalendarDays, Clock } from "lucide-react";
import { PageHero } from "@/components/PageHero";
import { ContactCTA } from "@/components/ContactCTA";
import { ProjectImage } from "@/components/ProjectImage";
import { buildMetadata } from "@/lib/seo";
import { blogPosts } from "@/lib/blog";

export const metadata = buildMetadata({
  title: "Construction & Remodeling Blog | East Texas Tips",
  description:
    "Expert advice on remodeling, construction and hiring a contractor in East Texas from the RG Construction team. Serving Longview, Tyler, Kilgore & Marshall.",
  path: "/blog",
});

const gradients: [string, string][] = [
  ["#d96606", "#451603"],
  ["#4e5b6c", "#11151b"],
  ["#b44609", "#37404b"],
];

function formatDate(date: string) {
  return new Date(date).toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });
}

export default function BlogPage() {
  return (
    <>
      <PageHero
        eyebrow="Blog"
        title="Construction & Remodeling Insights"
        description="Tips, guides and answers to help East Texas homeowners and businesses plan successful projects."
        crumbs={[{ label: "Blog" }]}
      />

      <section className="py-20">
        <div className="container-px">
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {blogPosts.map((post, i) => (
              <article key={post.slug} className="card group flex flex-col overflow-hidden p-0">
                <Link href={`/blog/${post.slug}`} aria-label={post.title}>
                  <ProjectImage
                    gradient={gradients[i % gradients.length]}
                    label={post.title}
                    className="aspect-[16/9] w-full"
                  />
                </Link>
                <div className="flex flex-1 flex-col p-6">
                  <span className="eyebrow">{post.category}</span>
                  <h2 className="mt-2 font-display text-lg font-bold uppercase leading-snug tracking-wide text-ink-900 dark:text-white">
                    <Link href={`/blog/${post.slug}`} className="hover:text-brand-600 dark:hover:text-brand-400">
                      {post.title}
                    </Link>
                  </h2>
                  <p className="mt-2 flex-1 text-sm leading-relaxed text-ink-600 dark:text-ink-300">
                    {post.excerpt}
                  </p>
                  <div className="mt-4 flex items-center gap-4 text-xs text-ink-500 dark:text-ink-400">
                    <span className="flex items-center gap-1">
                      <CalendarDays className="h-3.5 w-3.5" />
                      {formatDate(post.date)}
                    </span>
                    <span className="flex items-center gap-1">
                      <Clock className="h-3.5 w-3.5" />
                      {post.readTime}
                    </span>
                  </div>
                  <Link
                    href={`/blog/${post.slug}`}
                    className="mt-4 inline-flex items-center gap-1 text-sm font-semibold text-brand-600 dark:text-brand-400"
                  >
                    Read article <ArrowRight className="h-4 w-4" />
                  </Link>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <ContactCTA />
    </>
  );
}
