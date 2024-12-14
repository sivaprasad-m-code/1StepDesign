import React, { useState } from 'react';

function ProviderForm() {
    const days = ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
    const [selectedDay, setSelectedDay] = useState(null);
    const [selectedSlot, setSelectedSlot] = useState(null);

    const timeSlots = {
        Morning: ['07:00 AM', '07:30 AM', '08:00 AM', '08:30 AM', '09:00 AM', '09:30 AM', '10:00 AM', '10:30 AM'],
        Afternoon: ['12:00 PM', '12:30 PM', '01:00 PM', '01:30 PM', '02:00 PM', '02:30 PM', '03:00 PM', '03:30 PM'],
        Evening: ['04:00 PM', '04:30 PM', '05:00 PM', '05:30 PM', '06:00 PM', '06:30 PM', '07:00 PM', '07:30 PM'],
        Night: ['08:00 PM', '08:30 PM', '09:00 PM', '09:30 PM', '10:00 PM', '10:30 PM'],
    };

    const handleDayClick = (day) => {
        setSelectedDay(day);
        setSelectedSlot(null); // Reset slot selection when day changes
    };

    const handleSlotClick = (slot) => {
        setSelectedSlot(slot);
    };

    return (
        <div>
            <div>
                <p className='font-poppins font-medium mt-5 ml-20'>Provider Details:</p>
                <form className="font-poppins mt-10 ml-20 ">
                    <div className='flex'>
                        <div>


                            <div className='flex'>
                                <div>
                                    <div>
                                        <label htmlFor="fullName" className="block text-sm font-medium text-gray-700">
                                            Full Name
                                        </label>
                                        <input
                                            type="text"
                                            id="fullName"
                                            className="mt-1 block w-[500px] p-2 border bg-#E6E6E6 border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500"
                                        />
                                    </div>
                                    <div className='mt-2'>
                                        <label className="block text-sm font-medium text-gray-700">
                                            Email
                                        </label>
                                        <input
                                            type="email"
                                            className="mt-1 block w-[500px] p-2 border bg-#E6E6E6 border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500"
                                        />
                                    </div>
                                    <div className='mt-2'>
                                        <label className="block text-sm font-medium text-gray-700">
                                            Qualification
                                        </label>
                                        <input
                                            type="text"
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

                                    <div className='mt-2'>
                                        <label htmlFor="emergencyContact" className="block text-sm font-medium text-gray-700">
                                            Address
                                        </label>
                                        <textarea
                                            type="tel"
                                            id="emergencyContact"
                                            className="mt-1 block w-[500px] p-2 border bg-#E6E6E6 border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500"
                                        />
                                    </div>
                                    <div className='mt-2'>
                                        <label className="block text-sm font-medium text-gray-700">
                                            Street
                                        </label>
                                        <input
                                            type="text"
                                            className="mt-1 block w-[500px] p-2 border bg-#E6E6E6 border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500"
                                        />
                                    </div>
                                    <div className='mt-2 grid grid-cols-2  gap-5'>
                                        <div>
                                            <label className="block text-sm font-medium text-gray-700">Country</label>
                                            <input
                                                type="text"
                                                className="mt-1 block w-60  p-2 border bg-#E6E6E6 border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500"
                                            />

                                        </div>
                                        <div>
                                            <label className="block text-sm font-medium text-gray-700">State</label>
                                            <input
                                                type="text"
                                                className="mt-1 block w-60  p-2 border bg-#E6E6E6 border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500"
                                            />
                                        </div>
                                    </div>
                                </div>
                                <div className='ml-14'>
                                    <div className='grid grid-cols-2  gap-5'>
                                        <div>
                                            <label className="block text-sm font-medium text-gray-700">City</label>
                                            <input
                                                type="text"
                                                className=" block w-60  p-2 border bg-#E6E6E6 border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500"
                                            />

                                        </div>
                                        <div>
                                            <label className="block text-sm font-medium text-gray-700">Pincode</label>
                                            <input
                                                type="text"
                                                className=" block w-60  p-2 border bg-#E6E6E6 border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500"
                                            />
                                        </div>
                                    </div>
                                    <div className='mt-2'>
                                        <label className="block text-sm font-medium text-gray-700">
                                            Select Your Service
                                        </label>
                                        <textarea
                                            type="text"
                                            className="mt-1 block w-[500px] p-2 border bg-#E6E6E6 border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500"
                                        />
                                    </div>

                                    <div className='mt-2'>
                                        <label className="block text-sm font-medium text-gray-700">
                                            Therapy Type
                                        </label>
                                        <input
                                            type="text"
                                            className="mt-1 block w-[500px] p-2 border bg-#E6E6E6 border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500"
                                        />
                                    </div>
                                    <div className='mt-2'>
                                        <label className="block text-sm font-medium text-gray-700">
                                            Licensing
                                        </label>
                                        <input
                                            type="text"

                                            className="mt-1 block w-[500px] p-2 border bg-#E6E6E6 border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500"
                                        />
                                    </div>

                                    <div className='mt-2'>
                                        <label className="block text-sm font-medium text-gray-700">
                                            Contact
                                        </label>
                                        <input
                                            type="text"
                                            className="mt-1 block w-[500px] p-2 border bg-#E6E6E6 border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500"
                                        />
                                    </div>
                                    <div className='mt-2 grid grid-cols-2  gap-5'>
                                        <div>
                                            <label className="block text-sm font-medium text-gray-700">Fees</label>
                                            <input
                                                type="text"
                                                className="mt-1 block w-60  p-2 border bg-#E6E6E6 border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500"
                                            />

                                        </div>
                                        <div>
                                            <label className="block text-sm font-medium text-gray-700">Years of Experience</label>
                                            <input
                                                type="text"
                                                className="mt-1 block w-60  p-2 border bg-#E6E6E6 border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500"
                                            />
                                        </div>
                                    </div>
                                    <div className='mt-2'>
                                        <label className="block text-sm font-medium text-gray-700">
                                            Image
                                        </label>
                                        <input
                                            type="file"
                                            className="mt-1 block w-[500px] p-2 border text-xs bg-#E6E6E6 border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500"
                                        />
                                    </div>


                                </div>
                            </div>
                           
                        </div>
                     {/* Timeslot */}
                     {/* <div className='ml-14'>
                            <h3 className="text-lg font-semibold mb-4">Select Available Timeslot</h3>
                            <div className="flex mb-4">
                                {days.map((day) => (
                                    <button
                                        key={day}
                                        type="button"
                                        onClick={() => handleDayClick(day)}
                                        className={`px-4 py-2 mx-1 rounded-md text-white ${selectedDay === day ? 'bg-purple-500' : 'bg-gray-400'}`}
                                    >
                                        {day}
                                    </button>
                                ))}
                            </div>
                           
                            {selectedDay && (
                                <div className="bg-gray-100 rounded-lg shadow p-4">
                                    {Object.keys(timeSlots).map((period) => (
                                        <div key={period} className="mb-4">
                                            <h4 className="text-md font-medium mb-2">{period} Slots</h4>
                                            <div className="grid grid-cols-3 gap-2">
                                                {timeSlots[period].map((slot) => (
                                                    <button
                                                        key={slot}
                                                        type="button"
                                                        onClick={() => handleSlotClick(slot)}
                                                        className={`px-4 py-2 rounded-md border ${selectedSlot === slot ? 'bg-purple-300 border-purple-500' : 'bg-white'}`}
                                                    >
                                                        {slot}
                                                    </button>
                                                ))}
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            )}
                           
                            {selectedSlot && (
                                <div className="mt-4">
                                    <p className="text-md text-green-700 font-semibold">
                                        Selected Slot: {selectedSlot} on {selectedDay}
                                    </p>
                                </div>
                            )}
                        </div> */}
                    </div>
                
                    <div>
                        <button
                            type="submit"
                            className="w-48 py-2 px-4 mt-7 ml-96 bg-black text-white font-medium text-center rounded-3xl focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
                        >
                            Submit
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
}

export default ProviderForm;
