import React from 'react';
import PostDetail from '../post-detail';
import PostSmall from '../post-small';

const PostList = ({ posts, postListMode = 'detail' }) => {
  return (
    <div className='flex gap-6 flex-col'>
      {posts.map(post => {
        if (post.date.getTime() > new Date().getTime()) {
          return <></>;
        }

        if (postListMode === 'detail') {
          return <PostDetail key={post.seo} post={post} />
        } else if (postListMode === 'small') {
          return <PostSmall key={post.seo} post={post} />
        }
        return <></>;
      })}
    </div>
  );
};

export default PostList;