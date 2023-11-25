import React, { useState,useEffect } from 'react'
import Logo from './Logo'
import { Link } from 'react-router-dom'
import ToggleOffIcon from '@mui/icons-material/ToggleOff';
import ToggleOnIcon from '@mui/icons-material/ToggleOn';

function Header({dark,setDark}) {



useEffect(() => {
    if(dark){
        document.documentElement.classList.add("dark");
    }else{
        document.documentElement.classList.remove("dark");
    }
  },[dark])

  return (
    <header className='flex justify-between items-center p-5'>
     <div>
        <Logo dark={dark}/> 
     </div>
     <div className='hidden md:flex items-center gap-4 text-black/80 md:text-sm lg:text-lg dark:text-white/90'>
        <Link to='/' className=''>Home</Link>
        <Link to='blogpage' className=''>Blog</Link>
        <Link to='authors' className=''>Authors</Link>
        <Link to='blogpost' className=' whitespace-nowrap'>Post blog</Link>
        <Link to='contact' className=''>Contact</Link>
     </div>
     <div className='flex items-center gap-2'>
        <div className='hidden md:block h-[30px] overflow-hidden rounded-full'>
           <input type="search" className='w-full h-full bg-gray-500/20 pl-4 outline-none' placeholder='search...'/>
        </div>
        <button onClick={()=> setDark(!dark)} className='text-[#222263] duration-300 dark:text-white'>
          {dark? <ToggleOnIcon fontSize='large'/> : <ToggleOffIcon fontSize='large'/>}
        </button>
     </div>
    </header>
  )
}

export default Header
