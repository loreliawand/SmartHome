const App = (props) => {
  const { devices } = props;

  const clicking = () => {
    console.log('clicked!');
  };
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
        <div key={device.id} className="device" onClick={clicking}>
          <h2>{device.name}</h2>
          <span>{device.id}</span>
          <br></br>
          <span>{device.name}</span>
          <br></br>
          <span>{device.type}</span>
          <br></br>
          <span>{device.connectionState}</span>
        </div>
      ))}
    </div>
  );
};

export default App;
