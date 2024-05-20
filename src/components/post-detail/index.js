import React from 'react';
import { Link } from 'react-router-dom';
import seoString from '../../helpers/seoString';
import LiteYouTubeEmbed from 'react-lite-youtube-embed';
import 'react-lite-youtube-embed/dist/LiteYouTubeEmbed.css';

function PostDetail({ post, showLink = true }) {
  const formatDate = (date) => {
    return new Date(date).toLocaleDateString();
  };

  const titleElement = (
    <h2 className="text-xl font-bold text-gray-800">
      {post.title}
    </h2>
  );

  // https://fonts.google.com/icons?selected=Material+Symbols+Outlined:eco:FILL@0;wght@400;GRAD@0;opsz@20&icon.query=leaf&icon.style=Outlined&icon.size=16&icon.color=%23e8eaed
  const leaf = <svg xmlns="http://www.w3.org/2000/svg" height="20px" viewBox="0 -960 960 960" width="20px" className='fill-lime-500'><path d="M233-186q-43-43-66-98.74-23-55.74-23-115.26 0-68 23-128.5T234-635q35-37 78.5-60.5T417-731q61-12 144.5-13.5T759-738q10 129 11 217t-8.5 149q-9.5 61-31 102.5T673-192q-46 47-102.21 71.5Q514.57-96 456-96q-64 0-121.5-23T233-186Zm103-12q28 15 58 23t62 7q45-1 86-19.5t80-55.5q26-25 43-61t25.5-88q8.5-52 9-120.5T693-670q-76-6-139.5-4T439-661.5Q388-651 350-632t-63 46q-34 37-52.5 83T216-410q0 46 15 87t44 76q39-82 103.5-147T528-504q-78 69-123.5 143.5T336-198Zm0 0Zm0 0Z" /></svg>;

  return (
    <div className="flex flex-col group bg-white border shadow-sm rounded-2xl overflow-hidden hover:shadow-lg transition">
      <div className="p-3 sm:p-4 md:p-5">
        <div className='flex justify-between'>
          {showLink ? <Link to={`/post/${post.seo}`}>{titleElement}</Link> : titleElement}
          {typeof post.weed !== 'undefined' && post.weed === true && leaf}
        </div>

        <div className='mt-2 text-xs text-gray-500'>{formatDate(post.date)}</div>

        {typeof post.body !== 'undefined' && post.body.length > 0 && <div className="mt-4 text-gray-500" dangerouslySetInnerHTML={{ __html: post.body }}></div>}

        {typeof post.website !== 'undefined' && (
          <a className='mt-4 block' target="_blank" rel="noreferrer" href={post.website.link}>
            <figure className="me-20 relative z-[1] max-w-full w-full h-auto rounded-b-lg shadow-[0_2.75rem_3.5rem_-2rem_rgb(45_55_75_/_20%),_0_0_5rem_-2rem_rgb(45_55_75_/_15%)]">
              <div className="relative flex items-center max-w-full bg-gray-800 rounded-t-lg py-2 px-24">
                <div className="flex space-x-1 absolute top-2/4 start-4 -translate-y-1">
                  <span className="size-2 bg-gray-600 rounded-full"></span>
                  <span className="size-2 bg-gray-600 rounded-full"></span>
                  <span className="size-2 bg-gray-600 rounded-full"></span>
                </div>
                <div className="flex justify-center items-center size-full bg-gray-700 text-xs sm:text-sm text-gray-400 rounded-sm">{post.website.name}</div>
              </div>

              <div className="bg-gray-800 rounded-b-lg">
                <img className="max-w-full h-auto rounded-b-lg" src={post.website.img} alt={post.website.name} />
              </div>
            </figure>
          </a>
        )}
        {typeof post.videoYT !== 'undefined' && post.videoYT.length > 0 && <div className='mt-4'><LiteYouTubeEmbed poster="maxresdefault" id={post.videoYT} /></div>}

        <div className='flex items-center gap-3 flex-wrap justify-between mt-4'>
          <div className='flex gap-1'>
            {post.categories.map(cat =>
              <Link key={cat} className='inline-flex items-center gap-x-1.5 py-1.5 px-3 rounded-md text-xs font-medium border border-gray-200 bg-white text-gray-800 shadow-sm' to={`/category/${seoString(cat)}`}>
                {cat}
              </Link>
            )}
          </div>
          <div className='flex gap-1 flex-wrap'>
            {post.tags.map(tag =>
              <Link key={tag} to={`/tag/${seoString(tag)}`}>
                <span className="inline-flex items-center gap-x-1.5 py-1.5 px-3 rounded-full text-[10px] sm:text-xs font-medium border border-gray-200 bg-white text-gray-800 shadow-sm">{tag}</span>
              </Link>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default PostDetail;