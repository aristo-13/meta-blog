import React,{useState} from 'react'
import { Outlet } from 'react-router-dom'
import Header from '../components/Header'
import Footer from '../components/Footer'

function PagesLayout() {
  const [dark,setDark] = useState(false)

  return (
    <div className='dark:dark:bg-[#3B3C4A] text-white overflow-x-hidden'>
        <div className='max-w-[1300px] mx-auto '>
            <Header dark={dark} setDark={setDark}/>
            <Outlet />
        </div>
       <Footer dark={dark}/>
    </div>
  )
}

export default PagesLayout
