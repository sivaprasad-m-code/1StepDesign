import React from 'react'
import { IoMdSend } from "react-icons/io";

function Message() {
    return (
        <div>
            <div className='grid grid-cols-2 font-poppins' >
                <div>
                    <div className='bg-gray-50 h-96 w-60 space-y-5  p-5 '>
                        <div className='flex bg-gray-100 hover:bg-#E6E6E6 rounded-lg p-2'>
                            <img src="https://img.freepik.com/free-photo/vertical-shot-happy-dark-skinned-female-with-curly-hair_273609-15519.jpg?uid=R124510053&ga=GA1.1.1992261391.1732938083&semt=ais_hybrid" alt="" className='size-10 rounded-full' />
                            <p className='mt-2 ml-2'>Sara</p>
                        </div>
                        <div className='flex bg-gray-100 hover:bg-#E6E6E6 rounded-lg p-2'>
                            <img src="https://img.freepik.com/free-photo/vertical-shot-happy-dark-skinned-female-with-curly-hair_273609-15519.jpg?uid=R124510053&ga=GA1.1.1992261391.1732938083&semt=ais_hybrid" alt="" className='size-10 rounded-full' />
                            <p className='mt-2 ml-2'>Julie</p>
                        </div>

                    </div>
                </div>
                <div className='p-10 -ml-96 border-l h-screen'>
                    <div className='flex'>
                        <img src="https://img.freepik.com/free-photo/vertical-shot-happy-dark-skinned-female-with-curly-hair_273609-15519.jpg?uid=R124510053&ga=GA1.1.1992261391.1732938083&semt=ais_hybrid" alt="" className='size-10 rounded-full' />
                        <div className='border rounded-xl bg-#E6E6E6 p-5 w-60 ml-2'>
                            Hi
                        </div>
                    </div>
                    <div className='flex justify-end gap-2'>

                        <div className='border rounded-xl bg-main text-white p-5 w-60 ml-2'>
                            Hello
                        </div>
                        <img src="https://img.freepik.com/free-photo/vertical-shot-happy-dark-skinned-female-with-curly-hair_273609-15519.jpg?uid=R124510053&ga=GA1.1.1992261391.1732938083&semt=ais_hybrid" alt="" className='size-10 rounded-full' />
                    </div>
                    <div className='flex ml-5 mt-72 sticky'> 
                        <input type="text"placeholder='Enter Message' className='p-3 bg-gray-100 rounded-lg border  w-[900px] border-main' />
                        <IoMdSend className='absolute top-1/2 right-20 transform -translate-y-1/2 text-gray-500' />

                    </div>
                </div>
            </div>
            
        </div>
    )
}

export default Message