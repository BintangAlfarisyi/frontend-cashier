import React from 'react'
import Link from "next/link";
import MainHeader from './MainHeader';

const MainLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className='bg-slate-100 h-screen w-full flex flex-row'>
      <MainHeader />

      {children}
    </div>
  );
};

export default MainLayout

// rafce