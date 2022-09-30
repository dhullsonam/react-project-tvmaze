import { useEffect, useState } from "react"
import imgdefault from '.././images/imgdefault.png'
import './actor.css'

function Actor(props) {
    const [actorData, setActorData] = useState([]);

    useEffect(() => {

        fetch(`https://api.tvmaze.com/search/people?q=${props.inputValue}`)
            .then(response => response.json())
            .then(data => setActorData(data))

    }, [props.inputValue])
    function getFiltered() {
        return actorData.filter((items) => {
            let lowerCaseString = items.person.name.toLowerCase()
            //return lowerCaseString.includes(val)
            return lowerCaseString.startsWith(props.inputValue.toLowerCase())
        })
    }
    return (
        <>
            <p className="para">{props.val}</p>
            <div className="actorData">
                {getFiltered().length > 0 ?
                    getFiltered().map((item, index) => {
                        let name = item.person.name
                        let url = (item.person.image == null) ? imgdefault : item.person.image.medium
                        return (
                            <>
                                <div className="subHeading" key={index} >
                                    <img src={url} alt="pic" />
                                    <p>{name}</p>
                                </div>

                            </>
                        )
                    })

                    : actorData.length <= 0 ? <span></span> : <p style={{ color: "red" }}>No result found !</p>
                }
            </div>
        </>

    )
}
export default Actor