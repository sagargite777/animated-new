import './App.css';
import React, { useState } from 'react';

function App() {
  const [videoPosition, setVideoPosition] = useState({ x: '50%', y: '50%' });
  const [videoDimensions, setVideoDimensions] = useState({ width: 160, height: 160 });

  const handleMouseClick = (event) => {
    // Calculate the new position based on the click coordinates
    const newPosition = {
      x: event.clientX,
      y: event.clientY
    };
    setVideoPosition(newPosition);
  };

  return (
    <div className="App" onClick={handleMouseClick}>
      <video
        autoplay
        loop
        style={{
          position: 'absolute',
          top: videoPosition.y,
          left: videoPosition.x,
          transform: 'translate(-50%, -50%)',
          width: `${videoDimensions.width}px`,
          height: `${videoDimensions.height}px`,
          borderRadius:'30px'
        }}
      >
        <source src='/gif.mp4' />
        Your browser does not support the video tag.
      </video>
    </div>
  );
}

export default App;
