import React from 'react'

function LoadingSkel({styles,num}) {
    const result = [];
    for (let i = 1; i <= num; i++) {
        result.push(i);
    }

  return (
    <>
    
    {
       result.map((instance,index) => (
        <div className={styles + " animate-pulse"} key={index}>
      
        </div>
       ))
    }
    </>
  
  )
}

export default LoadingSkel
