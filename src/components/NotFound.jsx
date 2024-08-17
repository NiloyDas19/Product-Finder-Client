import { Link } from "react-router-dom";

const NotFound = () => {
  return (
    <div className="bg-gray-100 h-screen flex items-center justify-center">
      <div className="text-center">
        <h1 className="text-6xl font-bold text-blue-600 mb-4">404</h1>
        <p className="text-xl text-gray-700 mb-6">Oops! The page you're looking for doesn't exist.</p>
        <Link
          to="/" 
          className="text-lg text-blue-600 hover:text-blue-800 underline"
        >
          Go back to the All Products page
        </Link>
      </div>
    </div>
  );
};

export default NotFound;
