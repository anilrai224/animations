import React from 'react'
import {motion} from 'framer-motion'

const Links = () => {
  const variants={
    open:{
      transition:{
        staggerChildren:0.1,
      },
    },
    closed:{
      transition:{
        staggerChildren:0.05,
        staggerDirection:-1,
      }
    }
  }
  const textVariants={
    open:{
      x:0,
      opactiy:1,
      transition:{
        duration:0.5,
      }
    },
    closed:{
      x:100,
      opactiy:0,
      transition:{
        duration:0.5,
      }
    }
  }
  return (
    <motion.div className='links' variants={variants}>
      <motion.a href="/#" variants={textVariants}>Home</motion.a>
      <motion.a href="/#" variants={textVariants}>Test</motion.a>
      <motion.a href="/#" variants={textVariants}>Portfolio</motion.a>
      <motion.a href="/#" variants={textVariants}>About Us</motion.a>
      <motion.a href="/#" variants={textVariants}>Contact Us</motion.a>
    </motion.div>
  )
}

export default Links