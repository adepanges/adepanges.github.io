import { Link } from '@tanstack/react-router';

const Navbar = () => {
  return (
    <nav className="bg-blue-800 text-white p-4 sticky top-0 z-10">
      <ul className="flex justify-around">
        <li><Link to="/" className="hover:text-gray-300">Home</Link></li>
        <li><Link to="/resume" className="hover:text-gray-300">Resume</Link></li>
      </ul>
    </nav>
  );
};

export default Navbar;
