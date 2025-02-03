
import { useState } from "react"

function Card({id, image, info, price, name, removeTour}){

    const[readmore, setReadmore] = useState(false)
    const description = readmore ? info : `${info.substring(0, 100)}...`

    function onReadmore(){
        setReadmore(!readmore);
    }
    return (
        <div className="card">
            <div>
                <img src={image} className="image"></img>
            </div>

            <div className="tour-info">
                <div className="tour-details"> 
                    <h4 className="tour-price">₹ {price}</h4>
                    <h4 className="tour-name">{name}</h4>
                </div>

                <div className="description">
                    {description}
                    <span onClick={onReadmore} className="readmore">
                        {readmore ? `Show Less` : `Read More`}
                    </span>
                </div>
            </div>

            <button onClick={()=>removeTour(id)} className="not-btn">
                Not Interested
            </button>
        </div>
    )
}
export default Card