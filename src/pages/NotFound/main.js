import { memo } from 'react';
import { Link } from 'react-router-dom';

const NotFound = () => {
  return (
    <div className="flex flex-col items-center justify-center h-screen text-center">
      <h1 className="text-6xl font-extrabold text-gray-800">404</h1>
      <p className="text-xl mt-4 text-gray-600">
        "Oops! This page took the day off."
      </p>
      <p className="text-gray-500 mt-2">
      Maybe try another link or head back to the homepage before it takes a day off too!
      </p>
      <Link
        to="/"
        className="mt-6 px-4 py-2 bg-slate-950 text-white rounded-lg hover:bg-slate-800 transition"
      >
        Take Me Home
      </Link>
    </div>
  );
};

export default memo(NotFound);
