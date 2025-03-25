import React from 'react';
import {Route, Routes } from 'react-router-dom';
import HomePage from './Pages/HomePage';
import RetosPage from './Pages/RetosPage'
import './App.css';

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/retos/:id" element={<RetosPage />} />
    </Routes>
  );
};

export default App;
