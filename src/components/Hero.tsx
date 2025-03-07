import { useEffect, useRef, useState } from "react";
import AnimatedFollowerCount from "./FollowerCount";
import PremiumCard from "./PremeumBookCard";
import Typed from 'typed.js';

import UpcomingTravelBookCard from "./UpcomingTravelBookCard";
import { publishedBooks } from "@/constant";

const Hero = () => {
  const el = useRef<HTMLSpanElement>(null);
  // const el2 = useRef<HTMLParagraphElement>(null);
  const [welcomeText, setWelcomeText] = useState<string>('');
  const [showWelcome, setShowWelcome] = useState<boolean>(true);
  const fullText = 'Well Come here 👋 ...';
  
  useEffect(() => {
    const typed = new Typed(el.current, {
      strings: [' writer', ' traveler'],
      typeSpeed: 100,
      loop: true,
    });

    return () => {
      typed.destroy();
    };
  }, []);

  useEffect(() => {
    let currentIndex = 0;
    let isTyping = true;
    let timeoutId: NodeJS.Timeout;

    const typeText = () => {
      if (isTyping && currentIndex < fullText.length) {
        setWelcomeText(fullText.substring(0, currentIndex + 1));
        currentIndex++;
        timeoutId = setTimeout(typeText, 50);
      } else if (isTyping && currentIndex === fullText.length) {
        timeoutId = setTimeout(() => {
          isTyping = false;
          currentIndex = fullText.length;
          removeText();
        }, 1000);
      }
    };

    const removeText = () => {
      if (!isTyping && currentIndex > 0) {
        currentIndex--;
        setWelcomeText(fullText.substring(0, currentIndex));
        timeoutId = setTimeout(removeText, 50);
      } else if (currentIndex === 0) {
        // Hide the element completely after animation
        setShowWelcome(false);
      }
    };

    typeText();

    return () => {
      clearTimeout(timeoutId);
      isTyping = false;
    };
  }, []);

  return (
    <div className="w-full min-h-screen relative">
      <img
        src="/hero_bg_2.png"
        alt=""
        className="w-full object-cover h-full min-h-[300px] max-h-[470px] absolute -z-10"
      />
      <div className="w-full min-h-4/5 h-[460px] flex flex-col pt-16 px-10 max-w-3xl md:pt-12">
        <p className="rubik-distressed-regular font-bold text-white text-4xl md:text-9xl capitalize">
          Md <br /> yubraj
        </p>
        <p className="font-bold text-white text-xl md:text-3xl">
          I am a passionate <span ref={el} />
        </p>
      </div>
      
      {/* Welcome text with character-by-character animation */}
      {showWelcome && (
        <p className="w-full text-center text-4xl md:text-6xl h-10 mt-8 md:mt-18 charmonman-bold">
          {welcomeText}
        </p>
      )}

      <h2 id="books" className="w-full text-center text-6xl mt-6 oooh-baby-regular">
        Books
      </h2>
      <div className="flex items-center justify-center md:justify-start gap-5 md:gap-15 flex-wrap w-full md:container mx-auto min-h-50 border-t-6 border-black px-1 md:px-3 mt-1 pt-4">
        <div className="flex items-center justify-center flex-wrap gap-4">
        {
          publishedBooks.map((book) => (
            <PremiumCard key={book.id} {...book}/>
            
          ))
        }
        </div>
        <div className="flex flex-col items-center  gap-2 ">
          <h2 className="text-3xl font-bold mb-10">Probable Travels</h2>
        <div className="flex items-center justify-center gap-4 ">
            <UpcomingTravelBookCard image="/GoldenGateBridge.jpeg" title="San Fransisco. The Mystery Spot" date="Coming Soon" location="USA" type="travel"/>
            <UpcomingTravelBookCard image="/rockymountain.jpg" title="Rocky Mountains" date="Coming Soon" location="USA" type="travel"/>
            
        </div>
        </div>
        
        {/* <AnimatedNextBtn text="Show more" clickedText="Waiting ...."/> */}
        <div className="md:flex-1 flex flex-col md:flex-row items-center justify-end  gap-3 md:mb-5">
          <AnimatedFollowerCount followerCount={756526} />
        </div>
      </div>
    </div>
  );
};

export default Hero;



// const AnimatedCard = () => {
//   return (

// <button className="btn-small">
//   <div className="btn-small-content">
//     <div className="btn-small-icon">
      
//     </div>
//      <p className="w-full text-center">More</p>
  
//   </div>
// </button>

//   );
// };

