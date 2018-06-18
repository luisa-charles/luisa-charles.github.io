import React from 'react';

const SearchBar = ({ handleSort }) => {
    return (
        // <div className="select">
        //     <select onChange={handleSort}>
        //         <option value="">None</option>
        //         <option value="film">Film</option>
        //         <option value="other">Other</option>
        //     </select>
        // </div>
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