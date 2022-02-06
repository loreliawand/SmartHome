const App = () => {
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
      <div>
        <h2 className="device">Bulb</h2>
      </div>
      <div>
        <h2 className="device">Outlet</h2>
      </div>
      <div>
        <h2 className="device">Temperature sensor</h2>
      </div>
    </div>
  );
};

export default App;
