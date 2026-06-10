import { createFileRoute } from "@tanstack/react-router";
import { PageHeader } from "@/components/PageHeader";

export const Route = createFileRoute("/about")({
  component: About,
});

/* ─────────── Timeline entry ─────────── */

interface TimelineEntryProps {
  period: string;
  title: string;
  subtitle: string;
  description?: string;
  badge?: string;
  delay?: string;
}

function TimelineEntry({
  period,
  title,
  subtitle,
  description,
  badge,
  delay = "0s",
}: TimelineEntryProps) {
  return (
    <div
      className="animate-fade-up relative pl-5 pb-7 last:pb-0"
      style={{ animationDelay: delay }}
    >
      {/* vertical connector line */}
      <span className="absolute left-0 top-2 bottom-0 w-px bg-border last:hidden" />
      {/* dot */}
      <span className="absolute left-[-4px] top-[6px] h-2.5 w-2.5 rounded-full border-2 border-primary bg-background" />

      <div className="flex flex-wrap items-center gap-2 mb-0.5">
        <span className="text-base font-mono text-primary/90 tracking-wide">
          {period}
        </span>
        {badge && (
          <span className="text-[14px] rounded-full border border-primary/30 bg-primary/10 text-primary px-2 py-0.5 font-medium">
            {badge}
          </span>
        )}
      </div>
      <p className="text-base font-semibold text-foreground leading-tight">
        {title}
      </p>
      <p className="text-sm text-muted-foreground mt-0.5">{subtitle}</p>
      {description && (
        <p className="text-sm text-foreground/60 mt-1.5 leading-relaxed">
          {description}
        </p>
      )}
    </div>
  );
}

/* ─────────── Page ─────────── */

