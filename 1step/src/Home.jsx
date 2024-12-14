import React from 'react'
import { MdOutlineArrowRightAlt } from "react-icons/md";
import screen from './assets/Young women communicating in therapy session.png'
import work from './assets/Woman searching with a magnifying glass.png'
import question from './assets/Man asking a chatbot questions.png'
import schedule from './assets/young woman with calendar.png'
import men from './assets/Man and woman collaborate on website design.png'
import { IoSearchCircle } from "react-icons/io5";

function Home() {
    return (
        <div className='p-5 font-poppins'>
            <section className='lg:ml-32 md:mt-20 md:relative'>
                <p className='font-bold text-2xl'>Your Therapy Schedule,Managed Effortlessly.</p>
                <p className='text-xs'>Take control of your therapy journey with 1Step today </p>
                <button
                    type="submit"
                    className=" flex w-auto py-2 px-4 mt-7 bg-black text-white font-thin text-center rounded-3xl focus:ring-2 focus:ring-blue-500 focus:ring-offset-2" >
                    Get Free Screeners <MdOutlineArrowRightAlt className='text-white mt-1 ml-1 ' />
                </button>
                <img src={screen} className='lg:absolute right-40 top-10 md:h-72 md:ml-24 ' />
                <div className='border text-xs rounded-3xl bg-#F2F2F2 w-[500px] mt-20 p-5 flex shadow-lg pr-5 gap-10 relative'>
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
                    <IoSearchCircle className='text-main size-10 absolute right-10' />
                </div>
            </section>

            <section className='lg:mt-40 mt-10  '>
                <p className='font-semibold text-xl text-center'>How 1Step Works?</p>
                <div className='md:flex items-center justify-center'>
                    <img src={work} className='md:h-72 mt-5 h-60' />
                    <div className='md:mt-36 '>
                        <p className='font-semibold text-xl'>Discover top therapist profiles</p>
                        <p className='md:w-80 mt-1 text-xs'>Explore profiles of top therapists and find the perfect match of your needs</p>

                    </div>
                </div>
            </section>

            <section className=' md:mt-20'>
                <div className='md:flex items-center justify-center'>
                    <img src={question} className='md:h-72 md:-mt-16 md:hidden md:ml-20 h-60' />
                    <div className='text-right md:mt-10 '>
                        <p className='font-semibold text-xl'>Take our quick questionnaire</p>
                        <p className='md:w-80 mt-1 text-xs'>Answer a few brief questions to help us tailor your
                            experience and connect you with the best therapists
                            for your needs.</p>
                    </div>
                    <img src={question} className='md:h-72 h-52 hidden md:block md:-mt-16  md:ml-20' />
                </div>
                
            </section>

            <section className=' mt-5'>
                <div className=' md:flex items-center justify-center'>
                    <img src={schedule} className='md:h-72 mt-5 h-60 ' />
                    <div className='md:mt-36'>
                        <p className='font-semibold text-xl'>Schedule your therapy section</p>
                        <p className='md:w-80 mt-1 text-xs'>Conveniently book your next therapy appointment with just a few taps.</p>

                    </div>
                </div>
            </section>
            <div className='flex items-center justify-center'>
                <button
                    type="submit"
                    className=" flex w-auto py-2 px-4 mt-7 bg-black text-white font-thin text-center rounded-3xl focus:ring-2 focus:ring-blue-500 focus:ring-offset-2" >
                    Signup
                </button>
            </div>
            <div className='flex justify-center items-center'>
                <div className='bg-#EDDFFF p-5 border rounded-xl text-center w-[700px]  mt-5'>
                    <div className='flex items-center justify-center '>
                        <img src={men} className='h-40' />
                    </div>

                    <p className='font-semibold text-lg'>Become a Therapist in 1Step</p>
                    <div className='flex items-center justify-center '>

                        <button
                            type="submit"
                            className=" flex w-auto py-2 px-4 mt-7 bg-black text-white font-thin text-center rounded-3xl focus:ring-2 focus:ring-blue-500 focus:ring-offset-2" >
                            Join NOW!
                        </button>
                    </div>
                </div>
            </div>


            <div className='text-center mt-32  md:text-xl font-bold'>
                <p className='text-main'>Steps To Start Your Therapy Journey</p>
            </div>
            <div className='md:flex justify-between lg:pl-60 lg:pr-60 mt-10 '>

                <div>
                    <img src={schedule} className='md:h-60 h-52' />
                    <p className='font-medium text-lg'>Create Your Therapist Profile</p>
                    <p className='text-xs md:w-60'>Build a profile that highlights your specializations, experience, and the unique care you offer</p>
                </div>
                <div>
                    <img src={question} className='md:h-60 h-52' />
                    <p className='font-medium text-lg'>Set Your Therapy Conditions</p>
                    <p className='text-xs w-60'>You have complete control over your schedule, session fees, and therapeutic approach. Update Your Therapy Conditions</p>
                </div>
                <div>
                    <img src={men} className='md:h-60 h-52' />
                    <p className='font-medium text-lg'>Start Helping Clients</p>
                    <p className='text-xs w-60'>Once your profile is live, begin offering therapy sessions and making a difference</p>
                </div>



            </div>






        </div >
    )
}

export default Home