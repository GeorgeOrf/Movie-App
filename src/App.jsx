import './index.css'
import './App.css'
import Card from './components/Card.jsx'
import Search from './components/Search.jsx'
import batmanJPG from './assets/batman.png'
import infWarJPG from './assets/infWar.webp'
import moonLightJPG from './assets/moonlight.jpg'
import { useState, useEffect } from 'react'

const API_BASE_URL= 'https://api.themoviedb.org/3';

const API_KEY= import.meta.env.VITE_TMDB_API_KEY;

const API_OPTIONS = {
  method: 'GET',
  headers: {
    accept: 'application/json',
    Authorization: `Bearer ${API_KEY}`
  }
};
const cardData = [
  {
    title: "Batman",
    imageUrl: batmanJPG
  },
  {
    title: "Moonlight",
    imageUrl: moonLightJPG
  },
  {
    title: "End-Game",
    imageUrl: infWarJPG
  },
];

const cardStyles = [
  { transform: 'rotate(-10deg) translateX(-40%)', zIndex: 1 },
  { transform: 'rotate(0deg)', zIndex: 2 },
  { transform: 'rotate(10deg) translateX(40%)', zIndex: 1 },
];

function App() {
  const [searchTerm, setSearchTerm] = useState('');
  const [errorMessage, setErrorMessage] = useState('');
  const [movieList, setMovieList] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  const fetchMovies = async () => {
    setIsLoading(true);
    setErrorMessage('');

    try {
      const endpoint = `${API_BASE_URL}/discover/movie?sort_buy=popularity.desc`;

      const res = await fetch(endpoint, API_OPTIONS)

      if(!res.ok){
        throw new Error('Failed to fetch movies!');
      }

      const data = await res.json();

      if(data.res === 'False'){
        setErrorMessage(data.Error || 'Failed to fetch movies');
        setMovieList([]);
        return;
      }

      setMovieList(data.results || []);
    } catch (error) {
      console.error(`Error fetching movies: ${error}`);
      setErrorMessage('Error fetching movies. Please try again later');
    } finally {
      setIsLoading(false);
    }
  }

  useEffect(() => {
    fetchMovies();
  }, [])

  return (
    <main>
      <div className='pattern' />

      <div className='wrapper'>
        <header>
          <img src="bruh.png" alt="Website logo" style={styles.logo}/><br />
      <div style={styles.deck}>
            {cardData.map((card, index) => (
          <div key={index} style={{...styles.cardWrapper, ...cardStyles[index]}}>
              <Card 
                key={index}
                title={card.title}
                imageUrl={card.imageUrl}
              />
          </div>
            ))}
          </div>

          <h1 className='text-white'>Find <span className='bg-gradient-to-r from-blue-50 to-blue-500 bg-clip-text text-transparent'>Movies</span> You'll Enjoy without a Hassle</h1>

           <Search searchTerm={searchTerm} setSearchTerm={setSearchTerm}/>
        </header>

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

const styles = {
  deck: {
    position: 'relative',
    width: '300px',
    height: '260px',
    margin: '0px 0px 120px 0px',
  },
  cardWrapper: {
    position: 'absolute',
    transformOrigin: 'bottom center',
    transition: 'transform 0.3s ease',
  },
  logo: {
    width: '90px',
    margin: 'auto',
    marginTop: '10px',
  },
};

export default App
