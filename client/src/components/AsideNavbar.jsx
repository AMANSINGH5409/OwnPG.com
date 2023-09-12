import { GoogleLogin } from '@react-oauth/google';
import jwtDecode from 'jwt-decode';
import React from 'react'
import { useDispatch } from 'react-redux';
import { setLogin } from '../state/userSlice';
import { home, guide, suggest_me, profile, landlord, feedback, contact_us, sideicon } from '../assetsnew'

const AsideNavbar = ({ handleCollaps , collapse}) => {
    // States
    const dispatch = useDispatch();

    // Functions
    const googleSuccess = async (res) => {
        const user = jwtDecode(res?.credential);
        const token = res?.credential;
        try {
            dispatch(setLogin({ user, token }))
        } catch (error) {
            console.log(error);
        }
    };

    const googleFailure = (error) => {
        console.log(error);
        console.log("Google Sign In was unsuccessful. Try Again Later.");
    };

    return (
        <div className={`w-full duration-200`}>
            {/* Nav components */}
            <div className="">
                <div className="mb-8 relative">
                    <div className="flex justify-center items-center flex-col">
                        <div className="mt-2" hidden>
                            <GoogleLogin
                                size="large"
                                onSuccess={(creadentialResponse) => {
                                    googleSuccess(creadentialResponse);
                                    // onClose();
                                }}
                                onError={(error) => {
                                    googleFailure(error);
                                }}
                                useOneTap
                            />
                        </div>
                        <div className="flex flex-col justify-center items-center gap-4 mt-5">
                            <ul className="flex flex-col gap-1">
                                <div className="flex w-full gap-2 items-center  rounded-lg p-1 border-[#FF304F]  text-gray-500 hover:border-r-4 duration-200 hover:text-[#FF304F] hover:cursor-pointer hover:bg-gray-100" >
                                    <img src={home} alt="home" className="ml-2 w-[30px] h-[30px]" />
                                    <li className="py-2 w-[140px]  text-center font-semibold text-lg rounded-lg">Home</li>
                                </div>
                                <div className="flex w-full gap-2 items-center  rounded-lg p-1 border-[#FF304F]  text-gray-500 hover:border-r-4 duration-200 hover:text-[#FF304F] hover:cursor-pointer hover:bg-gray-100">
                                    <img src={guide} alt="guide" className="ml-2 w-[30px] h-[30px]" />
                                    <li className="py-2 w-[150px]  text-center font-semibold text-lg rounded-lg  ">Guide</li>
                                </div>
                                <div className="flex w-full gap-2 items-center  rounded-lg p-1 border-[#FF304F] text-gray-500  hover:border-r-4 duration-200 hover:text-[#FF304F] hover:cursor-pointer hover:bg-gray-100">
                                    <img src={suggest_me} alt="suggest_me" className="ml-2 w-[30px] h-[30px]" />
                                    <li className="py-2 w-[150px]  text-center font-semibold text-lg rounded-lg "> Suggest Me</li>
                                </div>
                                <div className="flex w-full gap-2 items-center  rounded-lg p-1 border-[#FF304F]  text-gray-500 hover:border-r-4 duration-200 hover:text-[#FF304F] hover:cursor-pointer hover:bg-gray-100">
                                    <img src={profile} alt="profile" className="ml-2 w-[30px] h-[30px]" />
                                    <li className="py-2 w-[150px]  text-center font-semibold text-lg rounded-lg  ">Profile</li>
                                </div>
                            </ul>
                        </div>

                        <div className="w-[90%] mt-5 border-[1px] border-black border-opacity-30" />

                        <div className="p-3 w-[80%] border-[1px] border-black border-opacity-40 mt-3 rounded-lg">
                            <div className="flex p-2 items-center gap-3">
                                <img src={landlord} alt="landlord" className="w-[30px] " />
                                <h2 className="text-[#FF304F] font-semibold text-xl ml-5">Add PGs</h2>
                            </div>
                            <div >
                                <p className="text-[12px]"># If you own a house / flat / room
                                    and want to provide it as PG to
                                    earn good money monthly ?
                                    <br />
                                    - Then complete few clicks &
                                    GET STARTED !!</p>
                            </div>
                            <div className="text-center my-3">
                                <button className="p-2 w-4/5 text-center text-white font-semibold bg-[#FF304F] rounded-xl">Add Now</button>
                            </div>
                        </div>

                        <div className="mt-3">
                            <div className="flex p-2 items-center gap-3 hover:cursor-pointer">
                                <img src={feedback} alt="feedback" className="w-[30px] " />
                                <h2 className="text-xl text-gray-500 ml-5">Feedback</h2>
                            </div>
                            <div className="flex p-2 items-center gap-3 hover:cursor-pointer">
                                <img src={contact_us} alt="contact_us" className="w-[30px] " />
                                <h2 className="text-xl text-gray-500 ml-5">Contact Us</h2>
                            </div>
                        </div>
                        <div className={`flex w-full justify-end items-end hover:cursor-pointer ${collapse ? 'block' : '' }`}>
                            <img src={sideicon} alt="sideicon" className="w-[20px] mr-2" onClick={handleCollaps} />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default AsideNavbar