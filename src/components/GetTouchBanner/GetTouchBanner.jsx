import React from 'react'
import R1 from "../image/Rectangle 19.png";
import F1 from "../image/Frame (2).png";


const GetTouchBanner = () => {
    return (
        <>
            <div className=" p-10 max-w-[1440px] min-h-[600px]">
                <div className='max-w-[1312px] min-h-[535px]  mx-auto md:flex flex-wrap justify-between  '   style={{
                            backgroundImage: `url(${R1})`,
                            backgroundSize: "cover",
                            backgroundPosition: "center",
                          }}>
                    <div className=' flex flex-col ml-20   pt-20 max-w-[120px]'>
                        <img src={F1} alt="" />
                    </div>
                    <div className='flex flex-col justify-center items-center max-w-[500px]'>
                        <h1 className='text-[#F39C12] font-bold '>GET IN TOUCH</h1>
                        <p className='text-[#620973] text-3xl font-medium mt-5 text-center'>Needs Help? Let’s Get in Touch</p>
                        <p className='text-center mt-5 text-[#550964]'>Lorem ipsum dolor sit amet consectetur. Blandit leo elementum velit risus cras id consectetur. Volutpat et pretium sapien tristique lacus. Non posuere massa at semper maecenas ante sed id. Sit nulla dignissim dolor sed in vitae. Eu metus feugiat justo.</p>
                        <div className='flex justify-center items-center mt-10'>

                            <button className='bg-[#620973] px-10 mt-2 py-2 border-4 rounded-[5px]  border-[#a50dc3] text-white'>Explore More</button>
                        </div>
                    </div>
                    <div className=' flex flex-col mr-20 pb-20 w-[120px] justify-end'>
                        <img src={F1} alt="" />
                    </div>
                </div>

            </div>
        </>
    )
}

export default GetTouchBanner
