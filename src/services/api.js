const API_BASE_URL= 'https://api.themoviedb.org/3';

const API_KEY= import.meta.env.VITE_TMDB_API_KEY;

const API_OPTIONS = {
  method: 'GET',
  headers: {
    accept: 'application/json',
    Authorization: `Bearer ${API_KEY}`
  }
};

export const fetchMovies = async (query = '') => {
   console.log('fetchMovies called with query:', JSON.stringify(query));
  let url = '';
  
     if (query.trim()) {
    
        const encodedQuery = encodeURIComponent(query);
        url = `${API_BASE_URL}/search/movie?query=${encodedQuery}`;
      } else {
        url =  `${API_BASE_URL}/discover/movie?sort_by=popularity.desc&language=en-US&region=US`;
      }

      const res = await fetch(url, API_OPTIONS);
      if(!res.ok){
        throw new Error('Failed to fetch movies!');
      }

      const data = await res.json();
      return data.results;
  }