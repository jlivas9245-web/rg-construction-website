export type Testimonial = {
  name: string;
  role: string;
  location: string;
  quote: string;
  rating: number;
};

export const testimonials: Testimonial[] = [
  {
    name: "Sarah & Mark Thompson",
    role: "Homeowners",
    location: "Longview, TX",
    quote:
      "RG Construction handled our full kitchen remodel from demo to final walk-through. The crew was respectful, on time, and the craftsmanship is incredible. Our kitchen looks like something out of a magazine.",
    rating: 5,
  },
  {
    name: "Daniel Reyes",
    role: "Property Manager",
    location: "Tyler, TX",
    quote:
      "We manage several apartment communities and RG is our go-to for turns and maintenance. They are responsive, fairly priced, and the quality keeps our units leasing fast.",
    rating: 5,
  },
  {
    name: "Whitney Carter",
    role: "Retail Business Owner",
    location: "Kilgore, TX",
    quote:
      "They completed our retail build-out two days ahead of schedule. Communication was excellent and they handled every inspection without a hitch. Highly recommend for commercial work.",
    rating: 5,
  },
  {
    name: "James Holloway",
    role: "Real Estate Investor",
    location: "Marshall, TX",
    quote:
      "I've used RG on three flip projects now. Honest bids, no surprise change orders, and the finished product always appraises strong. These are the contractors you keep.",
    rating: 5,
  },
  {
    name: "The Nguyen Family",
    role: "Homeowners",
    location: "Longview, TX",
    quote:
      "Our master bathroom remodel exceeded expectations. The tile work is flawless and they finished exactly when promised. A genuinely professional team.",
    rating: 5,
  },
  {
    name: "Office Spaces of East TX",
    role: "Commercial Landlord",
    location: "Tyler, TX",
    quote:
      "RG Construction completed tenant improvements across multiple suites for us. Clean job sites, clear timelines, and dependable results every single time.",
    rating: 5,
  },
];

export type Faq = {
  question: string;
  answer: string;
};

export const faqs: Faq[] = [
  {
    question: "What areas of East Texas do you serve?",
    answer:
      "We serve Longview, Tyler, Kilgore, Marshall and the surrounding East Texas communities, including Gladewater, White Oak, Hallsville and Henderson. If you're nearby and not sure whether we cover your area, just give us a call.",
  },
  {
    question: "Are you licensed and insured?",
    answer:
      "Yes. RG Construction is fully licensed and carries general liability and workers' compensation insurance. We're happy to provide a certificate of insurance before your project begins.",
  },
  {
    question: "Do you provide free estimates?",
    answer:
      "Absolutely. We provide free, no-obligation estimates for both residential and commercial projects. Submit a quote request online or call us and we'll schedule a time to assess your project.",
  },
  {
    question: "Do you handle both residential and commercial work?",
    answer:
      "Yes. We work with homeowners, property managers, apartment communities, real estate investors and commercial businesses. From a single bathroom remodel to a full commercial build-out, we have the team to deliver.",
  },
  {
    question: "How long will my project take?",
    answer:
      "Timelines depend on scope. A bathroom remodel may take a couple of weeks, while a commercial build-out or new construction project runs longer. After our initial assessment we provide a detailed schedule with key milestones.",
  },
  {
    question: "Do you offer property maintenance contracts?",
    answer:
      "Yes. We offer ongoing maintenance and unit-turn services for apartment complexes, rental portfolios and commercial properties. Reach out to discuss a recurring service agreement tailored to your properties.",
  },
  {
    question: "How do change orders and pricing work?",
    answer:
      "We provide transparent, detailed bids up front so you know exactly what's included. If the scope changes, we document it in a written change order with pricing before any additional work begins — no surprises.",
  },
];

export type Project = {
  title: string;
  category: string;
  location: string;
  type: "residential" | "commercial";
  scope: string;
  // gradient pair used for the styled placeholder image
  gradient: [string, string];
};

