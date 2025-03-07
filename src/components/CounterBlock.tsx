

import { useEffect, useState } from "react"
import type React from "react" // Added import for React

interface CounterBlockProps {
  icon: React.ReactNode
  endValue: number
  suffix: string
  title: string
  isVisible: boolean
}

export default function CounterBlock({ icon, endValue, suffix, title, isVisible }: CounterBlockProps) {
  const [count, setCount] = useState(0)

  useEffect(() => {
    if (!isVisible) return

    const duration = 3000 // 3 seconds
    const frameDuration = 1000 / 60 // 60 fps
    const totalFrames = Math.round(duration / frameDuration)
    const increment = endValue / totalFrames

    let currentFrame = 0

    const counter = setInterval(() => {
      currentFrame++
      setCount(Math.min(Math.round(currentFrame * increment), endValue))

      if (currentFrame === totalFrames) {
        clearInterval(counter)
      }
    }, frameDuration)

    return () => clearInterval(counter)
  }, [isVisible, endValue])

  return (
    <article>
      <div className="w-14 h-14 rounded shadow-md bg-white flex justify-center items-center rotate-3 mb-6">{icon}</div>
      <h2>
        <span className="flex tabular-nums text-slate-900 text-5xl font-extrabold mb-2">
          {count}
          {suffix}
        </span>
        <span className="inline-flex font-semibold bg-clip-text text-transparent bg-gradient-to-r from-indigo-500 to-indigo-300 mb-2">
          {title}
        </span>
      </h2>
      <p className="text-sm text-slate-500">
        Many desktop publishing packages and web page editors now use Pinky as their default model text.
      </p>
    </article>
  )
}

