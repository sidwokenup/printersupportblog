"use client"

import { useEffect, useState, useRef } from "react"
import { useInView } from "framer-motion"

interface AnimatedCounterProps {
  end: number
  duration?: number
  suffix?: string
  prefix?: string
  className?: string
}

export function AnimatedCounter({ 
  end, 
  duration = 2, 
  suffix = "", 
  prefix = "", 
  className = "" 
}: AnimatedCounterProps) {
  const [count, setCount] = useState(0)
  const ref = useRef<HTMLSpanElement>(null)
  const isInView = useInView(ref, { once: true, margin: "-50px" })

  useEffect(() => {
    if (!isInView) return

    let startTime: number | null = null
    let animationFrame: number

    const animate = (timestamp: number) => {
      if (!startTime) startTime = timestamp
      const progress = timestamp - startTime
      
      // Calculate percentage (0 to 1)
      const percentage = Math.min(progress / (duration * 1000), 1)
      
      // Easing function (easeOutQuart)
      const easeOut = 1 - Math.pow(1 - percentage, 4)
      
      // Set current count based on progress
      const currentCount = Math.floor(easeOut * end)
      setCount(currentCount)

      if (progress < duration * 1000) {
        animationFrame = requestAnimationFrame(animate)
      } else {
        setCount(end)
      }
    }

    animationFrame = requestAnimationFrame(animate)

    return () => {
      if (animationFrame) cancelAnimationFrame(animationFrame)
    }
  }, [end, duration, isInView])

  return (
    <span ref={ref} className={className}>
      {prefix}{count.toLocaleString()}{suffix}
    </span>
  )
}
