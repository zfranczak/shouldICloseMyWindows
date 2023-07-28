import React, { useEffect, useState } from 'react';
import '../styles/aq.scss';

const AirQuality = ({ lat, lon }) => {
  const apiKey = import.meta.env.VITE_OPENWEATHER_API_KEY;
  const [pmValue, setPmValue] = useState(null);
  const [error, setError] = useState(false);
  const [unit, setUnit] = useState(null);

  const roundedLat = lat.toFixed(0);
  const roundedLon = lon.toFixed(0);

  useEffect(() => {
    const getPMValue = async () => {
      const endpoint = `http://api.openweathermap.org/data/2.5/air_pollution?lat=${roundedLat}&lon=${roundedLon}&appid=${apiKey}`;

      try {
        const response = await fetch(endpoint);
        const data = await response.json();

        if (data) {
          console.log(data); // Log the data to the console
          if (data.list > 0) {
            const pmValue = data.list[0].components.pm2_5;
            console.log(data.list);

            setPmValue(pmValue);
            setUnit('pm 2.5');
          } else {
            setError(true);
          }
        }
      } catch (error) {
        console.log('Error:', error);
        setError(true);
      }
    };

    getPMValue();
  }, [roundedLat, roundedLon, apiKey]);

  return (
    <div>
      <h1 className='aq-font'>Latitude: {roundedLat}</h1>
      <h1 className='aq-font'>Longitude: {roundedLon}</h1>
      {error ? (
        <h1 className='aq-font'>No air quality data available</h1>
      ) : (
        <h1 className='aq-font'>
          Air Quality: {pmValue} {unit}
        </h1>
      )}
    </div>
  );
};

export default AirQuality;
