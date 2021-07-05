import React from 'react';
import './Greeting.css';
import Personalized from '../Personalized/Personalized';


const Greeting = ({ user, previousImage, checkUrl, setUrlToRender }) => {

  // will check if new user/guest, user with no previous entries, or user with previous entries
  return(
    <div className='greeting-container'>

    {
      user.entries === 0 ?
      <div>
        {
          user.username === 'Guest' ?
          <h2>Complete your image analysis below.</h2>
          :
          <h2>{`Hello ${user.username}, complete your image analysis below.`}</h2>
        }
      </div>
      :
      (
        previousImage !== '' ?
        <Personalized user={user} previousImage={previousImage} checkUrl={checkUrl} setUrlToRender={setUrlToRender}/>
        :
        <div>
        {
          user.username === 'Guest' ?
          <h2>Complete your image analysis below.</h2>
          :
          <h2>{`Hello ${user.username}, complete your image analysis below.`}</h2>
        }
        </div>
      )
    }
    </div>
  );
}

export default Greeting;
