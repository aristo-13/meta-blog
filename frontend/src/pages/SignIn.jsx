import React from 'react'
import { Link } from 'react-router-dom'
import { useContext,useState } from 'react'
import { AuthenticationContext } from '../Contexts/AuthContext'
import { useNavigate } from 'react-router-dom'


function SignIn() {
    const {signIn, setLoggedIn} = useContext(AuthenticationContext)
    const [email,setEmail] = useState('')
    const [password,setPassword] = useState('')
    const navigate = useNavigate()
    const [loading,setLoading] = useState(false)


    const handleSignIn = async(e) => {
       e.preventDefault()

       try {
        setLoading(true)
        await signIn(email,password)
        setLoggedIn(true)
        navigate("/blogpost")
       } catch (error) {
         console.log(error)
       }finally{
        setLoading(false)
    }
    }


  return (
    <div className='text-blue-950 dark:text-white w-[min(100%,400px)] border mx-auto p-4 flex flex-col items-center absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] shadow-md'>
        <h1 className='text-xl font-medium p-4'>Welcome, Author</h1>

        <form className='flex flex-col gap-2 w-full p-4 items-center' onSubmit={handleSignIn}>
            <input className='p-2 border w-full bg-black/5' type="text" placeholder='example@gmail.com' onChange={(e)=> setEmail(e.target.value)}/>
            <input className='p-2 border w-full bg-black/5' type="password" placeholder='password' onChange={(e)=> setPassword(e.target.value)}/>

            <button 
            type='submit' 
            className='w-full p-2 border rounded-xl bg-blue-950 text-white flex justify-center'
            >
                {loading? 
                <div 
                className='w-[20px] h-[20px] border-4 border-dashed border-white  rounded-full  animate-spin '></div> 
                 : "Login"
                 }
            </button>
               <span className='text-gray-500'>or</span>
            <Link to='/signup' className='w-full p-2 border rounded-xl flex justify-center font-medium'>Become an Author</Link>
        </form>
    </div>
  )
}

export default SignIn
