// color: the card's background — match the case study page's `accent`.
// Projects without one fall back to cycling through the swatches by position.
export const projects: {
  title: string;
  color?: "indigo-soft" | "rose-soft" | "sage-soft" | "amber-soft";
  description: string;
  tag: string;
  href?: string;
  image?: string;
}[] = [
  {
    title: "LeoAI",
    color: "amber-soft",
    description: "Making an AI engineering copilot easier to start with, follow, and trust.",
    tag: "AI UX",
    href: "/case-studies/leo-ai",
    image: "/case-studies/leo-ai/hero-mockup.png",
  },
  {
    title: "AI Design pipeline",
    color: "indigo-soft",
    description: "Using Claude Code skills to go from idea to prototype to a workable Figma file.",
    tag: "AI Tooling",
    href: "/case-studies/ai-design-pipeline",
    image: "/case-studies/ai-design-pipeline/card-image.png",
  },
  {
    title: "Ignore approval workflow",
    color: "rose-soft",
    description:
      "Providing Application Security Engineers with more control over issues being ignored, and developers more agency in ignoring them.",
    tag: "Enterprise UX",
    href: "/case-studies/ignore-approval-workflow",
    image: "/case-studies/ignore-approval-workflow/hero-mockup.png",
  },
  {
    title: "Security DB search",
    color: "sage-soft",
    description: "Updating a security database search to include non-vulnerable packages, not just vulnerable ones.",
    tag: "Enterprise UX",
    href: "/case-studies/security-db-search",
    image: "/case-studies/security-db-search/hero-mockup.png",
  },
  {
    title: "Notification settings",
    color: "amber-soft",
    description: "Redesigning a user notification settings page to improve usability and provide greater flexibility.",
    tag: "Systems",
  },
];
