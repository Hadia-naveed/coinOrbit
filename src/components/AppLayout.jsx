import React from 'react';
import { Outlet } from 'react-router-dom';
import Navbar from './Navbar';

const AppLayout = () => {
  return (
    <main className="bg-[#e8e8e8] min-h-screen">
      <div className="flex flex-col md:flex-row">
        <Navbar />
        <div className="flex-1 md:ml-56 p-6">
          <Outlet />
        </div>
      </div>
    </main>
  );
};

export default AppLayout;
