import React from 'react'
import { cn } from '../../lib/utils'
import { glassInputVariants, type GlassInputVariants } from '../../lib/variants'

interface GlassInputProps 
  extends React.InputHTMLAttributes<HTMLInputElement>, 
          GlassInputVariants {}

export const GlassInput = React.forwardRef<HTMLInputElement, GlassInputProps>(
  ({ className, variant, type, ...props }, ref) => {
    return (
      <input
        type={type}
        ref={ref}
        className={cn(glassInputVariants({ variant }), className)}
        {...props}
      />
    )
  }
)

GlassInput.displayName = 'GlassInput'