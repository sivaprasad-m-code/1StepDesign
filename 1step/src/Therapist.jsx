import React from 'react'
import men from './assets/Man and woman collaborate on website design.png'
import { MdOutlineArrowRightAlt } from "react-icons/md";

function Therapist() {
    return (
        <div className='font-poppins'>
        <div className='flex justify-center items-center mt-20'>
            <img src={men} className='md:h-60 h-52' />
            <p className='font-semibold text-2xl'>Create Your Therapist Profile</p>
        </div>
        <div className='flex justify-center mt-7'>
            <button
                type="submit"
                className="flex w-auto py-2 px-4 bg-black text-white font-thin text-center rounded-3xl focus:ring-2 focus:ring-blue-500 focus:ring-offset-2" >
                Create Profile <MdOutlineArrowRightAlt className='text-white mt-1 ml-1' />
            </button>
        </div>
    </div>
    )
}

export default Therapist