import React from 'react'
import PostCard from '../components/PostCard'

function BlogPage() {
    const posts = [1,2,3,4,5,6,7,8,9]

  return (
    <main>
       <div className='w-[90%] md:w-[80%] h-[450px] bg-slate-400/20 mx-auto rounded-xl relative mb-10'>
       </div>

       <div className='w-full flex flex-wrap gap-[1rem] justify-center px-3 pb-5'>
             {
              posts.map((post) => (
                <PostCard />
              ))
             }
          </div>

    </main>
  )
}

export default BlogPage
