// File: src/components/Banner.jsx
import { motion } from 'framer-motion'

export default function Banner() {
  return (
    <motion.div
      className="relative bg-cover bg-center text-white p-6 rounded-lg my-4 text-center overflow-hidden"
      style={{
        backgroundImage: "url('https://img.freepik.com/premium-photo/world-map-is-creatively-designed-with-various-foods-dishes-representing-different-regions-showcasing-culinary-theme-plates-spices-ingredients-are-placed-around-map_1266336-17118.jpg')"
      }}
      initial={{ scale: 1 }}
      whileHover={{
        scale: 1.03,            // scale up the entire banner
        transition: { 
          type: 'spring', 
          stiffness: 100, 
          damping: 10 
        }
      }}
    >
      {/* Dark overlay for contrast */}
      <div className="absolute inset-0 bg-black bg-opacity-40 rounded-lg"></div>

      {/* Content on top of overlay */}
      <div className="relative z-10">
        {/* Headline pulses continuously, and grows larger on banner hover */}
        <motion.h2
          className="text-2xl md:text-4xl font-bold"
          initial={{ scale: 1 }}
          whileHover={{ scale: 1.2 }}   // extra scale on hover
          transition={{
            type: "spring",
            stiffness: 120,
            damping: 10,
            repeat: Infinity,
            repeatType: "reverse",
            duration: 1.5
          }}
        >
          50% off on all cuisines!
        </motion.h2>

        {/* Subtext fades in/out, optionally pulse on hover */}
        <motion.p
          className="mt-2"
          initial={{ opacity: 0.7 }}
          animate={{ opacity: 1 }}
          whileHover={{ opacity: 0.9 }}  // subtle change on hover
          transition={{ duration: 1, repeat: Infinity, repeatType: "reverse" }}
        >
          Use code: CUISINES50
        </motion.p>
      </div>
    </motion.div>
  )
}