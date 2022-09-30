
import React from "react";
import './Home/Home.css'

function SearchBar(props) {
    return (
        <>
            <input
                placeholder={"e.g : friends..."}
                onChange={(e) => props.valueFromSearchBar(e)}
                className="searchBar"
                
            />
        </>
    )
}
export default SearchBar;