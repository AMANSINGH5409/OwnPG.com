import React from 'react'

const Profile = () => {
  return (
    <div className="w-full">
      <div className='w-full flex md:flex-row flex-col'>
        {/* Name Text */}
        <div className="flex-1">
          <h1 className="text-[#FF304F] font-bold text-2xl">Hii !</h1>
          <h1 className="font-bold text-2xl">Vivek Kalal</h1>
          <h4 className='font-semibold opacity-50'>Explorer</h4>
        </div>
        {/* Name Text */}
        <div className="flex flex-1">
          <div className="w-full my-3 flex md:flex-row flex-col gap-3 justify-center">
            <button className=" text-center text-white bg-[#FF304F] rounded-xl w-1/5 h-[50px]">Add Prefrences</button>
            <button className=" text-center border-[1px] border-[#FF304F] text-[#FF304F] rounded-xl w-1/5 h-[50px]">Add Prefrences</button>
          </div>
        </div>

      </div>

      <div className="w-[85%] border-[1px] border-black border-opacity-40 mt-5" />

      {/* Profile Content */}

      <div className="w-full">
        <h3 className="font-[500] my-3">My Preferences</h3>
        <div className="w-4/5 p-2 bg-[#F1F1F1] flex justify-center items-center h-[100px]">
          <h4 className="text-xs ">Need To Add Preference</h4>
        </div>

        <div className="flex justify-between gap-2 w-4/5 my-3">
          <div className="w-1/2 p-2 bg-[#F1F1F1] flex justify-between items-center px-[5%] h-[100px]">
            <h4 className="text-2xl ">Liked PGs</h4>
            <div className="flex justify-center items-center flex-col">
              <h4 className="text-3xl font-semibold text-[#FF304F]">0</h4>
              <h4 className="">Click To View all</h4>
            </div>
          </div>
          <div className="w-1/2 p-2 bg-[#F1F1F1] flex justify-between items-center px-[5%] h-[100px]">
            <h4 className="text-2xl ">Saved PGs</h4>
            <div className="flex justify-center items-center flex-col">
              <h4 className="text-3xl font-semibold text-[#FF304F]">0</h4>
              <h4 className="">Click To View all</h4>
            </div>
          </div>
        </div>

        <div className="w-4/5 text-center mt-5">
          <h2 className="font-bold text-2xl">Upgrade yourself as <span className="text-[#FF304F]">landlord</span>
            <br />
            by few clicks and <span className="text-[#FF304F]">earn</span>
            <br />
            <span className="text-[#FF304F]">monthly.</span></h2>
        </div>
        <div className="w-4/5 mt-3">
        <h4 className='text-center'>Click on <span className="text-[#FF304F] font-semibold">“ Add PG ”</span> button above to <span className="text-[#FF304F] font-semibold">Get Started.</span></h4>
        </div>
      </div>
    </div>
  )
}

export default Profile