import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft, CalendarDays, Clock } from "lucide-react";
import { PageHero } from "@/components/PageHero";
import { ContactCTA } from "@/components/ContactCTA";
import { buildMetadata } from "@/lib/seo";
import { blogPosts, getPostBySlug } from "@/lib/blog";

export function generateStaticParams() {
  return blogPosts.map((post) => ({ slug: post.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const post = getPostBySlug(slug);
  if (!post) return buildMetadata({ title: "Article Not Found", description: "", path: `/blog/${slug}` });
  return buildMetadata({
    title: post.title,
    description: post.excerpt,
    path: `/blog/${post.slug}`,
    keywords: [post.category],
  });
}

function formatDate(date: string) {
  return new Date(date).toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });
}

export default async function BlogPostPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const post = getPostBySlug(slug);
  if (!post) notFound();

  return (
    <>
      <PageHero
        eyebrow={post.category}
        title={post.title}
        crumbs={[{ label: "Blog", href: "/blog" }, { label: post.title }]}
      />

      <article className="py-16">
        <div className="container-px mx-auto max-w-3xl">
          <div className="flex items-center gap-5 border-b border-ink-200 pb-6 text-sm text-ink-500 dark:border-ink-800 dark:text-ink-400">
            <span className="flex items-center gap-1.5">
              <CalendarDays className="h-4 w-4" />
              {formatDate(post.date)}
            </span>
            <span className="flex items-center gap-1.5">
              <Clock className="h-4 w-4" />
              {post.readTime}
            </span>
            <span>By {post.author}</span>
          </div>

          <div className="prose mt-8 max-w-none">
            {post.body.map((block, i) =>
              block.type === "h2" ? (
                <h2
                  key={i}
                  className="mt-8 font-display text-2xl font-bold uppercase tracking-wide text-ink-900 dark:text-white"
                >
                  {block.text}
                </h2>
              ) : (
                <p
                  key={i}
                  className="mt-4 text-base leading-relaxed text-ink-600 dark:text-ink-300"
                >
                  {block.text}
                </p>
              ),
            )}
          </div>

          <div className="mt-10 rounded-xl border border-brand-500/30 bg-brand-500/10 p-6 text-center">
            <p className="font-display text-xl font-bold uppercase tracking-wide text-ink-900 dark:text-white">
              Ready to start your project?
            </p>
            <p className="mt-2 text-sm text-ink-600 dark:text-ink-300">
              Get a free, no-obligation estimate from RG Construction.
            </p>
            <Link href="/contact" className="btn-primary mt-4">
              Request a Free Estimate
            </Link>
          </div>

          <Link
            href="/blog"
            className="mt-8 inline-flex items-center gap-1.5 text-sm font-semibold text-brand-600 dark:text-brand-400"
          >
            <ArrowLeft className="h-4 w-4" />
            Back to all articles
          </Link>
        </div>
      </article>

      <ContactCTA />
    </>
  );
}
