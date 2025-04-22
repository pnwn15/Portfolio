import React from "react";
import { ArrowRightOutlined } from "@ant-design/icons";
import { motion } from "framer-motion";
function Skill() {
  const cardData = [
    { title: "Languages", content: "Python javascript" },
    { title: "Databases", content: "Postgres Mysql Mongodb" },
    {
      title: "Tools",
      content:
        "Vs code Figma canva microsoft office Github googlefont ant design flowbite",
    },
    { title: "Other", content: "HTML CSS Javascript" },
    {
      title: "Frameworks",
      content: "React Angular nextjs flask  Nodejsexpress",
    },
  ];
  return (
    <div className="mx-auto max-w-5xl container px-4 py-8">
      <div className="flex justify-between">
        <div className="flex max-w-xl gap-2">
          <h1 className="text-2xl">
            <span className="text-2xl text-[#C778DD]">#</span>Skill
          </h1>
          <img
            className="h-0.5 my-auto md:block hidden"
            src="/Line.png"
            alt=""
          />
        </div>
        <div className="flex gap-3 items-center">
          <h1>View all</h1>
          <ArrowRightOutlined />
        </div>
      </div>
      <div className="flex flex-col md:flex-row gap-6 mx-auto container px-4 py-8">
        {/* ซ้าย - รูป */}
        <motion.div
          className="absolute md:relative sm:w-full md:w-1/2 flex justify-center items-center"
          initial={{ opacity: 0, y: 30 }}
          animate={{
            opacity: 1,
            y: [0, -10, 0, 10, 0], // ลอยขึ้นลงเหมือนคลื่น
          }}
          transition={{
            duration: 5,
            ease: "easeInOut",
            repeat: Infinity,
            repeatType: "loop",
          }}
        >
          <motion.img
            src="/All.png"
            alt="My Image"
            className="w-full max-w-sm object-contain"
            initial={{ scale: 0.9 }}
            animate={{ scale: 1 }}
            transition={{ duration: 1.5, ease: "easeOut" }}
            whileHover={{ scale: 1.05 }}
          />
        </motion.div>

        {/* ขวา - การ์ด 6 ใบ */}
        <div className="relative md:w-1/2 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
          {cardData.map((card, index) => (
            <motion.div
              key={index}
              className="bg-transparent border-white border dark:bg-gray-800 shadow text-center p-4 rounded-md"
              whileHover={{
                scale: 1.05,
                boxShadow: "0px 8px 24px rgba(255, 255, 255, 0.2)",
              }}
              transition={{ type: "spring", stiffness: 200, damping: 12 }}
            >
              <h2 className="text-lg font-bold mb-1 border-b">{card.title}</h2>
              <p className="dark:text-gray-300">{card.content}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Skill;
