import React from 'react'
import { Link } from 'react-router-dom'

function PostCard({post}) {
  return (
    <Link to={`/blogs/${post.id}`} className='w-[min(100%,300px)] lg:w-[392px] flex flex-col p-4 justify-center items-center gap-4 border rounded-md flex-none cursor-pointer'>
       <div className='w-full h-[240px] rounded-md bg-gray-500 bg-cover relative' style={{backgroundImage: `url(${import.meta.env.VITE_IMG_URL+post?.attributes?.img?.data?.attributes?.url})`}}>
       </div>
       <div className='w-full  text-blue-950 p-2'>
         <span className='bg-blue-400/5 text-blue-500 px-3 py-1 top-1 left-1 rounded'>{post?.attributes?.Category}</span>
          <p className='text-gray-800 p-2 dark:text-white font-bold'>{(post?.attributes?.summery)?.substring(0,150) + '...'}</p>
       </div>
       <div className='w-full flex text-blue-950 justify-between items-center'>
        <div className='flex gap-2 items-center'>
           <div className='w-[25px] h-[25px] rounded-full bg-slate-400 bg-cover' style={{backgroundImage: `url(${import.meta.env.VITE_IMG_URL+post?.attributes?.author?.data?.attributes?.avatar?.data?.attributes?.url})`}}></div>
             <h1 className='text-[0.8rem] text-gray-500'>{post?.attributes?.author?.data?.attributes?.name || 'User'}</h1>
        </div>
           
           <span className='text-[0.7rem] text-gray-500'>{post?.attributes?.date}</span>
       </div>
    </Link>
  )
}

export default PostCard
