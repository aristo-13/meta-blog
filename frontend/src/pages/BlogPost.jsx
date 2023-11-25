import React, { useEffect, useState } from 'react'
import Overlay from '../components/Overlay'
import { Link } from 'react-router-dom'


function BlogPost() {
 const [ConfirmAuthor,setConfirmAuthor] = useState(false)
 const [LoggedIn,setLoggedIn] = useState(false)

   useEffect(() => {
    if(!LoggedIn){
      setConfirmAuthor(true)
    }
   },[ConfirmAuthor])

  return (
    <div className='text-blue-950 dark:text-white w-full h-[500px] flex p-4 relative'>
       {ConfirmAuthor && <Overlay />}
       <div className="absolute bg-white dark:bg-[#3B3C4A] w-[min(97%,350px)] flex flex-col justify-center items-center p-4 border gap-6 rounded shadow-xl top-[50%] left-[-100%] translate-x-[-50%] translate-y-[-90%] duration-300" style={{left: ConfirmAuthor? "50%" : "-100%"}}>
           <h1 className='text-xl font-bold dark:text-white'>Are you an Author?</h1>
             
           <div className="flex w-full gap-2">
              <Link to='/login' className='flex-1 flex justify-center items-center border p-2 rounded bg-green-700 text-white'>Yes</Link>
              <Link to='/signup' className='flex-1 flex justify-center items-center border p-2  rounded bg-red-700 text-white'>No</Link>
           </div>
       </div>
    </div>
  )
}

export default BlogPost
