import { createFileRoute } from "@tanstack/react-router";
import { PageHeader } from "@/components/PageHeader";
import { ExternalLink } from "lucide-react";


export const Route = createFileRoute("/projects")({
  head: () => ({
    meta: [
      { title: "Projects — Tanveer Kaiser" },
      {
        name: "description",
        content:
          "Machine learning and data analytics projects including fraud detection, digit recognition and recommendation systems.",
      },
      { property: "og:title", content: "Projects — Tanveer Kaiser" },
      {
        property: "og:description",
        content: "Selected machine learning and data analytics projects.",
      },
    ],
    links: [{ rel: "canonical", href: "/projects" }],
  }),
  component: Projects,
});

const projects = [
    {
    title: "Aspect Based Sentiment Analysis",
    description:
      "A two-stage NLP pipeline built on fine-tuned BERT that classifies airline tweets by sentiment",
    image: "/projects/sentiment.png",
    category: "NLP",
    tags: ["BERT", "XAI", "Logistic Regression"],
    github: "https://github.com/Dihan07/Aspect-Based-Airline-Tweet-Sentiment-Analysis-",
    demo: null,
  },
  {
    title: "Credit Card Fraud Detection",
    description:
      "Exploring the effectiveness of data balancing techniques for credit card fraud detection using Machine Learning.",
    image: "/projects/credit card blue.jpg",
    category: "Machine Learning",
    tags: ["Python", "Undersampling","Oversampling"],
    github: "https://github.com/Dihan07/Credit-Card-Fraud-Detection-using-Machine-Learning",
    demo: null,
  },
  {
    title: "Hand Written Digit Recognition",
    description:
      "Recognition of Bangla hand-written digits using a transfer learning model.",
    image: "/projects/digit.png",
    category: "Computer Vision",
    tags: ["Deep learning", "TensorFlow", "Transfer Learning"],
    github: "https://github.com/Dihan07/Bangla-Hand-Written-Digit-Recognition-",
    demo: null,
  },
  {
    title: "Movie Recommendation System",
    description:
      "A movie recommendation system using collaborative filtering and matrix factorization.",
    image: "/projects/movie.png",
    category: "NLP",
    tags: ["Python", "Matrix factorization", "Collaborative Filtering"],
    github: "https://github.com/Dihan07/Movie-Recommendation-System",
    demo: null,
  },
  {
    title: "Swag-Labs UI Automation",
    description:
      "End-to-end automated UI test suites built with Playwright for reliable releases.",
    image: "/projects/testing.png",
    category: "SQA",
    tags: ["Playwright","JavaScript","Automated Testing"],
    github: "https://github.com/Dihan07/Swag-Labs-automation",
    demo: null,
  },
  {
    title: "British Airways Review Dashboard",
    description:
      "Interactive analytics dashboard surfacing customer sentiment and ratings across routes.",
    image: "/projects/tableau.png",
    category: "Data Analytics",
    tags: ["Tableau", "Interactive Dashboard"],
    github: null,
    demo: "https://public.tableau.com/app/profile/tanveer.kaiser/viz/AirwayReview_17516647776520/Dashboard1",
  },
];

