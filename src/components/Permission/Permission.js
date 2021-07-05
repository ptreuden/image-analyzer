import React, { useState } from 'react';
import SignIn from '../SignIn/SignIn';
import Register from '../Register/Register';
import outerBrain from '../../outerBrain.svg';
import gears from '../../gears.svg';


const Permission = ({ changeUser, currentUser, setPreviousImage }) => {

  const [ permissionScreen, setPermissionScreen ] = useState('signin');
  const changePermissionScreen = (value) => {
    setPermissionScreen(value);
  }

  return(
    <div className='permission-container' id='permission-container'>
      <div className="permission-logo">
        <div className='brain-image-container'>
          <img src={outerBrain} alt='brain icon' className='outer-brain'/>
          <img src={gears} alt='gear icon' className='gears'/>
        </div>
        <h2>IMAGE</h2>
        <h2>ANALYZER</h2>
      </div>
      {
        permissionScreen === 'signin' ?
        <SignIn changePermission={changePermissionScreen} changeUser={changeUser} currentUser={currentUser} setPreviousImage={setPreviousImage}/>
        :
        <Register changePermission={changePermissionScreen} changeUser={changeUser} currentUser={currentUser}/>
      }
    </div>
  );
}

export default Permission;
