import { useEffect, useState } from "react";
import React from "react";
import './show.css'
import defaultImg from '.././images/imgdefault.png'

function DefaultComponent() {
    const [actorData, setActorData] = useState([]);
    useEffect(() => {

        fetch(`https://api.tvmaze.com/search/shows?q=friends`)
            .then(response => response.json())
            .then(data => setActorData(data))

    }, [])
    return (
        <div className="showData">
            {
                actorData.map((item) => {
                    let itm = item.show
                    let name = itm.name
                    let url = (item.show.image == null) ? defaultImg : item.show.image.medium
                    return (
                        <div className="subHeading">
                            <image src={url} alt="image" className="img"/>
                            <h4>{name}</h4>
                            {/* <div className="imageBlock"><p>{itm.summary}</p></div> */}
                            {/* <h1>{itm.rating.average}</h1> */}
                        </div>
                    )
                })
            }
        </div>
    )

}
export default DefaultComponent;