import { useState } from "react";
import Actor from "../Navigation/Actor";
import DefaultComponent from "../Navigation/defaultComp";
import Show from "../Navigation/Shows";
import Toggle from "../Navigation/Toggle";
import SearchBar from "../SearchBar";
import './Home.css'

function HomePage() {
    const [toggleValue, setToggleValue] = useState('');
    const [inputValue, setInputValue] = useState('');

    const getValueFromToggle = (e) => {
        setToggleValue(e.target.value);
    }
    const valueFromSearchBar = (e) => {
        setInputValue(e.target.value)
    }
    
    return (
        <>
            <div className="Heading">
                <h1 >TVmaze</h1>
            </div>
            <h2 className="subheading">Search for your favourite Shows</h2>

            <div className="togglebar">
                <Toggle getValueFromToggle={getValueFromToggle} />
            </div>

            <div className="search">
                <SearchBar valueFromSearchBar={valueFromSearchBar} />
            </div>
            <div>

                {toggleValue === 'actor' ?
                    <Actor
                        inputValue={inputValue}
                        val={"Enter The Actor above"}
                    /> :
                    toggleValue === 'shows'
                        ?
                        <Show inputValue={inputValue}
                            val={"Enter The show above"}
                        />
                        : <DefaultComponent />
                }
            </div>

        </>
    )
}
export default HomePage;