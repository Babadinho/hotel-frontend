import React from 'react';
import { Routes, Route } from 'react-router-dom';
import NavBar from './layouts/NavBar';
import Footer from './layouts/Footer';
import Home from './screens/Home';

const App = () => {
  return (
    <>
      <NavBar />
      <Routes>
        <Route path='/' element={<Home />} />
      </Routes>
      <Footer />
    </>
  );
};

export default App;
