'use client'

import Navbar from './Navbar'
import Glow from './Glow'
import { motion } from 'framer-motion'

export default function Hero() {
  return (
    <main className="relative min-h-screen w-full overflow-hidden bg-black text-white">
      <Glow />
      <Navbar />

      <div className="relative z-10 flex min-h-screen flex-col justify-center px-5 sm:px-10 pt-24 pb-12">
        <motion.h1
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-[13vw] sm:text-[10vw] md:text-[8vw] font-extrabold tracking-tight leading-none"
        >
          <span className="text-yellow-400">KIIT</span> NEXUS
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="mt-6 text-gray-400 text-lg"
        >
          Where Ambition Meets Opportunity
        </motion.p>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4 }}
          className="mt-10 flex gap-4 flex-wrap"
        >
          <button className="bg-yellow-500 text-black px-8 py-3 rounded-full font-semibold">
            Enter Nexus
          </button>

          <button className="border border-white/20 px-8 py-3 rounded-full">
            Explore Events
          </button>
        </motion.div>
      </div>
    </main>
  )
}
