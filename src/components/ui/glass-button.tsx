import React from 'react'
import { cn } from '../../lib/utils'
import { glassButtonVariants, type GlassButtonVariants } from '../../lib/variants'

interface GlassButtonProps 
  extends React.ButtonHTMLAttributes<HTMLButtonElement>, 
          GlassButtonVariants {
  children: React.ReactNode
  asChild?: boolean
}

export const GlassButton = React.forwardRef<HTMLButtonElement, GlassButtonProps>(
  ({ className, variant, size, children, ...props }, ref) => {
    return (
      <button
        ref={ref}
        className={cn(glassButtonVariants({ variant, size }), className)}
        {...props}
      >
        {children}
      </button>
    )
  }
)

GlassButton.displayName = 'GlassButton'