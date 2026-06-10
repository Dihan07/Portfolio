import { createFileRoute, Link } from "@tanstack/react-router";
import { FileText } from "lucide-react";
import { useEffect, useRef, useState } from "react";
import portrait from "@/assets/p2.png";

export const Route = createFileRoute("/")({
  component: Index,
});

const ROLES = [
  "A Data Science Enthusiast",
  "Aspiring SQA Engineer",
];

const SKILLS = ["Machine learning", "Data Science", "SQA"];

function useTypingEffect(
  words: string[],
  typingSpeed = 80,
  deletingSpeed = 45,
  pauseMs = 1800
) {
  const [displayed, setDisplayed] = useState("");
  const [wordIndex, setWordIndex] = useState(0);
  const [charIndex, setCharIndex] = useState(0);
  const [deleting, setDeleting] = useState(false);

  useEffect(() => {
    const current = words[wordIndex];
    let timeout: ReturnType<typeof setTimeout>;

    if (!deleting && charIndex < current.length) {
      timeout = setTimeout(() => setCharIndex((c) => c + 1), typingSpeed);
    } else if (!deleting && charIndex === current.length) {
      timeout = setTimeout(() => setDeleting(true), pauseMs);
    } else if (deleting && charIndex > 0) {
      timeout = setTimeout(() => setCharIndex((c) => c - 1), deletingSpeed);
    } else if (deleting && charIndex === 0) {
      setDeleting(false);
      setWordIndex((i) => (i + 1) % words.length);
    }

    setDisplayed(current.slice(0, charIndex));
    return () => clearTimeout(timeout);
  }, [charIndex, deleting, wordIndex, words, typingSpeed, deletingSpeed, pauseMs]);

  return displayed;
}

