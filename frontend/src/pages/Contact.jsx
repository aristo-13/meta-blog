import React from 'react'
import ContactCard from '../components/ContactCard'
import { FaFacebook, FaInstagram, FaLinkedin, FaPinterest, FaTwitter } from 'react-icons/fa'


function Contact() {
  return (
    <div className='text-[#0b0b23] dark:text-white flex flex-col justify-center items-center p-4 gap-6'>
       <h1 className='text-xl font-bold'>Get In Touch</h1>
       <p className='w-3/4 md:w-2/4 text-center text-gray-500'>
          We appreciate your interest in connecting with us. Your feedback and questions help us improve our services and tailor our content to your needs.
          We look forward to hearing from you soon!
      </p>

       <div className="flex p-4 gap-6 md:gap-4 flex-wrap">
          <ContactCard buttonText='Call Us' icon="Phone"/>
          <ContactCard buttonText='Mail Us' icon="Envelope"/>
          <ContactCard buttonText='Call Us' icon="Phone"/>
       </div>


       <div className="flex text-2xl cursor-pointer gap-6 p-5">
           <FaFacebook />
           <FaPinterest />
           <FaInstagram />
           <FaTwitter />
           <FaLinkedin />
       </div>
    </div>
  )
}

export default Contact
