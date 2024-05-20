import React from 'react';
import { POSTS } from '../../data/posts';
import groupPostsByYear from '../../helpers/groupPostsByYear';
import PostSmall from '../../components/post-small';

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
            {year.posts.map(post => (
              <PostSmall post={post} />
            ))}
          </div>
        </div>
      ))}
    </div>
  );
}

export default Archives;