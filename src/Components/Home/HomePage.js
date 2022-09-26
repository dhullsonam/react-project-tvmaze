import { useState } from "react";
import Actor from "../Navigation/Actor";
import Show from "../Navigation/Shows";
import Toggle from "../Navigation/Toggle";
import SearchBar from "../SearchBar";

function HomePage() {
    const [toggleValue, setToggleValue] = useState('');
    const [inputValue, setInputValue] = useState('');

    const getValueFromToggle = (e) => {
        console.log(e.target.value)
        setToggleValue(e.target.value)
    }
    const valueFromSearchBar = (e) => {
        setInputValue(e.target.value)
        console.log(e.target.value)
    }

    return (
        <>
            <h1>TVmaze</h1>
            <h2>Search for your favourite Shows</h2>
            <Toggle getValueFromToggle={getValueFromToggle} />
            <SearchBar valueFromSearchBar={valueFromSearchBar} />
            
            {toggleValue == 'actor' ?
                <Actor
                    inputValue={inputValue}
                    val={"Enter The Actor below"}
                /> :
                toggleValue == 'shows'
                    ?
                    <Show inputValue={inputValue}
                        val={"Enter The show below"}
                    />
                    : " "
            }
        </>
    )
}
export default HomePage;