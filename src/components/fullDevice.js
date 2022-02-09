import React from 'react';

const FullDevice = ({ device }) => {
  return (
    <div className="device">
      {Object.keys(device).map((key) => (
        <p key={key}>{device[key]}</p>
      ))}
    </div>
  );
};

export default FullDevice;
