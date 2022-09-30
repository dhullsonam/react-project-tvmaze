
import { useEffect, useState } from "react";
import imgdefault from '.././images/imgdefault.png';
import "./show.css"

function Show(props) {
    const [showsDetails, setShowDetails] = useState([]);
    const val = props.inputValue;
    useEffect(() => {

        fetch(`https://api.tvmaze.com/search/shows?q=${val}`)
            .then(response => response.json())
            .then(data => setShowDetails(data))

    }, [val])

    const getFiltered = () => {
        const copyArray = [...showsDetails]
        let i = copyArray.filter((items) => {
            let lowerCaseString = items.show.name.toLowerCase()
            //return lowerCaseString.includes(val)
            console.log("a: " + lowerCaseString + " v: " + val.toLowerCase())
            console.log("result: " + lowerCaseString.startsWith(val.toLowerCase()))
            return lowerCaseString.startsWith(val.toLowerCase())
        })
        return i
    }

    return (
        <>

            <p className="para">{props.val}</p>

            <div className="showData">

                {getFiltered().length > 0 ?
                    getFiltered().map((item, index) => {
                        let itm = item.show
                        let name = itm.name
                        let url = (item.show.image == null) ? imgdefault : item.show.image.medium
                        return (
                            <div className="subHeading" key={index}>
                                <img src={url} className="img" alt="pic" />
                                <h4>{name}</h4>

                            </div>
                        )
                    })
                    : showsDetails.length <= 0 ? <span></span> : <p style={{ color: "red" }}>No result found !</p>

                }
            </div>
        </>
    )
}


export default Show;