import React from 'react';

const MovieCard = ({ movie }) => {
  return (
    <div className="bg-white p-4 rounded-lg shadow-md">
      <img
        src={movie.image}
        alt={movie.name}
        className="w-full h-48 object-cover rounded-t-lg"
      />
      <div className="p-4">
        <h3 className="text-xl font-semibold">{movie.name}</h3>
        <p className="text-gray-600">Director: {movie.director}</p>
        <p className="text-gray-600">IMDb Rating: {movie.imbdrating}</p>
        <p className="text-gray-600">
          Actors: {movie.actors.join(', ')}
        </p>
      </div>
    </div>
  );
};

export default MovieCard;
