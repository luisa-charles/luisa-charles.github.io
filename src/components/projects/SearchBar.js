import React from 'react';

const SearchBar = ({ handleSort }) => {
    return (
        <div id="search-bar">
            <p className="filter-labels" onClick={handleSort}>All</p>
            <p>/</p>
            <p className="filter-labels" onClick={handleSort}>Interactive</p>
            <p>/</p>
            <p className="filter-labels" onClick={handleSort}>Film</p>
        </div>
    );
};

export default SearchBar;