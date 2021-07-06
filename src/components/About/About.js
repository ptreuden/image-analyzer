import React, { useState } from 'react';
import './About.css';

const About = () => {

  const [ aboutShowing, setAboutShowing ] = useState(false);

  return(
    <div className={`about-container ${aboutShowing ? 'about-showing' : 'about-hidden'}`}>
      <div className='about-content'>
          <div className='about-tab' onClick={(e) => setAboutShowing(!aboutShowing)}>
          {
            aboutShowing ?
            <p>x</p>
              :
            <p>?</p>
          }
          </div>
          <div className='about-text-container'>
            <div className='about-details'>
              <p className='about-text'>This image analyzer uses the <a href='https://www.clarifai.com/' target='_blank'>Clarifai</a> API to garner data about inputted images.  Then, through a custom algorithm, five themes and respective confidence levels are calculated and displayed in a visual fashion.</p>
              <p className='about-text'>Although this page is simply for demonstration, the generated information could be applied in many ways, such as the creation of automatic tags of user-uploaded images.</p>
              <p className='about-text-unsplash'>Sample images from <a href='https://unsplash.com/' target='_blank'>Unsplash.com</a></p>
            </div>
          </div>
        </div>
    </div>
  );
}

export default About;
