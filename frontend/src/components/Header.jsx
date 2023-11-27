import React, { useState,useEffect, useContext } from 'react'
import Logo from './Logo'
import { Link } from 'react-router-dom'
import ToggleOffIcon from '@mui/icons-material/ToggleOff';
import ToggleOnIcon from '@mui/icons-material/ToggleOn';
import MenuIcon from '@mui/icons-material/Menu';
import { FaUser } from 'react-icons/fa';
import { useNavigate } from 'react-router-dom';
import { AuthenticationContext } from '../Contexts/AuthContext';

function Header({dark,setDark}) {
const [menu,setMenu] = useState(false)
const [border,setBorder] = useState(false)
const [ToggleUserIcon,setToggleUserIcon] = useState(false)
const {LoggedIn, setLoggedIn, setUserName,user,username,Logout} = useContext(AuthenticationContext)
const navigate = useNavigate()


  window.onscroll = () => {
   if(window.scrollY > 2){
      setBorder(true)
   }else{
      setBorder(false)
   }
  }


  const SignOut = async() => {
    try {
      await Logout()
      navigate('/')
      setUserName(null)
      setLoggedIn(false)
      localStorage.removeItem('username')
    } catch (error) {
      console.log(error)
    }
  }


  return (
    <header className='flex justify-between items-center p-5 md:p-0 md:px-5 fixed top-0 left-0 w-full bg-white dark:bg-[#181A2A] z-10 ' style={{borderBottom: border? "solid 1px rgba(0, 0, 0, 0.272)" : "none"}}>
     <div className='flex'>
        <button onClick={() => setMenu(!menu)} className='md:hidden text-blue-950 dark:text-white'><MenuIcon fontSize="large"/></button>
        <Logo dark={dark}/> 
     </div>
     
     <div className='fixed flex flex-col gap-2 shadow-2xl bg-white dark:bg-[#181A2A] dark:md:bg-transparent p-4 z-10 border-b w-full left-0 md:bg-transparent md:static md:flex-row md:justify-center md:items-center md:gap-4 md:border-none md:text-center text-black/80 md:text-sm lg:text-lg dark:text-white/90 duration-300 md:shadow-none' style={{top: menu? "56px" : "-100%"}}>
        <Link onClick={()=> setMenu(!menu)} className='hover:bg-black/20 p-3 md:p-1 rounded-md' to='/'>Home</Link>
        <Link onClick={()=> setMenu(!menu)} className='hover:bg-black/20 p-3 md:p-1 rounded-md' to='blogpage'>Blog</Link>
        <Link onClick={()=> setMenu(!menu)} className='hover:bg-black/20 p-3 md:p-1 rounded-md' to='authors'>Authors</Link>
        <Link onClick={()=> setMenu(!menu)} className='hover:bg-black/20 p-3 md:p-1 rounded-md whitespace-nowrap' to='blogpost'>Post blog</Link>
        <Link onClick={()=> setMenu(!menu)} className='hover:bg-black/20 p-3 md:p-1 rounded-md' to='contact'>Contact</Link>
     </div>
     <div className='flex items-center gap-2'>
        <div className='hidden md:block h-[30px] overflow-hidden rounded-full'>
           <input type="search" className='w-full h-full bg-gray-500/20 pl-4 outline-none' placeholder='search...'/>
        </div>

        
        <div onClick={()=> setToggleUserIcon(!ToggleUserIcon)} className='text-blue-950 dark:text-white text-2xl relative cursor-pointer'>
           <FaUser />

           <div className='absolute w-[250px] right-[2px] mt-2 flex flex-col justify-center items-center bg-white dark:bg-[#181A2A] dark:text-white border text-blue-950 p-4 rounded text-sm gap-2 shadow-md duration-300' style={{top: ToggleUserIcon? "25px" : "-1000%"}}>
               <span>{username? username : "User"}</span>
               <span className='text-gray-500'>{user?.email || "example@gmail.com"}</span>

               <div className='w-full flex items-center justify-between border p-2'>
                   <span>Dark Mode</span>
                  <button onClick={()=> setDark(!dark)} className='text-[#222263] duration-300 dark:text-white'>
                     {dark? <ToggleOnIcon fontSize='large'/> : <ToggleOffIcon fontSize='large'/>}
                  </button>
               </div>

               <button
                 onClick={LoggedIn? () => SignOut() : ()=> navigate('/login')}
                className='w-full p-2 border bg-[#222263] text-white'
               >
                  {LoggedIn? "Logout" : "Login"}
               </button>
           </div>
        </div>
     </div>
    </header>
  )
}

export default Header
