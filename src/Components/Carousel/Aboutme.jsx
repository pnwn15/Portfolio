import React from "react";
import { ArrowRightOutlined } from "@ant-design/icons";
import Buttonca from "./Buttonca";
import { motion } from "framer-motion";
function Aboutme() {
  const containerVariants = {
    hidden: { opacity: 0, y: 20 },
    show: {
      opacity: 1,
      y: 0,
      transition: {
        staggerChildren: 0.3,
        duration: 0.6,
        ease: "easeOut",
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 10 },
    show: { opacity: 1, y: 0 },
  };
  return (
    <div className="mx-auto max-w-5xl container px-4 py-8">
      <div className="flex justify-between">
        <div className="flex max-w-xl gap-2">
          <h1 className="text-2xl">
            <span className="text-2xl text-[#C778DD]">#</span>Aboute
          </h1>
          <img
            className="h-0.5 my-auto md:block hidden"
            src="/Line.png"
            alt=""
          />
        </div>
        <div className="flex gap-3 items-center">
          <a href="/aboutme">
            <h1>View all</h1>
          </a>
          <ArrowRightOutlined />
        </div>
      </div>

      <div className="flex flex-col justify-between md:flex-row gap-6 mx-auto container px-4 py-8">
        <div className="absolute left-0 bottom-[1/5]">
          <img className="md:block hidden" src="/Dots.png" alt="" />
        </div>
        {/* ซ้าย - ข้อความ */}
        <motion.div
          className="w-full md:w-1/2 flex flex-col tracking-widest space-y-8 text-base leading-relaxed"
          variants={containerVariants}
          initial="hidden"
          animate="show"
        >
          <motion.p variants={itemVariants}>
            Hello, I'm Panawat Srimuang!
          </motion.p>
          <motion.p variants={itemVariants}>
            Hi, I'm a passionate Full Stack Web Developer skilled in both
            Frontend and Backend development...
          </motion.p>
          <motion.p variants={itemVariants}>
            I have hands-on experience with RESTful APIs, MongoDB, MySQL, and I
            love writing clean...
          </motion.p>
          <motion.div variants={itemVariants}>
            <Buttonca name="Read more" icon={<ArrowRightOutlined />} />
          </motion.div>
        </motion.div>

        {/* ขวา - รูปภาพ */}
        <div className="w-full md:w-1/2 flex justify-center items-center relative">
          <img
            src="/human1.png"
            alt="My Image"
            className="w-full h-96 max-w-sm object-contain transition-transform duration-300 hover:scale-110 hover:shadow-lg"
          />
        </div>
        <div className="absolute right-0 bottom-[1/2]">
          <img className="md:block hidden" src="/Dots.png" alt="" />
        </div>
      </div>
    </div>
  );
}

export default Aboutme;
