import React from 'react'
// import { number } from 'prop-types';
import { Link } from "react-router-dom";
import { CardDiv } from './Card.styled';

const Card = (props) => {
    // console.log('card props:', props.index)
    return(
        <>
        {/* <Link to={`/project/${props.index}`}> */}
        <CardDiv id={props.id}>
            <p>{props.joke}</p>
        </CardDiv>
        {/* </Link> */}
        </>
    )
}

export default Card