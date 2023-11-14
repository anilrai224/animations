import React, { useRef } from 'react'
import './parallex.scss'
import {motion,useScroll,useTransform} from 'framer-motion'

const Parallex = () => {
    const ref = useRef();
    const {scrollYProgress} = useScroll({
        target:ref,
        offset:["start start","end start"]
    })
    const yText = useTransform(scrollYProgress,[0,1],["0%","500%"]);
    const xP = useTransform(scrollYProgress,[0,1],["0%","500%"])
  return (
    <div className='parallex' ref={ref}>
        <motion.h1 style={{y:yText}}>This is Parallex.</motion.h1>
        <motion.p style={{x:xP}}>BY ANIL RAI</motion.p>
    </div>
  )
}

export default Parallex