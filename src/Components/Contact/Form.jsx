import React from "react";

function Form() {
  const supports = [
    {
      icon: (
        <svg
          className="w-5 h-5 text-gray-400"
          fill="currentColor"
          viewBox="0 0 24 24"
        >
          <path d="M2 4a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2v3H2V4zm0 5h20v11a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V9zm4 4v2h2v-2H6zm6 0v2h2v-2h-2z" />
        </svg>
      ),
      value: "4149500120690030",
    },
    {
      icon: (
        <svg
          className="w-5 h-5 text-gray-400"
          fill="currentColor"
          viewBox="0 0 24 24"
        >
          <path d="M12 0C5.373 0 0 5.373 0 12c0 4.991 3.053 9.242 7.438 11.047-.102-.941-.198-2.385.04-3.416.215-.968 1.39-6.17 1.39-6.17s-.354-.709-.354-1.757c0-1.646.955-2.876 2.145-2.876 1.012 0 1.5.76 1.5 1.67 0 1.017-.647 2.538-.981 3.951-.28 1.18.594 2.144 1.76 2.144 2.112 0 3.733-2.224 3.733-5.437 0-2.84-2.04-4.832-4.955-4.832-3.378 0-5.363 2.531-5.363 5.146 0 1.016.392 2.106.881 2.697a.354.354 0 0 1 .082.339c-.09.375-.294 1.18-.333 1.343-.05.207-.164.252-.379.152-1.414-.657-2.293-2.713-2.293-4.364 0-3.554 2.584-6.819 7.45-6.819 3.91 0 6.953 2.79 6.953 6.525 0 3.888-2.448 7.027-5.852 7.027-1.142 0-2.215-.593-2.58-1.295l-.703 2.678c-.254.968-.941 2.183-1.403 2.925C10.48 23.857 11.23 24 12 24c6.627 0 12-5.373 12-12S18.627 0 12 0z" />
        </svg>
      ),
      value: "3E8ociqZa9mZUSwGdSmAEMAoAxBK3FNDcd",
    },
  ];

  return (
    <div className="flex justify-between flex-wrap space-y-4">
      <form className="max-w-xl  text-white ">
        <div className="flex gap-4 mb-4">
          <input
            type="text"
            placeholder="Name"
            className="flex-1 border border-blue-400 bg-transparent p-2 outline-none"
          />
          <input
            type="email"
            placeholder="Email"
            className="flex-1 border border-blue-400 bg-transparent p-2 outline-none"
          />
        </div>
        <input
          type="text"
          placeholder="Title"
          className="w-full mb-4 border border-blue-400 bg-transparent p-2 outline-none"
        />
        <textarea
          rows="5"
          placeholder="Message"
          className="w-full mb-4 border border-blue-400 bg-transparent p-2 outline-none resize-none"
        ></textarea>
        <button
          type="submit"
          className="border border-purple-400 px-4 py-2 hover:bg-purple-500 hover:text-white transition-all"
        >
          Send
        </button>
      </form>
      <div className="border-white text-gray-300 p-4 border h-30 w-fit">
        <p className="text-white font-mono mb-3">Support me here</p>
        {supports.map((item, index) => (
          <div
            key={index}
            className="flex items-center space-x-2 mb-2 last:mb-0"
          >
            {item.icon}
            <span className="font-mono text-sm">{item.value}</span>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Form;
