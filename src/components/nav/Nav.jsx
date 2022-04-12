import React from 'react'
import './nav.css'
import {ImHome} from 'react-icons/im'
import {FaUserAlt} from 'react-icons/fa'
import{FaCode} from 'react-icons/fa'
import {BsHandbagFill} from 'react-icons/bs'
import { useState } from 'react'

const Nav = () => {
  const[activeNav, setActiveNav]=useState('#')
  return (
    
    <nav className=' nav flex fixed gap-4 bottom-8  '>
      <a id='menu' href='#' onClick={()=>setActiveNav('#')}  className= {activeNav==='#' ? 'active' : ''} ><ImHome/></a>
      <a id='menu' href='#about'  onClick={()=>setActiveNav('#about')}  className= {activeNav==='#about' ? 'active' : ''}><FaUserAlt/></a>
      <a  id='menu'href='#experience' onClick={()=>setActiveNav('#xperience')}  className= {activeNav==='#xperience' ? 'active' : ''} ><FaCode/> </a>
      <a id='menu' href='#portfolio' onClick={()=>setActiveNav('#portfolio')}  className= {activeNav==='#portfolio' ? 'active' : ''} ><BsHandbagFill/> </a>
      <a id='menu' href='#contact'  onClick={()=>setActiveNav('#contact')}  className= {activeNav==='#contact' ? 'active' : ''}><BsHandbagFill/> </a>
      

    </nav>
  )
}

export default Nav