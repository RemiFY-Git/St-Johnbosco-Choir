
import React, { useState } from 'react'
import Title from './Title'
 import { assets } from '../assets/assets'
/* import toast from 'react-hot-toast' */
import { FaFacebook, FaInstagram, FaYoutube } from 'react-icons/fa'
import { motion } from "motion/react"

const ContactUs = () => {

  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}  
      transition={{ staggerChildren: 0.2 }}
      id='contact-us' className='flex flex-col items-center gap-7 px-4 sm:px-12 lg:px-24 xl:px-40 pt-30 text-gray-700 dark:text-white'>
      <Title title='Reach out to us' desc='From strategy to execution, we craft digital solutions that move your business forward.'/>
    
    
      <div className="space-y-8">
            <h3 className="text-3xl font-semibold mb-4">Contact</h3>
            
            </div>
            {/* EMAIL */}
             <div className="space-y-6 justify-center">
              <div className="flex items-start space-x-4">
                <div className="p-3 rounded-full bg-primary/20">
                <img src={assets.email_icon} alt="" />
                  {/* <Mail className="h-6 w-6 text-primary" /> */}
                </div>
                <div>
                  <h4 className="font-medium">Email</h4>
                  <a
                    href="mailto:raymondatuwaogu@gmail.com"
                    className="hover:text-primary transition-colors"
                  >
                    raymondatuwaogu@gmail.com
                  </a>
                </div>
              </div>
            </div> 
    
            {/* PHONE */}
            <div className="space-y-6 justify-center">
              <div className="flex items-start space-x-4">
                <div className="p-3 rounded-full bg-primary/20">
                <img src={assets.person_icon} alt="" />
                  {/* <PhoneCall className="h-6 w-6 text-primary" /> */}
                </div>
                <div>
                  <h4 className="font-medium">Phone Number</h4>
                  <a
                    href="tel:+2348106679983"
                    className="hover:text-primary transition-colors"
                  >
                    +234-810-667-9983
                  </a>
                </div>
              </div>
            </div>

            {/* SOCIALS */}
            <div id='connect' className="pt-8 text-foreground ">
              <h4 className="text-2xl font-semibold mb-4 text-center">Connect with Us</h4>
              <div className="flex space-x-4 justify-center">
                <a href="https://www.facebook.com/profile.php?id=61573804493703" target="_blank" className="rt hover:text-primary transition-colors">
                  {/* <Linkedin /> */}
                  <FaFacebook />
                </a>
                <a href="#" target="_blank" className="hover:text-primary transition-colors">
                  {/* <Twitter /> */}
                  <FaInstagram />
                </a>
                <a href="https://youtube.com@stjohnboscochoiraba?si=20cURwlMyUoHa" target="_blank" className="hover:text-primary transition-colors">
                  {/* <Twitter /> */}
                  <FaYoutube />
                </a>
                {/* <a href="#" target="_blank" className="hover:text-primary transition-colors">
                  <Instagram />
                  <img src={assets.instagram_icon} className="hover:text-primary transition-colors" alt="" />
                </a> */}
                {/* <a href="#" target="_blank" className="hover:text-primary transition-colors">
                  <Twitter />
                  
                </a> */}
                {/* <a href="#" target="_blank" className="hover:text-primary transition-colors">
                  <Twitter />
                  <img src={assets.twitter_icon} alt="" />
                </a> */}
              </div>
            </div>
          

    
    </motion.div>

    
    
  
  )
}

export default ContactUs
