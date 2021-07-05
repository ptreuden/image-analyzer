import React from 'react';
import './ImageOutput.css';


const ImageOutput = ({ imageValid, imageToRender }) => {
  return(
    <div className={`imageOutput-container ${imageValid ? 'visible' : 'hidden'}`}>
      <h3>IMAGE</h3>
      {
        imageValid ?
        <div className='imageOutput-image'>
          <img id='imageShowing' className={'showImage'} src={imageToRender} alt='rendered' />
        </div>
        :
        <div className='imageOutput-image'>
          <img id='imageShowing' className={'hideImage'} src={imageToRender} alt='hidden' />
        </div>
      }
    </div>
  );
}

export default ImageOutput;
