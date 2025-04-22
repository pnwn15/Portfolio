import React from "react";
import Aboutme from "../Carousel/Aboutme";
import Skill from "../Carousel/Skill";
import { motion } from "framer-motion"; // เพิ่มการใช้งาน Framer Motion

function Aboute() {
  const cardData = [
    { content: "I enjoy playing games in my free time." },
    { content: "I like building and assembling computers." },
    { content: "I enjoy coding." },
    { content: "I like watching movies when I have free time." },
    { content: "I enjoy traveling and going out." },
    { content: "I love taking care of animals." },
  ];
  return (
    <div className="flex-1 p-6 text-white bg-[#282C33] relative overflow-hidden">
      <div className="absolute md:block hidden top-0">
        <img src="/media.png" alt="" />
      </div>
      <Aboutme />
      <div className="absolute right-0 w-16 h-16">
        <img
          src="/Dots.png"
          alt=""
          className="w-full h-full object-contain  text-white z-20 scale-150"
        />
      </div>
      <Skill />
      <div className="flex flex-col max-w-5xl justify-center items-center px-4 py-8 mx-auto">
        {/* Title */}
        <div className="mb-6 w-full text-left">
          <h1 className="text-2xl font-semibold pb-1 tracking-wide inline-block">
            <span className="text-[#C778DD] mr-1">#</span>my-fun-facts
          </h1>
        </div>
        <div className="absolute left-0 w-16 h-16">
          <img
            src="/4u.png"
            alt=""
            className="w-full h-full object-contain rotate-180 text-white z-20 scale-150"
          />
        </div>
        {/* Layout: Card + Image */}
        <div className="flex flex-col md:flex-row gap-8 w-full items-center justify-center">
          {/* Card Section */}
          <div className="w-full md:w-1/2 flex justify-center">
            <div className="grid grid-cols-1 gap-4 w-full max-w-md">
              {cardData.map((card, index) => (
                <motion.div
                  key={index}
                  className="bg-transparent border-white border dark:bg-gray-800 shadow text-center px-4 py-2"
                  initial={{ opacity: 0, y: 20 }} // เริ่มต้นให้การ์ดไม่มองเห็นและเลื่อนไปข้างล่าง
                  animate={{ opacity: 1, y: 0 }} // ให้การ์ดปรากฏและเลื่อนขึ้น
                  transition={{ duration: 0.8, delay: index * 0.2 }} // เพิ่ม delay เพื่อให้แต่ละการ์ดปรากฏทีละอัน
                  whileHover={{
                    scale: 1.05,
                    boxShadow: "0 4px 15px rgba(0, 0, 0, 0.2)",
                  }} // เมื่อ hover การ์ดจะขยายและมีเงามากขึ้น
                >
                  <p className="dark:text-gray-300">{card.content}</p>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Image Section */}
          <div className="w-full md:w-1/2 flex justify-center items-center">
            <img
              src="/All.png"
              alt="My Image"
              className="w-full max-w-sm object-contain"
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Aboute;
