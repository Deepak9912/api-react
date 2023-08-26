import './App.css';
import { useState, useEffect } from 'react';
import MovieList from './component/MovieList';
import AddMovie from './component/AddMovie';

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
      const response = await fetch('https://practice-21ee7-default-rtdb.firebaseio.com/movies.json');
      // error state to catch any error while fetching data
      if(!response.ok){
        throw new Error('Something went wrong');
      }
      const data = await response.json();

      const loadedMovies = [];

      for (const key in data){
        loadedMovies.push({
          id:key,
          title: data[key].title,
          openingText: data[key].openingText,
          releaseDate: data[key].releaseDate,
        })
      }

      setMovies(loadedMovies); 
    } catch (error){
      // we catch the error here
      setError(error.message);
    }
    setIsLoading(false); 
  }

  async function addMovieHandler(movie){
    const response = await fetch('https://practice-21ee7-default-rtdb.firebaseio.com/movies.json', {
      method: 'POST',
      // body doesn't take js object, it takesJSON format data
      body: JSON.stringify(movie),
      // header is not required by firebase. header describe to contect that will be sent
      headers: {
        'Content-Type': 'application/json'
      }
    });
    const data = await response.json();
    console.log(data);
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
        <AddMovie onAddMovie={addMovieHandler} />
        <button onClick={fetchMovieHandler}>Fetch Movies</button>
      </section>
      {content}
    </div>
  );
}

export default App;
