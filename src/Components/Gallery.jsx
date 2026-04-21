/* import React, { useEffect, useState } from 'react'
import Title from './Title'
import assets, {projectsData } from '../assets/assets'
import { motion } from "motion/react"

const Gallery = () => {

  const [currentIndex, setCurrentIndex] = useState(0);
 const [cardsToShow, setCardsToShow]= useState(1);   

useEffect(()=>{
    const updateCardsToShow = ()=> {
        if(window.innerWidth >= 1024){
            setCardsToShow(4);
        } else if (window.innerWidth >= 640) {
            setCardsToShow(2);
        }else{
            setCardsToShow(1)
        }
        };
        updateCardsToShow();

        window.addEventListener('resize', updateCardsToShow);
        return ()=> window.removeEventListener('resize', updateCardsToShow);
    
},[]);


const nextProject = () =>{
    setCurrentIndex((prevIndex) => (prevIndex + 1) % projectsData.length)
}
const prevProject = () =>{
    setCurrentIndex((prevIndex) => prevIndex === 0 ? projectsData.length - 1 : prevIndex - 1)
} 
  return (
    <div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        transition={{ staggerChildren: 0.2 }}
     id='gallery' className='flex flex-col items-center gap-7 px-4 sm:px-12 lg:px-24 xl:px-40 pt-30 text-gray-700 dark:text-white'>
        <Title title='Our Gallery' desc='From strategy to execution, we deliver the performance that uplift you toward God.'/> 

         slider buttons 
       <div className='flex justify-end items-center mb-8'>
        <button onClick={prevProject} className='p-3 bg-gray-200 rounded mr-2' aria-label='Previous Project'>
            <img src={assets.left_arrow} alt="Previous" />
        </button> 
        <button onClick={nextProject} className='p-3 bg-gray-200 rounded mr-2' aria-label='Next Project'>
            <img src={assets.right_arrow} alt="Next" />
        </button>
       </div>

         Project slider container 
        <div className='overflow-hidden'>
            <div className='flex gap-8 transition-transform duration-500 ease-in-out' style={{transform:`translateX(-${(currentIndex * 100) / cardsToShow}%)`}}>
                {projectsData.map((project, index)=>(
                    <div key={index} className='relative flex-shrink-0 w-full sm:w-1/4'>
                        <img src={project.image} alt={project.title} className='w-full h-auto mb-14' />
                        <div className='absolute left-0 right-0 bottom-5 flex justify-center'>
                            <div className='inline-block bg-white dark:bg-gray-800 w-3/4 px-4 py-2 shadow-md'>
                                
                                <p className='text-gray-500 text-sm'>
                                    {project.price} <span className='px-1'> </span> {project.location}
                                </p>
                            </div>
 
                        </div>
                    </div>
                ))}
            </div>
        </div> 
    </div>
  )
}

export default Gallery */

/* seEffect(()=>{
    const updateCardsToShow = ()=> {
        if(window.innerWidth >= 1024){
            setCardsToShow(projectsData.length)
        }else{
            setCardsToShow(1)
        }
        };
        updateCardsToShow();

        window.addEventListener('resize', updateCardsToShow);
        return ()=> window.removeEventListener('resize', updateCardsToShow);
    
},[]) */

