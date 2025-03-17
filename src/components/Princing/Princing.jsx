import React from 'react'
import Frame from "../image/Frame.png";
import G35 from "../image/Group 35.png";
import G39 from "../image/Group 39.png";
import { FaArrowRightLong } from "react-icons/fa6";


const Princing = () => {
    return (
        <>
            <div className=" p-10 max-w-[1440px] min-h-[1150px] md:mt-[-100px] bg-gradient-to-b from-[#FFFFFF] to-[#E8CDED]">
                <div className=' hidden max-w-[1300px] min-h-[300px]  md:flex justify-between'>
                    <div className='flex justify-end items-end '>
                        <img src={Frame} alt="" />
                    </div>

                    <div className='flex flex-col justify-center items-center'>
                        <h1 className='font-medium text-[#9C29B2] mb-2'>Pricing</h1>
                        <p className='text-2xl font-bold text-center'>Our subscription plans for <br /> you that we provide !</p>
                    </div>
                    <div>
                        <img src={G35} alt="" />
                    </div>
                </div>

                <div className='max-w-[1111px] min-h-[612px]  mx-auto flex flex-wrap justify-center items-center gap-5'>
                    <div className='w-[530px] h-[293px]  flex items-center bg-[#FFFFFF] rounded-[30px]'>
                        <div className='px-5'>
                            <img src={G39} alt="" />
                        </div>
                        <div className='px-5 w-[250px] flex flex-col gap-5'>
                            <h1 className='font-bold text-[#a80bc7]'>Basic Individual Plan</h1>
                            <p className='text-[14px]'>Eu turpis egestas pretium aenean pharetra magna ac.</p>
                            <button className='border-b-2 w-fit border-[#9C29B2] text-[#790e8f]'>Know more<FaArrowRightLong className='inline-block ml-2'/></button>
                        </div>

                    </div>
                    <div className='w-[530px] h-[293px]  flex items-center bg-[#FFFFFF] rounded-[30px]'>
                        <div className='px-5'>
                            <img src={G39} alt="" />
                        </div>
                        <div className='px-5 w-[250px] flex flex-col gap-5'>
                            <h1 className='font-bold text-[#a80bc7]'>Basic Individual Plan</h1>
                            <p className='text-[14px]'>Eu turpis egestas pretium aenean pharetra magna ac.</p>
                            <button className='border-b-2 w-fit border-[#9C29B2] text-[#790e8f]'>Know more <FaArrowRightLong className='inline-block'/></button>
                        </div>

                    </div>
                    <div className='w-[530px] h-[293px]  flex items-center bg-[#FFFFFF] rounded-[30px]'>
                        <div className='px-5'>
                            <img src={G39} alt="" />
                        </div>
                        <div className='px-5 w-[250px] flex flex-col gap-5'>
                            <h1 className='font-bold text-[#a80bc7]'>Basic Individual Plan</h1>
                            <p className='text-[14px]'>Eu turpis egestas pretium aenean pharetra magna ac.</p>
                            <button className='border-b-2 w-fit border-[#9C29B2] text-[#790e8f]'>Know more <FaArrowRightLong className='inline-block ml3'/></button>
                        </div>

                    </div>


                </div>
                <div className='flex justify-center items-center mt-10'>

                    <button className='bg-[#620973] px-10 mt-5 py-2 border-4 rounded-[5px]  border-[#a50dc3] text-white'>Explore More</button>
                </div>
            </div>
        </>
    )
}

export default Princing
