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
    <div className='background'>
      {/* <NavBar /> */}
      <div className='container'>
        <Header />
        <div className='weather-container'>
          <Weather />
          <CurrentWeather />

          {/* <Search onSearchChange={handleOnSearchChange} /> */}
        </div>
      </div>
    </div>
  );
}

export default App;
