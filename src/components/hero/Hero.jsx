import React, { useEffect } from 'react'
import './hero.scss'
import {motion,useAnimation} from 'framer-motion'
import { useInView } from 'react-intersection-observer'

const Hero = () => {
    const controls = useAnimation();
    const [ref,inView] = useInView();
    useEffect(()=>{
        if(inView){
            controls.start('animate')
        }
    },[controls,inView])
    const textVarients = {
        initial:{
            x:-500,
            opacity:0,
        },
        animate:{
            x:0,
            opacity:1,
            transition:{
                duration:1,
                staggerChildren:0.3,
            }
        },
    }
    const leftTextVariants = {
        initial:{
            x:600,
            opacity:0,
        },
        animate:{
            x:0,
            opacity:1,
            transition:{
                duration:1,
                staggerChildren:0.9,
            }
        },
    }
  return (
    <div className='hero' ref={ref}>
        <motion.div className="container">
            <motion.div className="textContainer" variants={textVarients} initial='initial' animate={controls}>
                <motion.h2 variants={textVarients}>We are the Champion</motion.h2>
                <motion.h1 variants ={textVarients}>My Friend</motion.h1>
                <motion.div className="btn" variants={textVarients}>
                    <motion.button variants={textVarients}>Talk To Me</motion.button>
                    <motion.button variants={textVarients}>By me a coffee</motion.button>
                </motion.div>
            </motion.div>
            <motion.h1 variants={leftTextVariants} initial='initial' animate='animate'>MY PICTURE</motion.h1>
        </motion.div>
    </div>
  )
}

export default Hero