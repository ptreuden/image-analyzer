import React, { useState } from 'react';
import Permission from './components/Permission/Permission';
import Navigation from './components/Navigation/Navigation';
import Greeting from './components/Greeting/Greeting';
import Main from './components/Main/Main';
import Output from './components/Output/Output';
import About from './components/About/About';
import './App.css';
import 'tachyons';


const App = () => {

  const [ imageValid, setImageValid ] = useState(false);
  const [ currentUser, setCurrentUser ] = useState({
    id: 0,
    username: 'Guest',
    last_entry: '',
    entries: 0
  });

  // current image being shown
  const [ currentImage, setCurrentImage ] = useState('');

  // previous image that was analyzed
  const [ previousImage, setPreviousImage ] = useState('');

  // image address that is in the input field
  const [ urlToRender, setUrlToRender ] = useState('');

  // if image is valid, analysis can be done and themes shown
  const [ showThemes, setShowThemes ] = useState(false);

  // theme array, values set when analyze button clicked with valid image
  const [ themeNamesValues, setThemeNamesValues ] = useState([
    {
      concept: '',
      value: 0
    },
    {
      concept: '',
      value: 0
    },
    {
      concept: '',
      value: 0
    },
    {
      concept: '',
      value: 0
    },
    {
      concept: '',
      value: 0
    }
]);

  // values for default theme array, clearing values
  let clearTheme = [{concept: '', value: 0}, {concept: '', value: 0}, {concept: '', value: 0}, {concept: '', value: 0}, {concept: '', value: 0},];

  const checkUrl = (value) => {
    //if image showing AND analysis is already showing when checking another image address - rotate currentImage to previousImage, clear image/themes windows
    if(imageValid && showThemes) {
      setPreviousImage(currentImage);
      setCurrentImage('');
      setThemeNamesValues(clearTheme);
      setShowThemes(false);
    }
    // check image attempting to be shown, if there is a width over 75, show it
    let image = document.getElementById('imageShowing');
    const mainInputDiv = document.getElementById('main-buffer');
    if(image.width > 75) {
      setImageValid(true);
      mainInputDiv.scrollIntoView({behavior: 'smooth'});
    } else {
      setImageValid(false);
    }
  }

  // clear button, reset image and theme divs/values
  const clearField = () => {
    let input = document.getElementById('url-input');
    input.value = '';
    //if image showing AND analysis is showing - rotate currentImage to previousImage
    if(imageValid && showThemes) {
      setPreviousImage(currentImage);
      setCurrentImage('');
    }
    // back to default values
    setImageValid(false);
    setShowThemes(false);
    setThemeNamesValues(clearTheme);
  }

  // if user is signed in, when logging out, send the last analyzed image to db
  const updateEntries = (user) => {
    let { id, last_entry } = user;
    fetch('https://gentle-brook-34978.herokuapp.com/entries',  {
      method: 'put',
      headers: {'Content-Type': 'application/json'},
      body: JSON.stringify({id: id, last_entry: last_entry })
    })
    .then(response => response.json())
    .then(data => {
      //possible future feature, utilizing local entry update
      // setCurrentUser({...currentUser, entries: data.entries});
    })
    .catch(err => alert('Could not update user entry'))
  }


  //send pic to server for api request
  const sendPic = (url) => {
    fetch('https://gentle-brook-34978.herokuapp.com/analyze', {
      method: 'post',
      headers: {'Content-Type': 'application/json'},
      body: JSON.stringify({ url: url })
    })
    .then(response => response.json())
    .then(data => {
        setThemeNamesValues(data);
        //if window width < ...
        const windowWidth = window.innerWidth;
        const outputContainer = document.getElementById('output-container');
        if(windowWidth < 1025) {
          outputContainer.scrollIntoView({behavior: 'smooth'});
        }

        if(currentUser.username !== 'Guest') {
          updateEntries(currentUser);
          setCurrentUser({...currentUser, last_entry: urlToRender, entries: currentUser.entries += 1})
        }
        else {
          setCurrentUser({...currentUser, entries: currentUser.entries += 1})
        }
    })
    .catch(err => {
      setShowThemes(false);
      setImageValid(false);
      setTimeout(() => {
        alert('Sorry, the request could not be fulfilled');
      }, 200)
    })
  }

  //different user, back to default settings (user's last analyzed image, if necessary)
  const changeUser = (user) => {
    setPreviousImage('');
    setImageValid(false);
    setShowThemes(false);
    setThemeNamesValues(clearTheme);
    setCurrentUser(user);
  }

  // see if the image address generates a usable image
  const checkToAnalyze = () => {
    //check if image is valid/has been analyzed already
    if(imageValid && !showThemes) {
      setShowThemes(true);
      // setCurrentUser({...currentUser, last_entry: urlToRender});
      sendPic(urlToRender);
      setCurrentImage(urlToRender);
    }
      else if(imageValid && showThemes) {
      alert('Image already processed');
    } else {
      alert('Please input valid image url address')
    }
  }

  return (
    <div className={`app-container ${imageValid ? 'scrollable' : 'no-scroll'}`}>
      {
        currentUser.username === '' ?
          <Permission changeUser={changeUser} currentUser={currentUser} setPreviousImage={setPreviousImage}/> :
          <div>
            <Navigation changeUser={changeUser} currentUser={currentUser} setPreviousImage={setPreviousImage}/>
            <Greeting user={currentUser} previousImage={previousImage} checkUrl={checkUrl} setUrlToRender={setUrlToRender}/>
            <Main checkUrl={checkUrl} clearField={clearField}  checkToAnalyze={checkToAnalyze} setUrlToRender={setUrlToRender} imageValid={imageValid}/>
            <Output imageValid={imageValid} imageToRender={urlToRender} showThemes={showThemes} themeNamesValues={themeNamesValues}/>
            <About />
          </div>
      }
    </div>
  );
}

export default App;
