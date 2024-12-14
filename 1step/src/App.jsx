import React from 'react';
import { BrowserRouter, Routes, Route, NavLink, Link, useLocation } from 'react-router-dom';
import ParentForm from './ParentForm';
import Bookings from './Bookings';
import Profile from './Profile';
import Home from './Home';
import {
  RiDashboardFill,
  RiMessage2Fill,
  RiLogoutBoxFill
} from "react-icons/ri";
import { IoPersonSharp } from "react-icons/io5";
import { BsFillCalendarCheckFill } from "react-icons/bs";
import { FaRegHeart } from "react-icons/fa";
import { CiSearch } from "react-icons/ci";
import ProviderForm from'./ProviderForm';
import Therapist from './Therapist';


function Sidebar() {
  return (
    <div className="shadow-md pl-5 pt-5 w-48 h-screen text-left bg-gray-100 border-r-2">
      <div className="space-y-8 font-poppins">
        <div className="flex gap-2 cursor-pointer hover:text-main">
          <RiDashboardFill className="mt-1" />
          <p>Dashboard</p>
        </div>
        <NavLink
          to="/parent"
          className={({ isActive }) =>
            `gap-2 flex cursor-pointer ${isActive ? 'text-main border-r-2 border-main' : 'hover:text-main'}`
          }
        >
          <IoPersonSharp className="mt-1" />
          Profile
        </NavLink>
        <div className="flex gap-2 cursor-pointer hover:text-main">
          <RiMessage2Fill className="mt-1" />
          <p>Message</p>
        </div>
        <NavLink
          to="/bookings"
          className={({ isActive }) =>
            `gap-2 flex cursor-pointer ${isActive ? 'text-main border-r-2 border-main' : 'hover:text-main'}`
          }
        >
          <BsFillCalendarCheckFill className="mt-1" />
          Bookings
        </NavLink>
        <div className="flex gap-2 cursor-pointer hover:text-red-400">
          <RiLogoutBoxFill className="mt-1" />
          <p>Logout</p>
        </div>
      </div>
    </div>
  );
}

function App() {
  const location = useLocation();
  const hiddenSidebarPaths = ['/', '/therapist'];
  const showSidebar = !hiddenSidebarPaths.includes(location.pathname);

  return (
    <div className="font-poppins">
      <nav className="p-5 bg-main flex justify-between text-white">
        <div className='flex gap-10'>
          <p className='text-lg font-semibold ml-10 mt-2'>1Step</p>
          <div className='relative'>
            <CiSearch className='absolute top-1/2 left-3 transform -translate-y-1/2 text-gray-500' />
            <input
              type='search'
              placeholder='Find a therapist'
              className='bg-main p-2 pl-10 border border-gray-400 rounded-lg w-full'
            />
          </div>
        </div>
        <div className='flex justify-end mt-2 space-x-5'>
          <Link to="/">Home</Link>
          <Link to="#">Lists</Link>
          <Link to="#">About Us</Link>
          <Link to="#">Login</Link>
          <Link to="#">Signup</Link>
        </div>
      </nav>
      <div className='flex p-2 gap-x-5 text-xs text-gray-500 bg-gray-100'>
        <button className='p-2 hover:bg-gray-100 rounded-xl'>Overview</button>
        <button className='p-2 hover:bg-gray-100 rounded-xl'>Diagnostic Evaluation</button>
        <button className='p-2 hover:bg-gray-100 rounded-xl'>Occupational Therapy</button>
        <button className='p-2 hover:bg-gray-100 rounded-xl'>Speech Therapy</button>
        <button className='p-2 hover:bg-gray-100 rounded-xl'>School Based Therapy</button>
      </div>
      <div className="flex">
        {showSidebar && <Sidebar />}
        <div className="flex-1 bg-gray-50 h-screen overflow-auto">
          <Routes>
            <Route path="/parent" element={<ParentForm />} />
            <Route path="/bookings" element={<Bookings />} />
            <Route path="/profile" element={<Profile />} />
            <Route path="/" element={<Home />} />
            <Route path="/provider" element={<ProviderForm />} />
            <Route path="/therapist" element={<Therapist />} />
          </Routes>
        </div>
      </div>
    </div>
  );
}

function AppWrapper() {
  return (
    <BrowserRouter>
      <App />
    </BrowserRouter>
  );
}

export default AppWrapper;
