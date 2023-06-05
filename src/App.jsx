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
        <CurrentWeather />
        <Weather />

        {/* <Search onSearchChange={handleOnSearchChange} /> */}
      </div>
    </>
  );
}

export default App;
