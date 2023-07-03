import React,{useEffect} from 'react'
import {useMediaQuery} from 'react-responsive'
import bioImage from '../assets/images/bio-data.png'
import {motion,useAnimation} from 'framer-motion'
import {useInView} from 'react-intersection-observer'
import { useLottie } from 'lottie-react'
import BioLottie from '../libraries/robotics.json'




const BioData = () => {
    const control = useAnimation();
    const [ref, inView] = useInView();

    const options = {
      animationData: BioLottie,
      loop: true
    };
  
    const { View } = useLottie(options);

    const isMobile = useMediaQuery({
        query: '(min-width: 768px)'
      })

      const BioVariant={
        visible:{opacity:1,x:0},
        hidden:{opacity:0,x:'-90px'}
      }

      useEffect(() => {
        if (inView) {
          control.start("visible");
        } else {
          control.start("hidden");
        }
      }, [control, inView]);
  return (
    <>
     {/*===========Bio Data Section==========*/}
     <section className="text-white body-font" id='about'>
  <div className="container mx-auto md:w-[80%] w-[90%] flex px-5 sm:py-16 py-8 md:flex-row flex-col items-center">
  {isMobile?(
    <div className="lg:w-1/2 sm:w-1/3 w-full rounded-lg overflow-hidden mt-6 sm:mt-0 sticky top-0">
    <motion.div
    transition={{type:'spring',stiffness:120,default: { duration: 2 }}}
    ref={ref}
    variants={BioVariant}
    initial="hidden"
     animate={control}
     > 
    {View}
    </motion.div>
    </div>
  ):("")}
    
    <div className="lg:flex-grow md:w-1/2 lg:pl-24 md:pl-16 flex flex-col md:items-start md:text-left items-center text-center">
      <h1 className="title-font text-5xl mb-4 font-bold text-white">
      My Bio-data
      </h1>
      <div className="w-24 sm:h-1 md:h-2  my-4 rounded-full sm:mt-0 inline-flex bg-gradient-to-r from-[#2940D3] to-[#132edf] text-white relative z-10 title-font font-medium text-sm ">
      </div>
      <p className="mb-8 leading-relaxed lg:px-0 md:px-0"> 

      I can utilize my proficiency in cloud CES computing, with a recent transition to robotics/electronics engineering, to propel business expansion and enhance operational effectiveness. My aptitude for dissecting intricate issues, crafting strategic initiatives, and executing adaptable solutions has consistently yielded significant outcomes for various organizations.
       </p>
<div className='md:w-1/2 flex flex-col md:items-start md:text-left items-center text-center'>
<h1 className="title-font text-2xl mb-4 font-bold text-white">
      Skill/Experience
      </h1>
            <div>

            <h1 className="pt-2">Mechatronics Skills:</h1>
        <div className="mt-2 relative lg:w-[32rem] w-[20rem] overflow-hidden">
          
          <p className="">Fusion 360 3D modeling, Eagle/Fritzing PCB design, Arduino uno, raspberry pi,ADC/DAC,  embedded firmware, I2C, power electronics,  PID, motor drive.</p>
        </div>
            </div>

            <div>

            <h1 className="pt-2">Mechatronics Skills:</h1>
        <div className="mt-2 relative lg:w-[32rem] w-[20rem] overflow-hidden">
          
          <p className="">Fusion 360 3D modeling, Eagle/Fritzing PCB design, Arduino uno, raspberry pi,ADC/DAC,  embedded firmware, I2C, power electronics,  PID, motor drive.</p>
        </div>
            </div>
            <div>

            <h1 className="pt-2">Networking: </h1>
        <div className="mt-2 relative lg:w-[32rem] w-[20rem] overflow-hidden">
          
          <p className="">Switching and Routing.</p>
        </div>
            </div>
            <div>

            <h1 className="pt-2">Programming:  </h1>
        <div className="mt-2 relative lg:w-[32rem] w-[20rem] overflow-hidden">
          
          <p className="">C/C++, Machine learning, MATLAB Simulink, ROS/typescript, Linux Eclipse3, safety critical software, Rust</p>
        </div>
            </div>
            <div>

            <h1 className="pt-2">Soft Skills: </h1>
        <div className="mt-2 relative lg:w-[32rem] w-[20rem] overflow-hidden">
          
          <p className="">High level Problem Solving in conjugation with pattern recognition, Cross Functional, Mathematical Aptitude, Passionate, Positive attitude, flexible worker.</p>
        </div>
            </div>
            
            
            
            
            <motion.div whileHover={{ scale: 1.2 }} >

        <a href="https://docs.google.com/document/d/1Uz-6noYqtYAj7_SCFGsUrJP92uabnQsH/edit?rtpof=true&sd=true&pli=1" target="_blank" rel='noreferrer' className="inline-flex hover:bg-gradient-to-l bg-gradient-to-r from-[#2940D3] to-[#0e29dc] border-0 py-2 mt-8 px-6 focus:outline-none hover:bg-indigo-600 text-lg">Download CV</a>
        </motion.div>
      </div>

      
    </div>
    {!isMobile?(
    <div className="lg:w-1/2 sm:w-1/3 w-full rounded-lg overflow-hidden mt-6 sm:mt-0">
    {View}
    </div>
  ):("")}
  </div>
</section>
    </>
  )
}

export default BioData