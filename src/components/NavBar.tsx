// types.ts


interface ScrollState {
  isVisible: boolean;
  isScrolling: boolean;
  isAtTop: boolean;
}

// NavBar.tsx
import { FC } from 'react';
import { useScroll } from "@/lib/hooks/useScroll";

import CustomNavItem from "./CustomNavItem";
import { links } from '@/constant';


const NavBar: FC = () => {
  const { isVisible, isScrolling, isAtTop }: ScrollState = useScroll();

  const scrollToSection = (e: React.MouseEvent<HTMLAnchorElement>, sectionId: string): void => {
    e.preventDefault();
    const element: HTMLElement | null = document.getElementById(sectionId);
    
    if (element) {
      const navbarHeight: number = 80; // height of your navbar (h-20 = 5rem = 80px)
      const elementPosition: number = element.getBoundingClientRect().top;
      const offsetPosition: number = elementPosition + window.pageYOffset - navbarHeight;

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth" as ScrollBehavior
      });
    }
  };

  return (
    <nav
      className={`
        fixed top-0 left-0 right-0 z-50 
        ${!isAtTop ? "bg-white/80 backdrop-blur-sm" : "bg-transparent"}
        transition-all duration-300 transform
        ${isVisible ? "translate-y-0" : "-translate-y-full"}
        ${isScrolling && !isAtTop ? "shadow-md" : "shadow-none"}
      `}
    >
      <div className="flex items-center justify-around w-full h-20 max-w-7xl mx-auto px-4 relative">
        {/* Logo */}
        <a href="/" className="flex items-center justify-center gap-2 h-8 no-underline">
          <b
            className={`
              text-[30px] font-bold tracking-[-2px]  font-oswald
              text-black
              transition-colors duration-300 uppercase
            `}
          >
            Md Yubraj
          </b>
        </a>

        {/* Navigation Links */}
        <div className="hidden md:flex items-center justify-center gap-8">
          {links.map((link) => (
            <a
              key={link.id}
              href={`#${link.id}`}
              onClick={(e) => scrollToSection(e, link.id)}
              className={`
                font-medium text-lg no-underline
                ${
                  isAtTop
                    ? "text-white hover:text-gray-200"
                    : "text-black hover:text-blue-500"
                }
                transition-colors duration-300
              `}
            >
              {link.name}
            </a>
          ))}
        </div>

        {/* CTA Button */}
        <div className="flex items-center gap-3">
          <a
            href="https://x.com/xeno_pulse"
            target="_blank"
            rel="noopener noreferrer"
            className="text-white no-underline"
          >
            {/* <SparkleButton>Contact us</SparkleButton> */}
          </a>
          <CustomNavItem />
        </div>
      </div>
    </nav>
  );
};

export default NavBar;