import { createFileRoute } from "@tanstack/react-router";
import { PageHeader } from "@/components/PageHeader";
import { FileText, Link2 } from "lucide-react";

export const Route = createFileRoute("/research")({
  component: Research,
});

const papers = [
  {
    title:
      "Credit Card Fraud Detection: Data Balancing Techniques and Model Interpretability",
    venue:
      "2025 International Conference on Electrical, Computer and Communication Engineering (ECCE)",
    year: "2025",
    authors: [
      "Tanveer Kaiser",
      "Avishek Chowdhury",
      "Umme Humyra Nabila",
      "Pantha Singha",
      "Mohammad Hasan",
      "M. A. Rasel",
    ],
    pdfHref: "https://drive.google.com/file/d/1nC9zAwYCv5CnBo8AEYgn5OCiNsqSRmCP/view?usp=sharing",
    linkHref: "https://ieeexplore.ieee.org/document/11013141/",
  },
];

function PaperCard({ paper }: { paper: (typeof papers)[0] }) {
  return (
    <article className="animate-fade-up relative overflow-hidden rounded-2xl border border-border bg-secondary/40 shadow-[var(--shadow-card)]">
      {/* Left accent border */}
      <div className="absolute left-0 top-0 h-full w-[3px] rounded-l-2xl bg-primary" />

      <div className="p-6 pl-8 sm:p-8 sm:pl-10">

        {/* Top row: year + IEEE badge */}
        <div className="flex flex-wrap items-center justify-between gap-3">
          <span className="select-none font-display text-3xl font-bold leading-none text-primary/20">
            {paper.year}
          </span>
          <span className="inline-flex items-center gap-1.5 rounded-full border border-primary/40 bg-primary/10 px-3 py-1 text-xs font-semibold text-primary">
            <span className="h-1.5 w-1.5 rounded-full bg-primary" />
            IEEE · Peer Reviewed
          </span>
        </div>

        {/* Title */}
        <h2 className="mt-3 font-display text-lg font-semibold leading-snug text-primary sm:text-xl">
          {paper.title}
        </h2>

        {/* Venue */}
        <p className="mt-1.5 text-sm text-muted-foreground sm:text-base">
          {paper.venue}
        </p>

        {/* Divider */}
        <hr className="my-4 border-border" />

        {/* Authors */}
        <div className="flex flex-wrap items-center gap-1.5">
          <span className="text-ms font-medium text-muted-foreground">Authors —</span>
          {paper.authors.map((author, i) => (
            <span
              key={author}
              className={`text-ms font-medium ${
                i === 0
                  ? "text-primary underline underline-offset-2"
                  : "text-foreground/70"
              }`}
            >
              {author}{i < paper.authors.length - 1 ? "," : ""}
            </span>
          ))}
        </div>

        {/* Actions */}
        <div className="mt-6 flex flex-wrap gap-3">
          <a
            href={paper.pdfHref}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 rounded-lg bg-primary px-4 py-2 text-sm font-semibold text-primary-foreground shadow-[var(--shadow-soft)] transition-transform hover:-translate-y-0.5"
          >
            <FileText className="h-4 w-4" /> PDF
          </a>
          <a
            href={paper.linkHref}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 rounded-lg border-2 border-primary px-4 py-2 text-sm font-semibold text-primary transition-colors hover:bg-primary hover:text-primary-foreground"
          >
            <Link2 className="h-4 w-4" /> DOI / Link
          </a>
        </div>

      </div>
    </article>
  );
}

function Research() {
  return (
    <section className="mx-auto max-w-5xl px-4 py-16 sm:px-6 lg:px-8 lg:py-24">
      <PageHeader 
      title="Research"
      subtitle="A collection of my research contributions, publications, and scholarly work. More to come in the future.
" />


      <div className="mt-8 space-y-6">
        {papers.map((paper) => (
          <PaperCard key={paper.title} paper={paper} />
        ))}
      </div>
    </section>
  );
}