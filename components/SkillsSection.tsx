"use client"

import { motion } from "framer-motion"
import { Card, CardContent } from "@/components/ui/card"
import { skills } from "@/data/skills"
import { useState, useEffect } from "react"

export default function SkillsSection(): JSX.Element {
  const [dragConstraints, setDragConstraints] = useState({ left: 0, right: 0 })
  const skillWidth = 280
  
  useEffect(() => {
    const totalWidth = skills.length * skillWidth
    const viewportWidth = typeof window !== 'undefined' ? window.innerWidth : 1200
    const containerWidth = Math.min(viewportWidth * 0.9, 1280) // Max container width
    
    const maxDrag = -(totalWidth - containerWidth)
    
    setDragConstraints({ left: Math.min(maxDrag, -100), right: 0 })
  }, [skills.length]) // Add dependency to recalculate when skills change

  return (
    <section id="skills" className="py-20 px-4 bg-gradient-to-b from-gray-800/30 via-gray-800/50 to-gray-900/70">
      <div className="container mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-6"
        >
          <h2 className="text-5xl font-bold mb-4">
            <span className="bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">
              Skills & Technologies
            </span>
          </h2>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto leading-relaxed font-light tracking-wide">
            A comprehensive toolkit of modern technologies I have worked with.
          </p>
        </motion.div>

        <div className="max-w-7xl mx-auto relative">
          <div className="overflow-hidden cursor-grab active:cursor-grabbing py-4">
            <motion.div
              drag="x"
              dragConstraints={dragConstraints}
              dragElastic={0.05}
              dragMomentum={false}
              className="flex gap-6 select-none pb-4 pt-4"
            >
              {skills.map((skill, index) => {
                const Icon = skill.icon
                return (
                  <motion.div
                    key={skill.name}
                    initial={{ opacity: 1, y: 0 }}
                    whileHover={{ y: -10, scale: 1.05 }}
                    className="group flex-shrink-0 w-64"
                  >
                    <Card className="bg-gray-800/50 border-gray-700 hover:border-cyan-500 transition-all duration-300 h-32 backdrop-blur-sm">
                      <CardContent className="p-6 text-center h-full flex flex-col justify-center">
                        <div
                          className={`w-12 h-12 mx-auto mb-3 rounded-lg bg-gradient-to-r ${skill.color} p-2 group-hover:scale-110 transition-transform duration-300`}
                        >
                          <Icon className="w-full h-full text-white" />
                        </div>
                        <h3 className="text-sm font-semibold text-white group-hover:text-cyan-400 transition-colors">
                          {skill.name}
                        </h3>
                      </CardContent>
                    </Card>
                  </motion.div>
                )
              })}
            </motion.div>
          </div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1 }}
            className="text-center mt-8"
          >
            <p className="text-gray-400 text-sm">
              Drag horizontally to explore all technologies
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
