import React, { useEffect, useState } from 'react';
import PostList from '../../components/post-list';
import Pagination from '../../components/pagination';
import { POSTS } from '../../data/posts';
import { useNavigate, useParams } from 'react-router-dom';

function Home() {
  const { page } = useParams();
  const navigate = useNavigate();
  const [currentPage, setCurrentPage] = useState(1);

  useEffect(() => {
    if (typeof page !== 'undefined') {
      setCurrentPage(parseInt(page));
    } else {
      setCurrentPage(1);
    }
  }, [page]);

  const postsPerPage = 5;

  const indexOfLastPost = currentPage * postsPerPage;
  const indexOfFirstPost = indexOfLastPost - postsPerPage;
  const currentPosts = POSTS.slice(indexOfFirstPost, indexOfLastPost);

  const nextPage = () => {
    if (indexOfLastPost < POSTS.length) {
      setCurrentPage(currentPage + 1);
      navigate('/blog/' + (currentPage + 1));
    }
  };

  const prevPage = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
      navigate('/blog/' + (currentPage - 1));
    }
  };

  return (
    <div>
      <PostList posts={currentPosts} />
      <Pagination prevPage={prevPage} nextPage={nextPage} currentPage={currentPage} indexOfLastPost={indexOfLastPost} posts={POSTS} />
    </div>
  );
}

export default Home;