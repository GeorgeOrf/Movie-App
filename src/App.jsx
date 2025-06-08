import './index.css'
import './App.css'

import Header from './components/Header.jsx'
import Footer from './components/Footer.jsx'
import Spinner from './components/Spinner.jsx'
import MovieItem from './components/MovieItem.jsx'
import { fetchMovies } from './services/api.js'

import { useState, useEffect } from 'react'


function App() {
  const [searchTerm, setSearchTerm] = useState('');
  const [errorMessage, setErrorMessage] = useState('');
  const [movieList, setMovieList] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    const loadMovies = async () => {
      setIsLoading(true);
        setErrorMessage('');
     try {
      const results = await fetchMovies();
      setMovieList(results || []);
    } catch (error) {
      console.error(`Error fetching movies: ${error}`);
      setErrorMessage('Error fetching movies. Please try again later');
    } finally {
      setIsLoading(false);
    }
  };

  loadMovies();
  }, [])

  return (
    <>
      <div className='wrapper'>
      <Header searchTerm={searchTerm} setSearchTerm={setSearchTerm}/>
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
            <ul className='moviesCont'>
              {movieList.map((movie) => (
                <li className='movieItem'>
                <MovieItem 
                key={movie.id}
                imageSrc={`https://image.tmdb.org/t/p/w300${movie.poster_path}`} title={movie.title}
                dateOfRelease={movie.release_date}
                movieVotes={movie.vote_average}
                />
                </li>
              ))}
            </ul>
          )}
        </section>
    </main>
        <Footer />
    </>
  );
};

export default App

