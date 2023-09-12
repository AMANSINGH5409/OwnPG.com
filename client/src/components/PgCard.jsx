import React from 'react'
import FacilitiesChips from '../components/FacilitiesChips'
// import function to register Swiper custom elements
import { register } from 'swiper/element/bundle';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
// import { Autoplay, Pagination, Navigation } from 'swiper/modules';
import '../css/swiper.css'

const PgCard = ({ pgInfo }) => {
  register();
  return (
    <div className="flex flex-wrap md:max-w-[330px] md:min-w-[220px] w-[350px] p-4 gap-2 h-full border-2 border-opacity-20 drop-shadow-xl hover:border-blue-800 hover:drop-shadow-2xl cursor-pointer duration-500 rounded-lg border-black my-3 bg-white ">
      <div className="w-full">
        <swiper-container
          class="mySwiper"
          pagination="true"
          pagination-clickable="true"
          navigation="true"
          space-between="30"
          centered-slides="true"
          autoplay-delay="2500"
          autoplay-disable-on-interaction="false"
        >
          {pgInfo.pgPhotos.map((item, i) => (
            <swiper-slide key={i}><img src={item} alt="photos" /></swiper-slide>
          ))}
        </swiper-container>
      </div>
      {/*  Pg info */}
      <div className="flex flex-col">
        <h1 className='text-h1Color font-bold text-2xl' >{pgInfo.pgName}</h1>

        <p className="mt-3 font-[500] text-[#4465c7]">Description of the pg provided by the owner of that pg</p>

        <div className="flex flex-row gap-4 mt-5 flex-wrap">
          {
            pgInfo.facilities.map((item, i) => (
              <FacilitiesChips facility={item} index={i} />
            ))
          }

        </div>
      </div>

    </div>
  )
}

export default PgCard