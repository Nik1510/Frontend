import React from 'react'
import { useParams } from 'react-router-dom'
function User() {
    const {id} =useParams() // doesnot takes any paramaters
  return (
    <div className='bg-green-600 text-white text-3xl p-4 ' >User:{id}</div>
  )
}

export default User