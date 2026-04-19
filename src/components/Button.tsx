import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/lib/utils";

const buttonVariants = cva(
  "inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary/50 disabled:pointer-events-none disabled:opacity-50",
  {
    variants: {
      variant: {
        default: "bg-primary-800 text-white shadow-lg hover:bg-primary-700 hover:shadow-xl",
        outline: "border border-primary-300 bg-white text-primary-800 shadow-sm hover:bg-primary-50",
        secondary: "bg-secondary-100 text-secondary-900 shadow hover:bg-secondary-200",
        ghost: "hover:bg-primary-50 text-primary-800",
        link: "text-primary-600 underline-offset-4 hover:underline",
        accent: "bg-accent-500 text-white shadow-lg hover:bg-accent-400",
      },
      size: {
        default: "h-10 px-6 py-2",
        sm: "h-8 px-4 text-xs",
        lg: "h-12 px-8 text-base",
        icon: "h-10 w-10",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  }
);

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {}

export function Button({ className, variant, size, ...props }: ButtonProps) {
  return (
    <button
      className={cn(buttonVariants({ variant, size, className }))}
      {...props}
    />
  );
}