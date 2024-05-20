import logo from './logo.svg';
import { Routes, Route, Outlet, Link } from "react-router-dom";
import Home from './views/home';
import Post from './views/post';
import Tag from './views/tag';

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route path="/blog" element={<Home />} />
        <Route path="/post/:seo" element={<Post />} />
        <Route path="/tag/:seo" element={<Tag />} />
        <Route path="about" element={<About />} />
        <Route path="dashboard" element={<Dashboard />} />

        {/* Using path="*"" means "match anything", so this route
            acts like a catch-all for URLs that we don't have explicit
            routes for. */}
        <Route path="*" element={<NoMatch />} />
      </Route>
    </Routes>
  );
}

function Layout() {
  return (
    <div className="mt-4">
      <div className='container mx-auto px-2 grid grid-cols-[200px_1fr_270px] gap-4'>
        <div className='flex flex-col gap-4'>
          <img src={logo} width={120} height={120} className="rounded-full" alt="logo" />
          <div className='font-bold text-xl'>Joel blog</div>
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
        <div>
          <h3 className='text-lg font-medium'>Archive</h3>

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