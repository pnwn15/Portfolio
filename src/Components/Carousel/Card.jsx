import React from "react";
import { SwapOutlined, ArrowRightOutlined } from "@ant-design/icons";
import Buttonca, { ButtonOutline } from "./Buttonca";
import { href } from "react-router-dom";
function Card() {
  const cards = [
    {
      text: "React Tailwind Javascript flowbite slick-carousel ",
      image: "/captainapp.png",
      headtitle: "Captaintradeapp",
      headp: "Captaintradeapp",
      href: "https://captain-trade-app.vercel.app/",
    },
    {
      text: "React Tailwind Ant design Nodejsexpress postgres docker",
      image: "/smart.png",
      headtitle: "Website smartcom ",
      headp: "Show detail smartcom",
      href: "https://smartcom-1ejr.vercel.app/",
    },
    {
      text: "React Tailwind flowbite font-awesome javascript",
      image: "/image.png",
      headtitle: "Sell IT",
      headp: "Website sell IT template",
      href: "https://shopname-ten.vercel.app/",
    },
  ];
  return (
    <div className="grid relative grid-cols-1 mt-7 sm:grid-cols-2 md:grid-cols-3 gap-6">
      {cards.map((card, index) => (
        <div
          key={index}
          className="p-0.5 border-white border dark:bg-gray-800 bg-transparent shadow-md text-center"
        >
          {/* รูปภาพด้านบน */}
          <img
            src={card.image}
            alt={card.title}
            className="w-full h-40 object-cover bg-center"
          />
          <p className="text-white text-base p-0.5 border-b-1 dark:text-gray-300">
            {card.text}
          </p>
          <div>
            <h1 className="text-start px-4 pt-4 pb-1 text-xl font-semibold">
              {card.headtitle}
            </h1>
            <p className="text-white text-start text-base px-4 pb-4  dark:text-gray-300">
              {card.headp}
            </p>
          </div>
          <div className="flex justify-start gap-2 px-4 pb-4">
            <a href={card.href} target="_blank" rel="noopener noreferrer">
              <Buttonca name="Live" icon={<SwapOutlined />} />
            </a>
            <a href={card.href} target="_blank" rel="noopener noreferrer">
              <ButtonOutline name="Cached" icon={<ArrowRightOutlined />} />
            </a>
          </div>
        </div>
      ))}
    </div>
  );
}

export default Card;
