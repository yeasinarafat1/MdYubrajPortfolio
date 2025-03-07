import { useState } from "react"
import { ThumbsUp, ThumbsDown, Eye } from "lucide-react"
import { Card } from "@/components/ui/card"
import { motion, AnimatePresence } from "framer-motion"
import type React from "react"

const ArticleStats = ({like, dislike, veiw}:{like: number, dislike: number, veiw: number}) => {
  const [likes, setLikes] = useState(like)
  const [dislikes, setDislikes] = useState(dislike)
  const [userInteraction, setUserInteraction] = useState<"like" | "dislike" | null>(null)

  const handleLike = () => {
    if (userInteraction === "like") {
      setLikes(likes - 1)
      setUserInteraction(null)
    } else {
      setLikes(likes + 1)
      if (userInteraction === "dislike") {
        setDislikes(dislikes - 1)
      }
      setUserInteraction("like")
    }
  }

  const handleDislike = () => {
    if (userInteraction === "dislike") {
      setDislikes(dislikes - 1)
      setUserInteraction(null)
    } else {
      setDislikes(dislikes + 1)
      if (userInteraction === "like") {
        setLikes(likes - 1)
      }
      setUserInteraction("dislike")
    }
  }

  return (
    <Card className="relative overflow-hidden w-full md:container mx-auto shadow-2xl rounded-2xl mt-2 backdrop-blur-sm h-17 md:h-25 " >
      {/* Animated gradient background */}
      <div className="absolute inset-0 bg-gradient-to-r from-purple-500/20 via-pink-500/20 to-blue-500/20 animate-gradient-x" />
      
      {/* Glass effect overlay */}
      <div className="absolute inset-0 backdrop-blur-[2px] bg-white/30" />

      {/* Content */}
      <div className="relative pt-2">
        <div className="flex items-center justify-between gap-8 px-4">
          <div className="flex items-center justify-center gap-3">
          <StatButton
            icon={<ThumbsUp className="w-5 h-5" />}
            count={likes}
            label="Likes"
            onClick={handleLike}
            isActive={userInteraction === "like"}
          />
          <StatButton
            icon={<ThumbsDown className="w-5 h-5" />}
            count={dislikes}
            label="Dislikes"
            onClick={handleDislike}
            isActive={userInteraction === "dislike"}
          />
          </div>
          <StatDisplay 
            icon={<Eye className="w-6 h-6" />} 
            count={veiw} 
            label="Views" 
          />
        </div>
      </div>
    </Card>
  )
}

interface StatButtonProps {
  icon: React.ReactNode
  count: number
  label: string
  onClick: () => void
  isActive: boolean
}

const StatButton: React.FC<StatButtonProps> = ({ icon, count, label, onClick, isActive }) => (
  <motion.button
    onClick={onClick}
    className={`
      flex flex-col items-center p-1 md:p-4 rounded-xl
      transition-all duration-300
      ${isActive 
        ? "bg-white/40 text-purple-700 shadow-lg" 
        : "hover:bg-white/30 text-gray-700 hover:text-purple-600"
      }
    `}
    whileHover={{ scale: 1.05 }}
    whileTap={{ scale: 0.95 }}
  >
    <div className="flex items-center gap-3">
      <motion.div
        animate={isActive ? { rotate: [0, -10, 10, -10, 0] } : {}}
        transition={{ duration: 0.5 }}
      >
        {icon}
      </motion.div>
      <AnimatePresence mode="wait">
        <motion.span
          key={count}
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 10 }}
          transition={{ duration: 0.2 }}
          className="font-bold text-lg"
        >
          {formatNumber(count)}
        </motion.span>
      </AnimatePresence>
    </div>
    <span className="hidden md:block text-sm opacity-70 mt-1">{label}</span>
  </motion.button>
)

interface StatDisplayProps {
  icon: React.ReactNode
  count: number
  label: string
}

const StatDisplay: React.FC<StatDisplayProps> = ({ icon, count, label }) => (
  <motion.div 
    className="flex flex-col items-center p-1 rounded-xl bg-white/20"
    whileHover={{ scale: 1.05 }}
    transition={{ duration: 0.2 }}
  >
    <div className="flex items-center gap-1">
      {icon}
      <span className="text-lg font-bold text-gray-700">{formatNumber(count)}</span>
      <span className="hidden md:block text-sm text-gray-600">{label}</span>
    </div>
  </motion.div>
)

const formatNumber = (num: number) => {
  if (num >= 1000000) {
    return (num / 1000000).toFixed(1) + "M"
  } else if (num >= 1000) {
    return (num / 1000).toFixed(1) + "K"
  }
  return num.toString()
}

export default ArticleStats