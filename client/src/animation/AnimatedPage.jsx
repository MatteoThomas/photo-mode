import React from 'react'
import { motion } from 'framer-motion/dist/framer-motion'

const animations = {
    initial: {opacity: 0, x: -50},
    animate: { 
      opacity: 1, 
      x: 0,
      transition: {
        easeInOut:[0,.95,.02,1.03]
      }
    
    },
    exit: {opacity: 0},
  
}

const AnimatedPage = ({children})  => {
  return (
    <motion.div
    variants={animations}
    initial="initial"
    animate="animate"
    exit="exit"
    >{children}</motion.div>
  )
}

export default AnimatedPage