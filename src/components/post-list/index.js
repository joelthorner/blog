import React from 'react';
import { Link } from 'react-router-dom';

const PostList = ({ posts }) => {
  const formatDate = (date) => {
    return new Date(date).toLocaleDateString();
  };

  return (
    <div className='flex gap-6 flex-col'>
      {posts.map((post, index) => (
        <div class="flex flex-col group bg-white border shadow-sm rounded-xl overflow-hidden hover:shadow-lg transition">
          <div class="p-4 md:p-5">
            <Link to={`/post/${post.seo}`}>
              <h2 class="text-lg font-bold text-gray-800">
                {post.title}
              </h2>
            </Link>
            <div class="mt-1 text-gray-500" dangerouslySetInnerHTML={{ __html: post.body }}></div>
            <p>Data: {formatDate(post.date)}</p>
          </div>
        </div>
        // <li key={index}>
        //   <h2>{post.title}</h2>
        //   <p>{post.body}</p>
        //   <p>Categories: {post.categories.join(', ')}</p>
        //   <p>Tags: {post.tags.join(', ')}</p>
        //   <p>Data: {formatDate(post.date)}</p>
        // </li>
      ))}
    </div>
  );
};

export default PostList;