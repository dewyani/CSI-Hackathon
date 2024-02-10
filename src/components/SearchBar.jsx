import React, { useState } from 'react';
import { Button, Checkbox, Label, TextInput } from 'flowbite-react';


const SearchBar = ({ onSearch }) => {
  const [query, setQuery] = useState('');

  const handleChange = (e) => {
    setQuery(e.target.value);
  };

  const handleSubmit = () => {
    onSearch(query);
  };

  return (
    <div className="flex ">
      <TextInput 
        className='w-50'
        type="text"
        placeholder="Enter your search query"
        value={query}
        onChange={handleChange}
      />
      <Button onClick={handleSubmit}>Search</Button>
    </div>
  );
};

export default SearchBar;
