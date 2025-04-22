import React from "react";
import {
  ArrowRightOutlined,
  DiscordOutlined,
  MailOutlined,
} from "@ant-design/icons";
function Border() {
  const contacts = [
    { icon: <DiscordOutlined />, text: "nemo09128" },
    { icon: <MailOutlined />, text: "panawatsrimuang@gmail.com" },
  ];
  return (
    <div className="flex gap-10">
      <div className="flex flex-col border h-20 p-3">
        <h3>Tel</h3>
        <p>0613524541</p>
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
  );
}

export default Border;
