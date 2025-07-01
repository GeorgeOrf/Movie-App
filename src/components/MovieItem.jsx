import '../styles/MovieItem.css'
import { Link } from 'react-router-dom';
import star from '../assets/star2.svg';
const MovieItem = ({id, imageSrc, title, dateOfRelease, movieVotes, oriLang}) => {

    const releaseDate = dateOfRelease ? new Date(dateOfRelease) : null;
    const year = releaseDate && !isNaN(releaseDate) ? releaseDate.getFullYear() : 'N/A';

    const rating = typeof movieVotes === 'number' && !isNaN(movieVotes)
        ? movieVotes.toFixed(1)
        : 'N/A';

    const oriLangCap = oriLang.toUpperCase();
    return (
        <Link to={`/movie/${id}`} className='movieLink'>
        <div className='movieItemCont'>
                <img src={imageSrc} alt="Image poster"/>
                <p className='text-white movieTitle'>{title}</p>
                <hr />
                <div className='movieExtras'>
                    <h5>{year}</h5>
                    <span>•</span>
                    <h6><b>{oriLangCap}</b></h6>
                    <span>•</span>
                    <span><img src={star} alt="Star icon"/><h5>{rating}</h5></span>
                </div>
        </div>
        </Link>
    )
}
export default MovieItem
