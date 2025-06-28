"use client"

import { motion } from "framer-motion"
import { Mail } from "lucide-react"
import { SiGithub, SiLinkedin, SiMedium, SiInstagram, SiDiscord } from "react-icons/si"

export default function ConnectSection() {
  return (
    <section id="connect" className="py-20 px-4 bg-gray-800/30">
      <div className="container mx-auto max-w-4xl text-center">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="space-y-12"
        >
          <h2 className="text-5xl font-bold">
            <span className="bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">
              Let's Connect
            </span>
          </h2>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto leading-relaxed font-light tracking-wide">
            I'm always excited to collaborate on innovative projects and connect with fellow developers, designers,
            and tech enthusiasts. Let's create something extraordinary together!
          </p>

          {/* Mac-style window wrapper */}
          <div className="bg-gray-900/90 border border-gray-700 rounded-2xl overflow-hidden backdrop-blur-md shadow-2xl hover:shadow-cyan-500/10 transition-all duration-500 max-w-4xl mx-auto">
            {/* Mac-style header */}
            <div className="flex items-center bg-gray-800/80 px-6 py-4 border-b border-gray-700">
              <div className="flex items-center gap-2">
                <div className="w-3 h-3 bg-red-500 rounded-full"></div>
                <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
                <div className="w-3 h-3 bg-green-500 rounded-full"></div>
              </div>
            </div>
            
            {/* Content */}
            <div className="p-8">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                <motion.a
                  href="https://github.com/daffagrahito"
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.05, y: -5 }}
                  whileTap={{ scale: 0.95 }}
                  className="flex items-center gap-3 px-6 py-4 bg-gradient-to-r from-gray-800/50 to-gray-700/50 hover:from-cyan-600/80 hover:to-purple-600/80 rounded-xl transition-all duration-300 border border-gray-600/50 hover:border-cyan-500/50 backdrop-blur-sm group"
                >
                  <SiGithub className="w-5 h-5 group-hover:scale-110 transition-transform duration-300" />
                  <span className="font-medium text-sm tracking-wide">GitHub</span>
                </motion.a>
                
                <motion.a
                  href="https://www.linkedin.com/in/daffa-grahito-b5b6a531b/"
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.05, y: -5 }}
                  whileTap={{ scale: 0.95 }}
                  className="flex items-center gap-3 px-6 py-4 bg-gradient-to-r from-gray-800/50 to-gray-700/50 hover:from-cyan-600/80 hover:to-purple-600/80 rounded-xl transition-all duration-300 border border-gray-600/50 hover:border-cyan-500/50 backdrop-blur-sm group"
                >
                  <SiLinkedin className="w-5 h-5 group-hover:scale-110 transition-transform duration-300" />
                  <span className="font-medium text-sm tracking-wide">LinkedIn</span>
                </motion.a>
                
                <motion.a
                  href="mailto:daffagrahito@gmail.com"
                  whileHover={{ scale: 1.05, y: -5 }}
                  whileTap={{ scale: 0.95 }}
                  className="flex items-center gap-3 px-6 py-4 bg-gradient-to-r from-gray-800/50 to-gray-700/50 hover:from-cyan-600/80 hover:to-purple-600/80 rounded-xl transition-all duration-300 border border-gray-600/50 hover:border-cyan-500/50 backdrop-blur-sm group"
                >
                  <Mail className="w-5 h-5 group-hover:scale-110 transition-transform duration-300" />
                  <span className="font-medium text-sm tracking-wide">Email</span>
                </motion.a>
                
                <motion.a
                  href="https://medium.com/@daffagrahito"
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.05, y: -5 }}
                  whileTap={{ scale: 0.95 }}
                  className="flex items-center gap-3 px-6 py-4 bg-gradient-to-r from-gray-800/50 to-gray-700/50 hover:from-cyan-600/80 hover:to-purple-600/80 rounded-xl transition-all duration-300 border border-gray-600/50 hover:border-cyan-500/50 backdrop-blur-sm group"
                >
                  <SiMedium className="w-5 h-5 group-hover:scale-110 transition-transform duration-300" />
                  <span className="font-medium text-sm tracking-wide">Medium</span>
                </motion.a>
                
                <motion.a
                  href="https://discord.com/users/dafuqq_"
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.05, y: -5 }}
                  whileTap={{ scale: 0.95 }}
                  className="flex items-center gap-3 px-6 py-4 bg-gradient-to-r from-gray-800/50 to-gray-700/50 hover:from-cyan-600/80 hover:to-purple-600/80 rounded-xl transition-all duration-300 border border-gray-600/50 hover:border-cyan-500/50 backdrop-blur-sm group"
                >
                  <SiDiscord className="w-5 h-5 group-hover:scale-110 transition-transform duration-300" />
                  <span className="font-medium text-sm tracking-wide">Discord</span>
                </motion.a>
                
                <motion.a
                  href="https://instagram.com/daffagrahitoo"
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.05, y: -5 }}
                  whileTap={{ scale: 0.95 }}
                  className="flex items-center gap-3 px-6 py-4 bg-gradient-to-r from-gray-800/50 to-gray-700/50 hover:from-cyan-600/80 hover:to-purple-600/80 rounded-xl transition-all duration-300 border border-gray-600/50 hover:border-cyan-500/50 backdrop-blur-sm group"
                >
                  <SiInstagram className="w-5 h-5 group-hover:scale-110 transition-transform duration-300" />
                  <span className="font-medium text-sm tracking-wide">Instagram</span>
                </motion.a>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