function ProjectCard({ p, i }: { p: (typeof projects)[0]; i: number }) {
  return (
    <article
      key={p.title}
      style={{ animationDelay: `${i * 60}ms` }}
      className="animate-fade-up flex flex-col overflow-hidden rounded-2xl border border-border bg-card shadow-[var(--shadow-card)] transition-transform hover:-translate-y-1"
    >
      <div className="relative h-44 w-full overflow-hidden">
        <img
          src={p.image}
          alt={p.title}
          className="h-full w-full object-cover transition-transform duration-300 hover:scale-105"
        />
        <span className="absolute left-3 top-3 rounded-full border border-primary/30 bg-background/90 px-2.5 py-0.5 text-[11px] font-semibold text-primary backdrop-blur-sm">
          {p.category}
        </span>
      </div>

      <div className="flex flex-1 flex-col p-6">
        <h2 className="font-display text-lg font-semibold text-primary">
          {p.title}
        </h2>

        <p className="mt-2 min-h-[3.5rem] text-sm text-muted-foreground">
          {p.description}
        </p>

        <div className="mt-3 flex flex-wrap gap-1.5">
          {p.tags.map((tag) => (
            <span
              key={tag}
              className="rounded-full border border-border bg-secondary/60 px-2.5 py-0.5 text-[11px] font-medium text-muted-foreground"
            >
              {tag}
            </span>
          ))}
        </div>

        <div className="mt-5 flex flex-wrap gap-2">
          {p.github && (
          <a
            href={p.github}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 rounded-lg bg-primary px-4 py-2 text-sm font-semibold text-primary-foreground shadow-[var(--shadow-soft)] transition-transform hover:-translate-y-0.5"
          >
            <svg className="h-4 w-4" fill="currentColor" viewBox="0 0 24 24">
              <path d="M12 .5C5.37.5 0 5.87 0 12.5c0 5.3 3.44 9.8 8.2 11.38.6.11.82-.26.82-.58v-2.03c-3.34.72-4.04-1.6-4.04-1.6-.54-1.38-1.33-1.75-1.33-1.75-1.08-.74.08-.73.08-.73 1.2.08 1.83 1.23 1.83 1.23 1.06 1.82 2.78 1.3 3.46.99.11-.77.42-1.3.76-1.6-2.67-.3-5.47-1.33-5.47-5.93 0-1.31.47-2.38 1.24-3.22-.12-.3-.54-1.52.12-3.17 0 0 1.01-.32 3.3 1.23a11.5 11.5 0 013.01-.4c1.02 0 2.05.14 3.01.4 2.28-1.55 3.29-1.23 3.29-1.23.66 1.65.24 2.87.12 3.17.77.84 1.24 1.91 1.24 3.22 0 4.61-2.81 5.63-5.48 5.92.43.37.81 1.1.81 2.22v3.29c0 .32.22.7.83.58C20.57 22.3 24 17.8 24 12.5 24 5.87 18.63.5 12 .5z" />
            </svg>
            GitHub

          </a>)}
          {p.demo && (
            <a
              href={p.demo}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 rounded-lg border-2 border-primary px-4 py-2 text-sm font-semibold text-primary transition-colors hover:bg-primary hover:text-primary-foreground"
            >
              <ExternalLink className="h-4 w-4" /> Live Demo
            </a>
          )}
        </div>
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

function Projects() {
  const rows: (typeof projects)[] = [];
  for (let i = 0; i < projects.length; i += COLS) {
    rows.push(projects.slice(i, i + COLS));
  }

  return (
    <section className="bg-secondary/30">
      <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8 lg:py-24">
        <PageHeader
          title="Projects"
          subtitle="Explore the projects that highlight my technical expertise, creativity, and hands-on experience in developing impactful solutions.
"
        />

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
                {row.map((p, colIdx) => (
                  <ProjectCard
                    key={p.title}
                    p={p}
                    i={rowIdx * COLS + colIdx}
                  />
                ))}
              </div>
            );
          })}
        </div>
        {/* GitHub CTA */}
        <div className="animate-fade-up mt-14 flex flex-col items-center gap-3 rounded-2xl">
          <div className="space-y-1">
            <p className="text-base font-semibold text-foreground">
              Find all my treasures here 
            </p>
          </div>
          <svg
            className="h-6 w-6 text-muted-foreground animate-bounce"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            viewBox="0 0 24 24"
          >
            <path strokeLinecap="round" strokeLinejoin="round" d="M12 4v16m0 0l-4-4m4 4l4-4" />
          </svg>
          <a
            href="https://github.com/Dihan07"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 rounded-xl bg-primary px-5 py-2.5 text-sm font-semibold text-primary-foreground transition-all duration-200 hover:-translate-y-0.5 hover:opacity-90"
          >
            <svg className="h-4 w-4" fill="currentColor" viewBox="0 0 24 24">
              <path d="M12 .5C5.37.5 0 5.87 0 12.5c0 5.3 3.44 9.8 8.2 11.38.6.11.82-.26.82-.58v-2.03c-3.34.72-4.04-1.6-4.04-1.6-.54-1.38-1.33-1.75-1.33-1.75-1.08-.74.08-.73.08-.73 1.2.08 1.83 1.23 1.83 1.23 1.06 1.82 2.78 1.3 3.46.99.11-.77.42-1.3.76-1.6-2.67-.3-5.47-1.33-5.47-5.93 0-1.31.47-2.38 1.24-3.22-.12-.3-.54-1.52.12-3.17 0 0 1.01-.32 3.3 1.23a11.5 11.5 0 013.01-.4c1.02 0 2.05.14 3.01.4 2.28-1.55 3.29-1.23 3.29-1.23.66 1.65.24 2.87.12 3.17.77.84 1.24 1.91 1.24 3.22 0 4.61-2.81 5.63-5.48 5.92.43.37.81 1.1.81 2.22v3.29c0 .32.22.7.83.58C20.57 22.3 24 17.8 24 12.5 24 5.87 18.63.5 12 .5z" />
            </svg>
            View GitHub Profile
          </a>
        </div>
      </div>
    </section>
  );
}