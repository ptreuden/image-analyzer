import React from 'react';
import './Main.css';
import Input from '../../components/Input/Input';
import Samples from '../../components/Samples/Samples';


const Main = ({ checkUrl, clearField, showSample, checkToAnalyze, setUrlToRender, imageValid }) => {
  return(
    <div>
      <div className='main-buffer' id='main-buffer'>
      </div>
      <div className='main-container' id='main-container'>
        <h3>ANALYZE AN IMAGE</h3>
        <Input checkUrl={checkUrl} clearField={clearField} checkToAnalyze={checkToAnalyze} setUrlToRender={setUrlToRender} imageValid={imageValid}/>
        <Samples checkUrl={checkUrl} setUrlToRender={setUrlToRender} />
      </div>
    </div>
  );
}

export default Main;
