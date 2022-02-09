import React, { useState } from 'react';
import ShortDevice from './components/shortDevice';
import FullDevice from './components/fullDevice';

const App = ({ devices }) => {
  const [showFull, setShowFull] = useState(false);

  const showFullDevice = (
    <div>
      {devices.map((device) => (
        <FullDevice key={device.id} device={device} />
      ))}
    </div>
  );

  const showShortDevice = (
    <div>
      {devices.map((device) => (
        <ShortDevice key={device.id} device={device} />
      ))}
    </div>
  );

  const showDevice = showFull ? showFullDevice : showShortDevice;

  return (
    <div>
      <h1>Welcome, user_name!</h1>
      <button>Synchronization</button>
      <br></br>
      <br></br>
      <button>Settings</button>
      <br></br>
      <br></br>
      <button>Sort by default</button>
      <div
        onClick={() => {
          setShowFull(!showFull);
        }}
      >
        {showDevice}
      </div>
    </div>
  );
};

export default App;