function About() {
  return (
    <section className="mx-auto max-w-4xl px-4 py-16 sm:px-6 lg:px-8 lg:py-24">
      {/* 0s — PageHeader lands first */}
      <PageHeader
        title="About me"
        subtitle="Is it Thunder 🗲 Is it Danger ⚠︎
                  No, it's Tanveer Kaiser!"
      />

      {/* 0.15s — ML paragraph */}
      <div
        className="animate-fade-up mt-10 flex gap-4"
        style={{ animationDelay: "0.15s" }}
      >
        <div className="mt-1 flex h-9 w-9 shrink-0 items-center justify-center rounded-lg border border-primary/20 bg-primary/10 text-primary">
          <svg
            className="h-4 w-4"
            fill="none"
            stroke="currentColor"
            strokeWidth={1.8}
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M9.663 17h4.673M12 3v1m6.364 1.636-.707.707M21 12h-1M4 12H3m3.343-5.657-.707-.707m2.828 9.9a5 5 0 1 1 7.072 0l-.548.547A3.374 3.374 0 0 0 14 18.469V19a2 2 0 1 1-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z"
            />
          </svg>
        </div>
        <p className="text-base leading-relaxed text-foreground/85 sm:text-lg">
          I am a passionate, detail-oriented and recent CSE graduate with strong
          skills in{" "}
          <span className="font-medium text-primary">
            Machine Learning and Data Analytics.
          </span>{" "}
          I enjoy transforming complex data into meaningful insights and building
          intelligent solutions that solve real-world problems. My experience
          includes working with various data preprocessing, modeling, and
          evaluation techniques to develop accurate and efficient predictive
          systems.
        </p>
      </div>

      {/* 0.3s — SQA paragraph */}
      <div
        className="animate-fade-up mt-6 flex gap-4"
        style={{ animationDelay: "0.3s" }}
      >
        <div className="mt-1 flex h-9 w-9 shrink-0 items-center justify-center rounded-lg border border-primary/20 bg-primary/10 text-primary">
          <svg
            className="h-4 w-4"
            fill="none"
            stroke="currentColor"
            strokeWidth={1.8}
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M9 12.75 11.25 15 15 9.75m-3-7.036A11.959 11.959 0 0 1 3.598 6 11.99 11.99 0 0 0 3 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285z"
            />
          </svg>
        </div>
        <p className="text-base leading-relaxed text-foreground/85 sm:text-lg">
          Currently, I am expanding my expertise into{" "}
          <span className="font-medium text-primary">
            Software Quality Assurance
          </span>
          , learning how to design and execute effective test strategies to
          ensure the reliability, performance, and quality of software products.
          With a blend of analytical thinking, problem-solving ability, and
          continuous learning, I strive to deliver impactful solutions and grow
          as a versatile professional in the tech industry.
        </p>
      </div>

      {/* 0.45s — Scroll CTA button */}
      <div
        className="animate-fade-up mt-8"
        style={{ animationDelay: "0.45s" }}
      >
        <button
          onClick={() =>
            document
              .getElementById("edu-exp")
              ?.scrollIntoView({ behavior: "smooth" })
          }
          className="inline-flex items-center gap-2 rounded-xl border border-border px-5 py-2.5 text-sm font-medium text-foreground transition-colors hover:bg-accent hover:border-primary/40"
        >
          The journey so far
          <svg
            className="h-4 w-4 animate-bounce"
            fill="none"
            stroke="currentColor"
            strokeWidth={2}
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M19 9l-7 7-7-7"
            />
          </svg>
        </button>
      </div>

      {/* ── Education & Experience ── */}
      {/* 0.6s — section fades in as a unit, entries stagger within */}
      <div
        id="edu-exp"
        className="animate-fade-up mt-16 grid grid-cols-1 gap-10 sm:grid-cols-2"
        style={{ animationDelay: "0.6s" }}
      >
        {/* Education column */}
        <div>
          <h2
            className="animate-fade-up mb-6 text-[20px] font-semibold uppercase tracking-[0.15em] text-primary/60 flex items-center gap-2"
            style={{ animationDelay: "0.65s" }}
          >
            <span className="inline-block h-px w-5 bg-primary/40" />
            Education
          </h2>
          <div>
            <TimelineEntry
              period="Feb 2019 – May 2024"
              title="B.Sc. in Computer Science & Engineering"
              subtitle="Premier University, Chattogram"
              description="CGPA: 3.26 / 4.00"
              delay="0.75s"
            />
            <TimelineEntry
              period="2024"
              title="IELTS — Band 7.0"
              subtitle="CEFR Level: C1"
              description="Listening 8.5 · Reading 7.5 · Speaking 6.5 · Writing 6.0"
              badge="C1"
              delay="0.9s"
            />
          </div>
        </div>

        {/* Experience column */}
        <div>
          <h2
            className="animate-fade-up mb-6 text-[20px] font-semibold uppercase tracking-[0.15em] text-primary/60 flex items-center gap-2"
            style={{ animationDelay: "0.65s" }}
          >
            <span className="inline-block h-px w-5 bg-primary/40" />
            Experience
          </h2>
          <div>
            <TimelineEntry
              period="Dec 2025 – Present"
              title="Image Analyst"
              subtitle="ARC Annotation · Remote · Part-time"
              description="Image annotation and labeling for AI data preparation, following established quality standards."
              badge="Current"
              delay="0.75s"
            />
            <TimelineEntry
              period="Jul 2025 – Aug 2025"
              title="Data Analyst Associate Intern"
              subtitle="Excelerate · Virtual Internship"
              description="Built an interactive dashboard with Looker Studio and PostgreSQL, including a Master Table via an ETL pipeline."
              delay="0.9s"
            />
          </div>
        </div>
      </div>

      {/* 1.05s — status badges */}
      <div
        className="animate-fade-up mt-12 flex flex-wrap items-center gap-3 text-sm text-muted-foreground"
        style={{ animationDelay: "1.05s" }}
      >
        <span className="inline-flex items-center gap-1.5 rounded-full border border-border bg-secondary px-3 py-1 text-secondary-foreground">
          <span className="h-2 w-2 rounded-full bg-primary animate-pulse" />
          Open to opportunities
        </span>
        <span className="inline-flex items-center gap-1.5 rounded-full border border-border bg-secondary px-3 py-1 text-secondary-foreground">
          🏠︎ Chattogram, Bangladesh
        </span>
        <span className="inline-flex items-center gap-1.5 rounded-full border border-border bg-secondary px-3 py-1 text-secondary-foreground">
          Currently studying: The Way of Life
        </span>
      </div>

      {/* 1.2s — CTA buttons land last */}
      <div
        className="animate-fade-up mt-10 flex flex-wrap gap-4"
        style={{ animationDelay: "1.2s" }}
      >
        <a
          href="/projects"
          className="inline-flex items-center gap-2 rounded-xl bg-primary px-5 py-2.5 text-sm font-medium text-primary-foreground transition-opacity hover:opacity-90"
        >
          View my projects →
        </a>
        <a
          href="/contact"
          className="inline-flex items-center gap-2 rounded-xl border border-border px-5 py-2.5 text-sm font-medium text-foreground transition-colors hover:bg-accent"
        >
          Get in touch
        </a>
      </div>
    </section>
  );
}