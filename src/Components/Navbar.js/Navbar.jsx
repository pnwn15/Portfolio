import React, { useState } from "react";

function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const navItems = [
    { name: "Home", href: "/" },
    { name: "Work", href: "/project" },
    { name: "About-me", href: "/aboutme" },
    { name: "Contact", href: "/contact" },
  ];

  return (
    <nav className="p-2  bg-[#282C33]">
      <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
        <div className="flex gap-3">
          <img
            className="w-[26px] h-[26px] items-center justify-center my-auto"
            src="/Logo.png"
            alt=""
          />
          <a
            href="https://flowbite.com/"
            className="flex items-center space-x-3 rtl:space-x-reverse"
          >
            <span className="self-center text-[26px] font-semibold whitespace-nowrap text-white">
              Nem
            </span>
          </a>
        </div>

        {/* Hamburger Button */}
        <button
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          type="button"
          className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
          aria-controls="navbar-default"
          aria-expanded={isMenuOpen}
        >
          <span className="sr-only">Open main menu</span>
          <img
            src="/hamburger.png" // <-- ใส่ path รูปภาพของคุณ
            alt="Menu"
            className="w-8 h-8 object-contain"
          />
        </button>
        <div
          className={`${
            isMenuOpen ? "block" : "hidden"
          } w-full md:block md:w-auto`}
          id="navbar-default"
        >
          <ul className="font-medium flex flex-col p-4 md:p-0 mt-4 rounded-lg md:flex-row md:space-x-8 rtl:space-x-reverse md:mt-0 md:border-0">
            {navItems.map((item, index) => (
              <li key={index}>
                <a
                  href={item.href}
                  className={`block py-2 px-3 rounded-sm md:p-0 
          ${
            item.name === "Home"
              ? "text-white font-bold md:bg-transparent md:text-orange-400 dark:text-white md:dark:text-orange-400"
              : "text-white hover:bg-gray-100 border-b-2 md:border-b-0 border-white md:hover:bg-transparent md:hover:text-orange-400 dark:text-white md:dark:hover:text-orange-400 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent"
          }`}
                  aria-current={item.name === "Home" ? "page" : undefined}
                >
                  <span className="text-[#C778DD]">#</span>
                  {item.name}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
