import { useState } from 'react';
import Header from './components/Header';
import Weather from './components/Weather';
import CurrentWeather from './components/CurrentWeather';
import WindowQuestion from './components/WindowQuestion';
import './App.css';
import AirQuality from './components/AirQuality';

function App() {
  const [weatherData, setWeatherData] = useState(null);
  const [cityClicked, setCityClicked] = useState(false);
  const [lat, setLat] = useState(0);
  const [lon, setLon] = useState(0);

  const handleWeatherData = (data) => {
    setWeatherData(data);
    setCityClicked(true);
  };

  return (
    <div className='background'>
      <div className='container'>
        <Header />
        {cityClicked && <WindowQuestion weatherData={weatherData} />}{' '}
        <div className='weather-container'>
          <CurrentWeather weatherData={weatherData} />
          {cityClicked && <AirQuality lat={lat} lon={lon} />}{' '}
          <Weather
            setWeatherData={handleWeatherData}
            setLon={setLon}
            setLat={setLat}
          />
        </div>
      </div>
    </div>
  );
}

export default App;
