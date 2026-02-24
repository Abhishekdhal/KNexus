'use client'

import Navbar from './Navbar'
import Glow from './Glow'
import { motion } from 'framer-motion'

export default function Hero() {
  return (
    <main className="relative min-h-screen w-full overflow-hidden bg-black text-white pb-32">
      <Glow />
      <Navbar />

      <div className="relative z-10 text-center px-4 pt-8">
        <motion.h1
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-4xl xs:text-5xl sm:text-6xl md:text-8xl font-extrabold tracking-tight leading-tight md:leading-[1.1]"
        >
          <span className="text-yellow-400">KIIT</span> NEXUS
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="mt-4 md:mt-6 text-gray-400 text-base xs:text-lg md:text-xl max-w-xl mx-auto"
        >
          Where <span className="font-bold text-yellow-400">Ambition</span> Meets <span className="font-bold text-white">Opportunity</span>
        </motion.p>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4 }}
          className="mt-8 md:mt-10 flex flex-col xs:flex-row gap-4 xs:gap-6 justify-center items-center"
        >
          <button className="bg-yellow-500 text-black px-8 py-3 rounded-full font-semibold w-full xs:w-auto">
            Enter Nexus
          </button>

          <button className="border border-white/20 px-8 py-3 rounded-full w-full xs:w-auto">
            Explore Events
          </button>
        </motion.div>
      </div>
    </main>
  )
}
