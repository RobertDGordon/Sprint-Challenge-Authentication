import React from 'react'
// import { number } from 'prop-types';
import { Link } from "react-router-dom";
import { CardDiv } from './Card.styled';

// import styled, {keyframes} from 'styled-components'
// import {bounceInDown} from 'react-animations'

// const bounceAnim = keyframes`${bounceInDown}`

// const test = () =>{
//     let random = Math.floor(Math.random() * (4000 - 800)) + 800;
//     let date = Date.now()
//     date = (date - 1579288500000)
//     console.log(date)
//     return random
// }

// const CardDiv = styled.div`
//     animation: ${()=> test()}ms ${bounceAnim};
//     background: url('../img/pancake.png');
//     background-position: center;
//     display: flex;
//     flex-direction: column;
//     align-items: center;
//     justify-content: center;
//     margin-top: -130px;
//     padding: 0 15px;
//     width: 240px;
//     height: 216px;
//     z-index: 10;
//     text-align: center;
//     text-shadow: 2px 2px 3px black;
//     /* background-color: white; */
//     /* border: 1px solid grey; */
//     /* border-radius: 5px; */
//     font-size: 18px;
//     color: white;
//     /* border-top: 1px solid red; */
//     span{ 
//         font-weight: bold;
//         color: #41dae0;
//     }
//     p{
//         margin-top: 80px;
//     }
//     transition: transform 300ms ease-in-out;
//     &:hover{
//         transform: scale(1.2);
//     }

// `

const Card = (props) => {
    console.log('card props:', props.index)
    return(
        <>
        <Link to={`/project/${props.index}`}>
        <CardDiv id={props.id}>
            <p>{props.joke}</p>
        </CardDiv>
        </Link>
        </>
    )
}

// Card.propTypes = {
//     id: number.isRequired,
// };

export default Card