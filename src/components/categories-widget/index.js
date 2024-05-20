import React from 'react';
import { Link } from 'react-router-dom';
import groupPostsByCategory from '../../helpers/groupPostsByCategory';
import { POSTS } from '../../data/posts';
import seoString from '../../helpers/seoString';

function ArchivesWidget() {
  const groups = groupPostsByCategory(POSTS);

  return (
    <ul className="max-w-xs flex flex-col">
      {groups.map(group => (
        <li key={group.category} className="inline-flex items-center gap-x-2 py-3 px-4 text-sm font-medium bg-white border border-gray-200 text-gray-800 -mt-px first:rounded-t-lg first:mt-0 last:rounded-b-lg">
          <Link to={`/category/${seoString(group.category)}`} className="flex justify-between w-full items-center">
            {group.category}
            <span className="inline-flex items-center py-1 px-2 rounded-full text-xs font-medium bg-gray-50 text-gray-500">{group.posts.length}</span>

          </Link>
        </li>
      ))}
    </ul>
  );
}

export default ArchivesWidget;