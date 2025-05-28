
import './App.css'
import Card from './Card.jsx'
import batmanJPG from './assets/batman.png'
import infWarJPG from './assets/infWar.webp'
import moonLightJPG from './assets/moonlight.jpg'
import searchIcon from './assets/search.svg'

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

function App() {

  return (
    <main>
      <div className='pattern' />

      <div className='wrapper'>
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

          <h1>Find Movies You'll Enjoy without a Hassle</h1>
        </header>

        <p className='searchBar'>
          <button onClick={() => searchMovie()}><img src={searchIcon} alt="Search icon" /></button>
          <input type="text" placeholder='Search through 300+ movies online'/>
        </p>
      </div>
    </main>
  );
};

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

export default App
