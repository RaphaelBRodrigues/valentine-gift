import React from 'react';
import './App.css';
import Home from './pages/Home';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

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
