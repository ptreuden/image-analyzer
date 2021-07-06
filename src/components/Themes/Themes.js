import React from 'react';
import './Themes.css';


const Themes = ({ showThemes, imageValid, themeNamesValues }) => {

  // get themesNamesValues array, assign a 2-digit percentage
  const themeName1 = themeNamesValues[0].concept;
  const themeValue1 = themeNamesValues[0].value.toPrecision(2) * 100;
  const themeName2 = themeNamesValues[1].concept;
  const themeValue2 = themeNamesValues[1].value.toPrecision(2) * 100;
  const themeName3 = themeNamesValues[2].concept;
  const themeValue3 = themeNamesValues[2].value.toPrecision(2) * 100;
  const themeName4 = themeNamesValues[3].concept;
  const themeValue4 = themeNamesValues[3].value.toPrecision(2) * 100;
  const themeName5 = themeNamesValues[4].concept;
  const themeValue5 = themeNamesValues[4].value.toPrecision(2) * 100;

  return(
    <div className={`themes-container ${(showThemes && imageValid) ? 'visible' : 'hidden'}`} id='themes-container'>
      <h3>THEMES</h3>
      <div>
        <div className='themes-data'>
          <div className='theme theme1'>
            <p className='theme-text theme-text1'>{themeName1}</p>
            <div className='theme-bar-container'>
              <div className='theme-bar theme-bar1' style={{width: (themeValue1 / 1.15) + '%'}}></div>
              <div className='theme-percentage theme-percentage1'>
                <p>{themeValue1}%</p>
              </div>
            </div>
          </div>
        </div>
        <div className='themes-data'>
          <div className='theme theme2'>
            <p className='theme-text theme-text2'>{themeName2}</p>
            <div className='theme-bar-container'>
              <div className='theme-bar theme-bar2' style={{width: (themeValue2 / 1.15) + '%'}}></div>
              <div className='theme-percentage theme-percentage2'>
                <p>{themeValue2}%</p>
              </div>
            </div>
          </div>
        </div>
        <div className='themes-data'>
          <div className='theme theme3'>
            <p className='theme-text theme-text3'>{themeName3}</p>
            <div className='theme-bar-container'>
              <div className='theme-bar theme-bar3' style={{width: (themeValue3 / 1.15) + '%'}}></div>
              <div className='theme-percentage theme-percentage3'>
                <p>{themeValue3}%</p>
              </div>
            </div>
          </div>
        </div>
        <div className='themes-data'>
          <div className='theme theme4'>
            <p className='theme-text theme-text4'>{themeName4}</p>
            <div className='theme-bar-container'>
              <div className='theme-bar theme-bar4' style={{width: (themeValue4 / 1.15) + '%'}}></div>
              <div className='theme-percentage theme-percentage4'>
                <p>{themeValue4}%</p>
              </div>
            </div>
          </div>
        </div>
        <div className='themes-data'>
          <div className='theme theme5'>
            <p className='theme-text theme-text5'>{themeName5}</p>
            <div className='theme-bar-container'>
              <div className='theme-bar theme-bar5' style={{width: (themeValue5 / 1.15) + '%'}}></div>
              <div className='theme-percentage theme-percentage5'>
                <p>{themeValue5}%</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Themes;
