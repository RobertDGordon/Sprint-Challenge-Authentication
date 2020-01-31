import React from 'react';
import '../App.css';

function User(props) {

//   console.log('user:',props.users[1].nam)
    let id = (props.match.params.id)
    const incrementer = () => {
        console.log('id recieved:', id)
        if (props.projects[id].name === undefined){
            console.log('minus')
            return id - 2
        } else {
            id--
            console.log('name id:', id)
            return id
        }
    }
  
  
  return (
    <div>
      <header>
        <h1>{props.projects[incrementer()].joke}</h1>
      </header>
    </div>
  );
}

export default User;