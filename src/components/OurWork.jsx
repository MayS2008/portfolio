import React,{useState} from 'react'
import '../App.css'

const container = {
  hidden: {  scale: 0,skewX:'10deg' },
  visible: {
    scale: 1,
    skewX:'0deg',
    transition: {
      delayChildren: 0.4,
      staggerChildren: 0.2
    }
  }
};

const item = {
  hidden: { y: 20, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1
  }
};

const work=[
  {
    id:1,
    shortTitle:'Creating ROS Node for a turtlebot 3 robot',
    title:"Creating ROS Node for a turtlebot 3 robot to autonomously explore the robot arena containing obstacles using SLAM ( Simultaneous Localization and Mapping )Creating ROS Node for a turtlebot 3 robot to autonomously explore the robot arena containing obstacles using SLAM ( Simultaneous Localization and Mapping )",
    date:"Apr 2022 - May 2022Apr 2022 - May 2022",
    institute:"Associated with The University of SheffieldAssociated with The University of Sheffield",
    detail:"A celebration of collaboration and technological innovation, this team project showcases the power of collective effort and imagination. Tasked with the challenge of equipping a robot with the capability to autonomously explore its environment, the team rose to the occasion and developed a series of ROS nodes to bring their vision to life.With unwavering determination and a keen eye for detail, the team enabled the robot to traverse the obstacle-filled arena with grace and precision, each step guided by its autonomous algorithms. As the robot explored its surroundings, it generated a detailed map of the arena, capturing its every contour and nuance.With 90 seconds to showcase its capabilities, the robot embarked on a journey of discovery, traversing the unknown and pushing the boundaries of what was thought possible. Through its steadfast navigation, the robot explored as much of the arena as possible, avoiding obstacles and charting a path of triumph.This project stands as a testament to the power of collaboration and technological prowess, showcasing the limitless potential of human ingenuity and creativity.A celebration of collaboration and technological innovation, this team project showcases the power of collective effort and imagination. Tasked with the challenge of equipping a robot with the capability to autonomously explore its environment, the team rose to the occasion and developed a series of ROS nodes to bring their vision to life. With unwavering determination and a keen eye for detail, the team enabled the robot to traverse the obstacle-filled arena with grace and precision, each step guided by its autonomous algorithms. As the robot explored its surroundings, it generated a detailed map of the arena, capturing its every contour and nuance. With 90 seconds to showcase its capabilities, the robot embarked on a journey of discovery, traversing the unknown and pushing the boundaries of what was thought possible. Through its steadfast navigation, the robot explored as much of the arena as possible, avoiding obstacles and charting a path of triumph. This project stands as a testament to the power of collaboration and technological prowess, showcasing the limitless potential of human ingenuity and creativity.",
    skill:"Linux Python (Programming Language) · Robot Operating System (ROS) ",
    project:""
  },
  {
    id:2,
    shortTitle:'Treasure hunt using machine vision techniques Treasure hunt',
    title:"Treasure hunt using machine vision techniquesTreasure hunt using machine vision techniques",
    date:"Apr 2022 - May 2022Apr 2022 - May 2022",
    institute:`Associated with The University of Sheffield",
    detail:"This was a course project for the fulfillment of the coursework for Machine Vision. There were 5 objectives associated with this project :
    1. Try basic Machine vision techniques such as analysis of image histograms, implement different edge detection algorithms such as sobel & Prewitt on images with different types of noises . 
    2. Implementation of Optical flow algorithm.
    3. Automatic detection of a moving object in video frames.
    4. Treasure hunting 
    5. Study of different types of CNN'sThis was a course project for the fulfillment of the coursework for Machine Vision. There were 5 objectives associated with this project : 1. Try basic Machine vision techniques such as analysis of image histograms, implement different edge detection algorithms such as sobel & Prewitt on images with different types of noises . 2. Implementation of Optical flow algorithm. 3. Automatic detection of a moving object in video frames. 4. Treasure hunting 5. Study of different types of CNN's
    `,
    skill:"Machine Vision, Matlab",
    project:""
  },
  {
    id:3,
    shortTitle:'Tuning the gains for a Proportional-Integral (PI) controller',
    title:"Tuning the gains for a Proportional-Integral (PI) controller such that a feedback control system satisfies a set of requirements using Genetic Algorithm.Tuning the gains for a Proportional-Integral (PI) controller such that a feedback control system satisfies a set of requirements using Genetic Algorithm.",
    date:"Apr 2022 - May 2022",
    institute:"Associated with The University of Sheffield",
    detail:`This problem involved optimization of multiple objectives (nine) that affects the stability, Transient performance, and Steady state performance of a plant, some of these objectives are conflicting in nature for example rise time and maximum overshoot hence the problem here is to find a multiple optimal trade-off solution. In this case deployment of an evolutionary algorithm made sense as their population-based approach can find multiple optimal solution in its final population. Genetic algorithm was chosen for this purpose as they generate high-quality solutions to optimization and search problems. Genetic algorithm relies on biologically inspired operators like mutation, crossover, and selection.

    Genetic algorithm requires an initial population for implementation. To generate the initial population different types of sampling plans were used and appropriate plan was selected by evaluating them using evaluation matrices. In this case Sobol Sequence was selected because of its better space filling properties.
    
    A mathematical formulation of problem was done to identify the decision parameters from the Transfer function. Mathematical formulation also helped in formulation of objective space. 
    
    Different types of data exploratory methods were used to identify correlation between data and establish relation between decision parameters and objectives. 
    
    The results of optimization process are analyzed and presented in a systematic manner and based on those results recommendations are made on tuning the PI controller for the plant. Also, key trade-offs were discussed, and alternative approaches were also suggested.This problem involved optimization of multiple objectives (nine) that affects the stability, Transient performance, and Steady state performance of a plant, some of these objectives are conflicting in nature for example rise time and maximum overshoot hence the problem here is to find a multiple optimal trade-off solution. In this case deployment of an evolutionary algorithm made sense as their population-based approach can find multiple optimal solution in its final population. Genetic algorithm was chosen for this purpose as they generate high-quality solutions to optimization and search problems. Genetic algorithm relies on biologically inspired operators like mutation, crossover, and selection. Genetic algorithm requires an initial population for implementation. To generate the initial population different types of sampling plans were used and appropriate plan was selected by evaluating them using evaluation matrices. In this case Sobol Sequence was selected because of its better space filling properties. A mathematical formulation of problem was done to identify the decision parameters from the Transfer function. Mathematical formulation also helped in formulation of objective space. Different types of data exploratory methods were used to identify correlation between data and establish relation between decision parameters and objectives. The results of optimization process are analyzed and presented in a systematic manner and based on those results recommendations are made on tuning the PI controller for the plant. Also, key trade-offs were discussed, and alternative approaches were also suggested.
    `,
    skill:"",
    project:""
  },
  {
    id:4,
    shortTitle:'Design and Fabrication of an autonomous robot for picking up object from one location to another location',
    title:"Design and Fabrication of an autonomous robot for picking up object from one location to another location.",
    date:"Nov 2021 - Dec 2021",
    institute:"Associated with The University of Sheffield",
    detail:`Worked in a team of three to design the whole procedure of experiments. particularly the frame of the robot and the circuit structure
    -Responsible for designing the robot arm jaw structure by using Autodesk Fusion 360, laser cutting, and assembling the robot. 
    -Designed the circuit and wrote the code in C++ for Arduino UnoWorked in a team of three to design the whole procedure of experiments. particularly the frame of the robot and the circuit structure -Responsible for designing the robot arm jaw structure by using Autodesk Fusion 360, laser cutting, and assembling the robot. -Designed the circuit and wrote the code in C++ for Arduino Uno`,
    
    skill:"English · Research · Engineering",
    project:"https://youtu.be/aauMHBjGnpk"
  },
  {
    id:5,
    shortTitle:'Implementation & testing of control algorithm for obstacle avoidance & object',
    title:"Implementation & testing of control algorithm for obstacle avoidance & object following on the e puck2 robotImplementation & testing of control algorithm for obstacle avoidance & object following on the e puck2 robot",
    date:"Oct 2021 - Nov 2021",
    institute:"Associated with The University of Sheffield",
    detail:"The purpose of this project was to design, implement, and test a control strategy for the e-puck2 robot to accomplish two tasks i.e., Exploring a constrained environment with obstacles and chasing an object in an open environment. To accomplish these two tasks, inbuilt IR proximity sensors and ToF (time of flight) distance sensors were used for taking logical decisions. Both the tasks were performed successfully with some minor bugs in robots’ performance due to inherent uncertainties associated with real robots. Performance of the mentioned undertakings helped in understanding the problems associated with implementation of logic on real robots.The purpose of this project was to design, implement, and test a control strategy for the e-puck2 robot to accomplish two tasks i.e., Exploring a constrained environment with obstacles and chasing an object in an open environment. To accomplish these two tasks, inbuilt IR proximity sensors and ToF (time of flight) distance sensors were used for taking logical decisions. Both the tasks were performed successfully with some minor bugs in robots’ performance due to inherent uncertainties associated with real robots. Performance of the mentioned undertakings helped in understanding the problems associated with implementation of logic on real robots.",
    skill:"English · Research · Engineering",
    project:"https://github.com/Ankur6889/codes_for_e-puck"
  },
  {
    id:6,
    shortTitle:'Development of Machine learning Model for housing price prediction',
    title:"Development of Machine learning Model for housing price prediction.",
    date:"Sep 2021 - Oct 2021",
    institute:"Associated with The University of SheffieldAssociated with The University of Sheffield",
    detail:"	The objective of this project is to develop the best machine learning model that can predict the housing price for a given dataset. After careful consideration of all the available alternatives Linear Regression has been chosen to build a predictive model using Orange.A python code for learning curves is writtern for Error estimation to determine the effectiveness of our model .The objective of this project is to develop the best machine learning model that can predict the housing price for a given dataset. After careful consideration of all the available alternatives Linear Regression has been chosen to build a predictive model using Orange.A python code for learning curves is writtern for Error estimation to determine the effectiveness of our model ",
    skill:"Linux Python (Programming Language) · Robot Operating System (ROS) ",
    project:"https://github.com/Ankur6889/Housing-Price-Prediction-using-Machine-Learning-"
  },
  {
    id:7,
    shortTitle:'Navigation System-AirplaneNavigation System-Airplane',
    title:"Navigation System-AirplaneNavigation System-Airplane",
    date:"Mar 2023 - Present",
    institute:"Associated with The University of Sheffield",
    detail:`	>This is a project in aerospace engineering focused on designing an integrated GPS/IMU/Air-data navigation system for accurate estimation of an aircraft's position, airspeed body components, and attitude. 

    >The project involves constructing a navigation model with 12 states, 6 inputs, and 12 measurements. The objective is to extend the scalar extended Kalman filter (EKF) or iterated extended Kalman filter (IEKF) algorithm to work with vectors, while taking into account errors in sensor measurements, such as biases and noises. 
    
    >The project also involves developing a state estimation and fault detection and diagnosis (FDD) algorithm, with performance evaluation.
    `,
    skill:"",
    project:""
  },
  
   
]

