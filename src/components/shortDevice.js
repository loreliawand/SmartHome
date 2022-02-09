import React from 'react';

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

export default ShortDevice;
