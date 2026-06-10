import { useState, useEffect } from "react";
import { Link } from "@tanstack/react-router";
import { Menu, X } from "lucide-react";

const links = [
  { to: "/", label: "Home" },
  { to: "/about", label: "About" },
  { to: "/skills", label: "Skills" },
  { to: "/projects", label: "Projects" },
  { to: "/research", label: "Research" },
  { to: "/certifications", label: "Certifications" },
  { to: "/contact", label: "Contact" },
] as const;

export function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 16);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <>
      {/* ── Desktop / top bar ── */}
      <header
        className={[
          "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
          "px-4 sm:px-6 lg:px-8",
          scrolled ? "pt-2" : "pt-3",
        ].join(" ")}
      >
        <nav
          className={[
            "mx-auto flex h-14 max-w-5xl items-center justify-between",
            "rounded-2xl px-4 sm:px-5",
            "border-white/30 bg-primary/5 backdrop-blur-md",
            scrolled
              ? "border-white/40 bg-background/60 shadow-[0_8px_32px_-8px_oklch(0.52_0.09_175_/_0.18)] backdrop-blur-xl"
              : "border-white/30 bg-background/40 backdrop-blur-md",
          ].join(" ")}
          style={{
            boxShadow: scrolled
              ? "0 8px 32px -8px oklch(0.52 0.09 175 / 0.18), inset 0 1px 0 oklch(1 0 0 / 0.55)"
              : "inset 0 1px 0 oklch(1 0 0 / 0.4)",
          }}
        >
          {/* Logo */}
          <Link
            to="/"
            aria-label="Home"
            className="group flex items-center gap-2.5 font-display text-lg font-bold text-foreground transition-colors hover:text-primary"
          >
            {/* Monogram badge */}
            <span
              className="flex h-7 w-7 flex-shrink-0 items-center justify-center rounded-lg text-xs font-bold text-primary-foreground transition-transform duration-200 group-hover:scale-105"
              style={{
                background: "oklch(0.52 0.09 175)",
                boxShadow: "0 2px 8px -2px oklch(0.52 0.09 175 / 0.45)",
              }}
            >
              TK
            </span>
            <span>Tanveer Kaiser</span>
          </Link>

          {/* Desktop links */}
          <ul className="hidden items-center gap-0.5 lg:flex">
            {links.map((l) => (
              <li key={l.to}>
                <Link
                  to={l.to}
                  className="relative rounded-lg px-3 py-1.5 text-sm font-medium text-muted-foreground transition-colors hover:bg-primary/8 hover:text-foreground"
                  activeProps={{
                    className:
                      "relative rounded-lg px-3 py-1.5 text-sm font-semibold text-primary bg-primary/10",
                  }}
                  activeOptions={{ exact: l.to === "/" }}
                >
                  {l.label}
                </Link>
              </li>
            ))}
          </ul>

          {/* Right side */}
          <div className="flex items-center gap-2">
            <Link
              to="/contact"
              className="hidden rounded-xl border-2 border-primary px-4 py-1.5 text-sm font-semibold text-primary transition-all hover:bg-primary hover:text-primary-foreground lg:inline-flex"
            >
              Reach Out
            </Link>

            {/* Hamburger — mobile only */}
            <button
              type="button"
              aria-label={open ? "Close menu" : "Open menu"}
              onClick={() => setOpen((v) => !v)}
              className="flex h-9 w-9 items-center justify-center rounded-xl border border-border text-primary transition-colors hover:bg-primary/10 lg:hidden"
            >
              {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </button>
          </div>
        </nav>
      </header>

      {/* Spacer so page content sits below the fixed bar */}
      <div className="h-[72px]" />

      {/* ── Mobile drawer ── */}
      <div
        className={[
          "fixed inset-0 z-40 lg:hidden",
          "transition-all duration-300",
          open ? "pointer-events-auto opacity-100" : "pointer-events-none opacity-0",
        ].join(" ")}
      >
        {/* Backdrop */}
        <div
          className="absolute inset-0 bg-foreground/20 backdrop-blur-sm"
          onClick={() => setOpen(false)}
        />

        {/* Panel — slides down from top */}
        <div
          className={[
            "absolute left-4 right-4 top-[72px]",
            "rounded-2xl border border-white/40 bg-background/80 backdrop-blur-xl",
            "p-3 shadow-[0_16px_48px_-12px_oklch(0.52_0.09_175_/_0.22)]",
            "transition-all duration-300",
            open ? "translate-y-0 opacity-100" : "-translate-y-4 opacity-0",
          ].join(" ")}
          style={{ boxShadow: "0 16px 48px -12px oklch(0.52 0.09 175 / 0.22), inset 0 1px 0 oklch(1 0 0 / 0.5)" }}
        >
          <ul className="flex flex-col gap-0.5">
            {links.map((l, i) => (
              <li key={l.to} style={{ animationDelay: `${i * 40}ms` }}>
                <Link
                  to={l.to}
                  onClick={() => setOpen(false)}
                  className="flex items-center rounded-xl px-4 py-3 text-base font-medium text-muted-foreground transition-colors hover:bg-primary/8 hover:text-foreground"
                  activeProps={{
                    className:
                      "flex items-center rounded-xl px-4 py-3 text-base font-semibold text-primary bg-primary/10",
                  }}
                  activeOptions={{ exact: l.to === "/" }}
                >
                  {l.label}
                </Link>
              </li>
            ))}
          </ul>

          {/* Mobile CTA */}
          <div className="mt-2 border-t border-border/50 pt-3">
            <Link
              to="/contact"
              onClick={() => setOpen(false)}
              className="flex w-full items-center justify-center rounded-xl bg-primary py-3 text-sm font-semibold text-primary-foreground transition-opacity hover:opacity-90"
            >
              Contact Me
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}