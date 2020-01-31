import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const Head = styled.header`
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    margin: 0 40px;
    color: white;
    nav{
      display: flex;
      a{
        color: white;
        margin: 15px;
        &:hover{
          color: blue;
        }
      }
    }
`

function Home(props) {

  return (
      <Head>
        <h1>Node API Challenge</h1>
        <nav>
        <Link to="/register">
            Register
        </Link>
        <Link to="/login">
            Login
        </Link>
        <Link to="/jokes">
            Jokes
        </Link>
        </nav>
      </Head>
  );
}

export default Home;