export const residentialProjects: Project[] = [
  {
    title: "Modern Farmhouse Kitchen",
    category: "Kitchen Remodel",
    location: "Longview, TX",
    type: "residential",
    scope: "Custom cabinetry, quartz countertops, tile backsplash, new lighting",
    gradient: ["#2451cf", "#122047"],
  },
  {
    title: "Spa Master Bathroom",
    category: "Bathroom Remodel",
    location: "Tyler, TX",
    type: "residential",
    scope: "Walk-in tile shower, double vanity, heated floors",
    gradient: ["#47536b", "#0c1019"],
  },
  {
    title: "Open-Concept Living Renovation",
    category: "Whole-Home Remodel",
    location: "Kilgore, TX",
    type: "residential",
    scope: "Wall removal, LVP flooring, finish carpentry, fresh paint",
    gradient: ["#1f41b0", "#2c3548"],
  },
  {
    title: "Hardwood Flooring Install",
    category: "Flooring",
    location: "Marshall, TX",
    type: "residential",
    scope: "1,800 sq ft engineered hardwood with custom transitions",
    gradient: ["#1e3a8a", "#171d2b"],
  },
  {
    title: "Guest Bath Tile Feature",
    category: "Tile Installation",
    location: "Longview, TX",
    type: "residential",
    scope: "Floor-to-ceiling tile, niche shelving, frameless glass",
    gradient: ["#5c6a86", "#0c1019"],
  },
  {
    title: "Home Office Addition",
    category: "Residential Construction",
    location: "Hallsville, TX",
    type: "residential",
    scope: "New framing, drywall, windows and built-in shelving",
    gradient: ["#3b6be3", "#1b336f"],
  },
];

export const commercialProjects: Project[] = [
  {
    title: "Downtown Office Renovation",
    category: "Office Renovation",
    location: "Tyler, TX",
    type: "commercial",
    scope: "Full interior refresh, conference build-out, new flooring",
    gradient: ["#3a4458", "#0c1019"],
  },
  {
    title: "Boutique Retail Build-Out",
    category: "Retail Build-Out",
    location: "Longview, TX",
    type: "commercial",
    scope: "White-box to finished storefront, lighting, custom fixtures",
    gradient: ["#2451cf", "#171d2b"],
  },
  {
    title: "Medical Suite Tenant Improvement",
    category: "Tenant Improvement",
    location: "Kilgore, TX",
    type: "commercial",
    scope: "Exam rooms, ADA upgrades, specialty plumbing",
    gradient: ["#47536b", "#0c1019"],
  },
  {
    title: "Multi-Family Unit Turns",
    category: "Apartment Maintenance",
    location: "Tyler, TX",
    type: "commercial",
    scope: "Recurring turns for 120-unit community, paint, flooring, repairs",
    gradient: ["#1f41b0", "#2c3548"],
  },
  {
    title: "Restaurant Build-Out",
    category: "Commercial Build-Out",
    location: "Marshall, TX",
    type: "commercial",
    scope: "Kitchen infrastructure, dining finishes, code compliance",
    gradient: ["#1e3a8a", "#0c1019"],
  },
  {
    title: "Warehouse Office Conversion",
    category: "Commercial Construction",
    location: "Longview, TX",
    type: "commercial",
    scope: "Mezzanine offices, framing, HVAC coordination, finishes",
    gradient: ["#5c6a86", "#0c1019"],
  },
];

export type Review = {
  name: string;
  rating: number;
  date: string;
  text: string;
};

export const googleReviews: Review[] = [
  {
    name: "Amanda P.",
    rating: 5,
    date: "2 weeks ago",
    text: "Professional from start to finish. The estimate was detailed and the final invoice matched it exactly. Will use again.",
  },
  {
    name: "Robert K.",
    rating: 5,
    date: "1 month ago",
    text: "Did a fantastic job on our office tenant improvement in Tyler. On time and on budget.",
  },
  {
    name: "Latoya M.",
    rating: 5,
    date: "1 month ago",
    text: "Our bathroom remodel turned out beautiful. Great communication the whole way through.",
  },
  {
    name: "Chris D.",
    rating: 5,
    date: "2 months ago",
    text: "Reliable crew for our rental property maintenance. They handle everything so we don't have to.",
  },
];
