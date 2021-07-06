import React from 'react';
import './Loading.css';
import loadingGif from '../../loadingGif.gif';


const Loading = ({ loadingScreen, currentUser }) => {
  return(
    <div className={`loading-container ${loadingScreen ? 'loading' : 'not-loading'}`}>
    {
      loadingScreen ?
      (
        currentUser.username === '' ?
        <div>
          <img src={loadingGif} alt='loading' />
          <h3>GETTING USER INFO... PLEASE WAIT</h3>
        </div>
        :
        <div>
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
