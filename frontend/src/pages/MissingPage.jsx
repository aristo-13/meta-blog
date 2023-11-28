import React from 'react'
import {FaSadTear} from 'react-icons/fa'
import { Link } from 'react-router-dom'

function MissingPage() {
  return (
    <div className='w-full h-full flex flex-col justify-center items-center mt-[30%] md:mt-[10%] text-blue-950 dark:text-gray-500'>
       <FaSadTear size={50}/>
       <p className='text-gray-500'>404 Page Not Found</p>
       <p className='text-gray-500'>Go to <Link className='underline text-blue-400/70' to='/'>HomePage</Link></p>
    </div>
  )
}

export default MissingPage
