import { createFileRoute } from "@tanstack/react-router";
import { PageHeader } from "@/components/PageHeader";
import { ExternalLink } from "lucide-react";

export const Route = createFileRoute("/certifications")({
  head: () => ({
    meta: [
      { title: "Certifications — Tanveer Kaiser" },
      {
        name: "description",
        content:
          "Professional certifications in data analytics, machine learning and SQL.",
      },
      { property: "og:title", content: "Certifications — Tanveer Kaiser" },
      {
        property: "og:description",
        content: "Professional certifications and credentials.",
      },
    ],
    links: [{ rel: "canonical", href: "/certifications" }],
  }),
  component: Certifications,
});

/* ── Add new certs here. Drop images into /public/certifications/ ── */
const certs = [
  {
    title: "SQA: Manual & Automation Testing",
    issuer: "Ostad",
    image: "/certifications/SQA.png",
    credentialUrl:
      "https://drive.google.com/file/d/11clZVkBjyy50q382lLBFAQ9aXvWYTCd4/view?usp=sharing",
  },
  {
    title: "PHP with Laravel Framework",
    issuer: "BASIS Institute of Technology & Management (BITM)",
    image: "/certifications/laravel.png",
    credentialUrl:
      "https://drive.google.com/file/d/1fuWvVHv96jAhaSd8HsJTYR2pfy-INcAf/view?usp=sharing",
  },
  {
    title: "Intro to AI Agents and Agentic AI",
    issuer: "365 Data Science",
    image: "/certifications/agent.png",
    credentialUrl:
      "https://drive.google.com/file/d/1BJjWq0jwtZHgJVBKKVTWivpu_F3oSdmR/view?usp=sharing",
  },
  {
    title: "Intro to LLMs",
    issuer: "365 Data Science",
    image: "/certifications/llm.png",
    credentialUrl:
      "https://learn.365datascience.com/certificates/CC-576B2CE2E1/",
  },
  {
    title: "SQL (Basic)",
    issuer: "365 Data Science",
    image: "/certifications/sql.png",
    credentialUrl:
      "https://www.hackerrank.com/certificates/iframe/aeac880db68e",
  },
  {
    title: "Data Visualization Associate",
    issuer: "Excelerate",
    image: "/certifications/data.png",
    credentialUrl:
      "https://drive.google.com/file/d/1nC9zAwYCv5CnBo8AEYgn5OCiNsqSRmCP/view?usp=sharing",
  },
  {
    title: "Introduction to Data Anlytics",
    issuer: "Simplilearn",
    image: "/certifications/analytics.png",
    credentialUrl:
      "https://drive.google.com/file/d/1OBkAbOnPixer9_aNBCShHeyeUrsqlTjq/view?usp=sharing",
  },
];

/* Derive initials for placeholder when image hasn't been added yet */
function getInitials(issuer: string) {
  return issuer
    .split(" ")
    .map((w) => w[0])
    .join("")
    .slice(0, 2)
    .toUpperCase();
}

function CertCard({ c, i }: { c: (typeof certs)[0]; i: number }) {
  return (
    <article
      style={{ animationDelay: `${i * 60}ms` }}
      className="animate-fade-up flex flex-col overflow-hidden rounded-2xl border border-border bg-card shadow-[var(--shadow-card)] transition-transform hover:-translate-y-1"
    >
      {/* Certificate image / placeholder */}
      <div className="relative h-52 w-full overflow-hidden bg-secondary/60">
        {c.image ? (
          <img
            src={c.image}
            alt={c.title}
            className="h-full w-full object-cover object-top transition-transform duration-300 hover:scale-105"
            onError={(e) => {
              /* fall back to placeholder if image file is missing */
              (e.currentTarget as HTMLImageElement).style.display = "none";
              (
                e.currentTarget.nextElementSibling as HTMLElement
              ).style.display = "flex";
            }}
          />
        ) : null}

        {/* Placeholder — visible when image is missing or hasn't loaded */}
        <div
          className="absolute inset-0 flex flex-col items-center justify-center gap-2"
          style={{ display: c.image ? "none" : "flex" }}
        >
          <span className="flex h-14 w-14 items-center justify-center rounded-full border-2 border-primary/30 bg-background text-xl font-bold text-primary">
            {getInitials(c.issuer)}
          </span>
          <span className="text-xs text-muted-foreground">Certificate preview</span>
        </div>
      </div>

      {/* Card body */}
      <div className="flex flex-1 flex-col p-5 sm:p-6">
        {/* Issuer */}
        <p className="text-xs font-semibold uppercase tracking-wide text-primary/70">
          {c.issuer}
        </p>

        {/* Title */}
        <h2 className="mt-1 min-h-[3rem] font-display text-base font-semibold leading-snug text-foreground sm:text-lg">
          {c.title}
        </h2>

        {/* Credential button */}
        <a
          href={c.credentialUrl}
          target="_blank"
          rel="noreferrer"
          className="mt-5 inline-flex w-fit items-center gap-1.5 rounded-lg bg-primary px-4 py-2 text-sm font-semibold text-primary-foreground shadow-[var(--shadow-soft)] transition-transform hover:-translate-y-0.5"
        >
          <ExternalLink className="h-4 w-4" /> View Credential
        </a>
      </div>
    </article>
  );
}

const COLS = 3;

const colsClass: Record<number, string> = {
  1: "lg:grid-cols-1 lg:max-w-[33.333%] lg:mx-auto",
  2: "lg:grid-cols-2 lg:max-w-[calc(66.666%+0.75rem)] lg:mx-auto",
  3: "lg:grid-cols-3",
};

function Certifications() {
  const rows: (typeof certs)[] = [];
  for (let i = 0; i < certs.length; i += COLS) {
    rows.push(certs.slice(i, i + COLS));
  }

  return (
    <section className="bg-secondary/30">
      <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8 lg:py-24">
        <PageHeader 
        title="Certifications"
        subtitle="Credentials Earned Through Continuous Skill Development."/>

        <div className="mt-12 space-y-6">
          {rows.map((row, rowIdx) => {
            const isLastRow = rowIdx === rows.length - 1;
            const count = row.length;
            const gridCols =
              isLastRow && count < COLS ? colsClass[count] : "lg:grid-cols-3";

            return (
              <div
                key={rowIdx}
                className={`grid gap-6 sm:grid-cols-2 ${gridCols}`}
              >
                {row.map((c, colIdx) => (
                  <CertCard key={c.title} c={c} i={rowIdx * COLS + colIdx} />
                ))}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}