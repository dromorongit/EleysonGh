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
        "py-16 lg:py-24",
        container && "container mx-auto px-4 sm:px-6 lg:px-8",
        className
      )}
      {...props}
    >
      {children}
    </section>
  );
}