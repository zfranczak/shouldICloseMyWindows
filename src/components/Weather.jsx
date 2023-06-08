import '../styles/weather.scss';
import { useState } from 'react';
import axios from 'axios';

const Weather = (props) => {
  const [cities, setCities] = useState([]);
  const [name, setName] = useState('');
  const weatherData = props.weatherData;
  const setWeatherData = props.setWeatherData;
  const lat = props.lat;
  const setLat = props.setLat;
  const lon = props.lon;
  const setLon = props.setLon;

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
      console.log(response.data.data);
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
      setLon(city.longitude);
      setLat(city.latitude);
      console.log(weatherResponse.data);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div className='weather-component'>
      <form className='location-input' onSubmit={handleSubmit}>
        <input
          type='text'
          className='city-input'
          name='name'
          value={name}
          onChange={(e) => setName(e.target.value)}
          placeholder='Enter a City'
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
                <p>{lat}</p>
                <p>{lon}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Weather;
