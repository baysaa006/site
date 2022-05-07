import React from 'react'
import {BsLinkedin} from "react-icons/bs"
import {BsGithub} from 'react-icons/bs'
import {BsFacebook} from 'react-icons/bs'
import './headerSocials.css'

const HeaderSocials = () => {
  return (
    <div className="header_socials flex flex-col  gap-4 absolute items-center left-0 bottom-24  ">
        <a href='https://www.linkedin.com/in/enkhbayar-munkhbayasgalan-171b40216/' target="_blank" className='hover:text-wite' ><BsLinkedin/></a>   
        <a href='https://github.com/baysaa006' target="_blank" className='hover:text-white'><BsGithub/></a>
        <a href='https://www.facebook.com/munkhbaysgalan.munkhuu' target="_blank" className='hover:text-white'><BsFacebook/></a>
        <div className="conm"></div>
    </div>
  )
}

export default HeaderSocials