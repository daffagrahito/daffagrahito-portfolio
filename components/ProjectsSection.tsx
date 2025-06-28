"use client"

import { motion } from "framer-motion"
import { ExternalLink } from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"
import { projects } from "@/data/projects"
import Image from "next/image"

export default function ProjectsSection() {
  return (
    <section id="projects" className="py-20 px-4 bg-gradient-to-b from-transparent via-gray-900/20 to-gray-800/40">
      <div className="container mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-5xl font-bold mb-6">
            <span className="bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">
              Recent Projects
            </span>
          </h2>

          <p className="text-xl text-gray-300 max-w-2xl mx-auto leading-relaxed font-light tracking-wide">
            Here are some of my projects i've worked on.
          </p>
        </motion.div>

        <div className="space-y-16">
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              viewport={{ once: true }}
              whileHover={{ y: -5 }}
              className="group"
            >
              <Card className="bg-gray-800/50 border-gray-700 hover:border-cyan-500 transition-all duration-500 backdrop-blur-sm overflow-hidden">
                <div className={`grid lg:grid-cols-12 gap-0 items-center ${index % 2 === 1 ? 'lg:flex-row-reverse' : ''}`}>
                  {/* Project Image */}
                  <div className={`relative lg:col-span-5 ${index % 2 === 1 ? 'lg:order-2' : 'lg:order-1'}`}>
                    <div className="relative h-64 lg:h-96 overflow-hidden">
                      <Image
                        src={project.image}
                        alt={project.title}
                        fill
                        className="object-cover transition-transform duration-700 group-hover:scale-105"
                      />
                      {/* Creative overlay with diagonal gradient */}
                      <div className={`absolute inset-0 bg-gradient-to-${index % 2 === 0 ? 'br' : 'bl'} from-gray-900/60 via-transparent to-cyan-500/20`} />
                      <div className="absolute inset-0 bg-gradient-to-t from-gray-900/80 via-transparent to-transparent" />
                    </div>
                  </div>
                  
                  {/* Project Content */}
                  <CardContent className={`lg:col-span-7 p-8 lg:p-16 flex flex-col justify-center ${index % 2 === 1 ? 'lg:order-1' : 'lg:order-2'}`}>
                    <div className="space-y-6">
                      <div className="flex items-start justify-between">
                        <div>
                          <h3 className="text-3xl lg:text-5xl font-bold text-white group-hover:text-cyan-400 transition-colors mb-2">
                            {project.title}
                          </h3>
                          <div className="w-20 h-1 bg-gradient-to-r from-cyan-400 to-purple-400 rounded-full"></div>
                        </div>
                        <a href={project.link} target="_blank" rel="noopener noreferrer" aria-label={`View ${project.title} project`}>
                          <ExternalLink className="w-8 h-8 text-gray-400 group-hover:text-cyan-400 transition-all duration-300 cursor-pointer hover:scale-125 hover:rotate-12 transform" />
                        </a>
                      </div>
                      
                      <p className="text-gray-400 leading-relaxed text-base lg:text-lg font-light tracking-wide">
                        {project.description}
                      </p>
                      
                      <div className="flex flex-wrap gap-3">
                        {project.tech.map((tech) => (
                          <span
                            key={tech}
                            className="px-4 py-2 bg-gradient-to-r from-cyan-500/20 to-purple-500/20 text-cyan-300 rounded-full text-sm font-medium border border-cyan-500/30 hover:border-cyan-400/50 transition-all duration-300 hover:scale-105"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>
                  </CardContent>
                </div>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
