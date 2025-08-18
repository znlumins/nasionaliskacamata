import React from "react";
import { cn } from "@/lib/utils";

interface BadgeProps extends React.HTMLAttributes<HTMLDivElement> {
  variant?:
    | "default"
    | "primary"
    | "secondary"
    | "success"
    | "warning"
    | "danger";
  size?: "sm" | "md" | "lg";
  children: React.ReactNode;
}

const Badge = React.forwardRef<HTMLDivElement, BadgeProps>(
  (
    { className, variant = "default", size = "md", children, ...props },
    ref,
  ) => {
    const baseStyles =
      "inline-flex items-center rounded-full font-medium transition-all duration-200";

    const variants = {
      default: "bg-optik-gray-100 text-optik-gray-800",
      primary:
        "bg-optik-red-100 text-optik-red-800 border border-optik-red-200",
      secondary: "bg-optik-gray-100 text-optik-gray-600",
      success: "bg-green-100 text-green-800 border border-green-200",
      warning: "bg-yellow-100 text-yellow-800 border border-yellow-200",
      danger: "bg-red-100 text-red-800 border border-red-200",
    };

    const sizes = {
      sm: "px-2 py-1 text-xs",
      md: "px-3 py-1.5 text-sm",
      lg: "px-4 py-2 text-base",
    };

    return (
      <div
        ref={ref}
        className={cn(baseStyles, variants[variant], sizes[size], className)}
        {...props}
      >
        {children}
      </div>
    );
  },
);

Badge.displayName = "Badge";

export { Badge };
