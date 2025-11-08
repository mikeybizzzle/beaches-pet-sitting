"use client"

import { motion } from "framer-motion"
import { cn } from "@/lib/utils"
import { fadeIn } from "@/lib/animations"

interface SectionHeadingProps {
  title: string
  subtitle?: string
  centered?: boolean
  className?: string
}

export function SectionHeading({
  title,
  subtitle,
  centered = true,
  className
}: SectionHeadingProps) {
  return (
    <motion.div
      {...fadeIn}
      className={cn(
        "mb-12",
        centered ? "text-center" : "text-left",
        className
      )}
    >
      <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-neutral-900 mb-4">
        {title}
      </h2>
      {subtitle && (
        <p className="text-lg sm:text-xl text-neutral-600 max-w-3xl mx-auto">
          {subtitle}
        </p>
      )}
    </motion.div>
  )
}
