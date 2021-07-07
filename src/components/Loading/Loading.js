import React from 'react';
import './Loading.css';
import loadingGif from '../../loadingGif.gif';


const Loading = ({ loadingScreen, currentUser }) => {
  return(
    <div className={`loading-overlay ${loadingScreen ? 'loading' : 'not-loading'}`}>
    {
      loadingScreen ?
      (
        currentUser.username === '' ?
        <div className='loading-container'>
          <img src={loadingGif} alt='loading' />
          <h3>GETTING USER INFO... PLEASE WAIT</h3>
        </div>
        :
        <div className='loading-container'>
          <img src={loadingGif} alt='loading' />
          <h3>PROCESSING... PLEASE WAIT</h3>
        </div>
      )
      :
      <div></div>
    }
    </div>
  );
}

export default Loading;
