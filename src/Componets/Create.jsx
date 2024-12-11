import React, { useState } from 'react';
import {useHistory} from 'react-router-dom';

function Create() {
  const [title, setTitle] = useState('');
  const [body, setBody] = useState('');
  const [author, setAuthor] = useState('');
  const history = useHistory();

  const handleSubmit = (e) => {
    e.preventDefault();
    const blog = { title, body, author };
    
    fetch('http://localhost:5000/blogs', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(blog)
    }).then(() => {
      console.log('new blog added');
      // Reset form fields
      setTitle('');
      setBody('');
      setAuthor('');
      history.push('/');
    })

  }

  return (
    <div>
      <h1 className='ml-[170px] text-blue-400 text-2xl font-sans mt-10'>Add new Blog</h1>

      <form className='ml-[170px] mt-5' onSubmit={handleSubmit}>
        <div className='mb-5'>
          <label className='block font-sans mb-2'>Blog title:</label>
          <input
            type="text"
            className='p-2 border border-gray-400 rounded w-[500px] focus:outline-none focus:border-blue-500'
            required
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />
        </div>
        <div className='mb-5'>
          <label className='block font-sans mb-2'>Blog body:</label>
          <textarea
            className='p-2 border border-gray-400 rounded w-[500px] focus:outline-none focus:border-blue-500'
            required
            value={body}
            onChange={(e) => setBody(e.target.value)}
          ></textarea>
        </div>
        <div className='mb-5'>
          <label className='block font-sans mb-2'>Blog author:</label>
          <input
            type="text"
            className='p-2 border border-gray-400 rounded w-[500px] focus:outline-none focus:border-blue-500'
            required
            value={author}
            onChange={(e) => setAuthor(e.target.value)}
          />
        </div>
        <button
          type="submit"
          className='bg-blue-500 hover:bg-blue-700 transition duration-500 ease-in-out text-white font-bold py-2 px-4 rounded mt-3'
        >
          Add Blog
        </button>
      </form>
    </div>
  );
}

export default Create;
