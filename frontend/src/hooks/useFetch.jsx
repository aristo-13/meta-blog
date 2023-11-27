import React, { useEffect, useState } from 'react'
import api from '../api/api'

function useFetch(url) {
 const [data,setData] = useState([])
 const [Loading,setLoading] = useState(true)
 const [error,setError] = useState('')

    useEffect(() =>{
        const fetchData = async() =>{
            try {
                const res = await api.get(url)
                setData(res.data.data)
             } catch (error) {
               setError(error.message)
             }finally{
               setLoading(false)
             }
        }
      
        fetchData()
    },[url])



  return {data,Loading,error}
}

export default useFetch
