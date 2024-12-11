import React from 'react'
import { Link } from 'react-router-dom/cjs/react-router-dom.min'

function NotFound() {
  return (
    <div>
        <h1 className='text-red-500 absolute left-[40%] top-[40%] font-sans'>Page Not Found</h1>
        <Link to='/' className='text-blue-500 font-sans absolute left-[40%] top-[50%]'>Back to HomePage .....</Link>
    </div>
  )
}

export default NotFound