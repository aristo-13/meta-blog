import React from 'react'
import { FaStar } from 'react-icons/fa'
import { Link } from 'react-router-dom'

function AuthorCard({author}) {
  return (
    <Link to={`/authors/${author?.id}`} className='border w-[250px] shadow-md rounded-xl p-2 cursor-pointer'>
       <div className='w-full h-[150px] border rounded-xl bg-cover' style={{backgroundImage: `url(${import.meta.env.VITE_IMG_URL+author?.attributes?.avatar?.data?.attributes?.url})`}}>

       </div>

       <div className='p-4'>
         <h1 className='font-bold text-blue-950 dark:text-white text-xl flex items-center gap-2'>
          {author?.attributes?.name} <FaStar />
         </h1>
         <p className='text-gray-500'>{author?.attributes?.about}</p>
       </div>
    </Link>
  )
}

export default AuthorCard
