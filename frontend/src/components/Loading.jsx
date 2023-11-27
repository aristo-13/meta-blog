import React from 'react'

function Loading({styles,num}) {
    const result = [];
    for (let i = 1; i <= num; i++) {
        result.push(i);
    }

  return (
    <>
    
    {
       result.map((instance,index) => (
        <div className={styles + " bg-black/20 animate-pulse"} key={index}>
      
        </div>
       ))
    }
    </>
  
  )
}

export default Loading
