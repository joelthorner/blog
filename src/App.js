import logo from './logo.png';
import { Routes, Route, Outlet, Link } from "react-router-dom";
import Home from './views/home';
import Post from './views/post';
import Tag from './views/tag';
import ArchivesWidget from './components/archives-widget';
import CategoriesWidget from './components/categories-widget';
import Archives from './views/archives';
import Category from './views/category';

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route exact path="/blog/:page?" element={<Home />} />
        <Route path="/post/:seo/:page?" element={<Post />} />
        <Route path="/tag/:seo/:page?" element={<Tag />} />
        <Route path="/archives" element={<Archives />} />
        <Route path="/category/:seo/:page?" element={<Category />} />
        <Route path="about" element={<About />} />
        <Route path="dashboard" element={<Dashboard />} />
        <Route path="*" element={<NoMatch />} />
      </Route>
    </Routes>
  );
}

function Layout() {
  return (
    <div className="py-6 lg:py-12">
      <div className='container mx-auto px-2 lg:px-4 flex flex-col gap-y-8 lg:grid lg:grid-cols-[200px_1fr_220px] gap-6 items-start'>
        <div className='flex flex-col gap-8 lg:gap-4 lg:sticky top-12 w-full'>
          <div className='flex gap-x-4 items-center px-1 lg:px-0 lg:flex-col lg:items-start lg:gap-4'>
            <img src={logo} width={120} height={120} className="rounded-full" alt="logo" />
            <div>
              <div className='font-bold text-xl'>Joel blog</div>
              <div className='text-gray-500'>Recomano el que m'agrada i em dona la puta gana.</div>
            </div>
          </div>
          <nav>
            <ul className='flex justify-center lg:flex-col'>
              <li className='inline-block relative pe-8 last:pe-0 last-of-type:before:hidden before:absolute before:top-1/2 before:end-3 before:-translate-y-1/2 before:size-1 before:bg-gray-300 before:rounded-full lg:before:hidden'>
                <Link className='p-2 lg:flex lg:py-1 lg:px-0' to="/blog">Home</Link>
              </li>
              <li className='inline-block relative pe-8 last:pe-0 last-of-type:before:hidden before:absolute before:top-1/2 before:end-3 before:-translate-y-1/2 before:size-1 before:bg-gray-300 before:rounded-full lg:before:hidden'>
                <Link className='p-2 lg:flex lg:py-1 lg:px-0' to="/about">About</Link>
              </li>
              <li className='inline-block relative pe-8 last:pe-0 last-of-type:before:hidden before:absolute before:top-1/2 before:end-3 before:-translate-y-1/2 before:size-1 before:bg-gray-300 before:rounded-full lg:before:hidden'>
                <Link className='p-2 lg:flex lg:py-1 lg:px-0' to="/dashboard">Dashboard</Link>
              </li>
            </ul>
          </nav>
        </div>
        <div className='w-full'>
          <Outlet />
        </div>
        <div className='w-full lg:sticky top-12 px-1 mt-12 lg:mt-0'>
          <div className='flex flex-col gap-8 max-w-xs mx-auto'>
            <div>
              <h3 className='text-lg font-medium mb-2'>Categories</h3>
              <CategoriesWidget />
            </div>
            <div>
              <h3 className='text-lg font-medium mb-2'>Archives</h3>
              <ArchivesWidget />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function About() {
  return (
    <div>
      <h2>About</h2>
    </div>
  );
}

function Dashboard() {
  return (
    <div>
      <h2>Dashboard</h2>
    </div>
  );
}

function NoMatch() {
  return (
    <div>
      <h2>Nothing to see here!</h2>
      <p>
        <Link to="/">Go to the home page</Link>
      </p>
    </div>
  );
}