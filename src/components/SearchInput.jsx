import React, { useState } from "react";

const SearchInput = ({ onSearch }) => {
    const [input, setInput] = useState('');

    const submitHandler = (e) => {

        onSearch(input);
    };

    return (
        <form onSubmit={submitHandler}>
            <input 
            type='text'
            placeholder='Search a Country.....'
            value={input}
            onChange={(e) => setInput(e.target.value)}
            />
        </form>
    );
}

export default SearchInput;