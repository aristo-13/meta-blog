import React from 'react'
import {FaEnvelope,FaPhone} from "react-icons/fa"

function ContactCard({icon,buttonText}) {
  return (
    <div className='w-full md:flex-1 border border-t-4 p-3 relative flex flex-col gap-5 justify-center items-center rounded-xl'>
        <div className='absolute text-4xl md:text-5xl bg-blue-950 text-white p-5 rounded-full -top-6'>
           {icon === "Phone" ? <FaPhone /> : icon === "Envelope"? <FaEnvelope /> : <FaPhone />}
        </div>

        <p className='mt-20 w-[min(100%,300px)] text-blue-950/80 dark:text-white/70'>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Obcaecati explicabo libero animi dolorum tenetur quos, 
            reprehenderit officiis cumque quas tempore.
        </p>

        <button className='w-full p-4 border rounded-xl'>{buttonText}</button>
    </div>
  )
}

export default ContactCard
