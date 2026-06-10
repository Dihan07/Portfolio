import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight } from "lucide-react";
import { PageHeader } from "@/components/PageHeader";

export const Route = createFileRoute("/skills")({
  component: Skills,
});

const skillGroups = [
  {
    category: "Data Science & ML",
    skills: [
      { name: "Python",       icon: "https://img.icons8.com/color/96/python.png" },
      { name: "Pandas",       icon: "https://img.icons8.com/?size=100&id=xSkewUSqtErH&format=png&color=000000" },
      { name: "NumPy",        icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/numpy/numpy-original.svg" },
      { name: "Matplotlib",   icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/matplotlib/matplotlib-original.svg" },
      { name: "Scikit-learn", icon: "https://upload.wikimedia.org/wikipedia/commons/0/05/Scikit_learn_logo_small.svg" },
    ],
  },
  {
    category: "Visualization & BI",
    skills: [
      { name: "Tableau",       icon: "https://img.icons8.com/color/96/tableau-software.png" },
      { name: "Looker Studio", icon: "https://img.icons8.com/color/96/google-looker.png" },
    ],
  },
  {
    category: "Databases & APIs",
    skills: [
      { name: "PostgreSQL", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg" },
      { name: "Postman",    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postman/postman-original.svg" },
    ],
  },
  {
    category: "Testing & Dev",
    skills: [
      { name: "Playwright", icon: "https://playwright.dev/img/playwright-logo.svg" },
      { name: "Node JS",    icon: "https://img.icons8.com/?size=100&id=hsPbhkOH4FMe&format=png&color=000000" },
      { name: "Git",        icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg" },
    ],
  },
];

function Skills() {
  document.title = "Skills — Tanveer Kaiser";
  return (
    <section className="mx-auto max-w-5xl px-4 py-16 sm:px-6 lg:px-8 lg:py-24">
      <PageHeader
        title="Skills"
        subtitle="The tools and technologies I have worked with and learned over the years. More skills loading ▰▰▰▱"
      />

      <div className="mt-14 space-y-8">
        {skillGroups.map((group, gi) => (
          <div
            key={group.category}
            style={{ animationDelay: `${gi * 80}ms` }}
            className="animate-fade-up flex items-start gap-0"
          >
            {/* Category label */}
            <div className="w-36 shrink-0 border-r border-border pr-6 pt-2.5 text-right sm:w-44">
              <span className="whitespace-nowrap text-[14px] font-semibold uppercase leading-snug tracking-wide text-primary">
                {group.category}
              </span>
            </div>

            {/* Skills pills */}
            <div className="flex flex-wrap gap-2.5 pl-6">
              {group.skills.map((skill) => (
                <div
                  key={skill.name}
                  className="group flex items-center gap-2.5 rounded-xl border border-border bg-card px-4 py-2.5 shadow-[var(--shadow-card)] transition-all duration-200 hover:-translate-y-0.5 hover:border-primary/40 hover:shadow-[var(--shadow-soft)]"
                >
                  <img
                    src={skill.icon}
                    alt={skill.name}
                    className="h-6 w-6 object-contain transition-transform duration-200 group-hover:scale-110"
                    loading="lazy"
                    onError={(e) => {
                      (e.currentTarget as HTMLImageElement).style.display = "none";
                    }}
                  />
                  <span className="text-base font-medium text-foreground">
                    {skill.name}
                  </span>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>

      {/* CTA callout card */}
      <div className="animate-fade-up mt-14 flex flex-col items-center gap-4 rounded-2xl border border-border bg-card px-6 py-10 text-center shadow-[var(--shadow-card)] max-w-lg mx-auto">
        <div className="space-y-1">
          <p className="text-base font-semibold text-foreground">
            Curious how I apply these?
          </p>
          <p className="text-sm text-muted-foreground">
            Browse my projects to see these tools in real work.
          </p>
        </div>
        <Link
          to="/projects"
          className="inline-flex items-center gap-2 rounded-xl bg-primary px-5 py-2.5 text-sm font-semibold text-primary-foreground transition-all duration-200 hover:-translate-y-0.5 hover:opacity-90"
        >
          See what I've built with these
          <ArrowRight className="h-4 w-4" />
        </Link>
      </div>

    </section>
  );
}