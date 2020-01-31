import React, { useState } from "react";

import {useFetchData} from '../hooks/useFetchData'

import Card from './Card';

import '../App.css';

import styled from 'styled-components'

const Main = styled.div`
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;
  margin: 0 auto;
  /* position: relative; */
  /* border: 1px solid blue; */
  #plate{
      /* position: absolute; */
      /* bottom: 175px; */
      z-index: 0;
  }
`

const SearchBar = styled.section`
    display: flex;
    justify-content: center;
    align-items: center;
    margin: 20px auto;
    /* margin-bottom: 100px; */
    width: 620px;
    height: 10px;
    padding: 10px;
    background-color: white;
    border: 1px solid black;
    border-radius: 10px;
    box-shadow: 2px 2px darkgray;
    form {
      display: flex;
      width: 100%;
      justify-content: space-evenly;
    }    
    input{
      margin: 10px 5px;
      border-left: 1px solid black;
    }
    label{
      margin: 0 10px;
    }
    button{
      color: white;
      border: 1px solid black;
      border-radius: 5px;
      background-color: darkgrey;
    }
`

const UserCards = styled.section`
  display: flex;
  flex-wrap: wrap;
  width: 100vw;
  justify-content: center;
  align-items: center;
  z-index: 1;
`

function Users(props) {

  const [projects] = useFetchData([])

  console.log(projects)


  const [srch, setSrch] = useState({name:" ", status:" "});


  const handleChange = event => {
    setSrch({ ...srch, [event.target.name]: event.target.value });
  };


    const handleSubmit = event => {
        event.preventDefault();
        // setSearchNow(srch)
        console.log (srch.name, srch.status);
      }

  return (
    <Main>
      {/* <SearchBar>
        <form onSubmit={event => handleSubmit(event)}>
          <label>
            Project Id:
            <input type="text" name="name" onChange={event => handleChange(event)} />
          </label>
          <button>Stack 'em</button>
        </form>
      </SearchBar> */}
      <UserCards>
      {projects.map ((user, index) =>
        <Card key={user.id} index={index} {...user}/>
      )}
    </UserCards>

    </Main>
  );
}

export default Users;