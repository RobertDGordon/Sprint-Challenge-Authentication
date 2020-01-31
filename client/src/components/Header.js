import React from 'react';
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
    }
`

function Home(props) {

  return (
      <Head>
        <h1>Node API Challenge</h1>
        <nav>
          <button onClick={()=> props.history.push('/login')}>Register</button>
          <button onClick={()=> props.history.push('/login')}>Login</button>
          <button onClick={()=> props.history.push('/projects')}>Show me the jokes!</button>
        </nav>
      </Head>
  );
}

export default Home;