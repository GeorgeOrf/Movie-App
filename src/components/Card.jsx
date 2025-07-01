
import '../styles/Card.css'

const Card = ({title, imageUrl}) => {
    return (
            <div className='cardStyle'>
                <img className='deckImg' src={imageUrl} alt={title}/>
            </div>
    );
};

export default Card