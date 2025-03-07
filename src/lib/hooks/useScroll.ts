import { useState, useEffect } from "react";

export function useScroll() {
  const [isVisible, setIsVisible] = useState(true);
  const [isScrolling, setIsScrolling] = useState(false);
  const [isAtTop, setIsAtTop] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

  useEffect(() => {
    let timeoutId: ReturnType<typeof setTimeout>;

    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      const scrollingDown = currentScrollY > lastScrollY;

      // Update isAtTop state
      setIsAtTop(currentScrollY < 50);

      // Show navbar when scrolling up or when at the top
      if (!scrollingDown || currentScrollY < 50) {
        setIsVisible(true);
      }
      // Hide navbar when scrolling down and not at the top
      else if (scrollingDown && currentScrollY > 50) {
        setIsVisible(false);
      }

      setLastScrollY(currentScrollY);
      setIsScrolling(true);

      // Clear the previous timeout
      clearTimeout(timeoutId);

      // Set a new timeout
      timeoutId = setTimeout(() => {
        setIsScrolling(false);
        setIsVisible(true);
      }, 150);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => {
      window.removeEventListener("scroll", handleScroll);
      clearTimeout(timeoutId);
    };
  }, [lastScrollY]);

  return { isVisible, isScrolling, isAtTop };
}