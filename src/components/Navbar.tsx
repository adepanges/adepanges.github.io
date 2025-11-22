import { Link } from '@tanstack/react-router';

const Navbar = () => {
  return (
    <nav className="bg-blue-800 text-white p-4 sticky top-0 z-10 print:hidden">
      <ul className="flex justify-around">
        <li><Link to="/" className="hover:text-gray-300">Home</Link></li>
        <li><Link to="/resume" className="hover:text-gray-300">Resume</Link></li>
        <li><Link to="/terms" className="hover:text-gray-300">Terms</Link></li>
        <li><Link to="/privacy" className="hover:text-gray-300">Privacy</Link></li>
      </ul>
    </nav>
  );
};

export default Navbar;
