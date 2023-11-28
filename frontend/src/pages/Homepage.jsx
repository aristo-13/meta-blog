import React from 'react'
import Adspace from '../components/Adspace'
import PostCard from '../components/PostCard'
import { Link } from 'react-router-dom'
import useFetch from '../hooks/useFetch'
import { useState,useEffect } from 'react'
import LoadingSkel from '../components/LoadingSkel'

function Homepage() {
 const posts = [1,2,3,4,5,6,7,8,9]
 const {data,Loading,error} = useFetch('/blogs?populate=*')
 const [blog,setBlog] = useState([])

 useEffect(()=> {
  const dat = data.reverse().slice(0,3)
   setBlog(dat)
},[data])

  return (
    <main>
      {console.log(data? data : "")}
      <div className='w-[90%] h-[500px] bg-slate-400/20 mx-auto rounded-xl relative mb-10 bg-cover' style={{backgroundImage: `url(${import.meta.env.VITE_IMG_URL+data[4]?.attributes?.img?.data?.attributes?.url})`}}>
          <div className="w-[90%] h-[200px] md:w-[400px] md:h-[250px] bg-white dark:bg-[#181A2A] absolute bottom-2 left-2 md:-bottom-5 md:left-10 border-2 rounded-2xl shadow-xl flex  flex-col p-2" >
                  <div className='w-full  text-blue-950 p-2'>
                     <span className='bg-blue-700 text-white px-3 py-[2px] top-[2px] left-1 rounded'>{data[4]?.attributes?.Category}</span>
                      <p className='text-blue-950 p-2 dark:text-white font-bold'>{data[4]?.attributes?.summery}</p>
                  </div>
            <div className='w-full absolute bottom-2 left-0 flex text-blue-950 justify-between items-center p-2'>
                <div className='flex gap-2 items-center'>
                      <div className='w-[25px] h-[25px] rounded-full bg-cover border bg-gray-400' style={{backgroundImage: `url(${import.meta.env.VITE_IMG_URL+data[4]?.attributes?.author?.data?.attributes?.avatar?.data?.attributes?.url})`}}></div>
                      <h1 className='text-[0.8rem] text-gray-500'>{data[4]?.attributes?.author?.data?.attributes?.name}</h1>
                </div>
                
                <span className='text-[0.7rem] text-gray-500'>{data[2]?.attributes?.date}</span>
            </div>
         </div>

      </div>

        <Adspace />

        <div className='flex flex-col justify-center items-center'>
          <h1 className='w-full text-xl font-bold pl-6'>Latest Post</h1>
          <div className='w-full flex flex-wrap gap-[1rem] justify-center p-4'>
              {Loading? <LoadingSkel styles='w-[min(100%,300px)] lg:w-[392px] h-[450px] bg-gray-500 rounded-xl' num={10}/>
             
              : blog?.map((post) => (
                <PostCard post={post}/>
              ))
             }
          </div>

          <Link to='/blogpage' className='border-2 p-2 rounded-lg m-5  text-black/80 dark:text-white'>View All Posts</Link>
        </div>

        <Adspace />
    </main>
   
  )
}

export default Homepage
