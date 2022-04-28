import React from "react";
import charmander from '../images/charmander.png';
const Card = ()=>{
    return(
        <>
            <div className="card">
                <h2>1</h2>
                <img src={charmander} alt="charmander"></img>
                <p>charmander</p>
            </div>
        </>
    )
}

export default Card