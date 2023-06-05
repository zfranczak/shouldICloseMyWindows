import Weather from './Weather';
import '../styles/current-weather.scss';

const CurrentWeather = () => {
  return (
    <div className='weather'>
      <div className='top'>
        <div>
          <p className='city'>Amsterdam</p>
          <p className='weather-description'>Sunny</p>
        </div>
        <img alt='weather' className='weather-icon' src='icons/01d.png' />
      </div>
      <div className='bottom'>
        <p className='temperature'>70°F</p>
        <div className='details'>
          <div className='parameter-row'>
            <span className='parameter-label'>Details</span>
          </div>
          <div className='parameter-row'>
            <span className='parameter-label'>Feels like</span>
            <span className='parameter-value'>70°F</span>
          </div>
          <div className='parameter-row'>
            <span className='parameter-label'>Wind</span>
            <span className='parameter-value'>2 M/H</span>
          </div>
          <div className='parameter-row'>
            <span className='parameter-label'>Humidity</span>
            <span className='parameter-value'>20%</span>
          </div>
          <div className='parameter-row'>
            <span className='parameter-label'>Pressure</span>
            <span className='parameter-value'>15 hPa</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CurrentWeather;

// url: `https://api.openweathermap.org/data/2.5/weather?lat={city.latitude}&lon={city.longitude}&appid={4849d3e1a14df9aa614d3c83e9e51352}`,
