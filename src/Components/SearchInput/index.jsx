import './index.css';

const SearchInput = ({searchValue, setSearchValue}) => {
    return (
        <input type="text" className="search-input" 
        placeholder="Search by Title" value={searchValue} 
        onChange={(event) => {setSearchValue(event.target.value)}}/>
    )
}
export default SearchInput