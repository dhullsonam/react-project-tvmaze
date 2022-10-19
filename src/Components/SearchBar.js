
import React from "react";
import { DebounceInput } from "react-debounce-input";
import './Home/Home.css'

function SearchBar(props) {
    return (
        <>
            {/* <input
                placeholder={"e.g : friends..."}
                onChange={(e) => props.valueFromSearchBar(e)}
                className="searchBar"
            /> */}
            <DebounceInput
     minLength={1}
     className="search"
     placeholder="Enter something here..."
     debounceTimeout={500}
     onChange={e =>props.valueFromSearchBar(e)} />
        </>
    )
}
export default SearchBar;