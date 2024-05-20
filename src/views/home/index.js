import React from 'react';
import PostList from '../../components/post-list';
import { POSTS } from '../../data/posts';

function Home() {
  return (
    <div>
      <PostList posts={POSTS} />
    </div>
  );
}

export default Home;