import * as React from "react"
import { Slot } from "@radix-ui/react-slot"
import { cva, type VariantProps } from "class-variance-authority"

import { cn } from "@/lib/utils"

const buttonVariants = cva(
  "tailwind.config.tsinline-flex tailwind.config.tsitems-center tailwind.config.tsjustify-center tailwind.config.tswhitespace-nowrap tailwind.config.tsrounded-md tailwind.config.tstext-sm tailwind.config.tsfont-medium tailwind.config.tsring-offset-background tailwind.config.tstransition-colors focus-visible:tailwind.config.tsoutline-none focus-visible:tailwind.config.tsring-2 focus-visible:tailwind.config.tsring-ring focus-visible:tailwind.config.tsring-offset-2 disabled:tailwind.config.tspointer-events-none disabled:tailwind.config.tsopacity-50",
  {
    variants: {
      variant: {
        default: "tailwind.config.tsbg-primary tailwind.config.tstext-primary-foreground hover:tailwind.config.tsbg-primary/90",
        destructive:
          "tailwind.config.tsbg-destructive tailwind.config.tstext-destructive-foreground hover:tailwind.config.tsbg-destructive/90",
        outline:
          "tailwind.config.tsborder tailwind.config.tsborder-input tailwind.config.tsbg-background hover:tailwind.config.tsbg-accent hover:tailwind.config.tstext-accent-foreground",
        secondary:
          "tailwind.config.tsbg-secondary tailwind.config.tstext-secondary-foreground hover:tailwind.config.tsbg-secondary/80",
        ghost: "hover:tailwind.config.tsbg-accent hover:tailwind.config.tstext-accent-foreground",
        link: "tailwind.config.tstext-primary tailwind.config.tsunderline-offset-4 hover:tailwind.config.tsunderline",
      },
      size: {
        default: "tailwind.config.tsh-10 tailwind.config.tspx-4 tailwind.config.tspy-2",
        sm: "tailwind.config.tsh-9 tailwind.config.tsrounded-md tailwind.config.tspx-3",
        lg: "tailwind.config.tsh-11 tailwind.config.tsrounded-md tailwind.config.tspx-8",
        icon: "tailwind.config.tsh-10 tailwind.config.tsw-10",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  }
)

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, asChild = false, ...props }, ref) => {
    const Comp = asChild ? Slot : "button"
    return (
      <Comp
        className={cn(buttonVariants({ variant, size, className }))}
        ref={ref}
        {...props}
      />
    )
  }
)
Button.displayName = "Button"

export { Button, buttonVariants }
