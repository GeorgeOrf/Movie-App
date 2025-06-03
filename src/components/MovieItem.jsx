import '../styles/MovieItem.css'

const MovieItem = ({imageSrc, title, dateOfRelease, movieVotes}) => {

    const releaseDate = new Date(dateOfRelease);

    return (
        <>
                <img src={imageSrc} alt="Image poster"/>
                <p className='text-white movieTitle'>{title}</p>
                <div className='movieExtras'>
                    <h5>{releaseDate.getFullYear()}</h5>
                    <h5>{movieVotes.toFixed(2)}</h5>
                </div>
        </>
    )
}
export default MovieItem
