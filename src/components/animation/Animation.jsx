import React, { useEffect } from 'react'
import './animation.scss'
import {motion, useAnimation} from 'framer-motion'
import { useInView } from 'react-intersection-observer'

const Animation = () => {

    const controls = useAnimation();
    const [ref,inView] = useInView();
    useEffect(()=>{
        if(inView){
            controls.start('animate');
        }
    },[controls,inView])
    const variants ={
        initial:{
            rotate:'-180deg',
            opacity:0,
            left:0,
            bottom:0,
        },
        // animate0:{
        //     opacity:1,
        //     transition:{
        //         duration:0.5,
        //         staggerChildren:0.9,
        //     }
        // },
        animate:{
            rotate:'-90deg',
            opacity:1,
            transition:{
                duration:1,
                staggerChildren:0.3,
            }
        },
        animate2:{
            rotate:'-50deg',
            opacity:1,
            left: '45px',
            bottom: '150px',
            transition:{
                duration:2,
                staggerChildren:0.3,
            }
        },
        animate3:{
            rotate:'0deg',
            opacity:1,
            left: '210px',
            bottom: '230px',
            transition:{
                duration:2,
                staggerChildren:0.3,
            }
        },
        animate4:{
            rotate:'50deg',
            opacity:1,
            left: '380px',
            bottom: '150px',
            transition:{
                duration:2,
                staggerChildren:0.3,
            }
        },
        animate5:{
            rotate:'90deg',
            opacity:1,
            left: '420px',
            // bottom: '0',
            transition:{
                duration:2,
                staggerChildren:0.3,
            }
        },
    }
  return (
    <motion.div className='animation' ref={ref}>
        <motion.div className="container" variants={variants} >
            <motion.div className="one" variants={variants} animate={controls}>
                <motion.p>One</motion.p>
            </motion.div>
            <motion.div className="one" variants={variants} initial='initial' animate={controls}>
                <motion.p>Two</motion.p>
            </motion.div>
            <motion.div className="one" variants={variants} initial='initial' animate={controls}>
                <motion.p>Three</motion.p>
            </motion.div>
            <motion.div className="one" variants={variants} initial='initial' animate={controls}>
                <motion.p>Four</motion.p>
            </motion.div>
            <motion.div className="one" variants={variants} initial='initial' animate={controls}>
                <motion.p>Five</motion.p>
            </motion.div>
        </motion.div>
    </motion.div>
  )
}

export default Animation