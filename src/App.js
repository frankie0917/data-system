import React from 'react';
import './App.css';
import Sidebar from './component/Sidebar/Sidebar';

function App() {
  return (
    <div className="App">
      <Sidebar/>
      <svg>
      <defs>
        <filter id="goo">
          <feGaussianBlur in="SourceGraphic" stdDeviation="10" result="blur" />
          <feColorMatrix
            in="blur"
            mode="matrix"
            values="1 0 0 0 0  0 1 0 0 0  0 0 1 0 0  0 0 0 30 -7"
            result="goo"
          />
          <feBlend in="SourceGraphic" in2="goo" />
        </filter>
      </defs>
    </svg>
    </div>
  );
}

export default App;
