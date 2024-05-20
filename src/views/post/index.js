import React from 'react';
import { POSTS } from '../../data/posts';
import { useParams } from 'react-router-dom';

function Post() {
  const { seo } = useParams();
  const post = POSTS.find(p => p.seo === seo);

  if (!post) {
    return <h2>Post not found</h2>;
  }

  return (
    <div>
      <h2>{post.title}</h2>
      <div dangerouslySetInnerHTML={{ __html: post.body }}></div>
      <p>Categories: {post.categories.join(', ')}</p>
      <p>Tags: {post.tags.join(', ')}</p>
      <p>Data: {new Date(post.date).toLocaleDateString()}</p>
    </div>
  );
}

export default Post;