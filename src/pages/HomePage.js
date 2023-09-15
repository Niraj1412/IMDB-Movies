import React, {useState, useEffect} from 'react'
import axios from 'axios'
import Sidebar from '../components/Sidebar'
import MovieCard from '../components/MovieCard'
import MovieBanner from '../components/MovieBanner'

const HomePage = () => {
  const [movies, setMovies] = useState([]);
  const [selectedGenre, setSelectedGenre] = useState(null);
  const [searchTerm, setSearchTerm] = useState('');
  
  const handleGenreSelect = (genre) => {
    setSelectedGenre(genre);
  };

  const filteredMovies = movies.filter((movie) => {
    const matchesSearch = movie.name.toLowerCase().includes(searchTerm.toLowerCase());  
    const matchesGenre = !selectedGenre || movie.genres.includes(selectedGenre._id);  
    return matchesSearch && matchesGenre;
  });

const handleSearchInputChange = (event) => {
  setSearchTerm(event.target.value);
};

  useEffect(() => {
    const fetchMovies = async () => {
      try {
        let apiUrl = 'https://movie-api-swagger.cyclic.app/api/movies';
        const response = await axios.get(apiUrl);
        setMovies(response.data);
      } catch (error) {
        console.error('Error fetching movies:', error);
      }
    };

    fetchMovies();
  }, [selectedGenre]);

  return (
    <div className="flex h-full">
      {/* Sidebar */}
      <aside className="w-1/4 bg-gray-900 ">
        <Sidebar onGenreSelect={handleGenreSelect}/>
      </aside>

      {/* Movie List */}
      <main className="w-3/4 p-4">
      <MovieBanner />
      <input
        type="text"
        placeholder="Search for a movie..."
        className="w-full px-4 py-2 my-3 mb-4 border rounded-md focus:outline-none focus:ring focus:border-blue-300"
        value={searchTerm}
        onChange={handleSearchInputChange}
      />
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
      {filteredMovies.map((movie) => (
            <MovieCard key={movie._id} movie={movie} />
      ))}
    </div>
      </main>
    </div>
  )
}

export default HomePage