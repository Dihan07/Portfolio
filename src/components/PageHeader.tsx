import type { ReactNode } from "react";

export function PageHeader({
  title,
  subtitle,
}: {
  title: string;
  subtitle?: ReactNode;
}) {
  return (
    <div className="animate-fade-up text-center">
      <h1 className="font-display text-4xl font-bold tracking-tight text-primary sm:text-5xl">
        {title}
      </h1>
      {subtitle && (
        <p className="mx-auto mt-4 max-w-2xl text-base text-muted-foreground sm:text-lg">
          {subtitle}
        </p>
      )}
    </div>
  );
}
