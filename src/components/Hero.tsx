'use client'

import Navbar from './Navbar'
import Glow from './Glow'
import { motion } from 'framer-motion'

export default function Hero() {
  return (
    // 1. Added flex & justify-center to center everything perfectly on screen
    <main className="relative min-h-screen w-full overflow-hidden bg-black text-white flex flex-col justify-center">
      <Glow />
      <Navbar />

      // 2. Added px-4 (padding) so text doesn't touch the phone's screen edges
      <div className="relative z-10 text-center px-4 w-full">
        <motion.h1
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          // 3. Made font slightly smaller on mobile (text-5xl) and large on desktop (md:text-8xl)
          className="text-5xl sm:text-6xl md:text-8xl font-extrabold tracking-tight"
        >
          <span className="text-yellow-400">KIIT</span> NEXUS
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          // 4. Added max-w-sm and mx-auto so the subtitle wraps nicely on narrow screens
          className="mt-4 md:mt-6 text-gray-400 text-base md:text-lg max-w-sm mx-auto md:max-w-none"
        >
          Where Ambition Meets Opportunity
        </motion.p>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4 }}
          // 5. Changed to flex-col for mobile (buttons stack) and sm:flex-row for larger screens
          className="mt-8 md:mt-10 flex flex-col sm:flex-row gap-4 sm:gap-6 justify-center items-center w-full max-w-xs sm:max-w-none mx-auto"
        >
          {/* Added w-full sm:w-auto so buttons take full width on phone, normal width on desktop */}
          <button className="bg-yellow-500 w-full sm:w-auto text-black px-8 py-3 rounded-full font-semibold hover:bg-yellow-400 transition-colors">
            Enter Nexus
          </button>

          <button className="border border-white/20 w-full sm:w-auto px-8 py-3 rounded-full hover:bg-white/5 transition-colors">
            Explore Events
          </button>
        </motion.div>
      </div>
    </main>
  )
}


// 'use client'

// import Navbar from './Navbar'
// import Glow from './Glow'
// import { motion } from 'framer-motion'

// export default function Hero() {
//   return (
//     <main className="relative min-h-screen w-full overflow-hidden bg-black text-white">
//       <Glow />
//       <Navbar />

//       <div className="relative z-10 text-center">
//         <motion.h1
//           initial={{ opacity: 0, y: 40 }}
//           animate={{ opacity: 1, y: 0 }}
//           transition={{ duration: 0.8 }}
//           className="text-6xl md:text-8xl font-extrabold tracking-tight"
//         >
//           <span className="text-yellow-400">KIIT</span> NEXUS
//         </motion.h1>

//         <motion.p
//           initial={{ opacity: 0, y: 20 }}
//           animate={{ opacity: 1, y: 0 }}
//           transition={{ delay: 0.2 }}
//           className="mt-6 text-gray-400 text-lg"
//         >
//           Where Ambition Meets Opportunity
//         </motion.p>

//         <motion.div
//           initial={{ opacity: 0 }}
//           animate={{ opacity: 1 }}
//           transition={{ delay: 0.4 }}
//           className="mt-10 flex gap-6 justify-center"
//         >
//           <button className="bg-yellow-500 text-black px-8 py-3 rounded-full font-semibold">
//             Enter Nexus
//           </button>

//           <button className="border border-white/20 px-8 py-3 rounded-full">
//             Explore Events
//           </button>
//         </motion.div>
//       </div>
//     </main>
//   )
// }
