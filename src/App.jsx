import { useState } from 'react';
import Header from './components/Header';
import Weather from './components/Weather';
import CurrentWeather from './components/CurrentWeather';
import './App.css';

function App() {
  const [weatherData, setWeatherData] = useState(null);
  const handleWeatherData = (data) => {
    setWeatherData(data);
  };

  return (
    <div className='background'>
      <div className='container'>
        <Header />
        <div className='weather-container'>
          <CurrentWeather weatherData={weatherData} />
          <Weather setWeatherData={handleWeatherData} />
        </div>
      </div>
    </div>
  );
}

export default App;
