"use client"

import type React from "react"

import { useState, useEffect, useRef } from "react"
import { IoReorderThreeOutline } from "react-icons/io5"
import { links } from "@/constant"
import { useScroll } from "@/lib/hooks/useScroll"

interface ScrollState {
  isVisible: boolean
  isScrolling: boolean
  isAtTop: boolean
}

const CustomNavItem = () => {
  const [navOpen, setNavOpen] = useState(false)
  const { isVisible, isScrolling, isAtTop }: ScrollState = useScroll()
  const navRef = useRef<HTMLDivElement>(null)

  const scrollToSection = (e: React.MouseEvent<HTMLAnchorElement>, sectionId: string): void => {
    e.preventDefault()
    const element: HTMLElement | null = document.getElementById(sectionId)

    if (element) {
      const navbarHeight: number = 80 // height of your navbar (h-20 = 5rem = 80px)
      const elementPosition: number = element.getBoundingClientRect().top
      const offsetPosition: number = elementPosition + window.pageYOffset - navbarHeight

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth" as ScrollBehavior,
      })
    }
    setNavOpen(false) // Close the menu after clicking a link
  }

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (navRef.current && !navRef.current.contains(event.target as Node)) {
        setNavOpen(false)
      }
    }

    document.addEventListener("mousedown", handleClickOutside)
    return () => {
      document.removeEventListener("mousedown", handleClickOutside)
    }
  }, [])

  return (
    <div className="relative" ref={navRef}>
      <IoReorderThreeOutline
        className={`text-[35px] block md:hidden transition-colors duration-300 ${
          isAtTop ? "text-white" : "text-black"
        }`}
        onClick={() => setNavOpen((prev) => !prev)}
      />
      {navOpen && (
        <div
          className={`
            absolute right-0 w-[150px] backdrop-blur-md z-10 rounded-lg
            transition-all duration-300 transform
            ${isVisible ? "translate-y-0" : "-translate-y-2"}
            ${isScrolling && !isAtTop ? "shadow-md" : "shadow-none"}
            ${isAtTop ? "bg-black/70" : "bg-white/70"}
          `}
        >
          {links.map((link) => (
            <a
              key={link.id}
              href={`#${link.id}`}
              className={`
                block px-4 py-2 text-sm no-underline font-bold
                transition-colors duration-300
                ${isAtTop ? "text-white hover:bg-white/20" : "text-black hover:bg-black/20"}
              `}
              onClick={(e) => scrollToSection(e, link.id)}
            >
              {link.name}
            </a>
          ))}
        </div>
      )}
    </div>
  )
}

export default CustomNavItem

