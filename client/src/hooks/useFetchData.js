import { useState, useEffect } from 'react';

import { axiosWithAuth } from '../utils/axiosWithAuth';

export const useFetchData = () =>{
    const [users, setUsers] = useState([]);

    useEffect(() =>{
      axiosWithAuth()
        .get('/jokes')
        .then(res => {
          // console.log(res.data)
          setUsers(res.data)
        })
        .catch(err => {
          // setError(err)
          console.log('error:', err)
        })

        // fetch('http://localhost:5000/api/jokes')
        // .then (res => res.json())
        // .then (res => setUsers(res))
        // .catch (err => {console.log(err)})
      },[])
  
      return [users];
}