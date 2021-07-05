import React from 'react';
import './Personalized.css';


const Personalized = ({ user, previousImage, checkUrl, setUrlToRender }) => {

  // setting name display on screen to not say 'Guest', otherwise set it to variable
  let { username } = user;
  if(username === 'Guest') {
    username = '';
  }

  const urlHandler = (value) => {
    let urlInput = document.getElementById('url-input');
    urlInput.value = value;
    setUrlToRender(value);
    setTimeout(() => {
        checkUrl(value);
    }, 100);
  }

  return(
     <div className='personalized-container'>
      {
        user.username === 'Guest' ?
          <div>
            <h2>Your last analyzed image was:</h2>
            <img src={previousImage} alt='pre' onClick={(e) => urlHandler(previousImage)}/>
          </div>
          :
          <div>
            <h2>Hello <span className='username'>{username}</span>.</h2><h2>Your last analyzed image was:</h2>
            <img src={previousImage} alt='pre' onClick={(e) => urlHandler(previousImage)}/>
          </div>
      }
     </div>
  );
}

export default Personalized;
