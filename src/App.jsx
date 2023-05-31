import { useState } from 'react';
import NavBar from './components/NavBar';
import Header from './components/Header';
import Weather from './components/Weather';
import './App.css';

export default function App() {
  return (
    <>
      <NavBar />
      <Header />
      <Weather />
    </>
  );
}
