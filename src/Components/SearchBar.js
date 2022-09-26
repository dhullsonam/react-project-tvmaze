
import React, { useState } from "react";

function SearchBar( props) {
    return (
        <>
            <input
                placeholder={"search"}
                onChange={(e) => props.valueFromSearchBar(e)}
                // value={inputValue}
            />
        </>
    )
}
export default SearchBar;