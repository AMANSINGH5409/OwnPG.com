import React, { useEffect, useState } from 'react'
import { defaultpg } from '../assets'
import Select from 'react-select'
import { State, City } from 'country-state-city'
import { pgFacilities, noOfRooms, pgType } from '../constants'
import CreatableSelect from 'react-select/creatable';
import { createPg } from '../actions/pgActions'
import { ThreeDots } from 'react-loader-spinner'
import { useNavigate } from 'react-router-dom'
import { ToastContainer, toast } from 'react-toastify'


const AddPg = () => {
  // userToOwner
  const ownerDetails = JSON.parse(localStorage.getItem("userProfile"));

  // states
  const [pgdetails, setPgDetails] = useState({ facilities: [], ownerUid: ownerDetails?._id || ownerDetails?.sub });
  const [states, setStates] = useState([]);
  const [cities, setCities] = useState([]);
  const [images, setImages] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate();
  // Functions
  const onUpload = (e) => {
    const files = e.target.files

    if (files.length > 0) {
      convertToBase64(files)
    }
  }

  const convertToBase64 = (imgFile) => {
    const convertedImg = []

    for (let i = 0; i < imgFile.length; i++) {
      const reader = new FileReader()

      reader.onloadend = () => {
        convertedImg.push(reader.result)

        if (convertedImg.length === imgFile.length) {
          setImages(convertedImg)
          setPgDetails({ ...pgdetails, pgPhotos: convertedImg })
        }
      }
      reader.readAsDataURL(imgFile[i]);
    }
  }

  const uploadPg = () => {
    pgdetails.facilities = [...new Set(pgdetails.facilities)]

    setIsLoading(true);
    let createPromise = createPg(pgdetails);

    toast.promise(createPromise, {
      pending: 'Adding PG...',
      success: 'PG Added Successfully...',
      error: "Something Went Wrong please try again!!",
    })

    createPromise.then((data) => {
      console.log(data);
      navigate("/")
    }).catch((error => {
      navigate("/addpg")
      console.log(error);
    }))
    setIsLoading(false);
  }

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
    <div className="w-full">
      <ToastContainer />
      {
        isLoading ?
          <div className='flex flex-col justify-center items-center h-screen'>
            <ThreeDots
              height="80"
              width="80"
              radius="9"
              color="blue"
              ariaLabel="three-dots-loading"
              wrapperStyle={{}}
              wrapperClassName=""
              visible={true}
            />
            <div className="w-full flex justify-center items-center">
              <h1 className="font-bold text-3xl text-blue-700">Creating PG Please Wait ...</h1>
            </div>
          </div>
          : <div className="w-full flex md:flex-row flex-col justify-start gap-5 p-3 mt-4 border-2 border-gray-600 border-opacity-30">
            {/* Image and Few Details Section */}
            <div className="md:w-1/2 md:max-w-[600px] w-full">
              {/* img */}
              <div className="border-2 border-blackoverflow-hidden rounded-xl relative cursor-pointer md:mb-0 mb-2">
                <label htmlFor="pgImage">
                  <img src={images[0] || defaultpg} alt="PG" className="object-contain rounded-xl" />
                </label>
                <input onChange={onUpload} type="file" multiple name="pgImage" id="pgImage" hidden className="absolute top-0 cursor-pointer" />
              </div>
            </div>
            <div className="min-h-full  border-2 border-black border-opacity-50 md:w-0 w-full " />


            {/* All Details */}
            <div className="w-full md:max-w-[800px]">

              <div className="flex md:flex-row flex-col md:gap-2 gap-3">
                {/* Email */}
                <input type="text" className="w-full outline-none p-2 border-2 border-blue-600 border-opacity-50 md:my-3  md:text-xl font-[500] text-blue-900 rounded-lg "
                  placeholder="Enter Email Address"
                  onChange={(e) => setPgDetails({ ...pgdetails, ownerEmail: e.target.value })}
                  required
                />

                {/* Name */}
                <input type="text" className="w-full outline-none p-2 border-2 border-blue-600 border-opacity-50 md:my-3  md:text-xl font-[500] text-blue-900 rounded-lg mb-3"
                  placeholder="Enter PG Name..."
                  onChange={(e) => setPgDetails({ ...pgdetails, pgName: e.target.value })}
                  required />
              </div>
              {/* Address */}
              <div className="mt-0">
                <input type="text" className="w-full outline-none p-2 border-2 border-blue-600 border-opacity-50  md:text-xl font-[500] text-blue-900 rounded-lg mb-3"
                  placeholder="Enter Address..."
                  onChange={(e) => setPgDetails({ ...pgdetails, pgLocation: e.target.value })}
                  required />
              </div>

              {/* LandMark */}
              <div className="mt-0">
                <input type="text" className="w-full outline-none p-2 border-2 border-blue-600 border-opacity-50  md:text-xl font-[500] text-blue-900 rounded-lg mb-3"
                  placeholder="Enter Landmark..."
                  onChange={(e) => setPgDetails({ ...pgdetails, pgRefPlace: e.target.value })}
                />
              </div>

              {/* Sub address */}
              <div className="p-2 border-2 border-blue-600 border-opacity-50 rounded-lg flex mb-2 md:flex-row flex-col gap-3">
                <div className="md:w-1/2 w-full flex justify-between items-center">
                  <div className="min-w-[120px]">
                    <label>Select State : </label>
                  </div>
                  <div className="w-full">
                    {/* <Select options={stateOptions}
                className=""
                onChange={getCities}
              /> */}
                    <Select
                      options={stateOptions}
                      onChange={(e) => {
                        getCities(e)
                        setPgDetails({ ...pgdetails, pgState: e.label })
                      }}
                    />
                  </div>
                </div>
                <div className="md:w-1/2 w-full flex justify-between items-center">
                  <div className="min-w-[120px]">
                    <label>Select City : </label>
                  </div>
                  <div className="w-full">
                    <Select
                      options={cityOptions}
                      onChange={(e) => setPgDetails({ ...pgdetails, pgCity: e.label })}
                      className=""
                    />
                  </div>
                </div>
              </div>

              {/* Rooms and Type */}
              <div className="p-2 border-2 border-blue-600 border-opacity-50 rounded-lg flex mt-2 md:flex-row flex-col gap-3">
                <div className="md:w-1/2 w-full flex justify-between items-center">
                  <div className="min-w-[120px]">
                    <label>No of Rooms :  </label>
                  </div>
                  <div className="w-full">
                    {/* <Select options={stateOptions}
                className=""
                onChange={getCities}
              /> */}
                    <Select
                      options={noOfRooms}
                      onChange={(e) => setPgDetails({ ...pgdetails, noOfRooms: e.label })}
                    />
                  </div>
                </div>
                <div className="md:w-1/2 w-full flex justify-between items-center">
                  <div className="min-w-[120px]">
                    <label>Pg Type : </label>
                  </div>
                  <div className="w-full">
                    <Select
                      options={pgType}
                      onChange={(e) => setPgDetails({ ...pgdetails, pgType: e.label })}
                      className=""
                    />
                  </div>
                </div>
              </div>

              {/* Price and Facilities */}
              <div className="p-2 border-2 border-blue-600 border-opacity-50 rounded-lg flex mt-2 md:flex-row flex-col gap-3">
                <div className="md:w-1/2 w-full flex justify-between items-center">
                  <div className="min-w-[120px]">
                    <label>Price :  </label>
                  </div>
                  <input type="number" className="w-full outline-none p-[5px] border-2 border-blue-600 border-opacity-50 font-[500] text-blue-900 rounded-lg "
                    placeholder="Enter Price"
                    onChange={(e) => setPgDetails({ ...pgdetails, pgPrice: e.target.value })}
                    required />
                </div>
                <div className="md:w-1/2 w-full flex justify-between items-center">
                  <div className="min-w-[120px]">
                    <label>Facilites : </label>
                  </div>
                  <div className="w-full">
                    <CreatableSelect isMulti
                      options={pgFacilities}
                      onChange={(e) => {
                        e.map((item) => {
                          return pgdetails.facilities.push(item.label)

                        })
                      }}
                    />
                  </div>
                </div>
              </div>

              <div className='flex justify-center py-3 my-3 border-b-2 border-black border-opacity-50'>
                <button onClick={uploadPg} className="bg-blue-600 text-white p-2 font-semibold text-xl w-[150px] rounded-lg">Add PG</button>
              </div>
            </div>
          </div >
      }


    </div>
  )
}

export default AddPg