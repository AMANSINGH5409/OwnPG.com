import React from 'react'
import { useState } from 'react'

const Auth = () => {

    const [isSignUp,setIsSignUp] = useState(false);

  return (
    <div className='flex items-center justify-center h-screen bg-black'>
        <div className="authBox bg-violet-900 w-1/2 h-max flex my-8 items-center flex-col p-12 rounded-xl transition ease-in-out delay-60">
            <div className="text-3xl text-white font-medium">OwnPG.com</div>

            <p className='text-lg text-white mt-4'>Login / SignUp to get access to your desired PG & Rooms</p>

            <div className="authOption flex justify-between w-3/5 h-16 my-8">
                <p className= {!isSignUp ? `text-2xl text-white font-bold flex-1 flex items-center justify-center bg-[#6D00D3] mx-2 rounded-xl cursor-pointer transition ease-in-out delay-120`:`text-2xl text-white flex-1 flex items-center justify-center mx-2 rounded-xl cursor-pointer transition ease-in-out delay-120`} onClick={()=>setIsSignUp(false)}>Login</p>
                <div className='w-[2px] bg-white'></div>
                <p className={isSignUp ? `text-2xl text-white font-bold flex-1 flex items-center justify-center bg-[#6D00D3] mx-2 rounded-xl cursor-pointer transition ease-in-out delay-120`:`text-2xl text-white flex-1 flex items-center justify-center mx-2 rounded-xl cursor-pointer transition ease-in-out delay-120`} onClick={()=>setIsSignUp(true)}>SignUp</p>
            </div>

            <input type="text" className='w-3/5 h-16 mb-8 rounded-lg px-8 text-xl text-[#555555]' placeholder='Email ID*'/>
            <input type="text" className='w-3/5 h-16 mb-8 rounded-lg px-8 text-xl text-[#555555]' placeholder='Password*'/>
            {isSignUp && <input type="text" className='w-3/5 h-16 mb-8 rounded-lg px-8 text-xl text-[#555555]' placeholder='Confirm Password*'/>}

            <button className='w-3/5 bg-[#6D00D3] h-12 text-xl hover:scale-110 transition ease-in-out delay-60 text-white font-medium rounded-xl'>{isSignUp ? "SignUp Now" : "Login Now"}</button>
        </div>
    </div>
  )
}

export default Auth