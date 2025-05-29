import Card from './Card.jsx'
import Search from './Search.jsx'

import batmanJPG from '../assets/batman.png'
import infWarJPG from '../assets/infWar.webp'
import moonLightJPG from '../assets/moonlight.jpg'


const Header = ({ searchTerm , setSearchTerm }) => {
  return(
    <header>
          <img src="bruh.png" alt="Website logo" style={styles.logo}/><br />
      <div style={styles.deck}>
            {cardData.map((card, index) => (
          <div key={index} style={{...styles.cardWrapper, ...cardStyles[index]}}>
              <Card 
                key={index}
                title={card.title}
                imageUrl={card.imageUrl}
              />
          </div>
            ))}
          </div>

          <h1 className='text-white'>Find <span className='bg-gradient-to-r from-blue-50 to-blue-500 bg-clip-text text-transparent'>Movies</span> You'll Enjoy without a Hassle</h1>

           <Search searchTerm={searchTerm} setSearchTerm={setSearchTerm}/>
    </header>
  )
  
}

const cardData = [
  {
    title: "Batman",
    imageUrl: batmanJPG
  },
  {
    title: "Moonlight",
    imageUrl: moonLightJPG
  },
  {
    title: "End-Game",
    imageUrl: infWarJPG
  },
];

const cardStyles = [
  { transform: 'rotate(-10deg) translateX(-40%)', zIndex: 1 },
  { transform: 'rotate(0deg)', zIndex: 2 },
  { transform: 'rotate(10deg) translateX(40%)', zIndex: 1 },
];

const styles = {
  deck: {
    position: 'relative',
    width: '300px',
    height: '260px',
    margin: '0px 0px 120px 0px',
  },
  cardWrapper: {
    position: 'absolute',
    transformOrigin: 'bottom center',
    transition: 'transform 0.3s ease',
  },
  logo: {
    width: '90px',
    margin: 'auto',
    marginTop: '10px',
  },
};

export default Header