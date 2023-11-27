import React from 'react'
import Adspace from '../components/Adspace'
import PostCard from '../components/PostCard'
import { Link } from 'react-router-dom'
import useFetch from '../hooks/useFetch'
import { useState,useEffect } from 'react'

function Homepage() {
 const posts = [1,2,3,4,5,6,7,8,9]
 const {data,Loading,error} = useFetch('/blogs?populate=*')
 const [blog,setBlog] = useState([])

 useEffect(()=> {
  const dat = data.slice(0,3)
   setBlog(dat)
},[data])

  return (
    <main>
      {console.log(data? data : "")}
      <div className='w-[90%] h-[500px] bg-slate-400/20 mx-auto rounded-xl relative mb-10 bg-cover' style={{backgroundImage: `url(${import.meta.env.VITE_IMG_URL+data[2]?.attributes?.img?.data?.attributes?.url})`}}>
            <div className="w-[90%] h-[200px] md:w-[400px] md:h-[250px] bg-white absolute bottom-2 left-2 md:-bottom-5 md:left-10 border-2 rounded-2xl shadow-xl" ></div>

        </div>

        <Adspace />

        <div className='flex flex-col justify-center items-center'>
          <h1 className='w-full text-xl font-bold pl-6'>Latest Post</h1>
          <div className='w-full flex flex-wrap gap-[1rem] justify-center p-4'>
             {
              blog?.map((post) => (
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
