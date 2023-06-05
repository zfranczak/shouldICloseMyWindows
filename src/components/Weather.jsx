import '../styles/weather.scss';
import { useState } from 'react';
import axios from 'axios';

const Weather = () => {
  const [cities, setCities] = useState([]);
  const [name, setName] = useState('');
  const [weatherData, setWeatherData] = useState(null);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const options = {
      method: 'GET',
      url: `https://wft-geo-db.p.rapidapi.com/v1/geo/cities/?namePrefix=${name}`,
      headers: {
        'X-RapidAPI-Key': import.meta.env.VITE_CITY_API,
        'X-RapidAPI-Host': 'wft-geo-db.p.rapidapi.com',
      },
    };

    try {
      const response = await axios.request(options);
      setCities(response.data.data);
      console.log(cities);
    } catch (error) {
      console.error(error);
    }
  };

  const handleCityClick = async (e, city) => {
    e.preventDefault();
    console.log('City was clicked');
    try {
      const weatherResponse = await axios.get(
        `https://api.openweathermap.org/data/2.5/weather?lat=${
          city.latitude
        }&lon=${city.longitude}&appid=${
          import.meta.env.VITE_OPENWEATHER_API_KEY
        }&units=imperial`
      );
      setWeatherData(weatherResponse.data);
      console.log(weatherData);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div>
      <form className='location-input' onSubmit={handleSubmit}>
        <h2>Enter Your Location</h2>
        <input
          type='text'
          className='city-input'
          name='name'
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
        />
        <button className='btn btn-location'>Find Out</button>
      </form>
      <div className='city-container'>
        {cities.map((city) => (
          <div
            key={city.id}
            className='city-results'
            onClick={(e) => handleCityClick(e, city)} // Pass the city object to handleCityClick
          >
            <div className='city-details'>
              <h3>
                {city.name}, {city.regionCode}
              </h3>
              <div className='region'>
                <p>{city.country}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
      {weatherData && (
        <div>
          <h2>Weather Information</h2>
          <p>Temperature: {weatherData.main.temp} F</p>
          <p>Humidity: {weatherData.main.humidity}%</p>
          <p>Wind Speed: {weatherData.wind.speed} m/s</p>
          {/* Add more weather data fields as needed */}
        </div>
      )}
    </div>
  );
};

export default Weather;
