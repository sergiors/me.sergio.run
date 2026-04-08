import * as React from "react"

import { cn } from "@/lib/utils"

const Empty = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => (
  <div
    ref={ref}
    role="presentation"
    className={cn("flex min-h-[350px] flex-col items-center justify-center rounded-lg border-2 border-dashed p-8", className)}
    {...props}
  />
))
Empty.displayName = "Empty"

const EmptyImage = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => (
  <div
    ref={ref}
    role="img"
    aria-label="No data"
    className={cn("flex size-full items-center justify-center rounded-lg border border-dashed", className)}
    {...props}
  />
))
EmptyImage.displayName = "EmptyImage"

const EmptyTitle = React.forwardRef<
  HTMLParagraphElement,
  React.HTMLAttributes<HTMLHeadingElement>
>(({ className, ...props }, ref) => (
  <h3
    ref={ref}
    className={cn("mt-4 text-lg font-semibold", className)}
    {...props}
  />
))
EmptyTitle.displayName = "EmptyTitle"

const EmptyDescription = React.forwardRef<
  HTMLParagraphElement,
  React.HTMLAttributes<HTMLParagraphElement>
>(({ className, ...props }, ref) => (
  <p
    ref={ref}
    className={cn("text-sm text-muted-foreground", className)}
    {...props}
  />
))
EmptyDescription.displayName = "EmptyDescription"

export { Empty, EmptyDescription, EmptyImage, EmptyTitle }
