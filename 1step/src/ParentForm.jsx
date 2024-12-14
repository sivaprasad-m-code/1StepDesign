import React, { useState } from 'react'
import img from './assets/Mom helps daughter with homework.png'
import set from './assets/setting.png'
import { FaWpforms } from "react-icons/fa6";
import Profile from './Profile'


function ParentForm() {
    const [activeTab, setActiveTab] = useState("profile");
    return (
        <div>
            {/* Tabs */}
            <div className=' p-3 '>
                <div className="flex gap-2  border-gray-300 w-96 font-poppins mt-2 ml-5  ">
                    <button
                        onClick={() => setActiveTab("profile")}
                        className={`flex gap-2 text-center py-2 px-4 border-b-2 rounded-xl bg-slate-100  ${activeTab === "profile"
                                ? "border-main shadow-lg"
                                : "border-transparent hover:border-gray-400 "
                            }`}
                    >
                        <img src={set} className='size-4 mt-1' /> Profile Settings
                    </button>
                    <button
                        onClick={() => setActiveTab("form")}
                        className={`flex gap-2 text-center py-2 px-4 border-b-2 rounded-xl bg-slate-100 ${activeTab === "form"
                                ? "border-main shadow-lg"
                                : "border-transparent hover:border-gray-400"
                            }`}
                    >
                        <FaWpforms className='mt-1' /> Parent Form
                    </button>
                </div>
            </div>

            {/* Tab Content */}
            {activeTab === "profile" && (
                <div className="mt-10 ml-80">
                    <Profile/>
                    <p className="mt-2 text-gray-700">

                    </p>
                </div>
            )}
            {activeTab === "form" && (
                <div>
                     <p className='font-poppins font-medium mt-5 ml-20'>Parent Details:</p>
                    <img src={img} className='h-32 w-48 ml-20 mt-5' />
                   
                    <form className="font-poppins mt-10 ml-20 ">
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
                                    <label htmlFor="phoneNumber" className="block text-sm font-medium text-gray-700">
                                        Phone Number
                                    </label>
                                    <input
                                        type="tel"
                                        id="phoneNumber"
                                        className="mt-1 block w-[500px] p-2 border bg-#E6E6E6 border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500"
                                    />
                                </div>
                                <div className='mt-2'>
                                    <label htmlFor="childName" className="block text-sm font-medium text-gray-700">
                                        Child Name
                                    </label>
                                    <input
                                        type="text"
                                        id="childName"
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
                                    <label htmlFor="bloodGroup" className="block text-sm font-medium text-gray-700">
                                        Blood Group
                                    </label>
                                    <input
                                        type="text"
                                        id="bloodGroup"
                                        className="mt-1 block w-[500px] p-2 border bg-#E6E6E6 border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500"
                                    />
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

                                    <label htmlFor="dob" className="block text-sm font-medium">
                                        Enter your DOB
                                    </label>
                                    <input
                                        type="date"
                                        placeholder="Date of Birth"
                                        className="input border-2 p-2 text-gray-500 rounded-lg focus:ring-0 bg-#E6E6E6 w-[500px] "
                                        id="dob"
                                        min={
                                            new Date(
                                                new Date().getFullYear(new Date().getFullYear() - 100)
                                            )
                                                .toISOString()
                                                .split("T")[0]
                                        }
                                        max={new Date().toISOString().split("T")[0]}
                                    />
                                </div>
                            </div>
                            <div className='ml-14'>
                                <div>
                                    <label htmlFor="childName" className="block text-sm font-medium text-gray-700">
                                        Medical History
                                    </label>
                                    <input
                                        type="text"
                                        id="childName"
                                        className="mt-1 block w-[500px] p-2 border bg-#E6E6E6 border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500"
                                    />
                                </div>
                                <div className='mt-2'>
                                    <label htmlFor="childName" className="block text-sm font-medium text-gray-700">
                                        Allergies
                                    </label>
                                    <input
                                        type="text"
                                        id="childName"
                                        className="mt-1 block w-[500px] p-2 border bg-#E6E6E6 border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500"
                                    />
                                </div>
                                <div className='mt-2'>
                                    <label htmlFor="childName" className="block text-sm font-medium text-gray-700">
                                        Insurance
                                    </label>
                                    <input
                                        type="text"
                                        id="childName"
                                        className="mt-1 block w-[500px] p-2 border bg-#E6E6E6 border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500"
                                    />
                                </div>
                                <div className='mt-2'>
                                    <label htmlFor="childName" className="block text-sm font-medium text-gray-700">
                                        What Therapy you looking for?
                                    </label>
                                    <textarea
                                        type="text"
                                        id="childName"
                                        className="mt-1 block w-[500px] p-2 border bg-#E6E6E6 border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500"
                                    />
                                </div>
                                <div className='mt-2'>
                                    <label htmlFor="childName" className="block text-sm font-medium text-gray-700">
                                        Emergency Contact
                                    </label>
                                    <input
                                        type="text"
                                        id="childName"
                                        className="mt-1 block w-[500px] p-2 border bg-#E6E6E6 border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500"
                                    />
                                </div>
                                <div className='mt-2'>
                                    <label htmlFor="childName" className="block text-sm font-medium text-gray-700">
                                        Height Cm
                                    </label>
                                    <input
                                        type="text"
                                        id="childName"
                                        className="mt-1 block w-[500px] p-2 border bg-#E6E6E6 border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500"
                                    />
                                </div>
                                <div className='mt-2'>
                                    <label htmlFor="childName" className="block text-sm font-medium text-gray-700">
                                        Weight Kg
                                    </label>
                                    <input
                                        type="text"
                                        id="childName"
                                        className="mt-1 block w-[500px] p-2 border bg-#E6E6E6 border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500"
                                    />
                                </div>
                            </div>
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
            )}
        </div>
    )
}

export default ParentForm