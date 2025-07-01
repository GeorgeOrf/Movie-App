import Card from './Card.jsx'
import Search from './Search.jsx'
import NavBar from './NavBar.jsx'
import '../styles/Header.css'

import batmanJPG from '../assets/batman.png'
import infWarJPG from '../assets/infWar.webp'
import moonLightJPG from '../assets/moonlight.jpg'


const Header = ({ searchTerm , setSearchTerm }) => {
  return(
    <header>
          <NavBar />
      <div className='deck'>
            {cardData.map((card, index) => (
          <div key={index} className='cardWrapper'>
              <Card 
                key={index}
                title={card.title}
                imageUrl={card.imageUrl}
              />
          </div>
            ))}
      </div>

          <div className='searchCont'>

          <h1 className='text-white'>Find <span className='bg-gradient-to-r from-blue-50 to-blue-500 bg-clip-text text-transparent'>Movies</span> You'll Enjoy without a Hassle</h1>
           <Search searchTerm={searchTerm} setSearchTerm={setSearchTerm}/>

          </div>

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


export default Header