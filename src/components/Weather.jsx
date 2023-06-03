import '../styles/weather.scss';
import { useState } from 'react';
import axios from 'axios';

const Weather = () => {
  const [cities, setCities] = useState([]);
  const [name, setName] = useState('');
  const handleSubmit = async (e) => {
    e.preventDefault();
    const options = {
      method: 'GET',
      url: `https://wft-geo-db.p.rapidapi.com/v1/geo/cities/?namePrefix=${name}`,
      headers: {
        'X-RapidAPI-Key': '38cc5bf868mshb49c4987052300ap1e8192jsn82c8d587100f',
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

  const handleCityClick = async (e) => {
    e.preventDefault();
    console.log('City was clicked');
  };

  return (
    <div>
      <form className='locationInput' onSubmit={handleSubmit}>
        <h2>Enter Your Location</h2>
        <input
          type='text'
          name='name'
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
        />
        <button className='btn btn-location'>Find Out</button>
      </form>
      {cities.map((city) => (
        <div key={city.id} className='city-results' onClick={handleCityClick}>
          <br />
          <h3>{city.name}</h3>
          <p>Country: {city.country}</p>
          <p>State/Region: {city.region}</p>
          <p>Latitude: {city.latitude}</p>
          <p>Longitude: {city.longitude}</p>
          <br />
        </div>
      ))}
    </div>
  );
};

export default Weather;
