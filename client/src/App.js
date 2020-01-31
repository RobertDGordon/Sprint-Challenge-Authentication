import React from 'react';
import { Route } from "react-router-dom";

import Header from './components/Header'

import PrivateRoute from './components/PrivateRoute';
import Login from "./components/Login";
import Register from './components/Register';


import Projects from './components/Projects'
// import Project from './components/Project'

import styled from 'styled-components'
import './App.css';

const Main = styled.div`
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: center;
  width: 100%;
  margin: 0 auto;
  /* border: 1px solid red; */
`

function App() {

  return (
    <>
      <Header />
      <Main>
        <Route exact path="/login" component={Login} />
        <Route exact path="/register" component={Register} />
        <PrivateRoute path='/projects' component={Projects} />
        {/* <Route path ='/project/:id' render={props => {
          return <Project {...props} projects={projects} />}} /> */}
      </Main>
    </>
  );
}

export default App;