import React from "react";
import Border from "./Border";
import Form from "./Form";

function Contact() {
  const socials = [
    { icon: "/Twitter.png", handle: "@elias" },
    { icon: "/Twitter.png", handle: "@eliasss" },
  ];
  return (
    <div className="flex-1 p-6 text-white bg-[#282C33] h-full relative overflow-hidden">
      <div className="absolute md:block hidden top-0">
        <img src="/media.png" alt="" />
      </div>
      <div className="flex flex-col justify-center items-center">
        <div className="absolute left-10 bottom-[1/5]">
          <img className="md:block hidden" src="/Dots.png" alt="" />
        </div>
        <div className="absolute right-0 bottom-[1/4] ">
          <img className="md:block hidden" src="/4u.png" alt="" />
        </div>
        <div className="max-w-5xl w-full">
          <div className="text-start">
            <h1 className="font-bold text-2xl">
              <span className="text-[#C778DD]">/</span>Contacts
            </h1>
            <p>Who am i</p>
            <div className="flex flex-wrap justify-between gap-x-10 gap-y-10 mt-10 md:mt-0">
              <div className="max-w-md">
                <p>
                I enjoy working on frontend development — it's something I genuinely find fun. You can contact me anytime!
                </p>
              </div>
              <Border />
            </div>

            <div className="mt-14 flex-col space-y-6 flex">
              <h1 className="text-2xl">
                <span className="text-[#C778DD]">#</span>all-media
              </h1>
              <div className="flex space-x-6  gap-2">
                {socials.map((item, index) => (
                  <div key={index} className="flex items-center ">
                    <img
                      src={item.icon}
                      alt="Icon"
                      className="w-6 h-6 object-contain"
                    />
                    <p>{item.handle}</p>
                  </div>
                ))}
              </div>
            </div>
            <div className="mt-6 text-left">
            <Form />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Contact;
