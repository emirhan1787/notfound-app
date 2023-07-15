import logo from './logo.svg';
import './App.css';


function App() {
  return (
    <div className='mainContainer'>
      <div className='headerDiv'>
        <text className='headerText'>404 NOT FOUND</text>  
      </div>
      <br></br>
      <div className='mainDiv'>
        <div className='korkuluk'>
          <img src='/korkuluk.png' alt='resim'></img>
        </div>
        <div className='descDiv'>
          <div>
          <text className='descText'>I have bad news for you</text>
          </div>
          <br></br>
          <div className='descDiv2'>
          <text className='descText2'>The page you are looking for might be removed or is temporarily unavailable</text>
          </div>
          <br/>
          <button className='homeBtn'>BACK TO HOME</button>
        </div>
        
      </div>
      
    </div>
  );
}

export default App;
