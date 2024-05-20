import React from 'react';
import { POSTS } from '../../data/posts';
import { useParams } from 'react-router-dom';
import seoString from '../../helpers/seoString';
import PostList from '../../components/post-list';

function Category() {
  const { seo } = useParams();
  const posts = POSTS.filter(p => {
    const categories = p.categories.map(t => seoString(t));
    return categories.includes(seo);
  });

  const categoryTitle = (str) => {
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
      <h2 className='mb-4'>Category: {categoryTitle(seo)}</h2>
      <PostList posts={posts} />
    </div>
  );
}

export default Category;