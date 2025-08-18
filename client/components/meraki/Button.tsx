import React from "react";
import { cn } from "@/lib/utils";
import { Link } from "react-router-dom";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "secondary" | "outline" | "ghost";
  size?: "sm" | "md" | "lg";
  asChild?: boolean;
  children: React.ReactNode;
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  (
    {
      className,
      variant = "primary",
      size = "md",
      asChild = false,
      children,
      ...props
    },
    ref,
  ) => {
    const baseStyles =
      "inline-flex items-center justify-center rounded-lg font-medium transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2 disabled:opacity-50 disabled:pointer-events-none";

    const variants = {
      primary:
        "bg-optik-red-600 text-white hover:bg-optik-red-700 focus:ring-optik-red-500 shadow-lg hover:shadow-xl transform hover:-translate-y-0.5",
      secondary:
        "bg-optik-gray-100 text-optik-gray-900 hover:bg-optik-gray-200 focus:ring-optik-gray-500",
      outline:
        "border-2 border-optik-red-600 text-optik-red-600 hover:bg-optik-red-50 focus:ring-optik-red-500",
      ghost:
        "text-optik-gray-700 hover:bg-optik-gray-100 focus:ring-optik-gray-500",
    };

    const sizes = {
      sm: "px-3 py-2 text-sm",
      md: "px-4 py-2.5 text-sm",
      lg: "px-6 py-3 text-base",
    };

    const buttonClasses = cn(
      baseStyles,
      variants[variant],
      sizes[size],
      className,
    );

    if (asChild) {
      return React.cloneElement(children as React.ReactElement, {
        className: buttonClasses,
        ref,
      });
    }

    return (
      <button className={buttonClasses} ref={ref} {...props}>
        {children}
      </button>
    );
  },
);

Button.displayName = "Button";

export { Button };
