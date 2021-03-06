import styled, {keyframes} from 'styled-components'
import {bounceInDown} from 'react-animations'

const bounceAnim = keyframes`${bounceInDown}`

const test = (props) =>{
    let random = Math.floor(Math.random() * (4000 - 800)) + 800;
    // let date = Date.now()
    // date = (date - 1579288500000)
    return random
}


export const CardDiv = styled.div`
    animation: ${()=> test()}ms ${bounceAnim};
    /* background: url('../img/pancake.png'); */
    background-position: center;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    margin: 5px;
    padding: 0 3px;
    width: 240px;
    height: 120px;
    z-index: 10;
    text-align: center;
    text-shadow: 2px 2px 3px black;
    background-color: rgba(160, 160, 160, 0.3);
    border: 1px solid grey;
    border-radius: 5px;
    font-size: 18px;
    color: white;
    /* border-top: 1px solid red; */
    span{ 
        font-weight: bold;
        color: #41dae0;
    }
    p{
        margin-top: 10px;
    }
    transition: transform 300ms ease-in-out;
    &:hover{
        transform: scale(1.2);
        background-color: rgba(160, 160, 160, 0.8)
    }
`