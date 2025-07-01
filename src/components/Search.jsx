import '../styles/Search.css'
// import searchIcon from '../assets/search.svg'

const Search = ({ searchTerm, setSearchTerm}) => {

    const handleInputChange = (e) => {
        const value = e.target.value;
        setSearchTerm(value);
    };


    return(
        <>
        <p className='searchBar'>
          {/* <button onClick={() => setSearchTerm('')}><img src={searchIcon} alt="Search icon" /></button> */}
          <input 
           type="text"
           placeholder=' Search through 300+ movies online'
           value={searchTerm}
           onChange={handleInputChange}
           />
        </p>
        </>
    )
        
}
export default Search
