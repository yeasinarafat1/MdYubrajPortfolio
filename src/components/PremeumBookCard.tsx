import { IoMdStar } from "react-icons/io";
import { useState } from "react";
import PaymentButton from "./PaymentButton";

const PremiumCard = ({ img, price = 20,type,id }:{ img: string, price?: number,type?:'launched' | 'upcoming',id?:string}) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div className="group flex flex-col items-center justify-center ">
      {/* Card Container */}
      <div 
        className="relative w-[120px] h-[200px] md:w-[200px] md:h-[320px] perspective-1000"
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        {/* Premium Star Badge */}
        <div className="absolute -top-2 -left-2 z-20">
          <IoMdStar className="text-4xl text-yellow-400 drop-shadow-lg animate-pulse" />
        </div>

        {/* Card Content */}
        <div className={`
          relative w-full h-full
          rounded-2xl overflow-hidden
          bg-gradient-to-br from-gray-800/90 to-gray-900
          shadow-2xl
          transform transition-all duration-500 ease-out
          ${isHovered ? 'scale-105' : 'scale-100'}
          hover:shadow-[0_0_30px_rgba(59,130,246,0.5)]
        `}>
          {/* Premium Ribbon */}
          <div className="absolute -top-2 -left-16 w-[200px] h-[40px] rotate-[-45deg]
            bg-gradient-to-r from-orange-500 via-yellow-500 to-orange-500
            flex items-center justify-center
            shadow-lg
            transform transition-opacity duration-300
            opacity-0 group-hover:opacity-100"
          >
            <span className="text-white font-bold tracking-wider uppercase text-sm">Premium</span>
          </div>

          {/* Image Container */}
          <div className="w-full h-full">
            <img 
              src={img} 
              alt="Premium Content" 
              className="w-full h-full object-cover rounded-2xl
                transition-transform duration-500
                group-hover:scale-110"
            />
          </div>
        </div>
      </div>

      {/* Price and Button Section */}
  {type != 'upcoming' && (
        <div className="flex flex-col items-center space-y-3 mt-4">
        <p className="md:text-lg font-bold text-gray-800">
          price:{` `}
          <span className="text-[12px] md:text-lg  font-bold">$</span>
          {price}
        </p>
        <a href={`/checkout/${id}`}>
        {/* <button className="
        cursor-pointer
          relative overflow-hidden
          bg-blue-400 hover:bg-blue-500
          text-white font-medium
          px-4 py-1
          md:px-8 md:py-2.5 rounded-full
          transform transition-all duration-300
          hover:scale-105 hover:shadow-lg
          active:scale-95
          before:content-['']
          before:absolute before:top-0 before:left-0
          before:w-full before:h-full
          before:bg-white/20
          before:transform before:-skew-x-45
          before:translate-x-full
          hover:before:translate-x-[-180%]
          before:transition-transform before:duration-700
        ">
        Buy
        </button> */}
       <PaymentButton/>
        </a>
      </div>)}
    </div>
  );
};

export default PremiumCard;