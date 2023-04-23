import { useState } from "react";
import { applogo } from "../assets"
import BeatLoader from "react-spinners/BeatLoader";

const SplashScreen = () => {
    const [color, setColor] = useState("#05386B");

    return (
        <div className="flex flex-col justify-center items-center h-full">
            <img src={applogo} alt="logo" className="h-[80px]" />
            <h1 className="font-bold -mt-5 text-3xl text-[#05386B]">OwnPG.com</h1>
            <p className="text-[#05386B]">PG HUNTING SYSTEM</p>
            {/* <div className="mt-5 mr-5">
                <BeatLoader
                    color={color}
                    size={20}
                    aria-label="Loading Spinner"
                    data-testid="loader"
                />
            </div> */}
        </div>
    )
}

export default SplashScreen