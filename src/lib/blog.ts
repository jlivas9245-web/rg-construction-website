export type BlogPost = {
  slug: string;
  title: string;
  excerpt: string;
  date: string;
  readTime: string;
  category: string;
  author: string;
  // Body is an array of paragraphs / headings for simple rendering.
  body: { type: "p" | "h2"; text: string }[];
};

/**
 * Blog post data. This array is the structure future SEO articles plug into —
 * add a new object here and the post, listing card and sitemap update
 * automatically. Swap for a CMS or MDX loader later without changing pages.
 */
export const blogPosts: BlogPost[] = [
  {
    slug: "kitchen-remodel-cost-east-texas",
    title: "How Much Does a Kitchen Remodel Cost in East Texas?",
    excerpt:
      "A realistic breakdown of kitchen remodel costs in Longview, Tyler and the surrounding area — and where your budget makes the biggest impact.",
    date: "2026-05-28",
    readTime: "6 min read",
    category: "Remodeling",
    author: "RG Construction",
    body: [
      {
        type: "p",
        text: "Planning a kitchen remodel in East Texas? One of the first questions we hear is simple: what's this going to cost? While every project is unique, understanding the major cost drivers helps you plan a realistic budget before you ever pick up a paint sample.",
      },
      { type: "h2", text: "What drives kitchen remodel pricing" },
      {
        type: "p",
        text: "Cabinetry and countertops typically represent the largest share of a kitchen budget, followed by labor, appliances and flooring. Layout changes that move plumbing or electrical add cost but can dramatically improve how the space functions.",
      },
      { type: "h2", text: "Where to invest for the best return" },
      {
        type: "p",
        text: "If resale matters to you, durable countertops, quality cabinetry and good lighting deliver the strongest return. We help homeowners across Longview and Tyler prioritize the upgrades that matter most for their goals.",
      },
      {
        type: "p",
        text: "Ready for a real number? Request a free estimate and we'll walk your space, discuss your wish list, and provide a transparent, itemized bid.",
      },
    ],
  },
  {
    slug: "choosing-a-general-contractor-longview",
    title: "7 Questions to Ask Before Hiring a General Contractor in Longview",
    excerpt:
      "Hiring the right contractor protects your investment. Here are the questions every East Texas homeowner and business owner should ask.",
    date: "2026-05-12",
    readTime: "5 min read",
    category: "Hiring Tips",
    author: "RG Construction",
    body: [
      {
        type: "p",
        text: "Choosing a general contractor is one of the most important decisions of any construction or remodeling project. The right partner keeps your project on schedule, on budget and stress-free.",
      },
      { type: "h2", text: "Start with licensing and insurance" },
      {
        type: "p",
        text: "Always confirm a contractor is licensed and carries both general liability and workers' compensation insurance. Ask for a certificate of insurance — a reputable contractor will provide one without hesitation.",
      },
      { type: "h2", text: "Ask about communication and scheduling" },
      {
        type: "p",
        text: "Who is your point of contact? How are updates shared? Clear communication is the difference between a smooth project and a frustrating one. We assign a dedicated project lead to every job.",
      },
      {
        type: "p",
        text: "Considering a project in Longview, Tyler, Kilgore or Marshall? Reach out and put our team to the test.",
      },
    ],
  },
  {
    slug: "commercial-build-out-timeline",
    title: "What to Expect During a Commercial Build-Out",
    excerpt:
      "From white-box space to grand opening — a step-by-step look at the commercial build-out process for East Texas businesses.",
    date: "2026-04-22",
    readTime: "7 min read",
    category: "Commercial",
    author: "RG Construction",
    body: [
      {
        type: "p",
        text: "A commercial build-out turns an empty or outdated space into a functional, branded environment for your business. Understanding the phases helps you plan your opening with confidence.",
      },
      { type: "h2", text: "Planning and permitting" },
      {
        type: "p",
        text: "Every build-out starts with design coordination and permitting. We handle the inspections and code requirements so you can focus on running your business.",
      },
      { type: "h2", text: "Construction and finishes" },
      {
        type: "p",
        text: "Framing, mechanical, electrical and plumbing rough-ins come first, followed by drywall, flooring, paint and the finishes that bring your brand to life.",
      },
      {
        type: "p",
        text: "Planning a retail, office or restaurant space in East Texas? Contact RG Construction for a free consultation and timeline.",
      },
    ],
  },
];

export function getPostBySlug(slug: string): BlogPost | undefined {
  return blogPosts.find((post) => post.slug === slug);
}
