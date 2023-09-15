import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

const Sidebar = ({ onGenreSelect }) => {
  const [genres, setGenres] = useState([]);
  const [selectedGenre, setSelectedGenre] = useState(null);

  useEffect(() => {
    axios
      .get('https://movie-api-swagger.cyclic.app/api/genres')
      .then((response) => {
        setGenres(response.data);
      })
      .catch((error) => {
        console.error('Error fetching genres:', error);
      });
  }, []);

  const handleGenreClick = (genre) => {
    setSelectedGenre(genre);
    onGenreSelect(genre);
  };

  return (
    <aside className="p-4 bg-gray-900 text-white flex flex-col">
      <h2 className="text-2xl font-semibold mb-4">Genres</h2>
      <ul className="flex-1 overflow-y-auto">
        {genres.map((genre) => (
          <Link key={genre._id} to={`/genres/${genre._id}`}>
            <li
              className={`mb-2 p-2 cursor-pointer rounded ${
                selectedGenre === genre ? 'bg-gray-800' : 'hover:bg-gray-800'
              } transition duration-300`}
              onClick={() => handleGenreClick(genre)}
            >
              {genre.name}
            </li>
          </Link>
        ))}
      </ul>
    </aside>
  );
};

export default Sidebar;
