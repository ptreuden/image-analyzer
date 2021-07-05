import React from 'react';
import brain from '../../brainDataIcon.svg'
import './Navigation.css';


const Navigation = ({ changeUser, currentUser }) => {

  // when not 'guest', send user's last entry to server and db, then sign out to default user
  const signOut = (user) => {
    fetch('https://gentle-brook-34978.herokuapp.com/signout', {
      method: 'put',
      headers: {'Content-Type': 'application/json'},
      body: JSON.stringify({id: user.id, last_entry: user.last_entry })
    })
    .then(response => response.json())
    .then(data => {
      console.log(data);
    })
    .catch(err => console.log('signout did not work'));
    changeUser({ id: 0, username: '', last_entry: '', entries: 0});
  }

  return(
    <div className='navigation'>
      <div className='logo-container'>
        <img src={brain} alt='brain icon'/>
      </div>
      {
        currentUser.username === 'Guest' ?
        <div className='sign-out'>
          <a href="#1" onClick={(e) => changeUser({ id: 0, username: '', last_entry: '', entries: 0})}>ACCOUNT SIGN IN</a>
        </div>
        :
        <div className='sign-out'>
          <a href="#1" onClick={(e) => signOut(currentUser)}>SIGN OUT</a>
        </div>
      }
    </div>
  );
}

export default Navigation;
