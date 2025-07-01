import '../styles/index.css';
import '../styles/App.css';

import Header from '../components/Header.jsx';
import Footer from '../components/Footer.jsx';
import Spinner from '../components/Spinner.jsx';
import MovieItem from '../components/MovieItem.jsx';

import { fetchMovies } from '../services/api.js';
import { useState, useEffect, useCallback, useMemo } from 'react';
import debounce from 'lodash/debounce';


function Home() {
  const [searchTerm, setSearchTerm] = useState('');
  const [errorMessage, setErrorMessage] = useState('');
  const [movieList, setMovieList] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

    const loadMovies = useCallback( async (query) => {
      setIsLoading(true);
        setErrorMessage('');
     try {
      const results = await fetchMovies(query);
      setMovieList(results || []);
    } catch (error) {
      console.error(`Error fetching movies: ${error}`);
      setErrorMessage('Error fetching movies. Please try again later');
    } finally {
      setIsLoading(false);
    }
  }, []);

  const debouncedLoadMovies = useMemo(() => 
    debounce((query) => {
      loadMovies(query);
    }, 500),
    [loadMovies]);

  useEffect(() => {
    if (searchTerm.trim() === ''){
      debouncedLoadMovies.cancel();
      loadMovies('');
    } else {
      debouncedLoadMovies(searchTerm);
    }

    return () => {
      debouncedLoadMovies.cancel();
    };
  }, [searchTerm, debouncedLoadMovies, loadMovies]);

  return (
    <>
      <div className='wrapper'>
      <Header searchTerm={searchTerm} setSearchTerm={setSearchTerm} movieList={movieList}/>
      </div>

    <main>
      <div className='pattern' />

        <section className='allMovies'>
          <h2 className='text-white text-lg'>All Movies</h2>

          {isLoading ? (
            <div className='text-white'><Spinner /></div>
          ) : errorMessage ? (
            <p className='text-red-500'>{errorMessage}</p>
          ) : (
            <div className='moviesCont'>
              {movieList.map((movie) => (
                <div className='movieItem' key={movie.id}>
                <MovieItem 
                imageSrc={`https://image.tmdb.org/t/p/w300${movie.poster_path}`} title={movie.title}
                dateOfRelease={movie.release_date}
                movieVotes={movie.vote_average}
                />
                </div>
              ))}
            </div>
          )}
        </section>
    </main>
        <Footer />
    </>
  );
};

export default Home;

