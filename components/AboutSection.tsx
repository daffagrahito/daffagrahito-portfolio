"use client"

import { motion } from "framer-motion"
import { User, Target, Heart } from "lucide-react"

export default function AboutSection() {
  return (
    <section id="about" className="py-20 px-4 bg-gradient-to-b from-transparent via-gray-900/20 to-gray-800/40">
      <div className="container mx-auto max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-20"
        >
          <h2 className="text-5xl font-bold mb-6">
            <span className="bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">
              About Me
            </span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-cyan-500 to-purple-600 mx-auto rounded-full"></div>
        </motion.div>

        <div className="max-w-4xl mx-auto">
          <div className="space-y-12">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              viewport={{ once: true }}
              className="group"
            >
              <div className="bg-gray-900/90 border border-gray-700 rounded-2xl overflow-hidden backdrop-blur-md shadow-2xl hover:shadow-cyan-500/10 transition-all duration-500">
                {/* Mac-style header */}
                <div className="flex items-center bg-gray-800/80 px-6 py-3 border-b border-gray-700">
                  <div className="flex items-center gap-2">
                    <div className="w-3 h-3 bg-red-500 rounded-full"></div>
                    <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
                    <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                  </div>
                </div>
                {/* Content */}
                <div className="p-6">
                  <div className="flex items-start space-x-6">
                    <div className="w-14 h-14 bg-gradient-to-r from-blue-500 to-purple-600 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300 shadow-lg">
                      <User className="w-7 h-7 text-white" />
                    </div>
                    <div className="flex-1">
                      <h3 className="text-2xl font-bold text-white mb-3 tracking-wide">Who I Am</h3>
                       <p className="text-gray-300 leading-relaxed font-light tracking-wide text-base">
                        I'm Muhammad Daffa Grahito, a final-year Computer Science undergraduate at the University of Indonesia. I'm passionate about continuous learning and enjoy building projects that connect academic knowledge with real-world impact.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
              className="group"
            >
              <div className="bg-gray-900/90 border border-gray-700 rounded-2xl overflow-hidden backdrop-blur-md shadow-2xl hover:shadow-cyan-500/10 transition-all duration-500">
                {/* Mac-style header */}
                <div className="flex items-center bg-gray-800/80 px-6 py-3 border-b border-gray-700">
                  <div className="flex items-center gap-2">
                    <div className="w-3 h-3 bg-red-500 rounded-full"></div>
                    <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
                    <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                  </div>
                </div>
                {/* Content */}
                <div className="p-6">
                  <div className="flex items-start space-x-6">
                    <div className="w-14 h-14 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300 shadow-lg">
                      <Target className="w-7 h-7 text-white" />
                    </div>
                    <div className="flex-1">
                      <h3 className="text-2xl font-bold text-white mb-3 tracking-wide">My Goals</h3>
                      <p className="text-gray-300 leading-relaxed font-light tracking-wide text-base">
                        To gain practical experience in software development, contribute to impactful and innovative projects, collaborate with teams, and continuously grow as a developer—while making a meaningful difference in the tech industry and the communities it serves.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              viewport={{ once: true }}
              className="group"
            >
              <div className="bg-gray-900/90 border border-gray-700 rounded-2xl overflow-hidden backdrop-blur-md shadow-2xl hover:shadow-cyan-500/10 transition-all duration-500">
                {/* Mac-style header */}
                <div className="flex items-center bg-gray-800/80 px-6 py-3 border-b border-gray-700">
                  <div className="flex items-center gap-2">
                    <div className="w-3 h-3 bg-red-500 rounded-full"></div>
                    <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
                    <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                  </div>
                </div>
                {/* Content */}
                <div className="p-6">
                  <div className="flex items-start space-x-6">
                    <div className="w-14 h-14 bg-gradient-to-r from-purple-500 to-pink-600 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300 shadow-lg">
                      <Heart className="w-7 h-7 text-white" />
                    </div>
                    <div className="flex-1">
                      <h3 className="text-2xl font-bold text-white mb-3 tracking-wide">What Fuels My Passion</h3>
                      <p className="text-gray-300 leading-relaxed font-light tracking-wide text-base">
                        I'm driven by the endless possibilities that technology offers. Whether it's collaborating on group projects or discovering new programming paradigms, I find joy in the process of learning and creating. Each challenge is an opportunity to expand my knowledge and skills.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  )
}
