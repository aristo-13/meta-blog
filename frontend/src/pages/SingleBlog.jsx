import React from 'react'
import Adspace from '../components/Adspace'
import { useParams } from 'react-router-dom'
import useFetch from '../hooks/useFetch'

function SingleBlog() {
 const {id} = useParams()
 const {data,Loading,error} = useFetch(`blogs/${id}?populate=*`)

 

  return (
    <div>
       <div className="p-8" >
                  <div className='w-full  text-blue-950 '>
                     <span className='bg-blue-700 text-white px-3 py-[2px] top-[2px] left-1 rounded'>{data?.attributes?.Category}</span>
                      <p className='text-blue-950 p-4 dark:text-white font-bold w-[min(100%,800px)]'>{data?.attributes?.summery}</p>
                  </div>
            <div className='flex items-center gap-4'>
                <div className='flex gap-2 items-center'>
                      <div className='w-[25px] h-[25px] rounded-full bg-cover border bg-gray-400' style={{backgroundImage: `url(${import.meta.env.VITE_IMG_URL+data?.attributes?.author?.data?.attributes?.avatar?.data?.attributes?.url})`}}></div>
                      <h1 className='text-[0.8rem] text-gray-500'>{data?.attributes?.author?.data?.attributes?.name}</h1>
                </div>
                
                <span className='text-[0.7rem] text-gray-500'>{data?.attributes?.date}</span>
            </div>
         </div>

         <div className='w-[90%] md:w-[80%] h-[200px] md:h-[450px] bg-slate-400/20 mx-auto rounded-xl relative mb-10 bg-contain md:bg-cover overflow-hidden' style={{backgroundImage: `url(${import.meta.env.VITE_IMG_URL+data?.attributes?.img?.data?.attributes?.url})`}}></div>

          <Adspace />
         <div className='p-4'>
             <h1 className='text-2xl font-bold text-center pb-4 text-blue-950 dark:text-white'>{data?.attributes?.title}</h1>
            <p className='text-blue-950 dark:text-gray-400 text-center px-4'>
              {(data?.attributes?.content)?.substring(0,900)} <br /> <br />
              {(data?.attributes?.content)?.substring(900,1200)} <br /> <br />
              {(data?.attributes?.content)?.substring(1200,3000)} <br />  <br />

                <Adspace />

              {(data?.attributes?.content)?.substring(3000,3700)} <br /> <br />
              {(data?.attributes?.content)?.substring(3700,4200)} <br /> <br />
              {(data?.attributes?.content)?.substring(4200,5000)} <br />  <br />
              {(data?.attributes?.content)?.substring(5000,5700)} <br />  <br />
              {(data?.attributes?.content)?.substring(5700,6500)} <br />  <br />
            </p>

            <Adspace />
         </div>
    </div>
  )
}

export default SingleBlog
