import React, { useEffect, useState } from "react";
import { SwapOutlined, ArrowRightOutlined } from "@ant-design/icons";
import Buttonca, { ButtonOutline } from "../Carousel/Buttonca";
import { motion } from "framer-motion"; // เพิ่มการใช้งาน Framer Motion
function Project() {
  const [card, setCards] = useState([]);
  const [card1, setCards1] = useState([]);

  useEffect(() => {
    fetch("/data/card.json")
      .then((res) => res.json())
      .then((data) => {
        console.log("card.json data:", data); // เช็คข้อมูล
        setCards(data);
      })
      .catch((error) => console.error("Error fetching card.json:", error));

    fetch("/data/card1.json")
      .then((res) => res.json())
      .then((data) => {
        console.log("card1.json data:", data);
        setCards1(data);
      })
      .catch((error) => console.error("Error fetching card1.json:", error));
  }, []);

  return (
    <div className="flex-1 p-6 text-white bg-[#282C33] relative overflow-hidden">
      <div className="absolute md:block hidden top-0">
        <img src="/media.png" alt="" />
      </div>
      <div className="flex flex-col justify-center items-center">
        <div className="absolute left-10 bottom-[1/5]">
          <img className="md:block hidden" src="/Dots.png" alt="" />
        </div>
        <div className="absolute right-0 bottom-[1/4]">
          <img className="md:block hidden" src="/4u.png" alt="" />
        </div>
        <div className="max-w-5xl">
          {/* Section Title */}
          <div className="text-start">
            <h1 className="font-bold text-2xl">
              <span className="text-[#C778DD]">/</span>PROJECTS
            </h1>
            <p>List of my projects</p>
          </div>

          {/* Complete Apps */}
          <div className="flex flex-col mt-10">
            <div>
              <h1 className="text-2xl">
                <span className="text-[#C778DD]">#</span>complete-apps
              </h1>
            </div>
            <div className="grid relative grid-cols-1 mt-7 sm:grid-cols-2 md:grid-cols-3 gap-6">
              {card.map((card, index) => (
                <motion.div
                  key={index}
                  className="p-0.5 border-white border dark:bg-gray-800 bg-transparent shadow-md text-center"
                  initial={{ opacity: 0, y: 20 }} // เริ่มต้นให้การ์ดไม่มองเห็นและเลื่อนไปข้างล่าง
                  animate={{ opacity: 1, y: 0 }} // ให้การ์ดปรากฏและเลื่อนขึ้น
                  transition={{ duration: 0.8, delay: index * 0.1 }} // เพิ่ม delay เพื่อให้แต่ละการ์ดปรากฏทีละอัน
                  whileHover={{
                    scale: 1.05,
                    boxShadow: "0 4px 10px rgba(0, 0, 0, 0.2)",
                  }} // เมื่อ hover การ์ดจะขยายและมีเงา
                >
                  <img
                    src={card.image}
                    alt={card.title}
                    className="w-full h-40 object-cover bg-center"
                  />
                  <p className="text-white text-base border dark:text-gray-300">
                    {card.text}
                  </p>
                  <div>
                    <h1 className="text-start px-4 pt-4 pb-1 text-xl font-semibold">
                      {card.headtitle}
                    </h1>
                    <p className="text-white text-start text-base px-4 pb-4 dark:text-gray-300">
                      {card.headp}
                    </p>
                  </div>
                  <div className="flex justify-start gap-2 px-4 pb-4">
                    <a
                      href={card.href}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <Buttonca name="Live" icon={<SwapOutlined />} />
                    </a>
                    <a
                      href={card.href}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <ButtonOutline
                        name="Cached"
                        icon={<ArrowRightOutlined />}
                      />
                    </a>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Small Projects */}
          <div className="flex flex-col mt-10">
            <div>
              <h1 className="text-2xl">
                <span className="text-[#C778DD]">#</span>small-projects
              </h1>
            </div>
            <div className="absolute left-[-10px] bottom-96">
              <img className="md:block hidden" src="/Dots.png" alt="" />
            </div>
            <div className="grid relative grid-cols-1 mt-7 sm:grid-cols-2 md:grid-cols-3 gap-6">
              {card1.map((card, index) => (
                <motion.div
                  key={index}
                  className="p-0.5 border-white border dark:bg-gray-800 bg-transparent shadow-md text-center"
                  initial={{ opacity: 0, y: 20 }} // เริ่มต้นให้การ์ดไม่มองเห็นและเลื่อนไปข้างล่าง
                  animate={{ opacity: 1, y: 0 }} // ให้การ์ดปรากฏและเลื่อนขึ้น
                  transition={{ duration: 0.8, delay: index * 0.1 }} // เพิ่ม delay เพื่อให้แต่ละการ์ดปรากฏทีละอัน
                  whileHover={{
                    scale: 1.05,
                    boxShadow: "0 4px 10px rgba(0, 0, 0, 0.2)",
                  }} // เมื่อ hover การ์ดจะขยายและมีเงา
                >
                  <img
                    src={card.image}
                    alt={card.title}
                    className="w-full h-40 object-cover bg-center"
                  />
                  <p className="text-white text-base border dark:text-gray-300">
                    {card.text}
                  </p>
                  <div>
                    <h1 className="text-start px-4 pt-4 pb-1 text-xl font-semibold">
                      {card.headtitle}
                    </h1>
                    <p className="text-white text-start text-base px-4 pb-4 dark:text-gray-300">
                      {card.headp}
                    </p>
                  </div>
                  <div className="flex justify-start gap-2 px-4 pb-4">
                    <a
                      href={card.href}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <Buttonca name="Live" icon={<SwapOutlined />} />
                    </a>
                    <a
                      href={card.href}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <ButtonOutline
                        name="Cached"
                        icon={<ArrowRightOutlined />}
                      />
                    </a>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Project;
