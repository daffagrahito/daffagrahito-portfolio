"use client"

import { useState, useEffect } from "react"
import { AnimatePresence } from "framer-motion"

// Components
import LoadingScreen from "@/components/LoadingScreen"
import Navbar from "@/components/Navbar"
import BackgroundElements from "@/components/BackgroundElements"
import HeroSection from "@/components/HeroSection"
import AboutSection from "@/components/AboutSection"
import SkillsSection from "@/components/SkillsSection"
import ProjectsSection from "@/components/ProjectsSection"
import ConnectSection from "@/components/ConnectSection"
import Footer from "@/components/Footer"

// Hooks
import { useActiveSection } from "@/hooks/useActiveSection"

export default function Portfolio() {
  const [loading, setLoading] = useState(true)
  const { activeSection, scrollToSection } = useActiveSection()

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false)
    }, 3000)
    return () => clearTimeout(timer)
  }, [])

  return (
    <>
      <AnimatePresence>
        <LoadingScreen loading={loading} />
      </AnimatePresence>

      <div className="min-h-screen bg-gray-900 text-white overflow-x-hidden">
        <Navbar
          activeSection={activeSection}
          scrollToSection={scrollToSection}
          loading={loading}
        />
        
        <BackgroundElements />
        
        <HeroSection loading={loading} />
        <AboutSection />
        <SkillsSection />
        <ProjectsSection />
        <ConnectSection />
        <Footer />
      </div>
    </>
  )
}
