import React, { useEffect, useState } from 'react'
import Select from 'react-select'
import { noOfRooms, pgFacilities, pgType } from '../constants'
import { State, City } from 'country-state-city'
import CreatableSelect from 'react-select'

const AddPgNew = () => {
  // States
  const [states, setStates] = useState([]);
  const [cities, setCities] = useState([]);


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
    <div className="w-full p-3 border-2 border-black border-opacity-30">
      <div className="w-full">
        <h1 className="text-2xl font-[500]">Add New PG</h1>
        <h3 className="text-[#FF304F] font-[500]">Fill/Upload/Earn</h3>
      </div>

      <div className="mt-2 border-2 border-blue-400 p-2 pl-0">
        <form action="" method="post">
          <div className="flex flex-wrap-reverse">
            {/* Pg Name */}
            <div className="w-2/5 p-2">
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
              <div className="mt-2 flex gap-3">
                <div className="w-1/2">
                  <h5 className="text-xs text-gray-600">No Of Rooms</h5>
                  <Select
                    options={noOfRooms}
                    className="border-2 border-black border-opacity-40 outline-none rounded-lg w-full"
                  />
                </div>
                <div className="w-1/2">
                  <h5 className="text-xs text-gray-600">Allowed Sharing</h5>
                  <Select
                    options={noOfRooms}
                    className="border-2 border-black border-opacity-40 outline-none rounded-lg w-full"
                  />
                </div>
              </div>
              {/* Pg State & City */}
              <div className="mt-2 flex gap-3">
                <div className="w-1/2">
                  <h5 className="text-xs text-gray-600">State</h5>
                  <Select
                    options={stateOptions}
                    onChange={(e) => {
                      getCities(e)
                    }}
                  />
                </div>
                <div className="w-1/2">
                  <h5 className="text-xs text-gray-600">City</h5>
                  <Select
                    options={cityOptions}
                    className=""
                  />
                </div>
              </div>
              {/* Pg Type & Facilities */}
              <div className="mt-2 flex gap-3">
                <div className="w-1/2">
                  <h5 className="text-xs text-gray-600">PG Type</h5>
                  <Select
                    options={pgType}
                    className=""
                  />
                </div>
                <div className="w-1/2">
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
              <div className="mt-2 flex gap-3 justify-center items-center">
                <div className="w-1/2">
                  <h5 className="text-xs text-gray-600">Monthly Rent</h5>
                  <input type="text" className="py-2 pl-3 border-[1px] border-opacity-80 outline-none border-black rounded-lg w-full" id="pgName" placeholder="Enter Monthly Rent..." />
                </div>
                <div className="w-1/2 flex justify-start items-start p-2">
                  <div className="flex gap-2 bg-[#F1F1F1]">
                    <h6>is rent Negotiable</h6>
                    <input type="checkbox" name="nego" value="yes" id="nego" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </form>
      </div>
    </div>
  )
}

export default AddPgNew