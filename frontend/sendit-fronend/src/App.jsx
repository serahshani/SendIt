import React from 'react';
import { Outlet } from 'react-router-dom';
import Navbar from './components/Navbar'; // Import Navbar

export const App = () => {
  return (
    <>
      {/* Navbar */}
      <header>
        <Navbar />
      </header>
      {/* Main Content */}
      <main style={{ width: '100vw' }}>
        <Outlet />
      </main>
    </>
  );
};

export default App;
