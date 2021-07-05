import React from 'react';
import './Samples.css';


const Samples = ({ checkUrl, setUrlToRender }) => {

  // sample image addresses for display
  const beachPic = 'https://images.unsplash.com/photo-1520520731457-9283dd14aa66?ixid=MnwxMjA3fDB8MHxzZWFyY2h8NjF8fGJlYWNofGVufDB8MHwwfHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60';

  const cityPic = 'https://images.unsplash.com/photo-1621251401027-432cd149a00c?ixid=MnwxMjA3fDB8MHxzZWFyY2h8NzR8fGNpdHl8ZW58MHwwfDB8fA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60';

  const dogPic = 'https://images.unsplash.com/photo-1559355946-519a96b93456?ixid=MnwxMjA3fDB8MHxzZWFyY2h8ODR8fGRvZ3xlbnwwfDB8MHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60';

  const urlHandler = (value) => {
    let urlInput = document.getElementById('url-input');
    urlInput.value = value;
    setUrlToRender(value);
    setTimeout(() => {
        checkUrl(value);
    }, 100);
  }

  return(
    <div className='samples-container'>
      <div className='samples-text-container'>
        <p>No image?  Try these samples:</p>
      </div>
      <div className='samples-images-container'>
        <img src={beachPic} alt ='beach' onClick={() => urlHandler(beachPic)}/>
        <img src={cityPic} alt='city' onClick={() => urlHandler(cityPic)}/>
        <img src={dogPic} alt='dog' onClick={() => urlHandler(dogPic)}/>
      </div>
    </div>
  );
}

export default Samples;
