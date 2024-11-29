import React from 'react';
import logo from './logo.svg';
import './App.css';
import Home from './pages/Home';

function App() {
  var isMobile = /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent);

  if (process.env.NODE_ENV === "production" && !isMobile) {
    window.location.href = "https://raphaelbr.dev"
  }

  return (
    <div className="App">
      <Home />
    </div>
  );
}

export default App;
