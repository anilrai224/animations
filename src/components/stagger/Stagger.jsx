import React, { useEffect } from 'react'
import './stagger.scss'
import { motion,useAnimation } from 'framer-motion'
import { useInView } from 'react-intersection-observer'

const Stagger = () => {
  const controls = useAnimation();
  const [ref,inView]  = useInView();

  useEffect(()=>{
    if(inView){
      controls.start('animate');
    }
  },[controls,inView])

  const variants={
    initial:{
      y:-500,
      opacity:0,
      rotate:'40deg'
    },
    animate:{
      y:0,
      opacity:1,
      rotate:'0deg',
      transition:{
        duration:1,
        staggerChildren:0.5,
      }
    },
  }
  return (
    <motion.div className='stagger' ref={ref}>
      <motion.div className="container" variants={variants} initial='initial' animate={controls}>
        <div className="firstText">
          <motion.p className="line" variants={variants}>A</motion.p>
          <motion.p className="line" variants={variants}>N</motion.p>
          <motion.p className="line" variants={variants}>I</motion.p>
          <motion.p className="line" variants={variants}>L</motion.p>
        </div>
        {/* <motion.p className="line" variants={variants}></motion.p>
        <motion.p className="line" variants={variants}></motion.p> */}
        <div className="secondText">
          <motion.p className='line' variants={variants}>R</motion.p>
          <motion.p className='line' variants={variants}>A</motion.p>
          <motion.p className='line' variants={variants}>I</motion.p>
        </div>
      </motion.div>
    </motion.div>
  )
}

export default Stagger