import React from 'react'
import FacilitiesChips from '../components/FacilitiesChips'

const PgCard = ({ pgInfo }) => {
  return (
    <div className="flex flex-wrap md:max-w-[330px] max-w-[250px] p-4 gap-2 border-2 border-opacity-20 drop-shadow-xl hover:scale-105 cursor-pointer duration-500 rounded-lg border-black my-3 bg-white ">
      <div className="w-full">
        <img src={pgInfo.pgPhotos[0]} alt="Pg_Pics" className="rounded-md border-2 border-black border-opacity-40 object-contain" />
      </div>
      {/*  Pg info */}
      <div className="flex flex-col">
        <h1 className='text-h1Color font-bold text-2xl' >{pgInfo.pgName}</h1>

        <p className="mt-3 font-[500] text-[#4465c7]">Description of the pg provided by the owner of that pg</p>

        <div className="flex flex-row gap-4 mt-5 flex-wrap">
          {
            pgInfo.facilities.map((item,i) => (
              <FacilitiesChips facility={item} index={i} />
            ))
          }

        </div>
      </div>

    </div>
  )
}

export default PgCard