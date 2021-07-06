import React, { useState } from 'react';
import '../Permission/Permission.css';


const SignIn = ({ changePermission, changeUser, currentUser, setPreviousImage, loadingScreen }) => {

  const [ email, setEmail ] = useState('');
  const [ password, setPassword ] = useState('');

  // send inputted info to server/db
  const sendUserInfo = () => {
    let user = {
      email: email,
      password: password
    }
    fetch('https://gentle-brook-34978.herokuapp.com/signin', {
      method: 'post',
      headers: {'Content-Type': 'application/json'},
      body: JSON.stringify(user)
    })
    .then(response => response.json())
    .then(data => {
      // console.log(data);
      if(data.email) {
        setEmail('');
        setPassword('');
        loadingScreen(false);
        let { id, username, last_entry, entries } = data;
        changeUser({id: id, username: username, last_entry: last_entry, entries: entries});
        if(last_entry) {
          setPreviousImage(last_entry);
        }
      } else {
        loadingScreen(false);
        setEmail('');
        setPassword('');
        setTimeout( ()=> {
          alert('Login information not correct.  Please try again.');
        }, 100);

      }
    })
  }

  // first do a basic validation for testing purposes, then up to sendUserInfo()
  const checkUserInfo = () => {
    let isInvalid = [];
    let hasSymbol = email.includes('@');
    if(email.length < 5 || !hasSymbol) {
      isInvalid.push('email ');
    }
    if(password.length < 5) {
      isInvalid.push('password ');
    }
    if(isInvalid.length === 0) {
      loadingScreen(true);
      sendUserInfo();
    } else {
      alert(`Please try again using a valid ${isInvalid}`)
      setEmail('');
      setPassword('');
    }
  }

  return(
    <main className="main pa3 black-80">
      <div className="form measure center" >
        <fieldset id="sign_up" className="ba b--transparent ph0 mh0">
          <legend className="f4 fw5 ph0 mh0">SIGN IN</legend>
          <div className="mt3">
            <label className="db fw5 lh-copy f6" htmlFor="email-address">Email</label>
            <input className="email pa2 input-reset ba b--mid-gray bg-transparent w-100" type="email" name="email-address" id="email-address" onChange={(e) => setEmail(e.target.value)} value={email}/>
          </div>
          <div className="mv3">
            <label className="db fw5 lh-copy f6" htmlFor="password">Password</label>
            <input className="password b pa2 input-reset ba b--mid-gray bg-transparent w-100" type="password" name="password" id="password" onChange={(e) => setPassword(e.target.value)} value={password}/>
          </div>
        </fieldset>
        <div className="tc">
          <input className="submit-button b ph3 pv2 input-reset ba b--mid-gray pointer f6 dib black-80" type="submit" onClick={(e) => checkUserInfo()}/>
        </div>
        <div className=" mt3 tc">
          <a href="#0" className="f6 link dim black-80 db" onClick={(e) => changeUser({...currentUser, username: 'Guest'})}>Use as Guest</a>
        </div>
        <div className="mt1 tc">
          <a href="#0" className="f6 link dim black-80 db" onClick={(e) => changePermission('register')}>Register New Account</a>
        </div>
      </div>
    </main>
  );
}

export default SignIn;
