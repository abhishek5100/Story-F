import React from 'react'
import imgbook from "../image/image 10.png"
import imgStr from "../image/image 14.png"
import { useProductData } from '@/admindashboard/services'

const Stories = () => {

    const { data: ProductList, isLoading, error } = useProductData()

    console.log(ProductList)

    // const ProductList = [
    //     {
    //         story_name: "Story Name",
    //         description: "border p-10 max-w-[1440px] min-h-[1300px] md:mt-[-100px] bg-gradient-to-b from-[#FFFFFF]"
    //     },
    //     {
    //         story_name: "Story Name",
    //         description: "border p-10 max-w-[1440px] min-h-[1300px] md:mt-[-100px] bg-gradient-to-b from-[#FFFFFF]"
    //     },
    //     {
    //         story_name: "Story Name",
    //         description: "border p-10 max-w-[1440px] min-h-[1300px] md:mt-[-100px] bg-gradient-to-b from-[#FFFFFF]"
    //     },
    //     {
    //         story_name: "Story Name",
    //         description: "border p-10 max-w-[1440px] min-h-[1300px] md:mt-[-100px] bg-gradient-to-b from-[#FFFFFF]"
    //     },
    //     {
    //         story_name: "Story Name",
    //         description: "border p-10 max-w-[1440px] min-h-[1300px] md:mt-[-100px] bg-gradient-to-b from-[#FFFFFF]"
    //     },
    //     {
    //         story_name: "Story Name",
    //         description: "border p-10 max-w-[1440px] min-h-[1300px] md:mt-[-100px] bg-gradient-to-b from-[#FFFFFF]"
    //     },
    //     {
    //         story_name: "Story Name",
    //         description: "border p-10 max-w-[1440px] min-h-[1300px] md:mt-[-100px] bg-gradient-to-b from-[#FFFFFF]"
    //     },
    //     {
    //         story_name: "Story Name",
    //         description: "border p-10 max-w-[1440px] min-h-[1300px] md:mt-[-100px] bg-gradient-to-b from-[#FFFFFF]"
    //     },
    // ]
    return (
        <>
            <div className="border p-10 max-w-[1440px] min-h-[1300px] md:mt-[-100px] bg-gradient-to-b from-[#FFFFFF] to-[#FFF0E5]">
                <div className='flex justify-center items-center'>
                    <div className='flex flex-col justify-center items-center'>
                        <img src={imgbook} alt="" />                    <h1 className='text-[#620973] font-medium'>Read Stories</h1>
                        <p className='font-bold font-serif text-center'>Take a look & Start Learning <br /> From Today</p>
                    </div>
                </div>

                <div className='flex flex-wrap items-center justify-center gap-5 mt-5'>
                    {ProductList && ProductList?.data?.map((ele => {
                        return <div className=' w-[305px] h-[401px] border-4 border-amber-400 rounded-[10px] flex flex-col bg-[#620973] items-center '>
                            <div className='p-3'>
                                <div className=' w-[260px] h-[185px]'>
                                    <img src={imgStr} alt="Story image" />

                                </div>
                            </div>
                            <div className=' w-full'>
                                <h1 className='text-white font-bold ml-[20px]'>{ele.story_name}</h1>
                                <div className=' h-[80px]'>
                                    <p className="text-white ml-[15px] mt-5 break-words">
                                        {ele.description.split(" ").slice(0, 15).join(" ")}{ele.description.split(" ").length > 10 ? "..." : ""}
                                    </p>                                </div>
                                <button className='bg-[#FFC909] w-[90%] py-1 mt-2 ml-4 rounded-[3px]'>Read More</button>
                            </div>
                        </div>
                    }))}
                </div>

                <div className='flex justify-center items-center mt-10'>
                    <button className='bg-[#620973] px-10 mt-5 py-2 border-4 rounded-[5px]  border-[#a50dc3] text-white'>Explore More</button>
                </div>

            </div>
        </>
    )
}

export default Stories
