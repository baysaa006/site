import React from 'react'
// import {CV} from '../../asset/CV.pdf'

const Cta = () => {
  return (
    <div className='cta p-4 mt-6 flex gap-8'>
        <a  download className='btn'>
            Download CV
        </a>
        <a href='#contact' className='btn btn-primary'>
            Let's Talk 
        </a>

    </div>
  )
}

export default Cta