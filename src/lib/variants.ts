import { type VariantProps, cva } from "class-variance-authority"

// Glass morphism card variants with Supabase-inspired effects
export const glassCardVariants = cva(
  "backdrop-blur-xl border shadow-2xl transition-all duration-500 relative overflow-hidden",
  {
    variants: {
      variant: {
        default: "bg-gradient-to-br from-card/90 to-card/70 border-border hover:from-card/95 hover:to-card/80 hover:border-primary/30 hover:shadow-primary/10",
        strong: "bg-gradient-to-br from-card/95 to-card/85 border-border hover:from-card/100 hover:to-card/90 hover:border-primary/40 hover:shadow-primary/20",
        subtle: "bg-gradient-to-br from-card/70 to-card/50 border-border/50 hover:from-card/80 hover:to-card/60 hover:border-primary/20 hover:shadow-primary/5",
        interactive: "bg-gradient-to-br from-card/85 to-card/75 border-border hover:from-card/95 hover:to-card/85 hover:border-primary/50 hover:scale-[1.02] hover:shadow-primary/15 cursor-pointer",
        premium: "bg-gradient-to-br from-primary/15 via-card/85 to-primary/10 border-primary/30 hover:from-primary/20 hover:via-card/90 hover:to-primary/15 hover:border-primary/50 hover:shadow-primary/25",
      },
      size: {
        sm: "p-4 rounded-xl",
        md: "p-6 rounded-2xl",
        lg: "p-8 rounded-3xl",
        xl: "p-10 rounded-[2rem]",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "md",
    },
  }
)

// Glass button variants with Supabase-inspired effects
export const glassButtonVariants = cva(
  "inline-flex items-center justify-center font-medium transition-all duration-500 backdrop-blur-lg border relative overflow-hidden group",
  {
    variants: {
      variant: {
        default: "bg-gradient-to-r from-primary/20 via-primary/15 to-primary/20 border-primary/40 text-primary-foreground hover:from-primary/30 hover:via-primary/25 hover:to-primary/30 hover:border-primary/60 hover:text-background hover:shadow-lg hover:shadow-primary/25 rounded-xl",
        secondary: "bg-gradient-to-r from-secondary/80 via-secondary/60 to-secondary/80 border-border text-secondary-foreground hover:from-secondary/90 hover:via-secondary/70 hover:to-secondary/90 hover:border-primary/40 hover:text-foreground hover:shadow-lg hover:shadow-secondary/10 rounded-xl",
        destructive: "bg-gradient-to-r from-destructive/20 via-destructive/15 to-destructive/20 border-destructive/40 text-destructive-foreground hover:from-destructive/30 hover:via-destructive/25 hover:to-destructive/30 hover:border-destructive/60 hover:text-white hover:shadow-lg hover:shadow-destructive/25 rounded-xl",
        success: "bg-gradient-to-r from-primary/20 via-primary/15 to-primary/20 border-primary/40 text-primary hover:from-primary/30 hover:via-primary/25 hover:to-primary/30 hover:border-primary/60 hover:text-background hover:shadow-lg hover:shadow-primary/25 rounded-xl",
        ghost: "border-transparent text-foreground/70 hover:bg-gradient-to-r hover:from-secondary/50 hover:to-secondary/30 hover:text-foreground hover:border-border rounded-xl",
        outline: "border-border text-foreground bg-transparent hover:bg-gradient-to-r hover:from-secondary/50 hover:to-secondary/30 hover:border-primary/50 rounded-xl",
        premium: "bg-gradient-to-r from-primary/30 via-primary/20 to-primary/30 border-primary/50 text-primary-foreground hover:from-primary/40 hover:via-primary/30 hover:to-primary/40 hover:border-primary/70 hover:shadow-lg hover:shadow-primary/30 rounded-xl",
      },
      size: {
        sm: "h-9 px-4 text-sm",
        md: "h-11 px-6",
        lg: "h-13 px-8 text-lg",
        icon: "h-11 w-11",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "md",
    },
  }
)

// Glass input variants with Supabase theme
export const glassInputVariants = cva(
  "flex w-full rounded-xl border bg-input px-3 py-2 text-sm transition-all duration-300 backdrop-blur-md placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/50 disabled:cursor-not-allowed disabled:opacity-50",
  {
    variants: {
      variant: {
        default: "border-border bg-input text-foreground hover:border-primary/30 focus:border-primary/50",
        strong: "border-border bg-input text-foreground",
        subtle: "border-border/50 bg-input/50 text-foreground/90",
      },
    },
    defaultVariants: {
      variant: "default",
    },
  }
)

// Glass badge variants with Supabase-inspired styling
export const glassBadgeVariants = cva(
  "inline-flex items-center rounded-full px-3 py-1 text-sm font-medium transition-all duration-500 backdrop-blur-lg border relative overflow-hidden",
  {
    variants: {
      variant: {
        default: "bg-gradient-to-r from-primary/25 to-primary/20 border-primary/50 text-primary shadow-lg shadow-primary/20",
        secondary: "bg-gradient-to-r from-secondary/80 to-secondary/60 border-border text-secondary-foreground shadow-lg shadow-secondary/10",
        destructive: "bg-gradient-to-r from-destructive/25 to-destructive/20 border-destructive/50 text-destructive shadow-lg shadow-destructive/20",
        success: "bg-gradient-to-r from-primary/25 to-primary/20 border-primary/50 text-primary shadow-lg shadow-primary/20",
        warning: "bg-gradient-to-r from-yellow-500/25 to-yellow-400/20 border-yellow-400/50 text-yellow-400 shadow-lg shadow-yellow-500/20",
        outline: "border-border text-foreground bg-background/50 hover:bg-background/70",
        premium: "bg-gradient-to-r from-primary/30 via-primary/20 to-primary/30 border-primary/60 text-primary-foreground shadow-lg shadow-primary/25",
      },
    },
    defaultVariants: {
      variant: "default",
    },
  }
)

export type GlassCardVariants = VariantProps<typeof glassCardVariants>
export type GlassButtonVariants = VariantProps<typeof glassButtonVariants>
export type GlassInputVariants = VariantProps<typeof glassInputVariants>
export type GlassBadgeVariants = VariantProps<typeof glassBadgeVariants>