import '../styles/weather.scss';

const Weather = () => {
  return (
    <div>
      <div className='locationInput'>
        <h2>Enter Your Location</h2>
        <input />
      </div>
      <button className='btn btn-location'>Find Out</button>
    </div>
  );
};

export default Weather;
