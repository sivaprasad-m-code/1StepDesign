import React from 'react'
import { IoLocationSharp } from "react-icons/io5";
import { IoSearchCircle } from "react-icons/io5";
import { LuClock3 } from "react-icons/lu";

function Bookings() {
  const therapyCenters = [
    {
      id: 1,
      name: "ABC Therapy Center",
      therapyType: "Speech Therapy",
      location: "Chennai",
      date: "DEC 12",
      time: "10:00 AM",
      image: "https://img.freepik.com/free-photo/family-therapy-psychologist-office_23-2149175171.jpg?t=st=1733832458~exp=1733836058~hmac=5d482db23807566f8d7bc0c2893e210552c10292cef5b8922b221f940c94469d&w=996"
    },
    {
      id: 2,
      name: "XYZ Therapy Clinic",
      therapyType: "Physical Therapy",
      location: "Bangalore",
      date: "DEC 14",
      time: "3:00 PM",
      image: "https://img.freepik.com/free-photo/medical-equipment-modern-clinic_23-2149175151.jpg"
    },
  ];

  const providers = [
    {
      id: 1,
      name: "Siva",
      services: "Dance Movement",
      date: "12/12/2024",
      time: "11:00 AM",
      sessionType: "In-Clinic",
      note: "Hi",
      statusIcon: <LuClock3 className="size-5" />,
      status: "Pending",
    },
    {
      id: 2,
      name: "Arun",
      services: "Speech Therapy",
      date: "15/12/2024",
      time: "2:00 PM",
      sessionType: "Online",
      note: "Follow-up",
      statusIcon: <LuClock3 className="size-5" />,
      status: "Pending",
    },
  ];
  

  return (
    <div className='p-10'>
      <div className='grid grid-cols-2'>
        <div>
          <p className='font-medium font-poppins'>My Bookings</p>
          {therapyCenters.map((data) => (

          <div className='border rounded-3xl bg-#F2F2F2 w-96 mt-10 p-2 flex shadow-lg '>
            <img src={data.image} className='size-20 shadow-sm  rounded-xl' />
            <div className='font-poppins font-medium ml-4 mt-2'>
              <p className='text-main'>{data.name}</p>
              <p className='text-xs font-light'>{data.therapyType}</p>
              <span className='flex mt-2'> <IoLocationSharp className=' text-main' /><p className='text-xs '>{data.location}</p></span>
            </div>
            <div className='font-medium font-poppins text-main ml-5 mt-5'>
              <p>{data.date}</p>
              <p className='text-xs'>{data.time}</p>
            </div>
          </div>
          ))}
        </div>
        <div className='font-medium font-poppins'>
          <p>New Bookings</p>
          <div className='border text-xs rounded-3xl bg-#F2F2F2 w-fit mt-10 p-5 flex shadow-lg pr-5 gap-5'>
            <div>
              <p>What</p>
              <input
                type="text"
                placeholder="Service"
                className="border-0 border-b border-black bg-transparent mt-2 focus:outline-none"
              />
            </div>
            <div>
              <p>Where</p>
              <input
                type="text"
                placeholder="Location"
                className="border-0 border-b border-black bg-transparent mt-2 focus:outline-none"
              />
            </div>
            <IoSearchCircle className='text-main size-10' />
          </div>
        </div>
      </div>
      <p className='font-medium font-poppins mt-20'>All Bookings</p>
      <div className='mt-5'>

        <div class="relative overflow-x-auto border rounded-lg shadow-lg ">
        <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400   ">
      <thead className="text-xs text-gray-700 uppercase bg-gray-100 dark:bg-gray-700 dark:text-gray-400">
        <tr>
          <th scope="col" className="px-6 py-3">Provider Name</th>
          <th scope="col" className="px-6 py-3">Services</th>
          <th scope="col" className="px-6 py-3">Scheduled Date</th>
          <th scope="col" className="px-6 py-3">Slot Time</th>
          <th scope="col" className="px-6 py-3">Session Type</th>
          <th scope="col" className="px-6 py-3">Note</th>
          <th scope="col" className="px-6 py-3">Status</th>
          <th scope="col" className="px-6 py-3">Process</th>
        </tr>
      </thead>
      <tbody>
        {providers.map((provider) => (
          <tr
            key={provider.id}
            className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 font-medium"
          >
            <td className="px-6 py-4">{provider.name}</td>
            <td className="px-6 py-4">{provider.services}</td>
            <td className="px-6 py-4">{provider.date}</td>
            <td className="px-6 py-4">{provider.time}</td>
            <td className="px-6 py-4">{provider.sessionType}</td>
            <td className="px-6 py-4">{provider.note}</td>
            <td className="px-6 py-4">{provider.statusIcon}</td>
            <td className="px-6 py-4">{provider.status}</td>
          </tr>
        ))}
      </tbody>
    </table>
        </div>
      </div>


    </div>
  )
}

export default Bookings