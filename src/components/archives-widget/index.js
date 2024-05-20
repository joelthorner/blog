import React from 'react';
import { Link } from 'react-router-dom';
import groupPostsByYear from '../../helpers/groupPostsByYear';
import { POSTS } from '../../data/posts';

function ArchivesWidget() {
  const groups = groupPostsByYear(POSTS);

  return (
    <ul className="max-w-xs flex flex-col">
      {groups.map(year => (
        <li key={year.year} className="inline-flex items-center gap-x-2 py-3 px-4 text-sm font-medium bg-white border border-gray-200 text-gray-800 -mt-px first:rounded-t-lg first:mt-0 last:rounded-b-lg">
          <Link to={`/archives/#${year.year}`} className="flex justify-between w-full items-center">
            {year.year}
            <span className="inline-flex items-center py-1 px-2 rounded-full text-xs font-medium bg-gray-50 text-gray-500">{year.posts.length}</span>
          </Link>
        </li>
      ))}
    </ul>
  );
}

export default ArchivesWidget;