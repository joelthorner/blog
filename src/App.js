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
    <div className="pt-12 pb-12">
      <div className='container mx-auto px-4 grid grid-cols-[200px_1fr_270px] gap-6 items-start'>
        <div className='flex flex-col gap-4 sticky top-12'>
          <img src={logo} width={120} height={120} className="rounded-full" alt="logo" />
          <div className='font-bold text-xl'>Joel blog</div>
          <div className='text-gray-500'>Recomano el que m'agrada i em dona la puta gana.</div>
          <nav>
            <ul className='flex flex-col'>
              <li>
                <Link className='flex py-1' to="/blog">Home</Link>
              </li>
              <li>
                <Link className='flex py-1' to="/about">About</Link>
              </li>
              <li>
                <Link className='flex py-1' to="/dashboard">Dashboard</Link>
              </li>
              <li>
                <Link className='flex py-1' to="/nothing-here">Nothing Here</Link>
              </li>
            </ul>
          </nav>
        </div>
        <div>
          <Outlet />
        </div>
        <div className='sticky top-12'>
          <div className='flex flex-col gap-8'>
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