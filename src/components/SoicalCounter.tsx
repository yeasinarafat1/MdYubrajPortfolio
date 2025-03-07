

import { useEffect, useState } from "react"

interface CounterBlockProps {
 
  endValue: number
 
  isVisible: boolean
}

export default function SoicalCounter({  endValue,  isVisible }: CounterBlockProps) {
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
      
          {count}
        

    </article>
  )
}

