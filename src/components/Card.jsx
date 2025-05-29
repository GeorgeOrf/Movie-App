
const Card = ({title, imageUrl}) => {
    return (
            <div style={cardStyle}>
                <img src={imageUrl} alt={title}  style={imgStyle}/>
            </div>
    );
};

const cardStyle = {
  width: '300px',
  height: '400px',
  padding: '25px',
  textAlign: 'center',
  boxShadow: '0 2px 20px rgba(0, 0, 0, 0.2)',
};

const imgStyle = {
  width: '100%',
  height: '400px',
  objectFit: 'cover',
};
export default Card