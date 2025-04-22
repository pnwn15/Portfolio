import React from "react";
import { ArrowRightOutlined } from "@ant-design/icons";
import Card from "./Card";
import { motion } from "framer-motion";
function Projectsmall() {
  return (
    <div className="mx-auto max-w-5xl container px-4 py-8">
      <div className="absolute right-0 bottom-[1/5]">
        <img className="md:block hidden" src="/4u.png" alt="" />
      </div>
      <div className="absolute left-[-30px] bottom-[1/6]">
        <img className="md:block hidden" src="/Dots.png" alt="" />
      </div>
      <div className="flex  justify-between">
        <div className="flex max-w-xl gap-2">
          <h1 className="text-2xl">
            <span className="text-2xl text-[#C778DD]">#</span>projects
          </h1>
          <img
            className="h-0.5 my-auto md:block hidden"
            src="/Line.png"
            alt=""
          />
        </div>
        <div className="flex gap-3 items-center">
          <a href="/project">
            <h1>View all</h1>
          </a>
          <ArrowRightOutlined />
        </div>
      </div>
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 4, ease: "easeOut" }}
        whileHover={{ scale: 1.03 }}
      >
        <Card />
      </motion.div>
    </div>
  );
}

export default Projectsmall;
