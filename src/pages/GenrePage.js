import React, {useState, useEffect} from 'react'
import axios from 'axios'
import { useParams } from "react-router-dom"
import Sidebar from '../components/Sidebar'
import MovieCard from '../components/MovieCard'


const GenrePage = () => {
  const [movies, setMovies] = useState([]);
  const [selectedGenre, setSelectedGenre] = useState(null);
  
  const {genreId} = useParams();

  const handleGenreSelect = (genre) => {
    setSelectedGenre(genre);
  };

  useEffect(() => {
    const fetchMovies = async () => {
      try {
        console.log(selectedGenre);
        let apiUrl = `https://movie-api-swagger.cyclic.app/api/genres/${genreId}/movies`;
        const response = await axios.get(apiUrl);
        setMovies(response.data);
      } catch (error) {
        console.error('Error fetching movies:', error);
      }
    };

    fetchMovies();
  }, [genreId, selectedGenre]);

  return (
    <div className="flex h-full">
      {/* Sidebar */}
      <aside className="w-1/4 bg-gray-900">
        <Sidebar onGenreSelect={handleGenreSelect}/>
      </aside>

      {/* Movie List */}
      <main className="w-3/4 p-4">
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
      {movies.map((movie) => (
        <MovieCard key={movie._id} movie={movie} />
      ))}
    </div>
      </main>
    </div>
  )
}

export default GenrePage