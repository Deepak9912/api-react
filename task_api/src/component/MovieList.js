import Movies from "./Movies";

//to loop movies
const MovieList = (props) => {
    return (
        <ul>
            {props.movies.map((movie) => (
                <Movies
                    key={movie.id}
                    title={movie.title}
                    opening_crawl={movie.opening_crawl}
                    producer={movie.producer}
                    release_date={movie.release_date}
                />
            ))}
        </ul>
    )

}

export default MovieList;