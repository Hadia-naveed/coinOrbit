import React from 'react';
import { Outlet } from 'react-router-dom';
import Navbar from './Navbar';

const AppLayout = () => {
  return (
    <main className="bg-[#e8e8e8] w-full min-h-screen">
      <div className="max-w-screen-2xl mx-auto flex">
        <Navbar />
        <div className="flex-1 p-8">
          <Outlet />
        </div>
      </div>
    </main>
  );
};

export default AppLayout;
