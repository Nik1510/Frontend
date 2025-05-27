import React, { useEffect, useState } from 'react'
import { useLoaderData } from 'react-router-dom'


function Github() {

    // Method 1:- 
//     const [data,setData] =useState(0)
//     useEffect(()=>{
//         fetch('https://api.github.com/users/Nik1510')
//         .then(response=>response.json())
//         .then(data=>{
//             console.log(data);
//             setData(data);
//         })
//         .catch((err)=>{
//             console.log("error",err)
//         })
//     },[])


    const data = useLoaderData(0)
  return (
    <div className='text-center m-4 bg-gray-600 text-white p-4 text-3xl'>Github Followers: {data.followers}
    <img src={data.avatar_url} alt="Git picture" width={300} />
    </div>
    
  )
}


export default Github

// Method 2:-
export const githubInfoLoader =async ()=>{
    const response = await fetch('https://api.github.com/users/Nik1510');

    return response.json();
}