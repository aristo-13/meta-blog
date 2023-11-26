import React,{useState,useEffect,useLayoutEffect} from 'react'
import { Outlet } from 'react-router-dom'
import Header from '../components/Header'
import Footer from '../components/Footer'

function PagesLayout() {
  const [dark,setDark] = useState(localStorage.getItem("Darkmode"))

  useEffect(() => {
      localStorage.setItem("Darkmode", dark)
  },[])

  useLayoutEffect(() => {
    if(dark){
        document.documentElement.classList.add("dark");
    }else{
        document.documentElement.classList.remove("dark");
    }
  },[dark])


  return (
    <div className='dark:dark:bg-[#3B3C4A] text-white overflow-x-hidden'>
        <div className='max-w-[1300px] mx-auto min-h-screen relative'>
            <Header dark={dark} setDark={setDark}/>
            <div className='pt-20'>
               <Outlet />
            </div>
        </div>
       <Footer dark={dark}/>
    </div>
  )
}

export default PagesLayout
