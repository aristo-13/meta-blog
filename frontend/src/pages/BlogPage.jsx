import React, { useEffect, useState } from 'react'
import PostCard from '../components/PostCard'
import Adspace from "../components/Adspace"
import useFetch from '../hooks/useFetch'
import LoadingSkel from '../components/LoadingSkel'
import {Link} from 'react-router-dom'

function BlogPage() {
    const {data,Loading,error} = useFetch('/blogs?populate=*')
    const [blog,setBlog] = useState([])

useEffect(()=> {
  const dat = data.reverse().slice(0,5)
   setBlog(dat)
},[data])

const loadmore = () =>{
  setBlog(data)
}

  return (
    <main className='flex flex-col justify-center items-center'>
      {console.log(data? data : "")}
       <div className='w-[90%] md:w-[80%] h-[450px] bg-slate-400/20 mx-auto rounded-xl relative mb-10 bg-cover overflow-hidden' style={{backgroundImage: `url(${import.meta.env.VITE_IMG_URL+data[3]?.attributes?.img?.data?.attributes?.url})`}}>
           <div className="absolute w-full h-full bg-black/60 "></div>
          <span className='absolute bg-blue-700/20 text-white px-3 py-[2px] top-4 left-4 rounded'>Popular</span>

          <div className='absolute bottom-0 left-0 p-4 w-[min(100%,500px)]'>
            <p className='p-2 text-white font-bold'>{data[3]?.attributes?.summery}</p>

            <Link to={`/blogs/${data[3]?.id}`} className='w-[120px] px-4 py-2 border ml-2 rounded backdrop-blur shadow-sm shadow-white/30 hover:bg-blue-950 duration-300'>Read</Link>
          </div>
           
          
       </div>

       <div className='w-full flex  gap-[1rem] justify-center px-3 pb-5 flex-wrap'>
             {Loading? <LoadingSkel styles='w-[min(100%,300px)] lg:w-[392px] h-[450px] bg-gray-500 rounded-xl' num={10}/>
              :blog?.map((post) => (
                <PostCard post={post}/>
              ))
             }
          </div>

          <button onClick={loadmore} className='border-2 p-2 rounded-lg m-5  text-black/80 dark:text-white'>Load More</button>
         <Adspace />
    </main>
  )
}

export default BlogPage
