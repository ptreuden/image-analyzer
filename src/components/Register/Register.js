import React, { useState } from 'react';
import '../Permission/Permission.css';


const Register = ({ changePermission, changeUser, currentUser }) => {

  const [ username, setUsername ] = useState('');
  const [ email, setEmail ] = useState('');
  const [ password, setPassword ] = useState('');
  const [ passwordConfirm, setPasswordConfirm ] = useState('');

  // send inputted info to server/db
  const sendUserInfo = () => {
    let newUser = {
      username: username,
      email: email,
      password: password
    }
    fetch('https://gentle-brook-34978.herokuapp.com/register', {
      method: 'post',
      headers: {'Content-Type': 'application/json'},
      body: JSON.stringify(newUser)
    })
    .then(response => response.json())
    .then(data => {
      // console.log(data);

      if(data === 'Cannot register - heroku') {
        alert('Email already registered. Please try again. Heroku');
        setUsername('');
        setEmail('');
        setPassword('');
      } else if (data === 'Invalid register data') {
        alert('Invalid register information. Please try again.')
        setUsername('');
        setEmail('');
        setPassword('');
      } else {
        setUsername('');
        setEmail('');
        setPassword('');
        let { id, username, last_entry, entries } = data;
        changeUser({id: id, username: username, last_entry: last_entry, entries: entries});
      }
    })
  }

  // first do a basic validation for testing purposes, then up to sendUserInfo()
  const checkUserInfo = () => {

    let isInvalid = [];
    if(username.length < 3 || username === 'Guest') {
      isInvalid.push('username ');
    }
    let hasSymbol = email.includes('@');
    if(email.length < 5 || !hasSymbol) {
      isInvalid.push('email ');
    }
    if(password.length < 5 || password !== passwordConfirm) {
      isInvalid.push('password ');
    }
    if(isInvalid.length === 0) {
      sendUserInfo();
      setUsername('');
      setEmail('');
      setPassword('');
      setPasswordConfirm('');
    } else {
      alert(`It looks like there was a problem with your ${isInvalid}. Please try again`);
      setUsername('');
      setEmail('');
      setPassword('');
      setPasswordConfirm('');
    }
  }

  return(
    <main className="main pa3 black-80">
      <div className="form measure center" >
        <fieldset id="sign_up" className="ba b--transparent ph0 mh0">
          <legend className="f4 fw5 ph0 mh0">REGISTER NEW ACCOUNT</legend>
          <div className="mv3">
            <label className="db fw5 lh-copy f6" htmlFor="username">Username</label>
            <input className="register-username pa2 input-reset ba b--mid-gray bg-transparent w-100" type="text" name="username" id="username" onChange={(e) => setUsername(e.target.value)} value={username}/>
          </div>
          <div className="mv3">
            <label className="db fw5 lh-copy f6" htmlFor="email-address">Email</label>
            <input className="email pa2 input-reset ba b--mid-gray bg-transparent w-100" type="email" name="email-address" id="email-address" onChange={(e) => setEmail(e.target.value)} value={email}/>
          </div>
          <div className="mv3">
            <label className="db fw5 lh-copy f6" htmlFor="password">Password</label>
            <input className="password b pa2 input-reset ba b--mid-gray bg-transparent w-100" type="password" name="password" id="password" onChange={(e) => setPassword(e.target.value)} value={password}/>
          </div>
          <div className="mv3">
            <label className="db fw5 lh-copy f6" htmlFor="password">Confirm Password</label>
            <input className="password b pa2 input-reset ba b--mid-gray bg-transparent w-100" type="password" name="password" id="passwordConfirm" onChange={(e) => setPasswordConfirm(e.target.value)} value={passwordConfirm}/>
          </div>
        </fieldset>
        <div className="tc">
          <input className="submit-button b ph3 pv2 input-reset ba b--mid-gray pointer f6 dib" type="submit" onClick={(e) => checkUserInfo()}/>
        </div>
        <div className=" mt3 tc">
          <a href="#0" className="f6 link dim black-80 db" onClick={(e) => changeUser({...currentUser, username: 'Guest'})}>Use as Guest</a>
        </div>
        <div className="mt1 tc">
          <a href="#0" className="f6 link dim black-80 db" onClick={(e) => changePermission('signin')}>Sign In With Account</a>
        </div>
      </div>
    </main>
  );
}

export default Register;
