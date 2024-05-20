import React from 'react';
import { POSTS } from '../../data/posts';
import { useParams } from 'react-router-dom';
import seoTag from '../../helpers/seoTag';
import PostList from '../../components/post-list';

function Tag() {
  const { seo } = useParams();
  const posts = POSTS.filter(p => {
    const tags = p.tags.map(t => seoTag(t));
    return tags.includes(seo);
  });

  const tagTitle = (str) => {
    return str
      .split('-')
      .map((word, index) => {
        if (index === 0) {
          return word.charAt(0).toUpperCase() + word.slice(1);
        } else {
          return word.toLowerCase();
        }
      })
      .join(' ');
  };

  if (!posts) {
    return <h2>Posts not found</h2>;
  }

  return (
    <div>
      <h2 className='mb-4'>Tag: {tagTitle(seo)}</h2>
      <PostList posts={posts} />
    </div>
  );
}

export default Tag;