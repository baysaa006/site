import React from 'react'
import {BsLinkedin} from "react-icons/bs"
import {BsGithub} from 'react-icons/bs'
import {BsFacebook} from 'react-icons/bs'
import './headerSocials.css'

const HeaderSocials = () => {
  return (
    <div className="header_socials flex flex-col  gap-4 absolute items-center left-0 bottom-24 after:content-[''] after:h-8 after:w-px after:bg-primary ">
        <a href='https://linkedin.com' target="_blank" className='hover:text-wite' ><BsLinkedin/></a>   
        <a href='https://github.com' target="_blank" className='hover:text-white'><BsGithub/></a>
        <a href='https://facebook.com' target="_blank" className='hover:text-white'><BsFacebook/></a>
        <div className="conm"></div>
    </div>
  )
}

export default HeaderSocials