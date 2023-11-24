import React from 'react'
import Adspace from '../components/Adspace'
import PostCard from '../components/PostCard'

function Homepage() {
 const posts = [1,2,3,4,5,6,7,8,9]

  return (
    <main>
      <div className='w-[90%] h-[500px] bg-slate-400/20 mx-auto rounded-xl relative mb-10'>
            <div className="w-[90%] h-[200px] md:w-[400px] md:h-[250px] bg-white absolute bottom-2 left-2 md:-bottom-5 md:left-10 border-2 rounded-2xl shadow-xl"></div>

        </div>

        <Adspace />

        <div className='flex flex-col justify-center items-center'>
          <h1 className='w-full text-xl font-bold pl-6'>Latest Post</h1>
          <div className='w-full flex flex-wrap gap-[1rem] justify-center p-4'>
             {
              posts.map((post) => (
                <PostCard />
              ))
             }
          </div>

          <button className='border-2 p-2 rounded-lg m-5'>View All Posts</button>
        </div>

        <Adspace />
    </main>
   
  )
}

export default Homepage