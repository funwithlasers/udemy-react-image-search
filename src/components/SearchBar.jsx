import { useState } from 'react';
import './SearchBar.css'

function SearchBar({ onSubmit }) {
  const [term, setTerm] = useState('cars');

  const handleClick = (e) => {
    e.preventDefault();

    onSubmit(term);
  };

  const handleChange = (e) => {
    setTerm(e.target.value);
  }

  return (
    <div className='search-bar'>
      <form onSubmit={handleClick}>
        <input value={term} onChange={handleChange}/>
        { term < 3 && 'Term must be longer' }
      </form>
    </div>
  );
}

export default SearchBar;
