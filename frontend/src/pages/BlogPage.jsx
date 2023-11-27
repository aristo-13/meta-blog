import React, { useEffect, useState } from 'react'
import PostCard from '../components/PostCard'
import Adspace from "../components/Adspace"
import useFetch from '../hooks/useFetch'
import LoadingSkel from '../components/LoadingSkel'

function BlogPage() {
    const {data,Loading,error} = useFetch('/blogs?populate=*')
    const [blog,setBlog] = useState([])

useEffect(()=> {
  const dat = data.slice(0,5)
   setBlog(dat)
},[data])

const loadmore = () =>{
  setBlog(data)
}

  return (
    <main className='flex flex-col justify-center items-center'>
       <div className='w-[90%] md:w-[80%] h-[450px] bg-slate-400/20 mx-auto rounded-xl relative mb-10'>
       </div>

       <div className='w-full flex flex-wrap gap-[1rem] justify-center px-3 pb-5'>
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
