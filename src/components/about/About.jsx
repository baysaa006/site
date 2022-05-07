import React from 'react'
import './about.css'
import pro from '../../asset/pro.jpg'

const About = () => {
  return (
  
    <section id='about' className='flex flex-col items-center  justify-center'>
      <h5>Get to Khow </h5>
      <h1>About me</h1>
      <div className=" me container flex justify-between  px-7 items-center">

      <img src={pro} className='h-80 w-80 pro  border-cyan-400 border-double border-2   hover:shadow-lg hover:shadow-stone-50 ' alt="" />
      <div className='content  flex flex-col items-center'>
        <h1 className=''>Hello World</h1>
        <p className=' tom pt-10'>Developer based in Mongolia. I'm eager to develop myself with new knowledge and aims to use blockchain technology to create interesting new technological solutions.</p>
      </div>
      </div>
      <div className='w-4/6 h-2 bg-white  mt-16 rounded-lg '>
      </div>
      <div className='w-'>
        
      </div>
    </section>
  )
}

export default About
