import React from 'react';
import b2 from "../image/Group 80.png";
import b3 from "../image/image 9.png";
import b4 from "../image/image-9.png";
import b5 from "../image/image.png";

const Banner = () => {
    return (
        <div 
            className="max-w-[1340px] min-h-[660px] mx-auto bg-cover bg-center flex flex-col items-center py-10 px-5"
            style={{ backgroundImage: `url(${b2})` }}
        >
            {/* Title */}
            <h2 className="text-[#550964] font-serif text-3xl sm:text-4xl font-bold text-center mb-8">
                Get Started
            </h2>

            {/* Card Container */}
            <div className="max-w-[1000px]  mx-auto">
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 justify-items-center">
                    <div className="w-[250px] h-[220px] bg-[#F3E9F5] opacity-80 shadow-lg gap-2 border-3 border-[#af19cd] rounded-lg flex flex-col justify-center items-center text-[#550964] ">
                        <img src={b3} alt="" className='w-[50px]' />
                        <h1 className='font-bold text-xl'>Choose an illustration</h1>
                        <p className='px-5 text-center'>ubiquitous models rather  than parallel initiatives.  Seamlessly reinvent <br /> success.</p>
                    </div>
                    <div className="w-[250px] h-[220px] bg-[#550964] opacity-80 shadow-lg gap-2 border-3 border-[#af19cd] rounded-lg flex flex-col justify-center items-center text-white ">
                        <img src={b4} alt="" className='w-[50px]' />
                        <h1 className='font-bold text-xl'>Write your story</h1>
                        <p className='px-5 text-center'>ubiquitous models rather  than parallel initiatives.  Seamlessly reinvent <br /> success.</p>
                    </div>  
                     <div className="w-[250px] h-[220px] bg-[#F3E9F5] opacity-80 shadow-lg gap-2 border-3 border-[#af19cd] rounded-lg flex flex-col justify-center items-center text-[#550964] ">
                        <img src={b5} alt="" className='w-[50px]' />
                        <h1 className='font-bold text-xl'>Choose an illustration</h1>
                        <p className='px-5 text-center'>ubiquitous models rather  than parallel initiatives.  Seamlessly reinvent <br /> success.</p>
                    </div>
                </div>
            </div>

            {/* Button */}
            <div className="mt-10">
                <button className="bg-[#620973] text-white px-10 py-2 rounded-md border-4 border-[#9C29B2] transition-transform transform hover:scale-105">
                    Try It Now
                </button>
            </div>
        </div>
    );
};

export default Banner;
