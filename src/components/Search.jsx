import '../styles/Search.css'
import searchIcon from '../assets/search.svg'

const Search = ({ searchTerm, setSearchTerm }) => {
    return(
        <p className='searchBar'>
          <button onClick={() => searchMovie()}><img src={searchIcon} alt="Search icon" /></button>
          <input 
           type="text"
           placeholder='Search through 300+ movies online'
           value={searchTerm}
           onChange={(e) => setSearchTerm(e.target.value)}
           />
        </p>
    )
        
}
export default Search
