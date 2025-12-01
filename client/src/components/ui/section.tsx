import { cn } from "@/lib/utils";

interface SectionProps {
  children: React.ReactNode;
  className?: string;
  id?: string;
  dark?: boolean;
  fullWidth?: boolean;
}

export function Section({ children, className, id, dark, fullWidth }: SectionProps) {
  return (
    <section
      id={id}
      className={cn(
        "py-16 md:py-24",
        dark ? "bg-deep-navy text-white" : "bg-background",
        className
      )}
    >
      <div className={cn(
        fullWidth ? "w-full" : "max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"
      )}>
        {children}
      </div>
    </section>
  );
}

interface SectionHeaderProps {
  title: string;
  subtitle?: string;
  description?: string;
  centered?: boolean;
  dark?: boolean;
}

export function SectionHeader({ title, subtitle, description, centered, dark }: SectionHeaderProps) {
  return (
    <div className={cn("mb-12", centered && "text-center")}>
      {subtitle && (
        <p className={cn(
          "text-sm font-medium tracking-widest uppercase mb-3",
          dark ? "text-mission-gold" : "text-mission-gold"
        )}>
          {subtitle}
        </p>
      )}
      <h2 className={cn(
        "font-heading font-bold text-3xl md:text-4xl lg:text-5xl tracking-tight",
        dark ? "text-white" : "text-foreground"
      )}>
        {title}
      </h2>
      {description && (
        <p className={cn(
          "mt-4 text-lg max-w-3xl",
          dark ? "text-steel-gray" : "text-muted-foreground",
          centered && "mx-auto"
        )}>
          {description}
        </p>
      )}
    </div>
  );
}
