
import { Link, useLocation } from 'react-router-dom';

const Navigation = () => {
  const location = useLocation();
  
  return (
    <nav className="bg-white shadow-sm border-b">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <Link to="/" className="text-2xl font-bold text-gray-900">
            Tara ai
          </Link>
          
          <div className="hidden md:flex space-x-8">
            <Link 
              to="/" 
              className={`text-gray-700 hover:text-blue-600 px-3 py-2 text-sm font-medium transition-colors ${
                location.pathname === '/' ? 'text-blue-600' : ''
              }`}
            >
              Home
            </Link>
            <Link 
              to="/about" 
              className={`text-gray-700 hover:text-blue-600 px-3 py-2 text-sm font-medium transition-colors ${
                location.pathname === '/about' ? 'text-blue-600' : ''
              }`}
            >
              About
            </Link>
            <Link 
              to="/contact" 
              className={`text-gray-700 hover:text-blue-600 px-3 py-2 text-sm font-medium transition-colors ${
                location.pathname === '/contact' ? 'text-blue-600' : ''
              }`}
            >
              Contact
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;
