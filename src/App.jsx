import { useState } from 'react';
import NavBar from './components/NavBar';
import Header from './components/Header';
import Weather from './components/Weather';
import Search from './components/search/Search';
import CurrentWeather from './components/CurrentWeather';
import './App.css';

function App() {
  const handleOnSearchChange = (searchData) => {
    console.log(searchData);
  };

  return (
    <>
      {/* <NavBar /> */}
      <div className='container'>
        <Header />
        <div className='weather-container'>
          <Weather onSearchChange={handleOnSearchChange} />
          <CurrentWeather />

          {/* <Search onSearchChange={handleOnSearchChange} /> */}
        </div>
      </div>
    </>
  );
}

export default App;
