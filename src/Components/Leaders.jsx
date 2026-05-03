/* import React from 'react'
import Title from './Title'
import { leadersData } from '../assets/assets'
import { motion } from "motion/react"

const Leaders = () => {

  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}     
     id='leaders' className='flex flex-col items-center gap-7 px-4 sm:px-12 lg:px-24 xl:px-40 pt-30 text-gray-800 dark:text-white'>
      <Title title= 'Meet Our Leaders' desc='A passionate team of digital experts dedicated to your brands success.' />
    
      <div className='grid sm:grid-cols-2 lg:grid-cols-3 gap-6 w-full max-w-5xl'>
                  {leadersData.map((leader, index)=>(
                          <motion.div 
                              initial={{ opacity: 0, y: 30 }}
                              whileInView={{ opacity: 1, y: 0 }}
                              transition={{ duration: 0.5, delay: index * 0.2 }}
                              viewport={{ once: true }}
                          key={index} className='rounded-xl border border-gray-100 dark:border-gray-700 bg-white dark:bg-gray-900 hover:scale-102 duration-500 transition-all cursor-pointer'>
                              <img src={leader.image} className='w-full rounded-xl' alt="" />
                              <h3 className='mt-3 mb-2 text-lg font-semibold'>{leader.title}</h3>
                              <p className='text-sm opacity-60 w-5/6'>{leader.description}</p>
                          </motion.div>
                      ))
                  }
              </div>
    
    </motion.div>
  )
}

export default Leaders
 */

import React from 'react'
import Title from './Title'
import { leadersData } from '../assets/assets'
import { motion } from "motion/react"

const Leaders = () => {
  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}     
    id='leaders' className='flex flex-col items-center gap-7 px-4 sm:px-12 lg:px-24 xl:px-40 pt-30 text-gray-800 dark:text-white'>
      <Title title= 'Meet Our Leaders' desc='A passionate team of essence,dedicated to choir success.' />
    
      <div className='grid grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-5'>
        {leadersData.map((team, index)=>(
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
              viewport={{ once: true }}
            key={index} className='rounded-xl border border-gray-100 dark:border-gray-700 bg-white dark:bg-gray-900 hover:scale-102 duration-500 transition-all cursor-pointer'>
                <img src={team.image} className='w-full rounded-xl' alt="" />
                <div className='flex-1'>
                    <h3 className='font-bold text-sm'>{team.name}</h3>
                    <p className='text-xs opacity-60'>{team.title}</p>
                </div>
            </motion.div>
        ))}
      </div>
    
    </motion.div>
  )
}

export default Leaders
