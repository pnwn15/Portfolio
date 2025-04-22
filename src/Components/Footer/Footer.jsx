import React from "react";

function Footer() {
  const links = [
    { name: "About", href: "#" },
    { name: "Privacy Policy", href: "#" },
    { name: "Licensing", href: "#" },
    { name: "Contact", href: "#" },
  ];
  return (
    <footer class="bg-[#282C33] shadow-sm border-t-1 border-white dark:bg-gray-900">
      <div class="w-full max-w-screen-lg flex flex-col gap-4 mx-auto p-4 md:py-8">
        <div className="sm:flex sm:items-center sm:justify-between">
          <div className="flex flex-col">
            <div>
          <a
            href="https://flowbite.com/"
            className="flex items-center mb-4 sm:mb-0 space-x-3 rtl:space-x-reverse"
          >
            <img
              src="/Logo.png"
              className="h-8"
              alt="Flowbite Logo"
            />
            <span className="self-center text-2xl font-semibold whitespace-nowrap text-white">
              Nem
            </span>
          </a>
          </div>
          <div className="text-white mt-3">
            <p>front-end developer and backend developer</p>
          </div>
          </div>
          <ul className="flex flex-wrap items-center mb-6 text-sm font-medium text-white sm:mb-0 dark:text-gray-400">
            {links.map((link, index) => (
              <li key={index}>
                <a
                  href={link.href}
                  className={`hover:underline ${
                    index !== links.length - 1 ? "me-4 md:me-6" : ""
                  }`}
                >
                  {link.name}
                </a>
              </li>
            ))}
          </ul>
        </div>
        <span class="block text-sm mt-4  text-white sm:text-center dark:text-gray-400">
        © Copyright 2022. Made by Elias
        </span>
      </div>
    </footer>
  );
}

export default Footer;
