import React,{useEffect} from 'react'
import FollowPointer from './components/FollowPointer'
import NavBar from './components/NavBar'
import BioData from './components/BioData'
import OurWork from  './components/OurWork'
import Contact from './components/Contact'
import Footer from './components/Footer'
import ParticleBackground from './libraries/ParticleJS/particle_Background'
import {motion,useAnimation} from 'framer-motion'
import {useInView} from 'react-intersection-observer'
import Typewriter from 'typewriter-effect';
import { useLottie } from 'lottie-react'
import MainLottie from './libraries/robo.json'
// import Scroll from 'react-scroll'
const App=(props)=>{
  const control = useAnimation();
  const [ref, inView] = useInView();

  const options = {
    animationData: MainLottie,
    loop: true
  };

  const { View } = useLottie(options);

  useEffect(() => {
    if (inView) {
      control.start("hidden");
    } else {
      control.start("visible");
    }
  }, [control, inView]);
  useEffect(()=>{
    const prevTitle = document.title;
    document.title = prevTitle + "- My Portfolio of Mern stack Development"
    return ()=>{document.title = prevTitle}
  },[])

  const boxVariant={
    visible:{opacity:0}
    ,hidden:{opacity:1}
  }
  const ImgVariant={
    visible:{opacity:0,y:'-90vh'},
    hidden:{opacity:1,y:0}
  }
  
    return<>
     {/* <FollowPointer /> */}
        {/* <ParticleBackground />  */}
        <NavBar />
        <motion.div 
    transition={{duration:1}}
    ref={ref}
    initial="hidden"
      variants={boxVariant}
     animate={control}
     >
        <div className="">
        <section className="text-white body-font">
            <div className="container md:w-[80%] w-[90%] px-5 mx-auto flex lg:py-20 md:py-20 sm:py-4 md:flex-row flex-col items-center">
                <div className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
                <p className="mb-4 text-[#2940D3] drop-shadow-sm leading-relaxed">Hi everyone</p>
                <h1 className="text-shadow-lg title-font xl:text-6xl text-5xl md:text-5xl mb-8 font-bold text-white"><Typewriter
  options={{
    strings: ' I am Tanmay Saxena',
    autoStart: true,
    loop: true,
  }}
/>
</h1>
                
             <p className="mb-12 leading-relaxed text-base">
             Results-driven technology professional with a passion for innovation and a proven track record of delivering cutting-edge solutions. With several years of experience in the IT industry, I have developed a deep understanding of various technologies and their practical applications.  I excel in vibrant and rapidly changing settings.
                </p>
                    <div className="flex justify-center">
                    <motion.div whileHover={{ scale: 1.2 }} >
                    <a href="/#contact" className="inline-flex hover:bg-gradient-to-l bg-gradient-to-r from-[#2940D3] to-[#1e38e1] border-0 py-2 px-6 focus:outline-none hover:bg-[#0d2cf8] text-lg">Contact Me</a>
                    </motion.div>
                    <motion.div whileHover={{ scale: 1.2 }} >
                    <a href="https://docs.google.com/document/d/1Uz-6noYqtYAj7_SCFGsUrJP92uabnQsH/edit?rtpof=true&sd=true&pli=1" target="_blank" rel='noreferrer' className="ml-4 inline-flex text-gray-700 bg-gray-200 border-0 py-2 px-6 focus:outline-none hover:bg-gradient-to-r from-slate-300 text-lg">DOWNLOAD CV</a>
                    </motion.div>
                </div>
            </div>
            <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6"> 
            <motion.div
    transition={{type:'spring',stiffness:120,default: { duration: 1 }}}
    ref={ref}
    variants={ImgVariant}
    initial="hidden"
     animate={control}
     >      
                {View}
                </motion.div>
            </div>
            </div>
        </section>
</div>
        </motion.div>
        <BioData />
<OurWork />
        
{/* CTA Section */}
<section className="bg-white dark:bg-gray-900">
    <div className="container flex flex-col items-center px-4 py-12 mx-auto text-center">
        <h2 className="max-w-2xl mx-auto text-2xl font-semibold tracking-tight text-gray-800 xl:text-3xl dark:text-white">
            Bring your Business to the <span className="text-blue-500">next level.</span>
        </h2>

        <p className="max-w-4xl mt-6 text-center text-gray-500 dark:text-gray-300">
        Results-driven technology professional with a passion for innovation and a proven track record of delivering cutting-edge solutions.
        </p>

        <div className="inline-flex w-full mt-6 sm:w-auto">
            <a href="/contact" className="inline-flex items-center justify-center w-full px-6 py-2 text-white duration-300 bg-blue-600 rounded-lg hover:bg-blue-500 focus:ring focus:ring-blue-300 focus:ring-opacity-80">
                Contact Me
            </a>
        </div>
    </div>
</section>
 

        {/* Resume */}
        <section className="text-white body-font" id="resume">
  <div className="container md:w-[80%] w-[90%] px-5 py-24 mx-auto items-start flex flex-wrap">
    <div className="lg:w-1/2 w-full mb-20 lg:mb-0 rounded-lg overflow-hidden top-10 sticky">
      <img alt="feature" className="object-contain object-center h-full w-full" src='/images/resume.svg' />
    </div>
    <div className="flex flex-col flex-wrap lg:py-6 -mb-10 lg:w-1/2 lg:pl-12 lg:text-left text-center">
    <div className="flex flex-col w-full mb-5">
      <h1 className="sm:text-5xl text-4xl font-medium title-font mb-4 text-white">
        Resume
      </h1>
      <div className=" w-24 sm:h-1 md:h-2  my-2 rounded-full sm:mt-0 inline-flex bg-gradient-to-r from-[#2940D3] to-[#0920b8] text-white relative z-10 title-font font-medium text-sm ">
      </div>
      <h1 className="sm:text-2xl text-4xl font-medium title-font mb-2 text-slate-200">
        My Work Experience
      </h1>
    </div>
      <div className="flex flex-col mb-10 lg:items-start items-center">
        
        <div className="flex-grow">
          <h2 className="text-slate-200 text-lg title-font font-medium mb-3">Research Assistant</h2>
          <h3 className="text-slate-200 text-md title-font font-medium mb-3">Rolls-Royce UTC, Sheffield, UK (February 2023 - Present)</h3>
          <ul className="leading-relaxed text-base">
          <li>• Successfully collaborated with Rolls-Royce UTC to develop a high-temperature battery-powered data logger flight sensor for gas turbine engines.</li>
          <li> 
• Implemented a Verilog-based digital sensor system to significantly enhance monitoring and control of system parameters.</li>
<li>• Designed and implemented a custom signal processing algorithm for precise data collection in extreme high-temperature environments using a quartz-based sensor. </li> 
<li>
• Conducted rigorous testing and validation using Altium Pspice under simulated engine conditions to optimize sensor performance and durability. 
</li>
<li>
• Leveraged ADC/DAC components and embedded framework to achieve enhanced functionality and seamless integration. 
</li>
</ul>
          <hr/>
        </div>
      </div>
      <div className="flex flex-col mb-10 lg:items-start items-center">
        
        <div className="flex-grow">
          <h2 className="text-slate-200 text-lg title-font font-medium mb-3">Cloud Solution Architect</h2>
          <h3 className="text-slate-200 text-md title-font font-medium mb-3">Thoughtsol Infotech Private limited (September 2021 - September 2022, New Delhi, India)</h3>
          <ul className="leading-relaxed text-base">
          <li>• Developed Power app for sales target automation which streamlined the data onboarding.</li>
          <li> 
• Developed comprehensive Power Bi report which analyzed inside sales data and produced accessible graph report.</li>
<li>• Helped in achieving Microsoft Network and Security Gold assessment for the organization. </li> 
<li>
• Developed a web-based file explorer application with Azure blob storage and Azure AD user authorization. 
</li>
<li>
• Leveraged ADC/DAC components and embedded framework to achieve enhanced functionality and seamless integration. 
</li>
</ul>
          <hr/>
        </div>
      </div>
      <div className="flex flex-col mb-10 lg:items-start items-center">
        
        <div className="flex-grow">
          <h2 className="text-slate-200 text-lg title-font font-medium mb-3">Research Intern - Electric Mobility</h2>
          <h3 className="text-slate-200 text-md title-font font-medium mb-3">Ola Electric Mobility Pvt. Ltd. (May 2021 - July 2021, New Delhi, India)</h3>
          <ul className="leading-relaxed text-base">
          <li>• Brought on emerging trends in electric mobility and sustainable energy sector.</li>
          <li> 
• Supported the team in creating a robust database for EV sector.</li>
<li>• Planned and understood various energy profile for active usage. </li> 
<li>
• Deployed fundamental understanding in development and deployment of EV solar panel. 
</li>
<li>
• Articulated and understood the geological location of charging stations and its usability.
</li>
</ul>
          <hr/>
        </div>
      </div>
      
     
      <div className="flex flex-col w-full mb-5">
      <h1 className="sm:text-2xl text-4xl font-medium title-font mb-2 text-slate-200">
        Education
      </h1>
    </div>
    <div className="flex flex-col mb-10 lg:items-start items-center">
        <div className="flex-grow">
          <h2 className="text-slate-200 text-lg title-font font-medium mb-3">Master of Science in Robotics</h2>
          <p className="leading-relaxed text-base">
          University Of Sheffield, UK
          </p>
          <hr/>
        </div>
      </div>
      <div className="flex flex-col mb-10 lg:items-start items-center">
        <div className="flex-grow">
          <h2 className="text-slate-200 text-lg title-font font-medium mb-3">Electronics and Communication Engineering</h2>
          <p className="leading-relaxed text-base">
          JSS Academy of Technical Education, AKTU • Noida, India
          </p>
          <hr/>
        </div>
      </div>
    </div>
  </div>
</section>

       {/* what client saying */}
       {/* <section className="bg-white dark:bg-gray-900">
  <div className="container px-6 py-10 mx-auto">
    <h1 className="text-2xl font-semibold text-center text-gray-800 capitalize lg:text-3xl dark:text-white">
      What clients saying
    </h1>
    <div className="flex justify-center mx-auto mt-6">
      <span className="inline-block w-40 h-1 bg-blue-500 rounded-full" />
      <span className="inline-block w-3 h-1 mx-1 bg-blue-500 rounded-full" />
      <span className="inline-block w-1 h-1 bg-blue-500 rounded-full" />
    </div>
    <div className="flex items-start max-w-6xl mx-auto mt-16">
      <button title="left arrow" className="hidden p-2 text-gray-800 transition-colors duration-300 border rounded-full rtl:-scale-x-100 dark:border-gray-700 dark:text-gray-200 dark:hover:bg-gray-800 lg:block hover:bg-gray-100">
        <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
        </svg>
      </button>
      <div>
        <p className="flex items-center text-center text-gray-500 lg:mx-8">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aperiam, quam. Odio voluptatem officiis
          eos illo! Pariatur, totam alias. Beatae accusamus earum quos obcaecati minima molestias. Possimus
          minima dolores itaque! Esse! Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea voluptates
          fugiat corrupti laudantium dolores reiciendis pariatur esse quod nihil quia cupiditate debitis
          quisquam nemo, accusamus animi explicabo? Architecto, unde laboriosam?
        </p>
        <div className="flex flex-col items-center justify-center mt-8">
          <img className="object-cover rounded-full w-14 h-14" src="https://images.unsplash.com/photo-1499470932971-a90681ce8530?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80" alt />
          <div className="mt-4 text-center">
            <h1 className="font-semibold text-gray-800 dark:text-white">Mia Brown</h1>
            <span className="text-sm text-gray-500 dark:text-gray-400">Marketer</span>
          </div>
        </div>
      </div>
      <button title="right arrow" className="hidden p-2 text-gray-800 transition-colors duration-300 border rounded-full rtl:-scale-x-100 dark:border-gray-700 dark:text-gray-200 dark:hover:bg-gray-800 lg:block hover:bg-gray-100">
        <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
        </svg>
      </button>
    </div>
  </div>
</section> */}
       
        <Contact />
<Footer />
    </>
}

export default App;