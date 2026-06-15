import { ProjectImage } from "./ProjectImage";
import { SectionHeading } from "./SectionHeading";

type Item = {
  title: string;
  location: string;
  before: [string, string];
  after: [string, string];
};

const items: Item[] = [
  {
    title: "Dated Kitchen → Modern Showpiece",
    location: "Longview, TX",
    before: ["#5c6a86", "#2c3548"],
    after: ["#3b6be3", "#1b336f"],
  },
  {
    title: "Worn Bathroom → Spa Retreat",
    location: "Tyler, TX",
    before: ["#47536b", "#171d2b"],
    after: ["#2451cf", "#122047"],
  },
  {
    title: "Tired Living Room → Open Concept",
    location: "Kilgore, TX",
    before: ["#7d8ba6", "#3a4458"],
    after: ["#1f41b0", "#2c3548"],
  },
];

export function BeforeAfterGallery() {
  return (
    <section className="bg-ink-50 py-20 dark:bg-ink-900/40">
      <div className="container-px">
        <SectionHeading
          eyebrow="Before & After"
          title="Transformations That Speak for Themselves"
          description="See how our remodels turn dated, worn-out spaces into rooms our clients love to live in."
        />

        <div className="mt-12 space-y-8">
          {items.map((item) => (
            <div key={item.title} className="card overflow-hidden p-0">
              <div className="grid sm:grid-cols-2">
                <div className="relative">
                  <ProjectImage
                    gradient={item.before}
                    label={`${item.title} before`}
                    className="aspect-[16/10] w-full"
                  />
                  <span className="absolute left-4 top-4 rounded bg-ink-950/80 px-3 py-1 text-xs font-bold uppercase tracking-wider text-white">
                    Before
                  </span>
                </div>
                <div className="relative">
                  <ProjectImage
                    gradient={item.after}
                    label={`${item.title} after`}
                    className="aspect-[16/10] w-full"
                  />
                  <span className="absolute left-4 top-4 rounded bg-brand-600 px-3 py-1 text-xs font-bold uppercase tracking-wider text-white">
                    After
                  </span>
                </div>
              </div>
              <div className="flex flex-wrap items-center justify-between gap-2 p-5">
                <h3 className="font-display text-lg font-bold uppercase tracking-wide text-ink-900 dark:text-white">
                  {item.title}
                </h3>
                <span className="text-sm text-ink-500 dark:text-ink-400">
                  {item.location}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
