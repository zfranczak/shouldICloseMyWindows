import { useState } from 'react';
import Header from './components/Header';
import Weather from './components/Weather';
import CurrentWeather from './components/CurrentWeather';
import WindowQuestion from './components/WindowQuestion';
import './App.css';

function App() {
  const [weatherData, setWeatherData] = useState(null);
  const [cityClicked, setCityClicked] = useState(false);

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
          <Weather setWeatherData={handleWeatherData} />
        </div>
      </div>
    </div>
  );
}

export default App;
