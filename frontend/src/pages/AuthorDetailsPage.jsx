import React from 'react'
import { useParams } from 'react-router-dom'
import useFetch from '../hooks/useFetch'
import PostCard from '../components/PostCard'
import LoadingSkel from '../components/LoadingSkel'

function AuthorDetailsPage() {
const {id} = useParams()
const {data,Loading,error} = useFetch(`/authors/${id}?populate=*`)



  return (
    <div className='w-full p-5 flex flex-col items-center gap-4'>
      <div className='w-[100px] h-[100px] md:w-[200px] md:h-[200px] bg-gray-500 rounded-full p-4 flex gap-3 mx-auto border-8 bg-cover'  style={{backgroundImage: `url(${import.meta.env.VITE_IMG_URL+data?.attributes?.avatar?.data?.attributes?.url})`}}>
      </div>


      <div className='flex flex-col'>
         <h1 className='font-bold text-blue-950 dark:text-white text-xl md:text-2xl'>Blogs by {data?.attributes?.name}</h1>
          <span className='text-center text-gray-500'>{data?.attributes?.about}</span>
      </div>

      <div className='flex flex-wrap gap-4 justify-center'>
        {Loading? 
            <LoadingSkel styles='w-[min(100%,300px)] lg:w-[392px] h-[450px] bg-gray-500' num={10}/>
           : data?.attributes?.blogs.data?.map((blog) => (
                <PostCard post={blog}/>
            ))
        }
      </div>
    </div>
  )
}

export default AuthorDetailsPage
