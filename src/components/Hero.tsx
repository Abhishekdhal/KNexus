'use client'

import Navbar from './Navbar'
import Glow from './Glow'
import { motion } from 'framer-motion'

export default function Hero() {
  return (
    <main className="relative min-h-screen w-full overflow-hidden bg-black text-white pb-36 pt-8 sm:pt-12">
      <Glow />
      <Navbar />

      {/* Overlay for better text contrast on busy backgrounds */}
      <div className="absolute inset-0 z-5 bg-black/60 md:bg-black/30 pointer-events-none" />

      <div className="relative z-10 text-center px-2 xs:px-4 pt-8 max-w-full">
        <motion.h1
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="break-words text-2xl xs:text-3xl sm:text-5xl md:text-7xl font-extrabold tracking-tight leading-tight md:leading-[1.1] w-full max-w-[95vw] mx-auto"
        >
          <span className="text-yellow-400">KIIT</span> NEXUS
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="mt-3 md:mt-6 text-gray-400 text-sm xs:text-base sm:text-lg md:text-xl max-w-xs sm:max-w-xl mx-auto break-words"
        >
          Where <span className="font-bold text-yellow-400">Ambition</span> Meets <span className="font-bold text-white">Opportuni<br className='block sm:hidden'/>ty</span>
        </motion.p>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4 }}
          className="mt-8 md:mt-10 flex flex-col gap-4 w-full max-w-xs sm:max-w-md mx-auto"
        >
          <button className="bg-yellow-500 text-black px-8 py-3 rounded-full font-semibold w-full">
            Enter Nexus
          </button>

          <button className="border border-white/20 px-8 py-3 rounded-full w-full">
            Explore Events
          </button>
        </motion.div>
      </div>
    </main>
  )
}
