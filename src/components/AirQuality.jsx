import React, { useEffect, useState } from 'react';
import '../styles/aq.scss';

const AirQuality = ({ lat, lon }) => {
  const apiKey = import.meta.env.VITE_OPENWEATHER_API_KEY;
  const [pmValue, setPmValue] = useState(null);
  const [soValue, setSoValue] = useState(null);
  const [noValue, setNoValue] = useState(null);
  const [pmbValue, setPmbValue] = useState(null);
  const [oValue, setOValue] = useState(null);
  const [coValue, setCoValue] = useState(null);
  const [error, setError] = useState(false);
  const [unit, setUnit] = useState(null);
  const [aqi, setAqi] = useState(null);

  const roundedLat = lat.toFixed(0);
  const roundedLon = lon.toFixed(0);
  const aqiConvert = ['Good', 'Fair', 'Moderate', 'Poor', 'Very Poor'];

  useEffect(() => {
    const getPMValue = async () => {
      const endpoint = `http://api.openweathermap.org/data/2.5/air_pollution?lat=${roundedLat}&lon=${roundedLon}&appid=${apiKey}`;

      try {
        const response = await fetch(endpoint);
        const data = await response.json();

        if (data) {
          console.log(data); // Log the data to the console
          if (data.list.length > 0) {
            const pmValue = data.list[0].components.pm2_5;
            const soValue = data.list[0].components.so2;
            const noValue = data.list[0].components.no2;
            const pmbValue = data.list[0].components.pm10;
            const oValue = data.list[0].components.o3;
            const coValue = data.list[0].components.co;
            const aqiValue = data.list[0].main.aqi;
            console.log(pmValue);

            setPmValue(pmValue);
            setSoValue(soValue);
            setNoValue(noValue);
            setPmbValue(pmbValue);
            setOValue(oValue);
            setCoValue(coValue);
            setUnit('μg/m3');
            setAqi(aqiValue);
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

  const getAQICorrespondingValue = (aqiValue) => {
    const index = Math.min(Math.floor(aqiValue), aqiConvert.length - 1);
    return aqiConvert[index];
  };

  return (
    <div className={`airQuality-${aqi}`}>
      {error ? (
        <h1 className='aq-font'>No air quality data available</h1>
      ) : (
        <div>
          <div className='parameter-row'>
            <span className='city'>Air Quality: </span>
            <span className='city'>{getAQICorrespondingValue(aqi)}</span>
            {console.log('aqi')}
            {console.log(aqi)}
          </div>
          <div className='parameter-row'>
            <span className='parameter-label'>PM2.5:</span>
            <span className='parameter-value'>
              {pmValue} {unit}
            </span>
          </div>

          <div className='parameter-row'>
            <span className='parameter-label'>SO2:</span>
            <span className='parameter-value'>
              {soValue} {unit}
            </span>
          </div>
          <div className='parameter-row'>
            <span className='parameter-label'>NO2:</span>
            <span className='parameter-value'>
              {noValue} {unit}
            </span>
          </div>
          <div className='parameter-row'>
            <span className='parameter-label'>PM10:</span>
            <span className='parameter-value'>
              {pmbValue} {unit}
            </span>
          </div>
          <div className='parameter-row'>
            <span className='parameter-label'>O3:</span>
            <span className='parameter-value'>
              {oValue} {unit}
            </span>
          </div>
          <div className='parameter-row'>
            <span className='parameter-label'>CO:</span>
            <span className='parameter-value'>
              {coValue} {unit}
            </span>
          </div>
        </div>
      )}
    </div>
  );
};

export default AirQuality;
