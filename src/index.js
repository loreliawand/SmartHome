import ReactDOM from 'react-dom';
import './index.css';
import App from './App';

const devices = [
  {
    type: 'bulb',
    id: 1,
    name: 'newsun_2022',
    connectionState: 'connected',
    isTurnedOn: true,
    brightness: 95,
    color: 'white',
  },
  {
    type: 'outlet',
    id: 2,
    name: 'tunnel_2022',
    connectionState: 'disconnected',
    isTurnedOn: false,
    powerConsumpction: 0,
  },
  {
    type: 'temperatureSensor',
    id: 3,
    name: 'climate_2022',
    connectionState: 'poorConnectiont',
    temperature: 0,
  },
];

ReactDOM.render(<App devices={devices} />, document.getElementById('root'));
