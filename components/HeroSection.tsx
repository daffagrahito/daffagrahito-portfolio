"use client"

import { motion } from "framer-motion"
import { ArrowRight } from "lucide-react"
import { Button } from "@/components/ui/button"
import { useState, useEffect } from "react"

interface HeroSectionProps {
  readonly loading: boolean
}

export default function HeroSection({ loading }: HeroSectionProps) {
  const [typedGreeting, setTypedGreeting] = useState("")
  const [typedDescription, setTypedDescription] = useState("")
  const [showCursorOnGreeting, setShowCursorOnGreeting] = useState(true)
  const greetingText = "Hey There! I'm"
  const descriptionText = "Aspiring Full Stack Developer"

  useEffect(() => {
    if (loading) return

    let greetingIndex = 0
    let descriptionIndex = 0
    let isDeleting = false
    let isTypingDescription = false
    let timeoutId: NodeJS.Timeout

    const typeAnimation = () => {
      if (!isTypingDescription && !isDeleting && greetingIndex < greetingText.length) {
        setTypedGreeting(greetingText.slice(0, greetingIndex + 1))
        setShowCursorOnGreeting(true)
        greetingIndex++
        timeoutId = setTimeout(typeAnimation, 120)
      }
      else if (!isTypingDescription && !isDeleting && greetingIndex >= greetingText.length) {
        isTypingDescription = true
        setShowCursorOnGreeting(false)
        timeoutId = setTimeout(typeAnimation, 600)
      }
      else if (isTypingDescription && !isDeleting && descriptionIndex < descriptionText.length) {
        setTypedDescription(descriptionText.slice(0, descriptionIndex + 1))
        descriptionIndex++
        timeoutId = setTimeout(typeAnimation, 100)
      }
      else if (isTypingDescription && !isDeleting && descriptionIndex >= descriptionText.length) {
        timeoutId = setTimeout(() => {
          isDeleting = true
          typeAnimation()
        }, 3000) // Hold complete text for 3 seconds
      }
      else if (isDeleting && descriptionIndex > 0) {
        setTypedDescription(descriptionText.slice(0, descriptionIndex - 1))
        descriptionIndex--
        timeoutId = setTimeout(typeAnimation, 50)
      }
      else if (isDeleting && descriptionIndex <= 0 && greetingIndex > 0) {
        setShowCursorOnGreeting(true)
        setTypedGreeting(greetingText.slice(0, greetingIndex - 1))
        greetingIndex--
        timeoutId = setTimeout(typeAnimation, 50)
      }
      else if (isDeleting && greetingIndex <= 0) {
        isDeleting = false
        isTypingDescription = false
        setShowCursorOnGreeting(true)
        timeoutId = setTimeout(typeAnimation, 1000) // Pause before restarting
      }
    }

    typeAnimation()
    return () => clearTimeout(timeoutId)
  }, [loading])

  return (
    <section id="home" className="min-h-screen flex items-center justify-center relative pt-16">
      <div className="container mx-auto px-4 grid lg:grid-cols-2 gap-12 items-center">
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1, delay: loading ? 3 : 0 }}
          className="space-y-8"
        >
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: loading ? 3.2 : 0.2 }}
          >
            {/* Typing Animation for Greeting */}
            <div className="text-3xl lg:text-4xl text-gray-300 mb-4 font-bold h-12">
              {typedGreeting}
              {showCursorOnGreeting && (
                <motion.span
                  animate={{ opacity: [1, 0] }}
                  transition={{ duration: 0.8, repeat: Number.POSITIVE_INFINITY }}
                  className="text-cyan-400"
                >
                  |
                </motion.span>
              )}
            </div>

            {/* Name with gradient - always visible */}
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: loading ? 3.5 : 0.5 }}
              className="text-6xl lg:text-8xl font-bold leading-tight"
            >
              <span className="bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
                Daffa Grahito
              </span>
            </motion.h1>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: loading ? 3.8 : 0.8 }}
            className="text-lg lg:text-xl text-gray-300 max-w-lg h-8"
          >
            {typedDescription}
            {!showCursorOnGreeting && (
              <motion.span
                animate={{ opacity: [1, 0] }}
                transition={{ duration: 0.8, repeat: Number.POSITIVE_INFINITY }}
                className="text-cyan-400"
              >
                |
              </motion.span>
            )}
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: loading ? 4.0 : 1.0 }}
            className="flex flex-wrap gap-4"
          >
            <Button
              size="lg"
              className="bg-gradient-to-r from-cyan-500 to-purple-500 hover:from-cyan-600 hover:to-purple-600 text-white px-8 py-3 rounded-full"
            >
              View My Work
              <ArrowRight className="ml-2 w-5 h-5" />
            </Button>
            <Button
              variant="outline"
              size="lg"
              className="border-cyan-500 text-cyan-400 hover:bg-cyan-500 hover:text-white px-8 py-3 rounded-full bg-transparent"
              onClick={() => window.open('https://drive.google.com/file/d/1AEZw6eX-2zShU8alHNZFXzKD-DYj2v9Z/view?usp=sharing', '_blank')}
            >
              My Resume
            </Button>
          </motion.div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1, delay: loading ? 3.2 : 0.2 }}
          className="relative"
        >
          <div className="relative w-full max-w-md mx-auto">
            <motion.div
              animate={{ rotate: 360 }}
              transition={{ duration: 20, repeat: Number.POSITIVE_INFINITY, ease: "linear" }}
              className="absolute inset-0 bg-gradient-to-r from-cyan-500/20 to-purple-500/20 rounded-full blur-xl"
            />
            <div className="relative bg-gray-800/50 backdrop-blur-sm rounded-2xl p-8 border border-gray-700">
              <div className="space-y-4">
                <div className="flex items-center gap-3">
                  <div className="w-3 h-3 bg-red-500 rounded-full"></div>
                  <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
                  <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                </div>
                <div className="space-y-2 font-mono text-sm">
                  <div className="text-cyan-400">const developer = {`{`}</div>
                  <div className="pl-4 text-gray-300">
                    name: <span className="text-green-400">"Daffa Grahito"</span>,
                  </div>
                  <div className="pl-4 text-gray-300">
                    role: <span className="text-green-400">"Full Stack Developer"</span>,
                  </div>
                  <div className="pl-4 text-gray-300">
                    passion: <span className="text-green-400">"Building Amazing Apps"</span>,
                  </div>
                  <div className="pl-4 text-gray-300">
                    status: <span className="text-green-400">"Available for Opportunities"</span>
                  </div>
                  <div className="text-cyan-400">{`}`}</div>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>

      <motion.div
        animate={{ y: [0, -10, 0] }}
        transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY }}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
      >
        <motion.div className="w-8 h-8 text-gray-400">
          <svg
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
          </svg>
        </motion.div>
      </motion.div>
    </section>
  )
}
