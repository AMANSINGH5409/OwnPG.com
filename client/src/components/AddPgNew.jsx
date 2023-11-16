import React, { useEffect, useState } from 'react'
import Select from 'react-select'
import { noOfRooms, pgFacilities, pgType } from '../constants'
import { State, City } from 'country-state-city'
import CreatableSelect from 'react-select'
import { pgImg } from '../assetsnew'
import { HeartSwitch } from '@anatoliygatt/heart-switch';

const AddPgNew = () => {
  // States
  const [states, setStates] = useState([]);
  const [cities, setCities] = useState([]);
  const [checked, setChecked] = useState(false);

  const getCities = (data) => {
    const getAllCities = () => {
      setCities(City.getCitiesOfState("IN", data.iso))
    }
    getAllCities();
  }



  function States(value, label, iso) {
    this.value = value;
    this.label = label;
    this.iso = iso;
  }

  // constants
  const stateOptions = states.map((item) => (
    new States(item.name.toLowerCase(), item.name, item.isoCode)
  ))

  const cityOptions = cities.map((item) => (
    new States(item.name.toLowerCase(), item.name, item.isoCode)
  ))

  useEffect(() => {
    const getAllState = async () => {
      let data = State.getStatesOfCountry("IN");
      setStates(data)
    }
    getAllState()
  }, [])

  useEffect(() => {
  }, [states, stateOptions])


  return (
    <div className="w-full p-3 border-2 border-black border-opacity-30 rounded-lg">
      <div className="w-full">
        <h1 className="text-2xl font-[500]">Add New PG</h1>
        <h3 className="text-[#FF304F] font-[500]">Fill/Upload/Earn</h3>
      </div>

      <div className="mt-2 p-2 pl-0">
        <form action="" method="post">
          <div className="flex lg:flex-row flex-col-reverse">
            {/* Pg Name */}
            <div className="lg:w-3/5 w-full p-2 flex flex-col md:gap-5 gap-2">
              <div className="">
                <h5 className="text-xs text-gray-600">PG Name</h5>
                <input type="text" className="py-2 pl-3 border-[1px] border-opacity-80 outline-none border-black rounded-lg w-full" id="pgName" placeholder="Enter PG Name..." />
              </div>
              {/* Pg Location */}
              <div className="mt-2">
                <h5 className="text-xs text-gray-600">PG Location</h5>
                <input type="text" className="py-2 pl-3 border-[1px] border-opacity-80 outline-none border-black rounded-lg w-full" id="pgName" placeholder="Enter PG Address..." />
              </div>
              {/* Pg No of Rooms & Sharing */}
              <div className="mt-2 flex md:flex-row flex-col gap-3">
                <div className="md:w-1/2">
                  <h5 className="text-xs text-gray-600">No Of Rooms</h5>
                  <Select
                    options={noOfRooms}
                    className="border-2 border-black border-opacity-40 outline-none rounded-lg w-full"
                  />
                </div>
                <div className="md:w-1/2">
                  <h5 className="text-xs text-gray-600">Allowed Sharing</h5>
                  <Select
                    options={noOfRooms}
                    className="border-2 border-black border-opacity-40 outline-none rounded-lg w-full"
                  />
                </div>
              </div>
              {/* Pg State & City */}
              <div className="mt-2 flex md:flex-row flex-col gap-3">
                <div className="md:w-1/2">
                  <h5 className="text-xs text-gray-600">State</h5>
                  <Select
                    options={stateOptions}
                    onChange={(e) => {
                      getCities(e)
                    }}
                  />
                </div>
                <div className="md:w-1/2">
                  <h5 className="text-xs text-gray-600">City</h5>
                  <Select
                    options={cityOptions}
                    className=""
                  />
                </div>
              </div>
              {/* Pg Type & Facilities */}
              <div className="mt-2 flex md:flex-row flex-col gap-3">
                <div className="md:w-1/2">
                  <h5 className="text-xs text-gray-600">PG Type</h5>
                  <Select
                    options={pgType}
                    className=""
                  />
                </div>
                <div className="md:w-1/2">
                  <h5 className="text-xs text-gray-600">Facilities</h5>
                  <CreatableSelect isMulti
                    options={pgFacilities}
                  // onChange={(e) => {
                  //   e.map((item) => {
                  //     return pgdetails.facilities.push(item.label)

                  //   })
                  // }}
                  />
                </div>
              </div>
              {/* Pg Type & Facilities */}
              <div className="mt-2 flex md:flex-row flex-col gap-3 justify-center items-center">
                <div className="md:w-1/2">
                  <h5 className="text-xs text-gray-600">Monthly Rent</h5>
                  <input type="text" className="py-2 pl-3 border-[1px] border-opacity-80 outline-none border-black rounded-lg w-full" id="pgName" placeholder="Enter Monthly Rent..." />
                </div>
                <div className="md:w-1/2 flex justify-start items-start p-2">
                  <div className="flex gap-2 bg-[#F1F1F1]">
                    <h6>is rent Negotiable</h6>
                    <div className=''>
                      <HeartSwitch
                        size="sm"
                        inactiveTrackFillColor="#cffafe"
                        inactiveTrackStrokeColor="#22d3ee"
                        activeTrackFillColor="#06b6d4"
                        activeTrackStrokeColor="#0891b2"
                        inactiveThumbColor="#ecfeff"
                        activeThumbColor="#ecfeff"
                        checked={checked}
                        onChange={(event) => {
                          setChecked(event.target.checked);
                        }}
                      />
                    </div>
                    {/* <input type="checkbox" name="nego" value="yes" id="nego" /> */}
                  </div>
                </div>
              </div>
            </div>
            <div className="lg:w-2/5">
              <div className="w-full ">
                <label htmlFor="pgImage" className="w-full">
                  <img src={pgImg} alt="PG" className="object-contain rounded-xl w-full bg-black" />
                </label>
                <input type="file" multiple name="pgImage" id="pgImage" hidden className="cursor-pointer w-full bg-black" />
              </div>
              {/* NO of Photos */}
              <div className="text-center p-2">
                <h3 className="text-[#FF304F] font-[500]">0 - Photos Added</h3>
              </div>
              {/* LandLoard Details */}
              <div className="mt-2 p-2 flex flex-col gap-2">
                <h1 className="text-[#FF304F] text-2xl font-[500]">LandLoard Details *</h1>
                <h2 className="text-xl ml-2">Email : Not Provided</h2>
                <h2 className="text-xl ml-2">Contact : Not Provided</h2>
              </div>
              <div className="my-3 ml-12">
                <button className="p-2 w-[150px] text-center text-white font-semibold bg-[#FF304F] rounded-xl">Edit</button>
              </div>

              {/* Summary */}

              <div className="w-4/5 p-2 bg-[#F1F1F1] rounded-lg">
                <p>Please check <span className="text-[#FF304F]">“Landlord Details”</span> and edit it.
                  If <span className="text-[#FF304F]">“Not Provided”</span> , then please provide.
                  <br />
                  These details will be shown to <span className="text-[#FF304F]">“Explorers”</span> , to
                  connect with <span className="text-[#FF304F]">“Landlords”</span>.</p>
              </div>
            </div>
          </div>
          <div className="w-full my-3 ml-12 text-center">
            <button className="p-2 w-4/5 text-center text-white md:text-2xl font-semibold bg-[#FF304F] rounded-xl">Upload PG</button>
          </div>

        </form>
      </div>
    </div>
  )
}

export default AddPgNew