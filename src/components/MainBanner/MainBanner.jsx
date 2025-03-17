import React from 'react';
import bgImage from "../image/Group-1.png";
import bgImage1 from "../image/Rectangle 6.png";
import Image1 from "../image/image-1.png";
import bImg1 from "../image/image 3.png";
import bImg2 from "../image/image 6.png";
import bImg3 from "../image/image 7.png";
import bImg4 from "../image/image 5.png";
import Banner2 from "../Banner2/Banner";
import Banner from "../Banner3/Banner";
import Stories from '../StoriesSection/Stories';
import Princing from '../Princing/Princing';
import GetTouchBanner from '../GetTouchBanner/GetTouchBanner';
import Footer from '../Footer/Footer';

const MainBanner = () => {
  return (
    <div className="max-w-[1440px] mx-auto relative">
      <div className="h-[149px] bg-[#FFC909] relative overflow-hidden">
        <img
          src={bgImage}
          alt="Top PNG"
          className="absolute md:top-[-15px] top-[-8px]  left-1/2 transform -translate-x-1/2 z-10"
        />
      </div>
      <div
        className="relative"
      >
        <div
          className="grid grid-cols-1 md:grid-cols-3 h-[500px]"
          style={{
            backgroundImage: `url(${bgImage1})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        >
          <div className="md:pl-20 pl-10 pt-10 relative mb-20">
            <img src={Image1} alt="" className="h-[100px] w-[100px] absolute top-[-30px]" />
            <h1
  className="text-6xl font-sans text-[#710A85] font-bold"
  style={{ textShadow: "3px 5px 6px white" }}
>
  Get better at <br /> writing!
</h1>
            <p className="mt-5 text-[#550964]">
              Helping young writers make cool stories with awesome pictures. Storybird's art-inspired writing makes learning fun!
            </p>
            <button className="px-6 py-2 mt-5 rounded bg-[#710A85] text-white text-sm">
              Join Now
            </button>
          </div>

          <div className=" hidden  col-span-2 md:flex justify-center h-[350px]  items-center">
            <div className="grid grid-cols-2 gap-4">
              <div className="flex justify-center items-center">
                <img src={bImg4} alt="" />
              </div>
              <div className="flex justify-center items-center">
                <img src={bImg2} alt="" />
              </div>
              <div className="flex justify-end items-start">
                <img src={bImg3} alt="" />
              </div>
              <div className="flex justify-center items-center">
                <img src={bImg1} alt="" />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Additional Banners adding here*/}
      <Banner2 />
      <Banner />
      <Stories />
      <Princing/>
      <GetTouchBanner/>
      <Footer/>
    </div>
  );
};

export default MainBanner;