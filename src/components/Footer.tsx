import { Link } from "@tanstack/react-router";

export function Footer() {
  return (
    <footer className="border-t border-border bg-secondary/40">
      <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-4 px-4 py-8 sm:flex-row sm:px-6 lg:px-8">
        <p className="text-sm text-muted-foreground">
          © {new Date().getFullYear()} Tanveer Kaiser. All rights reserved.
        </p>
        <div className="flex items-center gap-3">
          {/* LinkedIn */}
          <a
            href="https://www.linkedin.com/in/tanveer-kaiser/"
            target="_blank"
            rel="noreferrer"
            aria-label="LinkedIn"
            className="flex h-11 w-11 items-center justify-center rounded-[10px] border-2 border-primary text-primary transition-all hover:bg-primary hover:text-primary-foreground hover:-translate-y-0.5"
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
              <path d="M4.98 3.5C4.98 4.88 3.87 6 2.5 6S.02 4.88.02 3.5 1.13 1 2.5 1s2.48 1.12 2.48 2.5zM.5 8.5h4V24h-4V8.5zm7.5 0h3.83v2.14h.05c.53-1 1.84-2.14 3.79-2.14C19.65 8.5 21 11.1 21 14.84V24h-4v-8.33c0-1.99-.04-4.55-2.77-4.55-2.77 0-3.2 2.17-3.2 4.41V24H8V8.5z"/>
            </svg>
          </a>
          {/* GitHub */}
          <a
            href="https://github.com/Dihan07"
            target="_blank"
            rel="noreferrer"
            aria-label="GitHub"
            className="flex h-11 w-11 items-center justify-center rounded-[10px] border-2 border-primary text-primary transition-all hover:bg-primary hover:text-primary-foreground hover:-translate-y-0.5"
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
              <path d="M12 .5C5.37.5 0 5.87 0 12.5c0 5.3 3.44 9.8 8.2 11.38.6.11.82-.26.82-.58v-2.03c-3.34.72-4.04-1.6-4.04-1.6-.54-1.38-1.33-1.75-1.33-1.75-1.08-.74.08-.73.08-.73 1.2.08 1.83 1.23 1.83 1.23 1.06 1.82 2.78 1.3 3.46.99.11-.77.42-1.3.76-1.6-2.67-.3-5.47-1.33-5.47-5.93 0-1.31.47-2.38 1.24-3.22-.12-.3-.54-1.52.12-3.17 0 0 1.01-.32 3.3 1.23a11.5 11.5 0 013.01-.4c1.02 0 2.05.14 3.01.4 2.28-1.55 3.29-1.23 3.29-1.23.66 1.65.24 2.87.12 3.17.77.84 1.24 1.91 1.24 3.22 0 4.61-2.81 5.63-5.48 5.92.43.37.81 1.1.81 2.22v3.29c0 .32.22.7.83.58C20.57 22.3 24 17.8 24 12.5 24 5.87 18.63.5 12 .5z"/>
            </svg>
          </a>
          {/* Facebook */}
          <a
            href="https://www.facebook.com/tanveer.kaiser.dihan/"
            target="_blank"
            rel="noreferrer"
            aria-label="Facebook"
            className="flex h-11 w-11 items-center justify-center rounded-[10px] border-2 border-primary text-primary transition-all hover:bg-primary hover:text-primary-foreground hover:-translate-y-0.5"
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
              <path d="M24 12.073C24 5.405 18.627 0 12 0S0 5.405 0 12.073C0 18.1 4.388 23.094 10.125 24v-8.437H7.078v-3.49h3.047V9.41c0-3.025 1.792-4.697 4.533-4.697 1.312 0 2.686.236 2.686.236v2.97h-1.514c-1.491 0-1.956.931-1.956 1.886v2.268h3.328l-.532 3.49h-2.796V24C19.612 23.094 24 18.1 24 12.073z"/>
            </svg>
          </a>
        </div>
      </div>
    </footer>
  );
}
