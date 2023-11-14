import './first.scss'
import {motion} from 'framer-motion'

const First = () => {
    const variants={
        initial:{
            y:-500,
            opacity:0,
        },
        animate:{
            y:0,
            opacity:1,
            transition:{
                duration:1,
                staggerChildren:0.7,
            }
        }
    }
  return (
    <motion.div className='first' variants={variants} initial='initial' whileInView='animate'>
        <motion.button variants={variants}>Click me</motion.button> 
        <motion.p variants={variants}>click</motion.p>
        <motion.p variants={variants}>clicked</motion.p>
    </motion.div>
  )
}

export default First