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
        <div>
            <p onClick={handleSort}>All</p>
            <p onClick={handleSort}>Film</p>
            <p onClick={handleSort}>Other</p>
            <p onClick={handleSort}>Test</p>
        </div>
    );
};

export default SearchBar;