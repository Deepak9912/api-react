import './App.css';
import { useState, useEffect } from 'react';
import MovieList from './component/MovieList';

function App() {

  const [movies, setMovies] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(()=>{
    fetchMovieHandler();
  }, [])

  async function fetchMovieHandler() {
    setIsLoading(true);
    setError(null);

    try {
      const response = await fetch('https://swapi.dev/api/films/');
      // error state to catch any error while fetching data
      if(!response.ok){
        throw new Error('Something went wrong');
      }
      const data = await response.json();

      const transformedMovies = data.results.map(movieData => {
        return {
          id: movieData.episode_id,
          title: movieData.title,
          opening_crawl: movieData.opening_crawl,
          producer: movieData.producer,
          release_date: movieData.release_date
        }
      })
      setMovies(transformedMovies); 
    } catch (error){
      // we catch the error here
      setError(error.message);
    }
    setIsLoading(false); 
  }

  let content = <p>Found no movies!</p>

  if(movies.length > 0){
    content = <MovieList movies={movies} />
  }

  if(error){
    content = <p>{error}</p>
  }

  if(isLoading){
    content = <p>Loading...</p>
  }

  return (
    <div>
      <section>
        <button onClick={fetchMovieHandler}>Fetch Movies</button>
      </section>
      {content}
    </div>
  );
}

export default App;
