import { useState, useEffect } from "react"
import { motion, useMotionValue, useTransform, animate } from "framer-motion"
import { FaRegEye } from "react-icons/fa"

interface AnimatedFollowerCountProps {
  followerCount: number
  duration?: number
}

function formatNumber(num: number): string {
  return num.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")
}

export default function AnimatedFollowerCount({ followerCount, duration = 2 }: AnimatedFollowerCountProps) {
  const count = useMotionValue(0)
  const rounded = useTransform(count, (latest) => formatNumber(Math.round(latest)))
  const [isClient, setIsClient] = useState(false)

  useEffect(() => {
    setIsClient(true)
    const controls = animate(count, followerCount, { 
      duration: duration,
      ease: "easeOut"
    })
    return controls.stop
  }, [count, followerCount, duration])

  return (
    <motion.div 
      initial={{ scale: 0.5, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      transition={{ duration: 0.5 }}
      whileHover={{ scale: 1.05 }}
      className="flex flex-col items-center justify-center gap-4 p-8 rounded-xl bg-white/10 backdrop-blur-sm shadow-2xl border border-white/20 w-[170px] md:w-[300px]"
    >
      <motion.div 
        className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-amber-500 to-amber-700 bg-clip-text text-transparent hover:scale-120 transition"
      >
        {isClient ? rounded : formatNumber(0)}
      </motion.div>
      <motion.div 
        className="flex items-center gap-2 text-gray-700"
        whileHover={{ scale: 1.1 }}
      >
        <motion.div
          animate={{ 
            scale: [1, 1.2, 1],
            rotate: [0, 10, -10, 0]
          }}
          transition={{
            duration: 2,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        >
          <FaRegEye size={24} />
        </motion.div>
        <p className="text-lg font-medium">Viewers</p>
      </motion.div>
    </motion.div>
  )
}
