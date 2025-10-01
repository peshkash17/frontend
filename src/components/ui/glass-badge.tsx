import React from 'react'
import { cn } from '../../lib/utils'
import { glassBadgeVariants, type GlassBadgeVariants } from '../../lib/variants'

interface GlassBadgeProps 
  extends React.HTMLAttributes<HTMLDivElement>, 
          GlassBadgeVariants {
  children: React.ReactNode
}

export const GlassBadge = React.forwardRef<HTMLDivElement, GlassBadgeProps>(
  ({ className, variant, children, ...props }, ref) => {
    return (
      <div
        ref={ref}
        className={cn(glassBadgeVariants({ variant }), className)}
        {...props}
      >
        {children}
      </div>
    )
  }
)

GlassBadge.displayName = 'GlassBadge'