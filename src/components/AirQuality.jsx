import React, { useEffect, useState } from 'react';

const AirQuality = ({ lat, lon }) => {
  const apiKey = import.meta.env.VITE_OPEN_AQ_API_KEY;
  const [pmValue, setPmValue] = useState(null);

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
          const pmValue = data.results[0].measurements[2].value;
          setPmValue(pmValue);
        }
      } catch (error) {
        console.log('Error:', error);
      }
    };

    getPMValue();
  }, [roundedLat, roundedLon, apiKey]);

  return (
    <div>
      <h1>Latitude: {roundedLat}</h1>
      <h1>Longitude: {roundedLon}</h1>
      <h1>Air Quality: {pmValue}</h1>
    </div>
  );
};

export default AirQuality;
