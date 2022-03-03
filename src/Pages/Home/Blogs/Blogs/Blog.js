import React, { useState } from 'react';
import './Blog.css'

const Blog = (props) => {

    const { likes } = props.blog;
    const { username, title, thumb } = props.blog.data;

    const [count, setCount] = useState(likes);

    return (
        <div className='home-blog m-3 p-2 grid md:grid-cols-3 gap-2 rounded-md'>
            <div className="col-span-1">
                <img className='rounded-md' src={thumb} alt="" />
            </div>
            <div className="col-span-2">
                <h1 className='text-white text-2xl'>{title}</h1>
                <h1 className='text-white '><i className="fas fa-user"></i> {username}</h1>
                <hr />
                <div className='flex items-center justify-between'>
                    <div className='flex items-center '>
                        <button onClick={() => setCount(count + 1)} className=' blog-btn mr-1 mt-1'><i className="far fa-heart"></i></button>
                        <p className='text-white'>{count}</p>
                    </div>
                    <div>
                        <button className='btn-primary px-3 py-1 text-white mt-1' >Read Blog</button>
                    </div>
                </div>
            </div>

        </div>
    );
};

export default Blog;