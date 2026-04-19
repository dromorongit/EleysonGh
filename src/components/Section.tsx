import { cn } from "@/lib/utils";

interface SectionProps extends React.HTMLAttributes<HTMLElement> {
  children: React.ReactNode;
  className?: string;
  container?: boolean;
}

export function Section({
  children,
  className,
  container = true,
  ...props
}: SectionProps) {
  return (
    <section
      className={cn(
        "py-16 lg:py-24 relative",
        "before:absolute before:top-0 before:left-0 before:right-0 before:h-px before:bg-gradient-to-r before:from-transparent before:via-gold/20 before:to-transparent",
        container && "container mx-auto px-4 sm:px-6 lg:px-8",
        className
      )}
      {...props}
    >
      {children}
    </section>
  );
}