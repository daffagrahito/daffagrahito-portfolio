"use client"

import { motion } from "framer-motion"
import { Heart, Coffee } from "lucide-react"

export default function Footer() {
  return (
    <footer className="py-12 px-4 bg-gradient-to-t from-gray-900 via-gray-800/50 to-transparent border-t border-gray-700/50">
      <div className="container mx-auto max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-gray-400 text-sm font-light tracking-wide">
              © 2025 Daffa Grahito. All rights reserved.
            </p>
            
            <div className="flex items-center gap-2 text-gray-400 text-sm">
              <span className="font-light tracking-wide">Made with</span>
              <Heart className="w-4 h-4 text-red-500 animate-pulse" />
              <span className="font-light tracking-wide">and</span>
              <Coffee className="w-4 h-4 text-amber-600" />
              <span className="font-light tracking-wide">using Next.js</span>
            </div>
          </div>
        </motion.div>
      </div>
    </footer>
  )
}
