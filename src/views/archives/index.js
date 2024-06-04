import React from 'react';
import { POSTS } from '../../data/posts';
import groupPostsByYear from '../../helpers/groupPostsByYear';
import PostList from '../../components/post-list';

function Archives() {
  const groups = groupPostsByYear(POSTS);

  if (!groups) {
    return <h2>Archives not found</h2>;
  }

  return (
    <div className='flex flex-col gap-12'>
      {groups.map(year => (
        <div key={year.year}>
          <h2 className='mb-2'>{year.year}</h2>
          <div className='flex flex-col gap-4'>
            <PostList posts={year.posts} postListMode='small' />
          </div>
        </div>
      ))}
    </div>
  );
}

export default Archives;