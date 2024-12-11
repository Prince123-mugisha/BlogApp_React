import React from 'react';
import { Link } from 'react-router-dom';
import { useHistory } from 'react-router-dom/cjs/react-router-dom.min';
function Bloglist({ blogs, tittle, handleDelete }) {
  const history = useHistory();
  const handleClick = (id) => { fetch(`http://localhost:5000/blogs/${id}`, 
    { method: 'DELETE' }).then(() => { history.push('/'); }); };

  return (
  <div>
    
    <div className='ml-20'>
    <div>
    <h1 className=' text-blue-400 font-sans text-2xl mt-9 ml-20'>{tittle}</h1>
    </div>
      {blogs.map((blog) => (
          
        <div key={blog.id} className='p-6 bg-white hover:shadow-inner shadow-2xl w-[50%] mt-11 rounded'>
          <Link to={`/blog/${blog.id}`}>
          <h1 className='font-2xl text-blue-500 font-sans font-bold'>{blog.title}</h1>
          <p className='text-1xl text-gray-500 font-sans'>write by {blog.author}</p>
          
          </Link>
        </div>
      ))
      }
    </div>
    </div>
  );
}

export default Bloglist;
