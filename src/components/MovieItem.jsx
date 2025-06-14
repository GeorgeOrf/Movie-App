import '../styles/MovieItem.css'
import star from '../assets/star2.svg'
const MovieItem = ({imageSrc, title, dateOfRelease, movieVotes}) => {

    const releaseDate = new Date(dateOfRelease);

    return (
        <>
        <div className='movieItemCont'>
                <img src={imageSrc} alt="Image poster"/>
                <p className='text-white movieTitle'>{title}</p>
                <div className='movieExtras'>
                    <h5>{releaseDate.getFullYear()}</h5>
                    <img src={star} alt="Star icon"/><h5>{movieVotes.toFixed(1)}</h5>
                </div>
        </div>
        </>
    )
}
export default MovieItem
