import React from 'react'
import Title from './Title'
import { patronsData } from '../assets/assets'
import { motion } from "motion/react"

const Patron = () => {
  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}     
      className='flex flex-col items-center gap-7 px-4 sm:px-12 lg:px-24 xl:px-40 pt-30 text-gray-800 dark:text-white'>
      <Title title= 'Meet Our Patrons' desc='Our support system.' />
    
      <div className='grid grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-5'>
        {patronsData.map((team, index)=>(
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
              viewport={{ once: true }}
            key={index} className='rounded-xl border border-gray-100 dark:border-gray-700 bg-white dark:bg-gray-900 hover:scale-102 duration-500 transition-all cursor-pointer'>
                <img src={team.image} className='w-full rounded-xl' alt="" />
                <div className='flex-1'>
                    <h3 className='font-bold text-sm'>{team.name}</h3>
                    {/* <p className='text-xs opacity-60'>{team.title}</p> */}
                </div>
            </motion.div>
        ))}
      </div>
    
    </motion.div>
  )
}

export default Patron
