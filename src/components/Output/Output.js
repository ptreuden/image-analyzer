import React from 'react';
import ImageOutput from '../ImageOutput/ImageOutput';
import Themes from '../Themes/Themes';
import './Output.css';


const Output = ({ imageValid, imageToRender, showThemes, themeNamesValues }) => {
  return(
    <div className='output-container' id='output-container'>
      <ImageOutput imageValid={imageValid} imageToRender={imageToRender}/>
      <Themes showThemes={showThemes} imageValid={imageValid} themeNamesValues={themeNamesValues}/>
    </div>
  );
}

export default Output;