function Index() {
  const typed = useTypingEffect(ROLES);
  const portraitRef = useRef<HTMLDivElement>(null);
  const sectionRef = useRef<HTMLElement>(null);

  /* Parallax on mouse move */
  useEffect(() => {
    const section = sectionRef.current;
    const wrap = portraitRef.current;
    if (!section || !wrap) return;

    const handleMove = (e: MouseEvent) => {
      const r = section.getBoundingClientRect();
      const cx = r.left + r.width / 2;
      const cy = r.top + r.height / 2;
      const dx = (e.clientX - cx) / r.width;
      const dy = (e.clientY - cy) / r.height;
      wrap.style.transform = `translate(${dx * 14}px, ${dy * 10}px)`;
    };

    const handleLeave = () => {
      wrap.style.transform = "translate(0, 0)";
    };

    section.addEventListener("mousemove", handleMove);
    section.addEventListener("mouseleave", handleLeave);
    return () => {
      section.removeEventListener("mousemove", handleMove);
      section.removeEventListener("mouseleave", handleLeave);
    };
  }, []);

  return (
    <>
      <style>{`
        @keyframes spin-slow {
          from { transform: rotate(0deg); }
          to   { transform: rotate(360deg); }
        }
        @keyframes spin-slow-rev {
          from { transform: rotate(0deg); }
          to   { transform: rotate(-360deg); }
        }
        @keyframes float-badge {
          0%, 100% { transform: translateY(0); }
          50%       { transform: translateY(-7px); }
        }
        @keyframes pulse-glow {
          0%, 100% { opacity: 0.5; transform: scale(1); }
          50%       { opacity: 1;   transform: scale(1.08); }
        }
        @keyframes social-pop {
          from { transform: scale(0.5); opacity: 0; }
          to   { transform: scale(1);   opacity: 1; }
        }
        @keyframes scroll-bounce {
          0%, 100% { transform: translateY(0);   opacity: 1; }
          80%       { transform: translateY(10px); opacity: 0; }
        }
        @keyframes shimmer {
          from { transform: translateX(-100%); }
          to   { transform: translateX(100%);  }
        }

        .portrait-transition {
          transition: transform 0.12s ease-out;
        }
        .ring-cw {
          animation: spin-slow 20s linear infinite;
        }
        .ring-ccw {
          animation: spin-slow-rev 30s linear infinite;
        }
        .glow-blob {
          animation: pulse-glow 3s ease-in-out infinite;
        }
        .badge-float-1 { animation: float-badge 4s ease-in-out infinite; }
        .badge-float-2 { animation: float-badge 4s ease-in-out infinite 1.3s; }
        .badge-float-3 { animation: float-badge 4s ease-in-out infinite 0.7s; }

        .social-icon { animation: social-pop 0.4s ease backwards both; }
        .social-icon:nth-child(1) { animation-delay: 0.9s; }
        .social-icon:nth-child(2) { animation-delay: 1.0s; }
        .social-icon:nth-child(3) { animation-delay: 1.1s; }

        .btn-resume {
          position: relative;
          overflow: hidden;
        }
        .btn-resume::after {
          content: '';
          position: absolute;
          inset: 0;
          background: linear-gradient(90deg, transparent, rgba(255,255,255,0.22), transparent);
          transform: translateX(-100%);
          transition: transform 0.5s;
        }
        .btn-resume:hover::after { transform: translateX(100%); }

        .skill-chip {
          transition: transform 0.2s ease, background-color 0.2s ease, border-color 0.2s ease;
        }
        .skill-chip:hover {
          transform: translateY(-2px);
          background-color: color-mix(in oklch, var(--primary) 15%, transparent);
          border-color: var(--primary);
        }

        .scroll-dot-inner {
          animation: scroll-bounce 1.6s ease-in-out infinite;
        }
      `}</style>

      <section
        ref={sectionRef}
        className="relative mx-auto grid max-w-7xl items-center gap-12 px-4 py-16 sm:px-6 lg:grid-cols-2 lg:gap-8 lg:px-8 lg:py-28"
      >
        {/* ── LEFT COLUMN ── */}
        <div className="animate-fade-up order-2 lg:order-1">

          {/* Small label */}
          <p
            className="mb-3 text-xs font-semibold uppercase tracking-[0.18em] text-primary"
            style={{ animationDelay: "0.05s" }}
          >
            ✦ Welcome to my portfolio
          </p>

          <h1 className="font-display text-5xl font-bold leading-tight tracking-tight sm:text-6xl">
            Hello
            <br />
            I'm <span className="text-primary">Tanveer Kaiser</span>
          </h1>

          {/* Typing effect */}
          <p className="mt-4 flex min-h-[2.5rem] items-center text-2xl font-medium text-primary sm:text-3xl">
            {typed}
            <span className="ml-0.5 inline-block h-[1.1em] w-[2px] animate-[blink_1s_step-end_infinite] bg-primary align-middle" />
          </p>

          <p className="mt-5 max-w-md text-base text-muted-foreground sm:text-lg">
            Just a chill guy with a curious mind who loves to learn...
          </p>

          {/* Skill chips */}
          <div className="mt-5 flex flex-wrap gap-2">
            {SKILLS.map((skill) => (
              <span
                key={skill}
                className="skill-chip cursor-default rounded-full border border-primary/30 bg-primary/8 px-3 py-1 text-xs font-medium text-primary"
              >
                {skill}
              </span>
            ))}
          </div>

          {/* Buttons */}
          <div className="mt-8 flex flex-wrap items-center gap-3">
            <a
              href="https://drive.google.com/file/d/1Z2H8Musm0eJ91GPW-1n6Lrcpeu8sfvYM/view?usp=sharing"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-resume inline-flex items-center gap-2 rounded-lg bg-primary px-6 py-3 text-sm font-semibold text-primary-foreground shadow-[var(--shadow-soft)] transition-transform hover:-translate-y-0.5"
            >
              <FileText className="h-4 w-4" /> Resume
            </a>
            <Link
              to="/contact"
              className="inline-flex items-center rounded-lg border-2 border-primary px-6 py-3 text-sm font-semibold text-primary transition-colors hover:bg-primary hover:text-primary-foreground"
            >
              Contact Me
            </Link>
          </div>

          {/* Social icons */}
          <div className="mt-7 flex items-center gap-3">
            {/* LinkedIn */}
            <a
              href="https://www.linkedin.com/in/tanveer-kaiser/"
              target="_blank"
              rel="noreferrer"
              aria-label="LinkedIn"
              className="social-icon flex h-11 w-11 items-center justify-center rounded-[10px] border-2 border-primary text-primary transition-all hover:bg-primary hover:text-primary-foreground hover:-translate-y-0.5 hover:shadow-[0_6px_18px_oklch(0.52_0.09_175/0.25)]"
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M4.98 3.5C4.98 4.88 3.87 6 2.5 6S.02 4.88.02 3.5 1.13 1 2.5 1s2.48 1.12 2.48 2.5zM.5 8.5h4V24h-4V8.5zm7.5 0h3.83v2.14h.05c.53-1 1.84-2.14 3.79-2.14C19.65 8.5 21 11.1 21 14.84V24h-4v-8.33c0-1.99-.04-4.55-2.77-4.55-2.77 0-3.2 2.17-3.2 4.41V24H8V8.5z" />
              </svg>
            </a>
            {/* GitHub */}
            <a
              href="https://github.com/Dihan07"
              target="_blank"
              rel="noreferrer"
              aria-label="GitHub"
              className="social-icon flex h-11 w-11 items-center justify-center rounded-[10px] border-2 border-primary text-primary transition-all hover:bg-primary hover:text-primary-foreground hover:-translate-y-0.5 hover:shadow-[0_6px_18px_oklch(0.52_0.09_175/0.25)]"
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 .5C5.37.5 0 5.87 0 12.5c0 5.3 3.44 9.8 8.2 11.38.6.11.82-.26.82-.58v-2.03c-3.34.72-4.04-1.6-4.04-1.6-.54-1.38-1.33-1.75-1.33-1.75-1.08-.74.08-.73.08-.73 1.2.08 1.83 1.23 1.83 1.23 1.06 1.82 2.78 1.3 3.46.99.11-.77.42-1.3.76-1.6-2.67-.3-5.47-1.33-5.47-5.93 0-1.31.47-2.38 1.24-3.22-.12-.3-.54-1.52.12-3.17 0 0 1.01-.32 3.3 1.23a11.5 11.5 0 013.01-.4c1.02 0 2.05.14 3.01.4 2.28-1.55 3.29-1.23 3.29-1.23.66 1.65.24 2.87.12 3.17.77.84 1.24 1.91 1.24 3.22 0 4.61-2.81 5.63-5.48 5.92.43.37.81 1.1.81 2.22v3.29c0 .32.22.7.83.58C20.57 22.3 24 17.8 24 12.5 24 5.87 18.63.5 12 .5z" />
              </svg>
            </a>
            {/* Facebook */}
            <a
              href="https://www.facebook.com/tanveer.kaiser.dihan/"
              target="_blank"
              rel="noreferrer"
              aria-label="Facebook"
              className="social-icon flex h-11 w-11 items-center justify-center rounded-[10px] border-2 border-primary text-primary transition-all hover:bg-primary hover:text-primary-foreground hover:-translate-y-0.5 hover:shadow-[0_6px_18px_oklch(0.52_0.09_175/0.25)]"
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M24 12.073C24 5.405 18.627 0 12 0S0 5.405 0 12.073C0 18.1 4.388 23.094 10.125 24v-8.437H7.078v-3.49h3.047V9.41c0-3.025 1.792-4.697 4.533-4.697 1.312 0 2.686.236 2.686.236v2.97h-1.514c-1.491 0-1.956.931-1.956 1.886v2.268h3.328l-.532 3.49h-2.796V24C19.612 23.094 24 18.1 24 12.073z" />
              </svg>
            </a>
          </div>
        </div>

        {/* ── RIGHT COLUMN — Portrait ── */}
        <div className="order-1 flex justify-center lg:order-2">
          <div
            ref={portraitRef}
            className="portrait-transition relative"
            style={{ width: "fit-content" }}
          >
            {/* Pulsing glow blob */}
            <div
              className="glow-blob pointer-events-none absolute inset-0 -z-10 rounded-full"
              style={{
                background:
                  "radial-gradient(circle, color-mix(in oklch, var(--primary) 22%, transparent) 0%, transparent 65%)",
                inset: "-30px",
              }}
            />

            {/* Spinning dashed ring — outer */}
            <div
              className="ring-ccw pointer-events-none absolute rounded-full border border-dashed border-primary/25"
              style={{ inset: "-22px" }}
            />

            {/* Spinning dashed ring — inner */}
            <div
              className="ring-cw pointer-events-none absolute rounded-full border border-dashed border-primary/40"
              style={{ inset: "-10px" }}
            />

            {/* Portrait */}
            <img
              src={portrait}
              alt="Tanveer Kaiser"
              width={800}
              height={800}
              className="relative z-10 h-64 w-64 rounded-full object-cover shadow-[var(--shadow-soft)] ring-4 ring-background sm:h-80 sm:w-80 lg:h-96 lg:w-96"
            />

            {/* Floating badges */}
            {/*<span
              className="badge-float-1 absolute right-0 top-8 z-20 flex items-center gap-1.5 rounded-full border border-primary/30 bg-background px-3 py-1 text-xs font-semibold text-primary shadow-[var(--shadow-card)] sm:right-[-2rem]"
            >
              <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-primary" />
              Machine Learning
            </span>

            <span
              className="badge-float-2 absolute bottom-12 left-0 z-20 flex items-center gap-1.5 rounded-full border border-primary/30 bg-background px-3 py-1 text-xs font-semibold text-primary shadow-[var(--shadow-card)] sm:left-[-2.5rem]"
            >
              <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-primary" />
              Data Science
            </span>

            <span
              className="badge-float-3 absolute bottom-2 right-0 z-20 flex items-center gap-1.5 rounded-full border border-primary/30 bg-background px-3 py-1 text-xs font-semibold text-primary shadow-[var(--shadow-card)] sm:right-[-2rem]"
            >
              <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-primary" />
              SQA
            </span>*/}
          </div>
        </div>
      </section>
    </>
  );
}