import { height } from "@mui/system";
import { useEffect, useState } from "react";


function Show(props) {
    const [showsDetails, setShowDetails] = useState([]);
    const val = props.inputValue;
    useEffect(() => {

        fetch(`https://api.tvmaze.com/search/shows?q=${val}`)
            .then(response => response.json())
            .then(data => setShowDetails(data))

    }, [props.inputValue])
    console.log(showsDetails)


    return (
        <>

            <h2>{props.showProps}</h2>

            {showsDetails.length > 0 ?
                showsDetails.map((item, index) => {
                    let itm = item.show
                    let name = itm.name
                    let url = (item.show.image == null) ? "" : item.show.image.medium
                    return (
                        <div style={{ height: "400px", width: "300px", backgroundColor: "gray", margin: "20px" }} >
                            <div style={{ height: "300px", width: "300px", margin: "20px" }}>
                                <img src={url} alt="image"></img>
                            </div>


                            <p>{ }</p>
                            <p style={{overflow: "hidden", height :"20px" ,width :"300px"}}>{itm.summary}</p>
                            <span>{itm.rating.average}</span>
                        </div>
                    )
                })
                :
                <span></span>
            }
        </>
    )
}


export default Show;