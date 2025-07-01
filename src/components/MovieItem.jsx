import '../styles/MovieItem.css'
import star from '../assets/star2.svg'
const MovieItem = ({imageSrc, title, dateOfRelease, movieVotes}) => {

    const releaseDate = dateOfRelease ? new Date(dateOfRelease) : null;
    const year = releaseDate && !isNaN(releaseDate) ? releaseDate.getFullYear() : 'N/A';

    const rating = typeof movieVotes === 'number' && !isNaN(movieVotes)
        ? movieVotes.toFixed(1)
        : 'N/A';

    return (
        <>
        <div className='movieItemCont'>
                <img src={imageSrc} alt="Image poster"/>
                <p className='text-white movieTitle'>{title}</p>
                <div className='movieExtras'>
                    <h5>{year}</h5>
                    <img src={star} alt="Star icon"/><h5>{rating}</h5>
                </div>
        </div>
        </>
    )
}
export default MovieItem
