import React from 'react'
import WhatsAppImgPng from "../image/WhatsAppStory.png";

const Footer = () => {
    return (
        <>
            <div className='max-w-[1440px] min-h-[487px] flex flex-col justify-center items-center bg-black'>

                <div className=' max-w-[1285px] flex flex-wrap justify-between min-h-[230px]'>
                    <div className='h-auto  w-full md:w-[300px] text-center flex flex-col gap-5 p-5 relative'>
                        <img src={WhatsAppImgPng} alt="" className=' hidden md:block absolute md:top-[-100px]' />
                        <h1 className='font-bold text-white mt-2'>ABOUT THE COMPANY</h1>
                        <p className='text-[#737373]'>Sapien luctus lesuada sentus pharetra nisi quisuea aenean eros mus magnis arcu vehicula nascetur feugiat</p>
                    </div>
                    <div className='h-auto w-[200px] flex flex-col  items-center '>
                        <h1 className='font-bold text-white mt-2'>Our Services</h1>
                        <p className='text-[#737373]'>Home</p>
                        <p className='text-[#737373]'>Contact</p>
                        <p className='text-[#737373]'>Home</p>
                        <p className='text-[#737373]'>Contact</p>
                        <p className='text-[#737373]'>Home</p>
                        <p className='text-[#737373]'>Contact</p>
                        <p className='text-[#737373]'>Contact</p>
                    </div>
                    <div className='h-auto w-[200px] flex flex-col  items-center '>
                        <h1 className='font-bold text-white mt-2'>Our Services</h1>
                        <p className='text-[#737373]'>Home</p>
                        <p className='text-[#737373]'>Contact</p>
                        <p className='text-[#737373]'>Home</p>
                        <p className='text-[#737373]'>Contact</p>
                        <p className='text-[#737373]'>Home</p>
                        <p className='text-[#737373]'>Contact</p>
                        <p className='text-[#737373]'>Contact</p>
                    </div><div className='h-auto w-[200px] flex flex-col  items-center '>
                        <h1 className='font-bold text-white mt-2'>Our Services</h1>
                        <p className='text-[#737373]'>Home</p>
                        <p className='text-[#737373]'>Contact</p>
                        <p className='text-[#737373]'>Home</p>
                        <p className='text-[#737373]'>Contact</p>
                        <p className='text-[#737373]'>Home</p>
                        <p className='text-[#737373]'>Contact</p>
                        <p className='text-[#737373]'>Contact</p>
                    </div><div className='h-auto w-[200px] flex flex-col  items-center '>
                        <h1 className='font-bold text-white mt-2'>Our Services</h1>
                        <button className='bg-amber-300 px-5 py-1 border-2 mt-2 font-medium rounded-[5px]'>Know More</button>
                    </div>

                </div>
            </div>
        </>
    )
}

export default Footer
