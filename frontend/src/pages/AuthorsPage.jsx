import React from 'react'
import AuthorCard from '../components/AuthorCard'
import useFetch from '../hooks/useFetch'
import LoadingSkel from '../components/LoadingSkel'

function AuthorsPage() {
 const {data,Loading,error} = useFetch('/authors?populate=*')

  return (
    <div>
        <div className="w-full flex flex-col justify-center items-center p-3">
            <h1 className='font-bold text-xl text-[#0d0d2b]/80 dark:text-white/90'>Meet Our Authors</h1>
            <p className='text-center max-w-[60%] text-gray-500 dark:text-gray-400'>
                Welcome to the heart of our community!
                Explore the talented individuals who bring 
                our blog to life. Each author on our team contributes 
                a unique perspective, expertise, and passion to create a 
                diverse tapestry of content. Get to know the faces and voices 
                shaping the narratives, insights, and stories you enjoy on our
                platform.
             </p>
        </div>
          {console.log(data? data: "")}
        <div className='flex flex-wrap gap-2 justify-center items-center'>

           {Loading ? <LoadingSkel styles='w-[250px] h-[250px] rounded-xl bg-gray-500' num={10}/>
            :data.map((author) => (
              <AuthorCard author={author}/>
            ))
           }
        </div>
    </div>
  )
}

export default AuthorsPage
