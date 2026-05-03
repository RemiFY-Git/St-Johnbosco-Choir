import React from 'react'
import Title from './Title'
import { assets } from '../assets/assets'
import { motion } from "motion/react"

const AboutUs = () => {
  return (
    <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        transition={{ staggerChildren: 0.2 }}
     id='about-us' className='flex flex-col items-center mx-auto gap-7 px-4 sm:px-12 lg:px-24 xl:px-40 pt-30 text-gray-700 dark:text-white'>
        <Title title='About Us' desc='Sing Praises To The Lord !!!'/> 

        <div className='flex flex-col md:flex-row gap-16'>
        <img className='w-full sm:w-1/2 md:max-w-lg' src={assets.ppart2} alt="" />
        <div className='flex flex-col justify-center gap-6 md:w-2/4 text-gray-600'>
        <p>St Johnbosco Choir Omalicha is an active choir for Sunday 8am Mass at SS.Anthony and Jude Parish Umungasi Aba, Abia state Nigeria.</p>
        <p>Since our commission to service, we've worked tirelesslty to grow and deliver wonderfull songs, upgrade to high-quality equipments and standard logistics that cater to level up to praise and worship to God almighty, we offer an extensive external duties once called upon.</p>
        {/* <b className='text-gray-800'>Our Missions</b>
        <p>Our mission is .</p> */}
        </div>
      </div>
    </motion.div>
  )
}

export default AboutUs



