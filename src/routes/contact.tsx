import { createFileRoute } from "@tanstack/react-router";
import { PageHeader } from "@/components/PageHeader";
import { Mail, ArrowUpRight } from "lucide-react";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Contact — Tanveer Kaiser" },
      {
        name: "description",
        content: "Get in touch with Tanveer Kaiser for collaborations and opportunities.",
      },
      { property: "og:title", content: "Contact — Tanveer Kaiser" },
      {
        property: "og:description",
        content: "Let's work together — reach out anytime.",
      },
    ],
    links: [{ rel: "canonical", href: "/contact" }],
  }),
  component: Contact,
});

const channels = [
  {
    label: "Email",
    value: "dihankt@gmail.com",
    description: "Best for detailed inquiries or opportunities",
    href: "https://mail.google.com/mail/?view=cm&to=dihankt@gmail.com",
    icon: (
      <svg className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth={1.8} viewBox="0 0 24 24">
        <rect x="2" y="4" width="20" height="16" rx="2" />
        <path d="m2 7 10 7 10-7" />
      </svg>
    ),
  },
  {
    label: "LinkedIn",
    value: "linkedin.com/in/tanveer-kaiser",
    description: "Connect professionally or view my background",
    href: "https://www.linkedin.com/in/tanveer-kaiser",
    icon: (
      <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
        <path d="M4.98 3.5C4.98 4.88 3.87 6 2.5 6S.02 4.88.02 3.5 1.13 1 2.5 1s2.48 1.12 2.48 2.5zM.5 8.5h4V24h-4V8.5zm7.5 0h3.83v2.14h.05c.53-1 1.84-2.14 3.79-2.14C19.65 8.5 21 11.1 21 14.84V24h-4v-8.33c0-1.99-.04-4.55-2.77-4.55-2.77 0-3.2 2.17-3.2 4.41V24H8V8.5z" />
      </svg>
    ),
  },

  {
    label: "WhatsApp",
    value: "+880 1534-686593",
    description: "Quick questions or casual chats",
    href: "https://wa.me/8801534686593",
    icon: (
      <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
        <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
      </svg>
    ),
  },
];

function Contact() {
  return (
    <section className="mx-auto max-w-5xl px-4 py-16 sm:px-6 lg:px-8 lg:py-24">
      <PageHeader title="Contact" />

      <div className="mt-12 grid gap-12 lg:grid-cols-2 lg:gap-16 lg:items-start">

        {/* ── Left: intro text ── */}
        <div className="animate-fade-up space-y-6" style={{ animationDelay: "0.1s" }}>
          <p className="text-base leading-relaxed text-foreground/70">
            Whether you have a specific opportunity, want to collaborate on something,
            or just want to connect — Reach out to me through my social networks or drop an email.
          </p>

          {/* Availability badge */}
          <div className="inline-flex items-center gap-2 rounded-full border border-primary/30 bg-primary/10 px-4 py-2 text-sm font-medium text-primary">
            <span className="h-2 w-2 rounded-full bg-primary animate-pulse" />
            Available for new opportunities
          </div>

          {/* Response note */}
          <p className="text-xs text-muted-foreground pt-2">
            🏠︎ Chattogram, Bangladesh &nbsp;·&nbsp; Usually responds within 24 hrs
          </p>
          
        </div>

        {/* ── Right: contact cards ── */}
        <div className="space-y-4">
          {channels.map((ch, i) => (
            <div
              key={ch.label}
              className="animate-fade-up group flex items-center gap-5 rounded-2xl border border-border bg-card p-5 shadow-[var(--shadow-card)] transition-all duration-200 hover:border-primary/40"
              style={{ animationDelay: `${0.2 + i * 0.1}s` }}
            >
              {/* Icon */}
              <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl border border-primary/20 bg-primary/10 text-primary">
                {ch.icon}
              </span>

              {/* Text — selectable/copyable */}
              <div className="flex-1 min-w-0">
                <p className="text-xs font-semibold uppercase tracking-widest text-primary/60 mb-0.5">
                  {ch.label}
                </p>
                <p className="text-sm font-semibold text-foreground select-all cursor-text">{ch.value}</p>
                <p className="text-xs text-muted-foreground mt-0.5">{ch.description}</p>
              </div>

              {/* Arrow — only this part is the link */}
              <a
                href={ch.href}
                target={ch.href.startsWith("http") ? "_blank" : undefined}
                rel={ch.href.startsWith("http") ? "noreferrer" : undefined}
                aria-label={`Open ${ch.label}`}
                className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg border border-border text-muted-foreground transition-all hover:border-primary hover:bg-primary hover:text-primary-foreground hover:-translate-y-0.5"
              >
                <ArrowUpRight className="h-4 w-4" />
              </a>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}