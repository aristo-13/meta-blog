import React, { useEffect, useState } from 'react'
import Overlay from '../components/Overlay'
import { Link } from 'react-router-dom'
import { useContext } from 'react'
import { AuthenticationContext } from '../Contexts/AuthContext'
import api from '../api/api'
import useFetch from '../hooks/useFetch'
import { useNavigate } from 'react-router-dom'

function BlogPost() {
 const [ConfirmAuthor,setConfirmAuthor] = useState(false)
 const {LoggedIn} = useContext(AuthenticationContext)
 const [image,setImg] = useState(null)
 const [title,setTitle] = useState('')
 const [content,setContent] = useState('')
 const [category,setCategory] = useState('')
 const [ImgUrl,setImgUrl] = useState('')
 const [summery,setSummery] = useState('')
 const {data,Loading,error} = useFetch('/blogs?populate=*')
 const username = localStorage.getItem("username")
 const navigate = useNavigate()

 const date = new Date()
   useEffect(() => {
    if(!LoggedIn){
      setConfirmAuthor(true)
    }else{
      setConfirmAuthor(false)
    }
   },[LoggedIn])



const postBlog = async(e) =>{
    e.preventDefault()

    const formData = new FormData();
    formData.append('files', image);

    const uploadResponse = await api.post('/upload', formData, {
      headers: {
        'Content-Type': 'multipart/form-data',
      },
    });

    setImgUrl(uploadResponse.data[0].url);

    const newEntries = {
      title: title,
      date: date.toLocaleDateString(),
      summery: summery,
      Category: category,
      img: ImgUrl,
      isRecent: true,
      content: content,
      author: {data: {name: username}}
    }

    {console.log(ImgUrl)}
    try {
      const res = await api.post(`/blogs`, {data: newEntries})
      console.log(res)
      navigate('/blogpage')
    } catch (error) {
      console.log(error)
    }
}


  return (
    <div className='text-blue-950 dark:text-white w-full  flex flex-col items-center p-4 relative'>
       
    <fieldset className='border-2 p-4 w-[90%] md:w-[60%] flex justify-center mx-auto'>
        <legend class='font-bold text-xl'>Start Writing</legend>

        <p class='text-center w-[70%] text-gray-500 dark:text-gray-400'>
            Get started on your blog journey. 
            Pour your thoughts onto the screen, 
            add images, and make your blog post 
            uniquely yours. Don't forget to proofread
            and add that personal touch!
        </p>
  </fieldset>

        
       <form className='w-[99%] md:w-[60%] p-5 flex flex-col gap-4' onSubmit={postBlog}>
           <input type="text" className='w-full p-4 rounded text-blue-950 dark:text-white border-2 dark:border bg-slate-400/10 dark:bg-black/5' placeholder='Blog Title...' onChange={(e)=>setTitle(e.target.value)}/>
           <textarea  className='w-full h-[200px] p-4 rounded text-blue-950 dark:text-white border-2 dark:border  bg-slate-400/10 dark:bg-black/5' placeholder='Start Writing...' onChange={(e)=>setContent(e.target.value)}></textarea>

           <div className='w-full flex flex-col md:flex-row gap-2'>
              <select id="blogCategory" name="blogCategory" className='flex-1 border p-2 dark:bg-[#3B3C4A]' onChange={(e)=>setCategory(e.target.value)}>
                  <option value="General">Select Category...</option>
                  <option value="Travel">Travel</option>
                  <option value="Lifestyle">Lifestyle</option>
                  <option value="Health">Health</option>
                  <option value="Technology">Technology</option>
                  <option value="Fashion">Fashion</option>
                  <option value="Food">Food</option>
                  <option value="Parenting">Parenting</option>
                  <option value="Finance">Finance</option>
                  <option value="Business">Business</option>
                  <option value="Photography">Photography</option>
                  <option value="Gaming">Gaming</option>
                  <option value="Education">Education</option>
              </select>

                <input type="text" placeholder='summery' className='p-2 flex-1 p-4 rounded text-blue-950 dark:text-white border-2 dark:border bg-slate-400/10 dark:bg-black/5' onChange={(e)=>setSummery(e.target.value)}/>
           </div>

           <div className='flex justify-between items-center border p-2'>
              <input type="file" accept='image/*' onChange={(e) => {
                setImg(e.target.files[0])
                setImgUrl(e.target.files[0])
              }}/>
              <div className='w-[50px] h-[50px] overflow-hidden bg-gray-500  border-2'>
                 {image &&  <img src={URL.createObjectURL(image)} alt=""  className='w-full h-full object-cover'/>}
              </div>
           </div>

            <div className='flex gap-4'>
                <button className='flex-1 border p-3 bg-[teal] text-white'>Save as Draft</button>
                <button type='submit' className='flex-1 border p-3 bg-blue-950 text-white'>Publish</button>
            </div>
       </form>
















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
