const API_BASE_URL= 'https://api.themoviedb.org/3';

const API_KEY= import.meta.env.VITE_TMDB_API_KEY;

const API_OPTIONS = {
  method: 'GET',
  headers: {
    accept: 'application/json',
    Authorization: `Bearer ${API_KEY}`
  }
};

export const fetchMovies = async () => {
      const endpoint = `${API_BASE_URL}/discover/movie?sort_buy=popularity.desc`;

      const res = await fetch(endpoint, API_OPTIONS)

      if(!res.ok){
        throw new Error('Failed to fetch movies!');
      }

      const data = await res.json();
      return data.results;
  }