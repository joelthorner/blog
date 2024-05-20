import React from 'react';
import { Link } from 'react-router-dom';
import seoString from '../../helpers/seoString';

function PostSmall({ post, showLink = true }) {
  const formatDate = (date) => {
    return new Date(date).toLocaleDateString();
  };

  return (
    <div className="flex flex-col group bg-white border shadow-sm rounded-2xl overflow-hidden hover:shadow-lg transition">
      <div className="p-4 md:p-5">
        {showLink ? <Link to={`/post/${post.seo}`}>
          <h2 className="text-xl font-bold text-gray-800">
            {post.title}
          </h2>
        </Link> : <h2 className="text-xl font-bold text-gray-800">
          {post.title}
        </h2>}
        <div className='mt-2 text-xs text-gray-500'>{formatDate(post.date)}</div>

        <div className='flex items-center justify-between mt-4'>
          <div className='flex gap-1'>
            {post.categories.map(cat =>
              <Link key={cat} className='inline-flex items-center gap-x-1.5 py-1.5 px-3 rounded-md text-xs font-medium border border-gray-200 bg-white text-gray-800 shadow-sm' to={`/category/${seoString(cat)}`}>
                {cat}
              </Link>
            )}
          </div>
          <div className='flex gap-1'>
            {post.tags.map(tag =>
              <Link key={tag} to={`/tag/${seoString(tag)}`}>
                <span className="inline-flex items-center gap-x-1.5 py-1.5 px-3 rounded-full text-xs font-medium border border-gray-200 bg-white text-gray-800 shadow-sm">{tag}</span>
              </Link>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default PostSmall;