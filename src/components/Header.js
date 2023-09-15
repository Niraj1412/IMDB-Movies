import React from 'react';
import { Link } from 'react-router-dom';

function Header() {
  return (
    <header className="bg-gray-900 text-white p-4">
      <div className="container mx-auto flex items-center justify-between">
      <Link to="/">
          <img src="logo.png" alt="logo" width={60} height={60} />
      </Link>
        <nav className="space-x-4">
          <a href="/" className="hover:text-gray-300">
            Home
          </a>
          <a href="/" className="hover:text-gray-300">
            Movies
          </a>
          <a href="/" className="hover:text-gray-300">
            TV Shows
          </a>
          <a href="/" className="hover:text-gray-300">
            Celebrities
          </a>
        </nav>
      </div>
    </header>
  );
}

export default Header;
