import { useDispatch, useSelector } from 'react-redux'
import { darkmode, lightmode, logo, search } from '../assetsnew'
import { setMode } from '../state/userSlice'
import { useNavigate } from 'react-router-dom'

const NavbarNew = () => {
    // States
    const user = useSelector(state => state.userRed)
    console.log(user.mode);
    const dispatch = useDispatch();
    const navigate = useNavigate() 

    // Functions 
    const handleMode = () => {
        // if( mode === 'light' ){
        console.log("hi");
        dispatch(setMode())
        // }
    }

    const gotohome = () => {
        navigate("/")
    }

    return (
        <div className="w-full p-3 flex">
            <div className='flex-4 p-2 justify-center items-center hover:cursor-pointer'>
                <div className='flex items-center gap-2 ml-5' onClick={gotohome}>
                    <img src={logo} alt="logo" />
                    <h1 className='text-[#FF304F] mt-3 text-3xl font-semibold'>OwnPG</h1>
                </div>
            </div>
            <div className='flex-1 p-2'>
                <div className='w-full p-3 flex justify-center items-center gap-3'>
                    <div className='relative w-4/5'>
                        <input type="text" name="search" id="search" className="outline-none border-2 border-black border-opacity-50 rounded-full w-full p-3 before:shadow-xl pl-[50px] font-semibold" placeholder='Search your PG........(by place,city,area,...etc.)'
                            style={{ boxShadow: '0px -3px 2px rgba(0, 0, 0, 0.2)' }}
                        />
                        <img src={search} alt="search" className='absolute left-2 top-3 w-[25px] ml-2 mt-[2px]' />
                    </div>
                    <div
                        className=""
                        onClick={handleMode}
                    >
                        <img
                            src={user.mode === 'light' ? darkmode : lightmode}
                            alt="darkmode"
                            className="w-[40px] cursor-pointer"
                        />
                    </div>
                </div>
            </div>

        </div>
    )
}

export default NavbarNew