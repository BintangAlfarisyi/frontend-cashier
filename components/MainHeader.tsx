import React from 'react'
import { ReactElement } from 'react'
import { HomeModernIcon, ChartPieIcon, BellAlertIcon } from '@heroicons/react/20/solid'
import Link from 'next/link';

type MainMenu = {
  name: ReactElement;
  icon: ReactElement | null;
  link: String;
  isActive: false;
};

const menu1: MainMenu[] = [
  {
    name: <Link href="/"><h1>Home</h1></Link>,
    icon: <HomeModernIcon width={18} className='text-gray-800' />,
    link: "/",
    isActive: false
  },
  {
    name: <Link href="/about"><h1>About</h1></Link>,
    icon: <HomeModernIcon width={18} className='text-gray-800' />,
    link: "/about",
    isActive: false
  },
  {
    name: <Link href="/category"><h1>Category</h1></Link>,
    icon: <HomeModernIcon width={18} className='text-gray-800' />,
    link: "/category",
    isActive: false
  },
  {
    name: <Link href="/jenis"><h1>Jenis</h1></Link>,
    icon: <HomeModernIcon width={18} className='text-gray-800' />,
    link: "/jenis",
    isActive: false
  },
  {
    name: <Link href="/stock"><h1>Stock</h1></Link>,
    icon: <HomeModernIcon width={18} className='text-gray-800' />,
    link: "/stock",
    isActive: false
  },
  {
    name: <Link href="/menu"><h1>Menu</h1></Link>,
    icon: <HomeModernIcon width={18} className='text-gray-800' />,
    link: "/menu",
    isActive: false
  },
  {
    name: <Link href="/customer"><h1>Customer</h1></Link>,
    icon: <HomeModernIcon width={18} className='text-gray-800' />,
    link: "/customer",
    isActive: false
  }
];

const Menus: React.FC<{menu : MainMenu[]}> = ({ menu }) => {
  return (
    <div>
      <ul>
        {menu.map((menu, index) => (
          <li key={index} className='px-3 py-2 flex'>
            {menu.name}
          </li>
        ))}
      </ul>
    </div>
  );
};

const MainHeader = () => {
  return (
    <div className='App'>
      <div className='w-64 bg-slate-100 h-screen'>
        <div className='border-b p-5'>
          Coffee Shop Bintang
        </div>
        <div className='p-5 border-b text-sm'>
          <h6>Master Data</h6>
          <Menus menu={menu1} />
        </div>
      </div>
    </div>
  )
}

export default MainHeader