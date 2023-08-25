// output moves here
const Movies = (props) => {
    return <div>
        <li>
        <p>{props.title}</p>
        <p>{props.opening_crawl}</p>
        <p>{props.producer}</p>
        <p>{props.release_date}</p>
        </li>
    </div>
}

export default Movies;