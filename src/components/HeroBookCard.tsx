import React from 'react'

interface HeroBookCardProps {
  imageSrc: string
  title: string
  description: string
}

const HeroBookCard: React.FC<HeroBookCardProps> = ({ imageSrc}) => {
  return (
    <div className="cursor-pointer group relative flex flex-col my-2 bg-white shadow-sm border border-slate-200 rounded-lg w-60 hover:shadow-lg transition-shadow duration-300">
      <div className="relative h-60 m-2.5 overflow-hidden text-white rounded-md">
        <img className="transition-transform duration-500 ease-[cubic-bezier(0.25, 1, 0.5, 1)] transform group-hover:scale-110" 
             src={imageSrc} alt="investment-seed-round" />
      </div>
      
      <div className="px-4 pb-4 pt-0 mt-1 absolute bottom-0 left-0 right-0">
        <button className="rounded-md bg-slate-800 py-2 px-4 border border-transparent text-center text-sm text-white transition-all shadow-md hover:shadow-lg focus:bg-slate-700 focus:shadow-none active:bg-slate-700 hover:bg-slate-700 active:shadow-none disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none" type="button">
          Read article
        </button>
      </div>
    </div>
  )
}

export default HeroBookCard
