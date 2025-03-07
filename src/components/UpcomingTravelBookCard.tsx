import { motion } from 'framer-motion'
import '../upcomingbookcard.css'

interface UpcomingTravelBookCardProps {
  title?: string;
  date?: string;
  location?: string;
  type?: 'book' | 'travel';
  image?: string;
}

const UpcomingTravelBookCard = ({
  title = "Upcoming Adventure",
  date = "Coming Soon",
  location = "TBA",
  type = "book",
  image = "/placeholder.jpg"
}: UpcomingTravelBookCardProps) => {
  return (
    <motion.div 
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      whileHover={{ scale: 1.05 }}
      transition={{ duration: 0.3 }}
      className='relative w-[160px] md:w-[200px] h-[250px] rounded-[14px] z-[1111] overflow-hidden flex flex-col items-center justify-center shadow-[20px_20px_60px_#bebebe,-20px_-20px_60px_#ffffff]'
    >
      <div className='absolute top-[5px] left-[5px] w-[190px] h-[240px] z-[2] bg-white/95 backdrop-blur-[24px] rounded-[10px] overflow-hidden outline-[2px] outline-white  md:p-1'>
        <div className="h-[120px] w-full mb-3">
          <img src={image} alt={title} className="w-full h-full object-cover rounded-lg" />
        </div>
        <div className="flex flex-col gap-1">
          <h3 className="font-bold text-lg truncate">{title}</h3>
          <p className="text-sm text-gray-600">{date}</p>
          <p className="text-sm text-gray-500">{location}</p>
          <span className="text-xs px-2 py-1   rounded-full w-fit mt-1">
            {type === 'book' ? '📚 Book' : '✈️ Travel'}
          </span>
        </div>
      </div>
      <motion.div 
        animate={{ 
          scale: [1, 1.2, 1],
          rotate: [0, 180, 360],
        }}
        transition={{
          duration: 5,
          repeat: Infinity,
          ease: "linear"
        }}
        className='absolute z-[1] top-1/2 left-1/2 w-[150px] h-[150px] rounded-full bg-red-500 opacity-100 blur-[12px] animate-custom-blob-bounce'
      />
    </motion.div>
  )
}

export default UpcomingTravelBookCard