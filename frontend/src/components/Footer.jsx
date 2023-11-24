import React from 'react'
import Logo from './Logo'
import NewsLetter from './NewsLetter'

function Footer({dark}) {
  return (
    <footer className='flex flex-col bg-gray-400/5'>
        {/* top */}
        <div className='flex flex-col md:flex-row gap-2 pb-10 border-b dark:border-white/20 border-blue'>
            <div className="flex-1  flex flex-col gap-3 p-10">
                <h1 className='font-bold '>About</h1>
                <p className='text-justify  text-gray-500 dark:text-white/70'>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Autem possimus quibusdam modi corporis magni obcaecati
                    ipsum molestias.Itaque, vitae natus.
                </p>
                <ul className='text-gray-500 dark:text-white/70'>
                    <li><span className='font-bold text-white'>Email: </span>example@gmail.com</li>
                    <li><span className='font-bold text-white'>Phone: </span>+233 2 5689 3793</li>
                </ul>
            </div>
            <div className="flex-1  flex justify-between mx-auto">
                <div className="flex-1 flex flex-col gap-3 p-2 sm:p-10">
                  <h1 className='font-bold whitespace-nowrap'>Quick Link</h1>
                  <ul className='flex flex-col gap-3 text-gray-500 dark:text-white/70'>
                    <li>Home</li>
                    <li>About</li>
                    <li>Blog</li>
                    <li>Archived</li>
                    <li>Author</li>
                    <li>Contact</li>
                  </ul>
                </div>
                <div className="flex-1 flex flex-col  items-center gap-3 p-2 sm:p-10">
                  <h1 className='font-bold'>Category</h1>
                  <ul className='flex flex-col gap-3  text-gray-500 dark:text-white/70'>
                    <li>Lifestyle</li>
                    <li>Technology</li>
                    <li>Travel</li>
                    <li>Business</li>
                    <li>Economy</li>
                    <li>Sports</li>
                  </ul>
                </div>
            </div>
            <div className="flex-1 p-10">
                <NewsLetter />
            </div>
        </div>

        {/* down */}
        <div className='w-full flex flex-col justify-center items-center gap-2 md:flex-row md:justify-between p-4'>
            <Logo dark={dark}/>
            <div>
                <ul className='text-[0.7rem] sm:text-base flex gap-4 text-gray-500'>
                    <li className='whitespace-nowrap'>Terms of Use</li>
                    <li className='whitespace-nowrap'>Privacy Policy</li>
                    <li className='whitespace-nowrap'>Cookie Policy</li>
                </ul>
            </div>  
        </div>
    </footer>
  )
}

export default Footer
