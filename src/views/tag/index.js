import React, { useEffect, useState } from 'react';
import { POSTS } from '../../data/posts';
import { useNavigate, useParams } from 'react-router-dom';
import seoString from '../../helpers/seoString';
import PostList from '../../components/post-list';
import Pagination from '../../components/pagination';

function Tag() {
  const { seo } = useParams();
  const posts = POSTS.filter(p => {
    const tags = p.tags.map(t => seoString(t));
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
  const currentPosts = posts.slice(indexOfFirstPost, indexOfLastPost);

  const nextPage = () => {
    if (indexOfLastPost < posts.length) {
      setCurrentPage(currentPage + 1);
      navigate('/tag/' + seo + '/' + (currentPage + 1));
    }
  };

  const prevPage = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
      navigate('/tag/' + seo + '/' + (currentPage - 1));
    }
  };

  if (!posts) {
    return <h2>Posts not found</h2>;
  }

  return (
    <div>
      <h2 className='mb-4'>Tag: {tagTitle(seo)}</h2>
      <PostList posts={currentPosts} />
      <Pagination prevPage={prevPage} nextPage={nextPage} currentPage={currentPage} indexOfLastPost={indexOfLastPost} posts={posts} />
    </div>
  );
}

export default Tag;