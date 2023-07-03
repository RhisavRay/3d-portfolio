import React from 'react'
import { Tilt } from 'react-tilt'
import { motion } from 'framer-motion'
import { styles } from '../styles'
import { services } from '../constants'
import { fadeIn, textVariant } from '../utils/motion'

const About = () => {
  return (
    <>
      <motion.div variants={textVariant()}>
        <p className={styles.sectionSubText}>Introduction</p>
        <h2 className={styles.sectionHeadText}>Overview.</h2>
      </motion.div>
      <motion.p variants={fadeIn("", "", 0.1, 1)}>
        I'm a skilled software developer with experience in JavaScript, and expertise in frameworks like React.js. I'm
        a quick learner and work closely with clients to create efficient, scaleable, and user-friendly solutions that
        solve real-life problems.
      </motion.p>
    </>
  )
}

export default About