import React from 'react'
import { cn } from '../../lib/utils'
import { glassCardVariants, type GlassCardVariants } from '../../lib/variants'

interface GlassCardProps extends React.HTMLAttributes<HTMLDivElement>, GlassCardVariants {
  children: React.ReactNode
}

export const GlassCard = React.forwardRef<HTMLDivElement, GlassCardProps>(
  ({ className, variant, size, children, ...props }, ref) => {
    return (
      <div
        ref={ref}
        className={cn(glassCardVariants({ variant, size }), className)}
        {...props}
      >
        {children}
      </div>
    )
  }
)

GlassCard.displayName = 'GlassCard'

interface GlassCardHeaderProps extends React.HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode
}

export const GlassCardHeader = React.forwardRef<HTMLDivElement, GlassCardHeaderProps>(
  ({ className, children, ...props }, ref) => {
    return (
      <div
        ref={ref}
        className={cn('flex flex-col space-y-1.5 p-6', className)}
        {...props}
      >
        {children}
      </div>
    )
  }
)

GlassCardHeader.displayName = 'GlassCardHeader'

interface GlassCardContentProps extends React.HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode
}

export const GlassCardContent = React.forwardRef<HTMLDivElement, GlassCardContentProps>(
  ({ className, children, ...props }, ref) => {
    return (
      <div
        ref={ref}
        className={cn('p-6 pt-0', className)}
        {...props}
      >
        {children}
      </div>
    )
  }
)

GlassCardContent.displayName = 'GlassCardContent'

interface GlassCardTitleProps extends React.HTMLAttributes<HTMLHeadingElement> {
  children: React.ReactNode
}

export const GlassCardTitle = React.forwardRef<HTMLHeadingElement, GlassCardTitleProps>(
  ({ className, children, ...props }, ref) => {
    return (
      <h3
        ref={ref}
        className={cn('font-semibold leading-none tracking-tight text-white', className)}
        {...props}
      >
        {children}
      </h3>
    )
  }
)

GlassCardTitle.displayName = 'GlassCardTitle'

interface GlassCardDescriptionProps extends React.HTMLAttributes<HTMLParagraphElement> {
  children: React.ReactNode
}

export const GlassCardDescription = React.forwardRef<HTMLParagraphElement, GlassCardDescriptionProps>(
  ({ className, children, ...props }, ref) => {
    return (
      <p
        ref={ref}
        className={cn('text-sm text-white/70', className)}
        {...props}
      >
        {children}
      </p>
    )
  }
)

GlassCardDescription.displayName = 'GlassCardDescription'