import React, {Component} from 'react';

function SearchBar(props){
    return(
        <div className="search-bar">
            {/* <h1> Look Im a  Search Bar</h1> */}
            <input type="text" placeholder="search" />
            <div>
                <input id="in-stock" type="checkbox" /> only show products in stock
            </div>
        </div>

    )
}

export default SearchBar;
