import React from 'react';
import PostDetail from '../post-detail';

const PostList = ({ posts }) => {
  return (
    <div className='flex gap-6 flex-col'>
      {posts.map(post => (
        <PostDetail key={post.seo} post={post} />
      ))}
    </div>
  );
};

export default PostList;