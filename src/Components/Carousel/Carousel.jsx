import React from "react";
import Buttonca from "./Buttonca";
import Bordertext from "./Bordertext";
import Projectsmall from "./Projectsmall";
import Skill from "./Skill";
import Aboutme from "./Aboutme";
import Contact from "./Contact";
import { motion } from "framer-motion";
function Carousel() {
  return (
    <div className="flex-1 p-6 text-white bg-[#282C33] relative overflow-hidden">
      <div className="absolute top-0">
        <img src="/media.png" alt="" />
      </div>
      <div className="absolute left-[60px] w-16 h-16">
        <img
          src="/Dots.png"
          alt=""
          className="w-full h-full object-contain text-white z-20 scale-150"
        />
      </div>
      {/* เนื้อหาหลัก */}
      <div className="text-white flex items-center justify-center min-h-auto relative z-20">
        <div className="relative text-white justify-center w-full">
          <div className="container mx-auto flex flex-col md:flex-row items-center justify-center gap-8 px-6 py-12 relative z-10">
            <div className="flex flex-col items-center sm:items-start text-center md:text-left md:max-w-xl px-4 sm:px-0 z-30">
              <div
                className="absolute opacity-10 w-24 h-24"
                style={{ transform: "translateX(-10px)" }}
              >
                <img
                  src="/Dots.png"
                  alt=""
                  className="w-full h-full object-contain scale-150"
                />
              </div>
              <div className="text-start p-4">
                <motion.h1
                  className="text-3xl sm:text-5xl tracking-widest md:text-[32px] font-extrabold leading-tight drop-shadow-lg mb-4 break-words"
                  initial={{ opacity: 0, y: -20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 2 }}
                >
                  Nem is a{" "}
                  <span className="text-[#C778DD]">front-end developer</span>{" "}
                  and <span className="text-[#C778DD]">back-end developer</span>
                </motion.h1>

                <motion.p
                  className="text-2xl sm:text-lg text-gray-300 mb-6"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 1, delay: 1 }}
                >
                  "Full-stack web developer with expertise in building
                  responsive websites for all devices."
                </motion.p>
                <div className="w-full flex justify-center lg:justify-start items-center">
                  <motion.div
                    initial={{ opacity: 0, scale: 0.9, y: 20 }}
                    animate={{ opacity: 1, scale: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 1 }}
                  >
                    <Buttonca name="Contact me!!" />
                  </motion.div>
                </div>
              </div>
            </div>
            <div className="w-full  md:w-[469px] relative z-20 flex flex-col justify-center">
              <motion.img
                src="/hu2.png"
                alt="Ironman Graphic"
                className="w-[469px] h-[386px]  opacity-30 mx-auto md:opacity-70"
                initial={{ opacity: 0, y: 40 }}
                animate={{ opacity: 0.7, y: 0 }}
                transition={{ duration: 1, ease: "easeOut" }}
                whileHover={{ scale: 1.05 }}
              />
              <div className="border p-2 flex gap-2">
                <span className="my-auto">
                  <img src="/color.png" alt="" />
                </span>
                Currently working on Portfolio
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="flex relative justify-center items-center w-full">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <Bordertext />
        </motion.div>
        <img
          className="absolute right-0 md:block hidden "
          src="/4u.png"
          alt=""
        />
      </div>
      <div>
        <Projectsmall />
        <Skill />
        <Aboutme />
        <Contact />
      </div>
    </div>
  );
}

export default Carousel;
