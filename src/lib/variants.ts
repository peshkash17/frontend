import { type VariantProps, cva } from "class-variance-authority"

// Glass morphism card variants with enhanced effects
export const glassCardVariants = cva(
  "backdrop-blur-xl border shadow-2xl transition-all duration-500 relative overflow-hidden",
  {
    variants: {
      variant: {
        default: "bg-gradient-to-br from-white/[0.08] to-white/[0.03] border-white/[0.15] hover:from-white/[0.12] hover:to-white/[0.06] hover:border-white/[0.25] hover:shadow-cyan-500/20",
        strong: "bg-gradient-to-br from-white/[0.15] to-white/[0.08] border-white/[0.25] hover:from-white/[0.20] hover:to-white/[0.12] hover:border-white/[0.35] hover:shadow-cyan-500/30",
        subtle: "bg-gradient-to-br from-white/[0.04] to-white/[0.01] border-white/[0.08] hover:from-white/[0.08] hover:to-white/[0.03] hover:border-white/[0.15] hover:shadow-cyan-500/10",
        interactive: "bg-gradient-to-br from-white/[0.10] to-white/[0.05] border-white/[0.20] hover:from-white/[0.16] hover:to-white/[0.08] hover:border-white/[0.30] hover:scale-[1.02] hover:shadow-cyan-500/25 cursor-pointer",
        premium: "bg-gradient-to-br from-cyan-500/[0.15] via-purple-500/[0.10] to-blue-500/[0.15] border-cyan-400/[0.30] hover:from-cyan-400/[0.20] hover:via-purple-400/[0.15] hover:to-blue-400/[0.20] hover:border-cyan-300/[0.40] hover:shadow-cyan-400/40",
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

// Glass button variants with enhanced effects
export const glassButtonVariants = cva(
  "inline-flex items-center justify-center font-medium transition-all duration-500 backdrop-blur-lg border relative overflow-hidden group",
  {
    variants: {
      variant: {
        default: "bg-gradient-to-r from-cyan-500/20 via-cyan-400/15 to-cyan-500/20 border-cyan-400/40 text-cyan-100 hover:from-cyan-400/30 hover:via-cyan-300/25 hover:to-cyan-400/30 hover:border-cyan-300/60 hover:text-white hover:shadow-lg hover:shadow-cyan-500/25 rounded-xl",
        secondary: "bg-gradient-to-r from-white/10 via-white/5 to-white/10 border-white/25 text-white/90 hover:from-white/20 hover:via-white/15 hover:to-white/20 hover:border-white/40 hover:text-white hover:shadow-lg hover:shadow-white/10 rounded-xl",
        destructive: "bg-gradient-to-r from-red-500/20 via-red-400/15 to-red-500/20 border-red-400/40 text-red-200 hover:from-red-400/30 hover:via-red-300/25 hover:to-red-400/30 hover:border-red-300/60 hover:text-white hover:shadow-lg hover:shadow-red-500/25 rounded-xl",
        success: "bg-gradient-to-r from-emerald-500/20 via-emerald-400/15 to-emerald-500/20 border-emerald-400/40 text-emerald-200 hover:from-emerald-400/30 hover:via-emerald-300/25 hover:to-emerald-400/30 hover:border-emerald-300/60 hover:text-white hover:shadow-lg hover:shadow-emerald-500/25 rounded-xl",
        ghost: "border-transparent text-white/70 hover:bg-gradient-to-r hover:from-white/10 hover:to-white/5 hover:text-white hover:border-white/20 rounded-xl",
        outline: "border-white/30 text-white bg-transparent hover:bg-gradient-to-r hover:from-white/10 hover:to-white/5 hover:border-white/50 rounded-xl",
        premium: "bg-gradient-to-r from-purple-500/20 via-pink-500/15 to-cyan-500/20 border-purple-400/40 text-white hover:from-purple-400/30 hover:via-pink-400/25 hover:to-cyan-400/30 hover:border-purple-300/60 hover:shadow-lg hover:shadow-purple-500/30 rounded-xl",
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

// Glass input variants
export const glassInputVariants = cva(
  "flex w-full rounded-xl border bg-black px-3 py-2 text-sm transition-all duration-300 backdrop-blur-md placeholder:text-white/50 focus:outline-none focus:ring-2 focus:ring-primary/50 disabled:cursor-not-allowed disabled:opacity-50",
  {
    variants: {
      variant: {
        default: "border-white/20  bg-black  text-white hover:border-white/30 focus:border-primary/50",
        strong: "border-white/30 bg-black  text-white",
        subtle: "border-white/10  bg-black text-white/90",
      },
    },
    defaultVariants: {
      variant: "default",
    },
  }
)

// Glass badge variants with enhanced styling
export const glassBadgeVariants = cva(
  "inline-flex items-center rounded-full px-3 py-1 text-sm font-medium transition-all duration-500 backdrop-blur-lg border relative overflow-hidden",
  {
    variants: {
      variant: {
        default: "bg-gradient-to-r from-cyan-500/25 to-cyan-400/20 border-cyan-400/50 text-cyan-100 shadow-lg shadow-cyan-500/20",
        secondary: "bg-gradient-to-r from-white/20 to-white/15 border-white/40 text-white shadow-lg shadow-white/10",
        destructive: "bg-gradient-to-r from-red-500/25 to-red-400/20 border-red-400/50 text-red-200 shadow-lg shadow-red-500/20",
        success: "bg-gradient-to-r from-emerald-500/25 to-emerald-400/20 border-emerald-400/50 text-emerald-200 shadow-lg shadow-emerald-500/20",
        warning: "bg-gradient-to-r from-amber-500/25 to-amber-400/20 border-amber-400/50 text-amber-200 shadow-lg shadow-amber-500/20",
        outline: "border-white/40 text-white bg-white/5 hover:bg-white/10",
        premium: "bg-gradient-to-r from-purple-500/25 via-pink-500/20 to-cyan-500/25 border-purple-400/50 text-white shadow-lg shadow-purple-500/25",
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