import './index.css'
import './App.css'

import Header from './components/Header.jsx'
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
    <main>
      <div className='pattern' />

      <div className='wrapper'>

        <Header searchTerm={searchTerm} setSearchTerm={setSearchTerm}/>

        <section className='allMovies'>
          <h2>All Movies</h2>

          {isLoading ? (
            <p className='text-white'>Loading...</p>
          ) : errorMessage ? (
            <p className='text-red-500'>{errorMessage}</p>
          ) : (
            <ul>
              {movieList.map((movie) => (
                <p className='text-white'>{movie.title}</p>
              ))}
            </ul>
          )}
        </section>
      </div>
    </main>
  );
};

export default App