/* import React, { useEffect, useState } from 'react'
import Title from './Title'
import assets, { projectsData } from '../assets/assets'
import { motion } from "motion/react"

const Gallery = () => {

  const [currentIndex, setCurrentIndex] = useState(0);
  const [cardsToShow, setCardsToShow] = useState(1);

  useEffect(() => {
    const updateCardsToShow = () => {
      if (window.innerWidth >= 1024) {
        setCardsToShow(4);
      } else if (window.innerWidth >= 640) {
        setCardsToShow(2);
      } else {
        setCardsToShow(1);
      }
    };

    updateCardsToShow();
    window.addEventListener('resize', updateCardsToShow);

    return () => window.removeEventListener('resize', updateCardsToShow);
  }, []);


  const nextProject = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex + 1 > projectsData.length - cardsToShow
        ? 0
        : prevIndex + 1
    );
  };

  
  const prevProject = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0
        ? projectsData.length - cardsToShow
        : prevIndex - 1
    );
  };

  return (
    <motion.div
      id='gallery'
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      transition={{ staggerChildren: 0.2 }}
      className='flex flex-col items-center gap-7 px-4 sm:px-12 lg:px-24 xl:px-40 pt-30 text-gray-700 dark:text-white'
    >
      <Title
        title='Our Gallery'
        desc='From strategy to execution, we deliver the performance that uplift you toward God.'
      />

      
      <div className='flex justify-end items-center mb-8 w-full'>
        <button
          onClick={prevProject}
          className='p-3 bg-gray-200 rounded mr-2'
          aria-label='Previous Project'
        >
          <img src={assets.left_arrow} alt="Previous" />
        </button>

        <button
          onClick={nextProject}
          className='p-3 bg-gray-200 rounded'
          aria-label='Next Project'
        >
          <img src={assets.right_arrow} alt="Next" />
        </button>
      </div>

      
      <div className='overflow-hidden w-full'>
        <div
          className='flex gap-8 transition-transform duration-500 ease-in-out'
          style={{
            transform: `translateX(-${(currentIndex * 100) / cardsToShow}%)`
          }}
        >
          {projectsData.map((project, index) => (
            <div
              key={index}
              className='relative flex-shrink-0'
              style={{ width: `${100 / cardsToShow}%` }} // ✅ dynamic width
            >
              <img
                src={project.image}
                alt={project.title}
                className='w-full h-auto mb-14'
              />

              <div className='absolute left-0 right-0 bottom-5 flex justify-center'>
                <div className='inline-block bg-white dark:bg-gray-800 w-3/4 px-4 py-2 shadow-md'>
                  <p className='text-gray-500 text-sm'>
                    {project.price} <span className='px-1'></span> {project.location}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

    </motion.div>
  );
};

export default Gallery; */


import React, { useEffect, useState } from 'react'
import Title from './Title'
import  { assets, projectsData } from '../assets/assets'
import { motion } from "motion/react"

const Gallery = () => {

  const [currentIndex, setCurrentIndex] = useState(0);
  const [cardsToShow, setCardsToShow] = useState(1);

  useEffect(() => {
    const updateCardsToShow = () => {
      if (window.innerWidth >= 1024) {
        setCardsToShow(4);
      } else if (window.innerWidth >= 640) {
        setCardsToShow(2);
      } else {
        setCardsToShow(1);
      }
    };

    updateCardsToShow();
    window.addEventListener('resize', updateCardsToShow);

    return () => window.removeEventListener('resize', updateCardsToShow);
  }, []);

  const nextProject = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex + 1 > projectsData.length - cardsToShow
        ? 0
        : prevIndex + 1
    );
  };

  const prevProject = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0
        ? projectsData.length - cardsToShow
        : prevIndex - 1
    );
  };

  // 👉 handle drag end (SNAP LOGIC)
  const handleDragEnd = (event, info) => {
    const swipe = info.offset.x;

    if (swipe < -50) {
      nextProject();
    } else if (swipe > 50) {
      prevProject();
    }
  };

  return (
    <div
      id='gallery'
      className='flex flex-col items-center gap-7 px-4 sm:px-12 lg:px-24 xl:px-40 pt-30 text-gray-700 dark:text-white'
    >
      <Title
        title='Our Gallery'
        desc='From strategy to execution, we deliver the performance that uplift you toward God.'
      />

      {/* Buttons */}
      <div className='flex justify-end items-center mb-8 w-full'>
        <button onClick={prevProject} className='p-3 bg-gray-200 rounded mr-2'>
          <img src={assets.left_arrow} alt="Previous" />
        </button>

        <button onClick={nextProject} className='p-3 bg-gray-200 rounded'>
          <img src={assets.right_arrow} alt="Next" />
        </button>
      </div>

      {/* Slider */}
      <div className='overflow-hidden w-full'>
        <motion.div
          drag="x"
          dragConstraints={{ left: 0, right: 0 }}
          onDragEnd={handleDragEnd}
          animate={{
            x: `-${(currentIndex * 100) / cardsToShow}%`
          }}
          transition={{ type: "spring", stiffness: 300, damping: 30 }}
          className='flex gap-8 cursor-grab active:cursor-grabbing'
        >
          {projectsData.map((project, index) => (
            <div
              key={index}
              className='relative flex-shrink-0'
              style={{ width: `${100 / cardsToShow}%` }}
            >
              <img
                src={project.image}
                alt={project.title}
                className='w-full h-auto mb-14 pointer-events-none'
              />

              <div className='absolute left-0 right-0 bottom-5 flex justify-center'>
                <div className='inline-block bg-white dark:bg-gray-800 w-3/4 px-4 py-2 shadow-md'>
                  <p className='text-gray-500 text-sm'>
                    {project.price} {project.location}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </motion.div>
      </div>

    </div>
  );
};

export default Gallery;





