import React from 'react'
import { Link } from 'react-router-dom'

function SignUp() {
  return (
      <div className='text-blue-950 dark:text-white w-[min(100%,400px)] border mx-auto p-4 flex flex-col items-center absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] '>
        <h1 className='text-xl font-medium p-4'>Become an Author</h1>

        <form className='flex flex-col gap-2 w-full p-4 items-center'>
        <input className='p-2 border w-full bg-black/5' type="text" placeholder='username'/>
            <input className='p-2 border w-full bg-black/5' type="text" placeholder='example@gmail.com'/>
            <input className='p-2 border w-full bg-black/5' type="password" placeholder='password'/>

            <button className='w-full p-2 border rounded-xl bg-blue-950 text-white'>SignUp</button>
               <span className='text-gray-500'>or</span>
            <Link to='/login' className='w-full flex justify-center p-2 border rounded-xl'>Sign In</Link>
        </form>
    </div>
  )
}

export default SignUp
