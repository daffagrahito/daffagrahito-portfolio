"use client"

import { motion, AnimatePresence } from "framer-motion"
import { useState, useEffect } from "react"

interface LoadingScreenProps {
  readonly loading: boolean
}

interface MatrixElement {
  id: string
  text: string
  left: number
  duration: number
  delay: number
}

const codeLines = [
  "$ git clone https://github.com/daffagrahito/portfolio.git",
  "$ cd portfolio",
  "$ npm install",
  "$ npm run dev",
  "✓ Starting development server...",
  "✓ Initializing components...",
  "✓ Loading assets...",
  "✓ Compiling TypeScript...",
  "✓ Ready! Portfolio loaded successfully"
]

const skills = ["React", "TypeScript", "Next.js", "Node.js", "Python", "Java", "Go"]

const getLineColor = (line: string): string => {
  if (line.startsWith("✓")) return "text-green-400"
  if (line.startsWith("$")) return "text-cyan-400"
  return "text-gray-300"
}

export default function LoadingScreen({ loading }: LoadingScreenProps) {
  const [currentLine, setCurrentLine] = useState(0)
  const [displayedText, setDisplayedText] = useState("")
  const [currentSkill, setCurrentSkill] = useState(0)
  const [matrixElements, setMatrixElements] = useState<MatrixElement[]>([])

  // Generate matrix elements only on client side
  useEffect(() => {
    const elements: MatrixElement[] = Array.from({ length: 20 }, (_, i) => ({
      id: `matrix-${i}-${Date.now()}`,
      text: Math.random().toString(36).substring(2, 15),
      left: Math.random() * 100,
      duration: Math.random() * 3 + 2,
      delay: Math.random() * 2,
    }))
    setMatrixElements(elements)
  }, [])

  useEffect(() => {
    if (!loading) return

    const interval = setInterval(() => {
      setCurrentLine((prev) => {
        if (prev < codeLines.length - 1) {
          return prev + 1
        }
        return prev
      })
    }, 300)

    return () => clearInterval(interval)
  }, [loading])

  useEffect(() => {
    if (!loading) return

    const skillInterval = setInterval(() => {
      setCurrentSkill((prev) => (prev + 1) % skills.length)
    }, 500)

    return () => clearInterval(skillInterval)
  }, [loading])

  useEffect(() => {
    if (!loading || currentLine >= codeLines.length) return

    const currentText = codeLines[currentLine]
    let index = 0
    setDisplayedText("")

    const typeInterval = setInterval(() => {
      if (index < currentText.length) {
        setDisplayedText(currentText.slice(0, index + 1))
        index++
      } else {
        clearInterval(typeInterval)
      }
    }, 30)

    return () => clearInterval(typeInterval)
  }, [currentLine, loading])

  if (!loading) return null

  return (
    <motion.div
      initial={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.8 }}
      className="fixed inset-0 z-50 flex items-center justify-center bg-gray-900"
    >
      {/* Background Matrix Effect */}
      <div className="absolute inset-0 overflow-hidden opacity-10">
        {matrixElements.map((element) => (
          <motion.div
            key={element.id}
            className="absolute text-green-400 font-mono text-xs"
            style={{
              left: `${element.left}%`,
              top: `-10%`,
            }}
            animate={{
              y: ["0vh", "110vh"],
            }}
            transition={{
              duration: element.duration,
              repeat: Number.POSITIVE_INFINITY,
              ease: "linear",
              delay: element.delay,
            }}
          >
            {element.text}
          </motion.div>
        ))}
      </div>

      <div className="w-full max-w-4xl mx-auto px-8">
        {/* Terminal Window */}
        <motion.div
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.5 }}
          className="bg-gray-800 rounded-lg border border-gray-700 shadow-2xl overflow-hidden"
        >
          {/* Terminal Header */}
          <div className="bg-gray-700 px-4 py-3 flex items-center justify-between">
            <div className="flex items-center space-x-2">
              <div className="w-3 h-3 bg-red-500 rounded-full"></div>
              <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
              <div className="w-3 h-3 bg-green-500 rounded-full"></div>
            </div>
            <div className="text-gray-300 font-mono text-sm">
              portfolio@daffagrahito-dev: ~/workspace
            </div>
            <div className="w-12"></div>
          </div>

          {/* Terminal Content */}
          <div className="p-6 font-mono text-sm min-h-[300px]">
            {/* Previous Lines */}
            {codeLines.slice(0, currentLine).map((line, index) => {
              const lineColor = getLineColor(line)
              return (
                <motion.div
                  key={`line-${index}-${line.substring(0, 10)}`}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.3 }}
                  className={`mb-2 ${lineColor}`}
                >
                  {line.startsWith("$") && (
                    <span className="text-green-400 mr-2">daffagrahito@portfolio</span>
                  )}
                  {line}
                </motion.div>
              )
            })}

            {/* Current Typing Line */}
            {currentLine < codeLines.length && (
              <div className={`mb-2 ${getLineColor(codeLines[currentLine])}`}>
                {codeLines[currentLine].startsWith("$") && (
                  <span className="text-green-400 mr-2">daffagrahito@portfolio</span>
                )}
                {displayedText}
                <motion.span
                  animate={{ opacity: [1, 0] }}
                  transition={{ duration: 0.8, repeat: Number.POSITIVE_INFINITY }}
                  className="bg-green-400 w-2 h-4 inline-block ml-1"
                />
              </div>
            )}

            {/* Loading Progress */}
            <div className="mt-8">
              <div className="flex items-center justify-between mb-2">
                <span className="text-gray-400">Loading Portfolio Components...</span>
                <span className="text-cyan-400">{Math.min(currentLine * 11, 100)}%</span>
              </div>
              <div className="w-full bg-gray-700 rounded-full h-2">
                <motion.div
                  className="bg-gradient-to-r from-cyan-500 to-purple-500 h-2 rounded-full"
                  initial={{ width: "0%" }}
                  animate={{ width: `${Math.min(currentLine * 11, 100)}%` }}
                  transition={{ duration: 0.5 }}
                />
              </div>
            </div>

            {/* Skills Showcase */}
            <div className="mt-6 flex items-center space-x-2">
              <span className="text-gray-400">Current Focus:</span>
              <AnimatePresence mode="wait">
                <motion.span
                  key={currentSkill}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  transition={{ duration: 0.3 }}
                  className="text-cyan-400 font-semibold"
                >
                  {skills[currentSkill]}
                </motion.span>
              </AnimatePresence>
              <motion.span
                animate={{ opacity: [1, 0] }}
                transition={{ duration: 0.5, repeat: Number.POSITIVE_INFINITY }}
                className="text-green-400"
              >
                ●
              </motion.span>
            </div>
          </div>
        </motion.div>

        {/* Developer Info */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1, duration: 0.5 }}
          className="text-center mt-8"
        >
          <h2 className="text-2xl font-bold bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent mb-2">
            daffagrahito
          </h2>
        </motion.div>
      </div>
    </motion.div>
  )
}
