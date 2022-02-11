import React, { useState } from 'react';

const FullDevice = ({ device }) => {
  return (
    <div key={device.id}>
      <div className="device">
        {Object.keys(device).map((key) => (
          <p key={key}>{device[key]}</p>
        ))}
      </div>
    </div>
  );
};

const ShortDevice = ({ device }) => {
  const commonProps = {
    type: device.type,
    id: device.id,
    name: device.name,
    connectionState: device.connectionState,
  };

  return (
    <div className="device">
      {Object.keys(commonProps).map((key) => (
        <p key={key}>{device[key]}</p>
      ))}
    </div>
  );
};

const App = ({ devices }) => {
  const [showFull, setShowFull] = useState(false);

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
      {devices.map((device) => (
        <div
          key={device.id}
          onClick={() => {
            setShowFull(!showFull);
          }}
        >
          {showFull ? (
            <FullDevice key={device.id} device={device} />
          ) : (
            <ShortDevice key={device.id} device={device} />
          )}
        </div>
      ))}
    </div>
  );
};

export default App;
