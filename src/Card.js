import React from "react";

const Card = ({id, name, email}) => {
    return (
        <div className="tc dib bg-light-green pa3 ma2 br3 grow shadow-5">
            <img src={`https://robohash.org/${id}?size=200x200`} alt="robot" />
            <h2>{name}</h2>
            <p>{email}</p>  
        </div>
    )
}

export default Card;