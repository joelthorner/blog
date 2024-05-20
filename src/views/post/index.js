import React from 'react';
import { POSTS } from '../../data/posts';
import { useParams } from 'react-router-dom';
import PostDetail from '../../components/post-detail';

function Post() {
  const { seo } = useParams();
  const post = POSTS.find(p => p.seo === seo);

  if (!post) {
    return <h2>Post not found</h2>;
  }

  return (
    <PostDetail post={post} showLink={false} />
  );
}

export default Post;