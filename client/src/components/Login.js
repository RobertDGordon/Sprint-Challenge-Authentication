import React, { useState } from 'react';

import { axiosWithAuth } from '../utils/axiosWithAuth';

import styled from 'styled-components';

const FormDiv = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
  margin: 0 auto;
  form{
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    border: 1px solid black;
    background-color: white;
    border-radius: 5px;
    height: 200px;
    input{
      margin: 5px;
    }
  }
`

const Login = (props) =>{
  const [error, setError] = useState()
  const [data, setData] = useState({
    username: "",
    password: "",
  })

  const handleChange = (event) => {
    setData({
      ...data,
      [event.target.name]: event.target.value,
    })
  }

  const handleSubmit = (event) => {
    event.preventDefault()

    axiosWithAuth()
      .post('/auth/login', data)
      .then(res => {
        console.log(res.data)
        sessionStorage.setItem('token',res.data.token)
        sessionStorage.setItem('user', JSON.stringify(res.data.id));
        sessionStorage.setItem('username', (res.data.username));
        props.history.push('/projects')
      })
      .catch(err => {
        setError(err)
        console.log('error:', err)
      })
  }
    
  return (
      <FormDiv>
        <form onSubmit={handleSubmit}>
          <h1>Login</h1>
          {error && <div className="error">{error}</div>}

          <input type="name" name="username" placeholder="Username" value={data.username} onChange={handleChange} />
          <input type="password" name="password" placeholder="Password" value={data.password} onChange={handleChange} />

          <button type="submit">Sign In</button>
        </form>
      </FormDiv>
)

}

export default Login