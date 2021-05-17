import { AiOutlineSearch } from "react-icons/ai";

const Search = ({ handleSearchNote }) => {
  return (
    <div className='search'>
      <AiOutlineSearch size='1.5em' />
      <input
        onChange={(e) => {
          handleSearchNote(e.target.value);
        }}
        type='text'
        className='search-input'
        placeholder='type to search'
      />
    </div>
  );
};

export default Search;
