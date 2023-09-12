import { useEffect, useState } from 'react'
import { search } from '../assets'
import { allPgs } from '../actions/authAction';
import PgCard from './PgCard.jsx'
import { ScaleLoader } from 'react-spinners'
import { motion } from 'framer-motion';

const Explore = () => {
    //  States
    const [isLoaded, setIsLoaded] = useState(false);
    const [allPgsInfo, setAllPgsInfo] = useState(null);

    useEffect(() => {
        let pgInfo = getPgs();

        pgInfo.then((info) => {
            setAllPgsInfo(info.data.data);
            setIsLoaded(true);
            console.log(info.data.data);
        })

    }, [])

    const getPgs = async () => {
        const { data } = await allPgs();

        return { data };
    }

    // Animations Variants
    const container = {
        hidden: { opacity: 1, scale: 0 },
        visible: {
            opacity: 1,
            scale: 1,
            transition: {
                delayChildren: 0.3,
                staggerChildren: 0.2
            }
        }
    };

    const child = {
        hidden: { y: 20, opacity: 0 },
        visible: {
            y: 0,
            opacity: 1
        }
    }

    return (
        <div className='h-full'>
            {/* Search Bar */}
            <div className='flex items-center justify-center w-full'>
                <div className='md:min-w-[400px] min-w-[200px] md:w-[600px] w-[300px] relative'>
                    <input type="text" className='w-full p-4 text-h1Color font-bold outline-none drop-shadow-lg rounded-xl h-[40px] border-sky-900 border-2 border-opacity-50' placeholder='Search ' />
                    <img src={search} alt="search" className='w-[25px] absolute right-2 top-2' />
                </div>
            </div>

            {/*  Explore Section */}
            <div className="">
                {/* HR */}
                <div className="border-black border-2 mt-5 md:mx-12 mx-6 opacity-20" />

                {/* Best selct by OwnPG */}


                {/* All PG's */}
                <div className='m-2 md:p-5'>
                    <h1 className='font-bold text-2xl text-h1Color'>Based On Your Preference</h1>

                    <div className="p-5 flex flex-wrap justify-start gap-2">
                        {
                            !isLoaded ? <div className="w-full flex items-center justify-center min-h-[400px]">
                                <ScaleLoader
                                    color="#0a168a"
                                    height={60}
                                    width={10}
                                />
                            </div>
                                :
                                <motion.div
                                    className="flex flex-wrap md:justify-start justify-center w-full gap-3"
                                    variants={container}
                                    initial="hidden"
                                    animate="visible"
                                >
                                    {
                                        allPgsInfo.map((item, i) => (
                                            <motion.div
                                                key={i}
                                                className="md:max-w-[330px] md:min-w-[220px] max-w-[350px]"
                                                variants={child}
                                            >
                                                <PgCard pgInfo={item} />
                                            </motion.div>
                                        ))
                                    }
                                </motion.div>
                        }
                    </div>
                </div>
            </div>
        </div >
    )
}

export default Explore