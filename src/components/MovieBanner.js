import React, {useState, useEffect} from 'react';
import axios from 'axios';

function MovieBanner() {
  const [movie, setMovie] = useState();

  useEffect(() => {
    const fetchMovies = async () => {
      try {
        let apiUrl = 'https://movie-api-swagger.cyclic.app/api/movies/64fef87f4231355c00050c08';
        const response = await axios.get(apiUrl);
        setMovie(response.data);
        console.log(response.data);
      } catch (error) {
        console.error('Error fetching movies:', error);
      }
    };
    fetchMovies();
  }, []);

  return (
    <div className='relative'>
        <div className='absolute bottom-0 p-4 bg-gradient-to-t
        from-slate-900 to-transparent w-full rounded-2xl'>
            <h2 className='text-[40px] text-white font-bold '>{movie?.name}</h2>
        </div>
        <img src={movie?.image}
        alt={movie?.name}
         className='md:h-[420px] object-top w-full object-cover rounded-2xl'/>
    </div>
  );
}

export default MovieBanner; 
