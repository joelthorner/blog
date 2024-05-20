import React from 'react';
import { Link } from 'react-router-dom';
import seoTag from '../../helpers/seoTag';

function PostDetail({ post, showLink = true }) {
  const formatDate = (date) => {
    return new Date(date).toLocaleDateString();
  };

  return (
    <div class="flex flex-col group bg-white border shadow-sm rounded-2xl overflow-hidden hover:shadow-lg transition">
      <div class="p-4 md:p-5">
        {showLink ? <Link to={`/post/${post.seo}`}>
          <h2 class="text-xl font-bold text-gray-800">
            {post.title}
          </h2>
        </Link> : <h2 class="text-xl font-bold text-gray-800">
          {post.title}
        </h2>}
        <div className='mt-2 text-xs text-gray-500'>{formatDate(post.date)}</div>
        <div class="mt-4 text-gray-500" dangerouslySetInnerHTML={{ __html: post.body }}></div>
        <div className='flex gap-1 mt-4'>
          {post.tags.map(tag =>
            <Link to={`/tag/${seoTag(tag)}`}>
              <span class="inline-flex items-center gap-x-1.5 py-1.5 px-3 rounded-full text-xs font-medium border border-gray-200 bg-white text-gray-800 shadow-sm">{tag}</span>
            </Link>
          )}
        </div>
      </div>
    </div>
  );
}

export default PostDetail;