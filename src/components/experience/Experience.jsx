import React from 'react'
import './experience.css'

const experience = () => {
  return (
    <section id='experience' className='flex flex-col items-center '>
      <h5>My</h5>
      <h1>Skills</h1>
      <div className='my flex justify-between w-3/4'>
        <div className=' ani'>
          <h1 className='gg'>Front end development</h1>
          <p className='text-sm '>Improving skills</p>
          <div className='  flex flex-col gap-2'>
            <h2 className='text-xl'>Skills</h2> 
            <p className='jj'>HTML5, CSS3, REACT, TAILWIND </p> 
            <h2 className='text-xl'>Tools</h2>
            <p className='jj'> VSEDITOR, GIT, CODEPEN</p> 
          </div>
        </div>
        <div className=' ani'>
         <h1 className='gg'>Dapp development </h1>
         <p className='text-sm'>Learning new skills</p>
         <div className='  flex flex-col gap-2'>
            <h2 className='text-xl'>Skills</h2>
            <p className='jj'> SOLIDITY, HARDHAT, IPFS</p> 
            <h2 className='text-xl'>Tools</h2>
            <p className='jj'> MORALIS, REMIX, OPENZEPPLIN, CODESANDBOX</p> 
          </div>
        </div>
      </div>
      <div className='w-4/6 h-2 bg-white  mb-8 rounded-lg '>
      </div>
    </section>
  )
}

export default experience