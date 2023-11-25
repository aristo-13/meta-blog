import React from 'react'

function AuthorsPage() {
 const authors = [1,2,3,4,5,6,7,8,9]

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

        <div>
           
        </div>
    </div>
  )
}

export default AuthorsPage
