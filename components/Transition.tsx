"use client"
import React from 'react'
import { motion } from 'framer-motion' // ⬅️ säkerställ att framer-motion är installerat

const TranstionsVariants = {
  initial: {
    y: "100%",
    height: "100%"
  },
  animate: {
    y: "0%",
    height: "0%"
  },
  exit: {
    y: ["0%", "100%"],
    height: ["0%", "100%"]
  }
}

const Transition = () => {
  return (
    <div>
      <motion.div
        className='fixed right-0 h-screen w-screen bottom-full z-[30] bg-[#2e2257]'
        variants={TranstionsVariants}
        initial="initial"
        animate="animate" // ⬅️ fixat stavfel (var: "aniamte")
        exit="exit"
        transition={{ delay: 0.2, duration: 0.6, ease: "easeInOut" }}
      />

      <motion.div
        className='fixed right-0 h-screen w-screen bottom-full z-[20] bg-[#3b2d71]'
        variants={TranstionsVariants}
        initial="initial"
        animate="animate" // ⬅️ fixat stavfel
        exit="exit"
        transition={{ delay: 0.4, duration: 0.6, ease: "easeInOut" }}
      />

      <motion.div
        className='fixed right-0 h-screen w-screen bottom-full z-[10] bg-[#4b3792]'
        variants={TranstionsVariants}
        initial="initial"
        animate="animate" // ⬅️ fixat stavfel
        exit="exit"
        transition={{ delay: 0.6, duration: 0.6, ease: "easeInOut" }}
      />
    </div>
  )
}

export default Transition
