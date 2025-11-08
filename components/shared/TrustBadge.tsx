import { cn } from "@/lib/utils"
import { LucideIcon } from "lucide-react"

interface TrustBadgeProps {
  icon: LucideIcon
  text: string
  className?: string
}

export function TrustBadge({ icon: Icon, text, className }: TrustBadgeProps) {
  return (
    <div className={cn(
      "flex items-center gap-2 px-4 py-2 bg-white/90 backdrop-blur-sm rounded-full border border-neutral-200 shadow-sm",
      className
    )}>
      <Icon className="w-5 h-5 text-primary-500" />
      <span className="text-sm font-semibold text-neutral-800">{text}</span>
    </div>
  )
}
