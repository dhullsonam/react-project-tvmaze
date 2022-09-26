import { margin, width } from "@mui/system";
import { useEffect, useState } from "react"


function Actor(props) {
    const [actorData, setActorData] = useState([]);
    // console.log(props.inputValue)
    useEffect(() => {

        fetch(`https://api.tvmaze.com/search/people?q=${props.inputValue}`)
            .then(response => response.json())
            .then(data => setActorData(data))

    }, [props.inputValue])
    console.log(actorData)
    return (
                <>
                <p>{props.val}</p>
                {actorData.length > 0 ?

                        actorData.map((item) => {
                            let name = item.person.name
                            let url = (item.person.image == null) ? "" : item.person.image.medium
                            return (
                                <>
                                    <div style={{height:"300px" ,width:"250px" , backgroundColor:"lightgray" ,margin:"10px"}}>
                                        <img src={url} alt="image"/>
                                        {/* {item.person} */}
                                    </div>
                                    <p>{item.person.name}</p>
                                </>
                            )
                        })

                    :
                    <span></span>
        }
                </>
       
    )
}
export default Actor