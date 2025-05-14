import { cn } from "@/lib/utils"

interface OptimizedSvgProps {
  src: string
  alt: string
  className?: string
  width?: number
  height?: number
}

export function OptimizedSvg({ src, alt, className, width, height }: OptimizedSvgProps) {
  return (
    <object
      type="image/svg+xml"
      data={src}
      className={cn("pointer-events-none", className)}
      width={width}
      height={height}
      aria-label={alt}
    >
      <img src={src || "/placeholder.svg"} alt={alt} className={className} width={width} height={height} />
    </object>
  )
}

export default OptimizedSvg
