import React from 'react';
import CloudPng from "../image/Group 33.png";
import img11 from "../image/image 11.png";
import img12 from "../image/image 12.png";
import img13 from "../image/image 13.png";


const Banner = () => {
    return (
        <>

            <div className="max-w-[1440px] mx-auto relative md:top-[-120px]">
                <div className=" hidden md:block absolute  w-full top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
                    <img src={CloudPng} alt="Cloud" className=" w-[1440px] h-[150px]" />
                </div>

                <div className="h-[660px] z-50 bg-[#620973]">

                    <div className='relative top-[100px]'>
                        <div className=' grid grid-cols-1 md:grid-cols-2 h-[450px]'>
                            <div className="flex justify-center   items-center">
                                <div className=' p-5 w-[600px] '>
                                    <p className='text-white font-serif'>More About Us</p>
                                    <h1 className='font-bold text-white font-serif text-6xl mb-5'>What we <br /> do !</h1>
                                    <p className='text-white '>Lorem ipsum dolor sit amet consectetur. Blandit leo elementum velit  risus cras id consectetur. Volutpat et pretium sapien tristique lacus. Non posuere massa at semper maecenas ante sed id. Sit nulla dignissim dolor sed in vitae. Eu metus feugiat justo.</p>
                                    <button className='bg-white px-5 mt-5 border-4 rounded-[5px]  border-[#a50dc3] text-[#620973]'>Learn More</button>
                                </div>
                            </div>
                            <div className=" hidden  md:flex justify-center items-center relative pr-20">
                                <div className=" relative w-[300px] h-[300px] flex justify-center items-center">
                                    <img src={img13} alt="" className=" h-auto w-[250px] z-50 " />                      
                                    <img
                                        src={img11}
                                        alt=""
                                        className="absolute md:top-[-30px] md:right-[-120px]  md:w-[250px]"
                                    />
                                      <img
                                        src={img12}
                                        alt=""
                                        className="absolute top-[150px] md:left-[-120px] z-50  md:w-[250px] "
                                    />
                                </div>
                            </div>

                        </div>
                    </div>
                </div>

                <div className="max-w-[1440px] mx-auto relative top-[-10px]">
                    <div className=" hidden md:block absolute  w-full top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
                        <img src={CloudPng} alt="Cloud" className=" w-[1440px] h-[150px]" />
                    </div>
                </div>

            </div>
        </>
    );
};

export default Banner;
