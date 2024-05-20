import React, { useEffect, useState } from 'react';
import PostList from '../../components/post-list';
import { POSTS } from '../../data/posts';
import { useNavigate, useParams } from 'react-router-dom';

function Home() {
  const { page } = useParams();
  const navigate = useNavigate();
  const [currentPage, setCurrentPage] = useState(1);

  useEffect(() => {
    if (typeof page !== 'undefined') {
      setCurrentPage(parseInt(page));
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

      <nav className="flex justify-between items-center gap-x-1 mt-8">
        <button onClick={prevPage} disabled={currentPage === 1} type="button" className="min-h-[38px] min-w-[38px] py-2 px-2.5 inline-flex jusify-center items-center gap-x-2 text-sm rounded-lg text-gray-800 hover:bg-gray-100 focus:outline-none focus:bg-gray-100 disabled:opacity-50 disabled:pointer-events-none">
          <svg className="flex-shrink-0 size-3.5" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
            <path d="m15 18-6-6 6-6"></path>
          </svg>
          <span aria-hidden="true" className="block">Newer</span>
        </button>
        <button onClick={nextPage} disabled={indexOfLastPost >= POSTS.length} type="button" className="min-h-[38px] min-w-[38px] py-2 px-2.5 inline-flex jusify-center items-center gap-x-2 text-sm rounded-lg text-gray-800 hover:bg-gray-100 focus:outline-none focus:bg-gray-100 disabled:opacity-50 disabled:pointer-events-none">
          <span aria-hidden="true" className="block">Older</span>
          <svg className="flex-shrink-0 size-3.5" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
            <path d="m9 18 6-6-6-6"></path>
          </svg>
        </button>
      </nav>
    </div>
  );
}

export default Home;