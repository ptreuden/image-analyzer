import React from 'react';
import './Input.css';


const Input = ({ checkUrl, clearField, checkToAnalyze, setUrlToRender, imageValid }) => {

  const urlHandler = (value) => {
    setUrlToRender(value);
    setTimeout(() => {
        checkUrl(value);
    }, 175);
  }

  return(
    <div className='input-container'>
      <input id='url-input' type='text' name='url' placeholder='Enter image address' onChange={(e) => urlHandler(e.target.value)} />
      <button type='button' onClick={() => checkToAnalyze()} className='input-button'>Analyze</button>
      <div className='input-clear'>
        <p onClick={() => clearField()}>Clear</p>
      </div>
    </div>
  );
}

export default Input;