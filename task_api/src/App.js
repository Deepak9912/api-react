import './App.css';
import {useState} from 'react';
import MovieList from './component/MovieList';

function App() {

  const [movies, setMovies] = useState([]);

  function fetchMovieHandler(){
    fetch('https://swapi.dev/api/films/').then(res=>{
      return res.json();
    }).then(data=>{
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
    });
  }

  return (
    <div>
      <section>
        <button onClick={fetchMovieHandler}>Fetch Movies</button>
      </section>
      <MovieList movies={movies} />
    </div>
  );
}

export default App;
