import React from 'react';
import { Routes, Route } from 'react-router-dom';
import NavBar from './layouts/NavBar';
import Home from './screens/Home';

const App = () => {
  return (
    <>
      <NavBar />
      <Routes>
        <Route path='/' element={<Home />} />
      </Routes>
    </>
  );
};

export default App;
