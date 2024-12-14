import React from 'react'

function Profile() {
  return (
    <div className='w-[500px]'>
      <div className='flex relative'>
        <img src={'https://img.freepik.com/free-photo/portrait-friendly-looking-happy-attractive-male-model-with-moustache-beard-wearing-trendy-transparent-glasses-smiling-broadly-while-listening-interesting-story-waiting-mom-give-meal_176420-22400.jpg?uid=R124510053&ga=GA1.1.1992261391.1732938083&semt=ais_hybrid'} className='size-14 rounded-full' />
        <div className='ml-3 mt-2 font-poppins'>
          <p className='font-bold'>John</p>
          <p className='text-xs text-gray-400'>john123@gmail.com</p>
        </div>
        <button className='absolute right-2 mt-3 bg-black text-white p-2 pl-3 pr-3 rounded-md text-xs'>Edit</button>
      </div>
      <div className='mt-10'>
        <label htmlFor="childName" className="block text-sm font-medium text-gray-700">
          Name
        </label>
        <input
          type="text"
          id="childName"
          placeholder='Name'
          className="mt-1 block w-[500px] p-2 border bg-#E6E6E6 border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500"
        />
      </div>
      <div className='mt-2'>
        <label htmlFor="gender" className="block text-sm font-medium text-gray-700">
          Gender
        </label>
        <select
          id="gender"
          className="mt-1 block w-[500px] p-2 border text-gray-500 bg-#E6E6E6 font-poppins border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500"
        >
          <option value="">Select Gender</option>
          <option value="Male" className='hover:bg-main'>Male</option>
          <option value="Female">Female</option>
          <option value="Other">Other</option>
        </select>
      </div>
      <div className='mt-5'>
        <label htmlFor="childName" className="block text-sm font-medium text-gray-700">
          Location
        </label>
        <input
          type="text"
          id="childName"
          placeholder='Location'
          className="mt-1 block w-[500px] p-2 border bg-#E6E6E6 border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500"
        />
      </div>
      <div className='mt-5'>
        <label htmlFor="childName" className="block text-sm font-medium text-gray-700">
          Mobile Number
        </label>
        <input
          type="text"
          id="childName"
          placeholder='Mobile Number'
          className="mt-1 block w-[500px] p-2 border bg-#E6E6E6 border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500"
        />
      </div>
      <button
        type="submit"
        className="w-44 py-2  mt-7 ml-40 bg-black text-white font-medium text-center rounded-3xl focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
      >
        Submit
      </button>

    </div>
  )
}

export default Profile