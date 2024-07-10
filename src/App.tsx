import React from 'eact';
import './App.css';
import Button from './components/button/Button';
import ViteLogo from '../public/vite.svg';
import Typography from '../src/components/atom/typography/Typography';

function App() {
  const handleOnClick = () =>{
    alert('clicked')
    
  }

  const addingOnChange = () =>{
    console.log('Button changed!');
    document.querySelector('button').style.backgroundColor = 'red';
  }
  return (
    <>
    <Typography 
    text="Button components With icon at right side" 
    className="mb-5" 
   
    />
    <Button
      type="button"
      className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-2 rounded"
      // disabled
      text=""
      onClick={handleOnClick}
    >
      <p tag="p">That any Thing working all</p>
      <img src={ViteLogo} alt="viteLogo" className="w-3 h-3" />
    </Button>
    <hr className='my-5'/>


    <Typography text="Button components With icon at left side" className="mb-5" />
    <Button
      type="button"
      className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-2 rounded"
      disabled
      text=""
      onClick={handleOnClick}
      onChange={addingOnChange}
    >
      <img src={ViteLogo} alt="viteLogo" className="w-3 h-3" />
      <p tag="p">That any Thing working all</p>
    </Button>
    <hr className='my-5'/>


    <Typography text="Button components With icon at icon side" className="mb-5" />
    <Button
      type="button"
      className="bg-blue-300 hover:bg-blue-500 text-white font-bold py-2 px-2 rounded"
      disabled
      text=""
    >
      <p tag="p">My Payment Sistem</p>
    </Button>
    <hr className='my-5'/>

    <Typography text="Button components With Only icons" className="mb-5" />
    <Button
      type="button"
      className="bg-blue-600 hover:bg-blue-500 text-white font-bold py-2 px-2 rounded"
      disabled
      text=""
    >
      <img src={ViteLogo} alt="viteLogo" className="w-3 h-3" />
    </Button>
    <hr className='my-5'/>
  </>
  );
}

export default App;
