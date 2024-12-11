import React from 'react'
import { useParams } from 'react-router-dom'
import useFetch from './customHook'
import { useHistory } from 'react-router-dom'

function BlogDetails() {
    const {id} = useParams();
    const {data:blog, error, isPending} = useFetch('http://localhost:5000/blogs/' + id);
    const history = useHistory();
    const handleClik = () => {
     fetch ('http://localhost:5000/blogs/' + blog.id,
      {method: 'DELETE'}).then(() => {
        history.push('/');
      })
     

    }
  return (
    <div>
      {isPending && <div className='text-2xl font-bold absolute left-[50%] top-[50%]'>Loading...</div>}
      {error && <div className='text-red-500 absolute left-[40%] top-[40%]'>{error}</div>}
      {blog && <div className='p-6 bg-white hover:shadow-inner shadow-2xl w-[50%] mt-11 rounded'>
        <h1 className='font-2xl text-blue-500 font-sans font-bold'>{blog.title}</h1>
        <p className='text-1xl text-gray-500 font-sans'>write by {blog.author}</p>
        <p className='text-1xl text-gray-500 font-sans'>{blog.body}</p>
        <button className='bg-red-500 hover:bg-red-700 transition duration-500 ease-in-out text-white font-bold py-2 px-4 rounded mt-5' 
         onClick={handleClik}>
            Delete
          </button>
        
      </div>}
    </div>
  )
}

export default BlogDetails