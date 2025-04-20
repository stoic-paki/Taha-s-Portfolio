import React from 'react'
import { socialImgs } from '../constants'

const Footer = () => {
  return (
    <footer className='footer'>
        <div className='footer-container'>
            <div className='flex flex-col justify-center items-center md:items-start'>
                <a href="#">Visit My blog</a>
            </div>
            <div className='socials'>
                {socialImgs.map((img)=>(
                    <a className='icon' target='_blank' href={img.url} key={img.url}><img src={img.imgPath} alt="img" /></a>
                ))}
            </div>  
            <div className='flex flex-col justify-center'>
                <p className='text-center md:text-end '>
                    copyright {new Date().getFullYear()} Taha | all right reserved
                </p>
            </div>
        </div>
    </footer>
  )
}

export default Footer
