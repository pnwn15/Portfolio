import React from "react";
import {
  ArrowRightOutlined,
  DiscordOutlined,
  MailOutlined,
} from "@ant-design/icons";

function Contact() {
  const contacts = [
    { icon: <DiscordOutlined />, text: "nemo09128" },
    { icon: <MailOutlined />, text: "panawatsrimuang@gmail.com" },
  ];
  return (
    <div className="mx-auto max-w-5xl container px-4 py-8">
      <div className="flex justify-between">
        <div className="flex max-w-xl gap-2">
          <h1 className="text-2xl">
            <span className="text-2xl text-[#C778DD]">#</span>contacts
          </h1>
          <img className="h-0.5 my-auto md:block hidden" src="/Line.png" alt="" />
        </div>
        <div className="flex gap-3 items-center">
          <h1>View all</h1>
          <ArrowRightOutlined />
        </div>
      </div>
      <div className="flex flex-col justify-between md:flex-row gap-6 mx-auto container px-4 py-8">
      <div className="absolute left-[-30px] bottom-[1/6]">
        <img className="md:block hidden" src="/Dots.png" alt="" />
      </div>
        <div className="max-w-md">
          <p>
          I enjoy working on frontend development — it's something I genuinely find fun. You can contact me anytime!
          </p>
        </div>
        <div className="border border-white flex-col flex p-4">
          <p className="mb-2 font-semibold">Message me here</p>
          {contacts.map((contact, index) => (
            <div key={index} className="flex gap-2 items-center">
              {contact.icon}
              <p>{contact.text}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Contact;