const OurWork=()=>{
  const [isOpen,setOpen] = useState(false)
  const [filter, setFilter] = useState([]);
  
  
  const TriggerModal = (e,id)=>{
    // console.log(id)
    const item = work.filter(e=>e.id==id);
    setFilter(item)
    // console.log(filter) 
    setOpen(true)
  }

  
    return<>
        <section id='portfolio' className="text-white body-font">
  <div className="container md:w-[80%] w-[90%] px-5 lg:py-24 py-8 mx-auto">
    <div className="flex flex-col w-full mb-10">
      <h1 className="sm:text-5xl text-4xl font-medium title-font mb-4 text-white">
        Latest Work
      </h1>
      <div className=" w-24 sm:h-1 md:h-2  my-2 rounded-full sm:mt-0 inline-flex bg-gradient-to-r from-[#2940D3] to-[#0c25c8] text-white relative z-10 title-font font-medium text-sm ">
      </div>
      <p className="lg:w-2/3 leading-relaxed text-base">There is some of my latest work that i have work on it </p>
    </div>
    <section className="text-white">
  <div className="container px-6 py-1 mx-auto">
    <div className="mt-8 xl:mt-16 lg:flex lg:-mx-16">
     
      <div className="flex-1 mt-2 lg:mx-12 lg:mt-0">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 xl:grid-cols-3 ">
        {work.map((item,index)=>{

          return <div key={index} className="cursor-pointer border px-2 py-5 rounded" onClick={(e)=>{TriggerModal(e,item.id)}}>
            <h2 className="mt-4 text-xl font-semibold text-gray-800 capitalize dark:text-white">{item.shortTitle}</h2>
            {item.skill == '' ? '': (
            <p className="mt-2 text-lg tracking-wider text-gray-200 uppercase dark:text-blue-400 "><span className="text-white">Skill: </span>{item.skill}</p>
            )}
          </div>
        })}
          
        </div>
      </div>
    </div>
  </div>
</section>
    
    {/* <WorkImages filter={filter} container={container} item={item} /> */}

  </div>
</section>


{/* Modal For Project */}

{isOpen && 
<div className="relative flex justify-center">

  <div className="fixed inset-0 z-10 overflow-y-auto" aria-labelledby="modal-title" role="dialog" aria-modal="true">
    <div className="flex items-end justify-center min-h-screen px-4 pt-4 pb-20 text-center sm:block sm:p-0">
      <span className="hidden sm:inline-block sm:align-middle sm:h-screen" aria-hidden="true">​</span>
      <div className="relative inline-block px-4 pt-5 pb-4 overflow-hidden text-left align-bottom transition-all transform bg-white rounded-lg shadow-xl rtl:text-right dark:bg-gray-900 sm:my-8 sm:align-middle sm:max-w-6xl sm:w-full sm:p-6">
        <div>
          <div className="flex items-center justify-center">
            <svg xmlns="http://www.w3.org/2000/svg" className="w-8 h-8 text-gray-700 dark:text-gray-300" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M5 8h14M5 8a2 2 0 110-4h14a2 2 0 110 4M5 8v10a2 2 0 002 2h10a2 2 0 002-2V8m-9 4h4" />
            </svg>
          </div>
          <div className="mt-2 text-center">
          <p className="my-2 text-sm text-gray-500 dark:text-gray-400">
            {filter[0]?.institute}
            </p>
            <h3 className="text-lg font-medium leading-6 text-gray-800 capitalize dark:text-white" id="modal-title">{filter[0]?.title}</h3>
            <p className="mt-2 text-sm text-gray-500 dark:text-gray-400">
            {filter[0]?.date}
            </p>
            
            <p className="mt-2 text-sm leading-6 text-gray-300 dark:text-white">
            {filter[0]?.detail}
            </p>
            {filter[0]?.skill == '' ? '': (
            <p className="mt-2 text-sm text-gray-500 dark:text-gray-400">
            <span className="text-white text-bold">Skill: </span>
            {filter[0]?.skill} 
            </p>
            )}
          </div>
        </div>
        <div className="mt-5 sm:flex sm:items-center sm:justify-center">
          <div className="sm:flex sm:items-center ">
            <button onClick={()=>setOpen(false)} className="w-full px-4 py-2 mt-2 text-sm font-medium tracking-wide text-gray-700 capitalize transition-colors duration-300 transform border border-gray-200 rounded-md sm:mt-0 sm:w-auto sm:mx-2 dark:text-gray-200 dark:border-gray-700 dark:hover:bg-gray-800 hover:bg-gray-100 focus:outline-none focus:ring focus:ring-gray-300 focus:ring-opacity-40">
              Okay
            </button>
            {filter[0]?.project == '' ? '': (
            <a href={filter[0]?.project} className="w-full px-4 py-2 mt-2 text-sm font-medium tracking-wide text-white capitalize transition-colors duration-300 transform bg-blue-600 rounded-md sm:w-auto sm:mt-0 hover:bg-blue-500 focus:outline-none focus:ring focus:ring-blue-300 focus:ring-opacity-40">
              Show Project
            </a>
            )}
          </div>
        </div>
      </div>
    </div>
  </div>
</div>
}
    </>
}


export default OurWork;
