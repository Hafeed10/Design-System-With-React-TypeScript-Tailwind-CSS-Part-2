import React from 'react';
import './App.css';
import Button from './components/button/Button';
import ViteLogo from '../public/vite.svg';
import Typography from '../src/components/atom/typography/Typography';

function App() {
  return (
    <>
      <Typography text="Button components With icon at right side" />
      <Button
        type="button"
        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-2 rounded"
        disabled
        text='submit'
        Children
        
      >
        <p>That any Thing working all</p>
        <img src={ViteLogo} alt="viteLogo" className="w-3 h-3" />
      </Button>
    </>
  );
}

export default App;
