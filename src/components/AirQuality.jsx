import React, { useEffect, useState } from 'react';
import '../styles/aq.scss';

const AirQuality = ({ lat, lon }) => {
  const apiKey = import.meta.env.VITE_OPEN_AQ_API_KEY;
  const [pmValue, setPmValue] = useState(null);
  const [error, setError] = useState(false);
  const [unit, setUnit] = useState(null);

  const roundedLat = lat.toFixed(2);
  const roundedLon = lon.toFixed(2);

  useEffect(() => {
    const getPMValue = async () => {
      const endpoint = `https://api.openaq.org/v2/latest?coordinates=${roundedLat},${roundedLon}`;

      try {
        const response = await fetch(endpoint);
        const data = await response.json();

        if (data) {
          console.log(data); // Log the data to the console
          if (data.results.length > 0) {
            const pmValue = data.results[0].measurements[5].value;
            const unit = data.results[0].measurements[5].unit;
            setPmValue(pmValue);
            setUnit(unit);
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
