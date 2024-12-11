import React from 'react'
import { use } from 'react'
import { useState, useEffect } from 'react'
import Bloglist from './Bloglist'
import useFetch from './customHook'

function Home() {

    const {data: blogs, isPending, error} = useFetch('http://localhost:5000/blogs');
  return (
  
    <div>
        {error && <div className='text-red-500 absolute left-[40%] top-[40%]'>{error}</div>}
        {isPending && <div className='text-2xl font-bold absolute left-[50%] top-[50%]'>Loading...</div>}
        {blogs && < Bloglist blogs={blogs} tittle = "All Blogs"  />}
        
        </div>
  )
}

export default Home