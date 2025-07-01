import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import { fetchMovieById } from '../services/api.js';

import '../styles/MovieDetails.css'

import NavBar from '../components/NavBar.jsx'
import Footer from '../components/Footer.jsx'

function MovieDetails() {
  const { id } = useParams();
  const [movie, setMovie] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState('');

  useEffect(() => {
    const loadMovie = async () => {
      setIsLoading(true);
      setError('');
      try{
        const data = await fetchMovieById(id);
        setMovie(data);
      } catch (err){
        console.log(err);
        setError("Failed to load movie details.");
      } finally{
        setIsLoading(false);
      }
    };
    loadMovie(id);
  }, [id]);

  if (isLoading) return <p>Loading movie details...</p>;
  if (error) return <p>{error}</p>;
  if (!movie) return <p>No movie found.</p>;

  const oriLangCap = movie.original_language.toUpperCase();
  const popularity = movie.popularity.toFixed(3);
  const releaseDate = movie.release_date ? new Date(movie.release_date) : null;
  const year = releaseDate && !isNaN(releaseDate) ? releaseDate.getFullYear() : 'N/A';

  // Extra adult film checking because TMDB makes mistakes.
  const knownAdultMovies = [
  345,   // Eyes Wide Shut (1999)
  664413,  // 365 Days (2020)
  402,    // Basic Instinct (1992)
  10802,    // Showgirls (1995)
  19173,  // Diary of a nymphomaniac
  152584,     // Blue Is the Warmest Color (2013)
  9769,     // Lolita (1997)
  76025,   // Shame (2011)
  17609,   // Antichrist (2009)
  292431,   // Love (2015)
  1278,   // The Dreamers (2003)
];
  const hasThrillerGenre = movie.genres.some(genre => genre.name.toLowerCase() === 'thriller');
  const hasHorrorGenre = movie.genres.some(genre => genre.name.toLowerCase() === 'horror');
  const isAdult = movie.adult || knownAdultMovies.includes(movie.id) || hasThrillerGenre || hasHorrorGenre;


  return (
    <>
    <NavBar />
    <div className="movieDetailsCont">
      <div className="movie-details">
        <img src={`https://image.tmdb.org/t/p/w300${movie.poster_path}`} alt="Movie Poster" />
          <div className="movieDetExtras">
            {isAdult && <h3>Warning: Adult film</h3>}
            <h2>{movie.title}</h2>
              <div className="genres">
                {movie.genres.map((genre) => {
                  return(
                    <span className="genre"
                    key={genre.id}
                  >
                    {genre.name}
                  </span>
                  )
                })}
              </div>
            <p>{movie.overview}</p>
            <div className="spans">
              <span>Original Language: {oriLangCap}</span>
              <span>Popularity: {popularity}</span>
              <span>Release Date: {year}</span>
            </div>
          </div>
      </div>
    </div>  
    <Footer />
    </>
  )

}

export default MovieDetails;