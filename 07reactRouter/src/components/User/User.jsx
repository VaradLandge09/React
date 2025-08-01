import React from 'react'
import { useParams } from 'react-router-dom'

function User() {

    const {id} = useParams();
  return (
    <div className='bg-gray-600 text-white text-3xl rounded-2xl p-4 text-center'>User: {id}</div>
  )
}

export default User