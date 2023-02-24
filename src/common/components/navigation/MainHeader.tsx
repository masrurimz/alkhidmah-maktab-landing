import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";
import { useMaktabHelpStore } from "~/features/maktab/MaktabHelp/maktabHelp.store";
import { useMaktabMapsStore } from "~/features/maktab/MaktabMaps/maktabMaps.store";
import Logo from "../../../assets/images/logo.webp";

function MainHeader() {
  const openMaps = useMaktabMapsStore((state) => state.showModal);
  const showHelp = useMaktabHelpStore((state) => state.showModal);

  const [isMenuVisible, setIsMenuVisible] = useState(false);

  return (
    <header>
      <nav className="border-gray-200 bg-white px-4 py-2.5 dark:bg-gray-800 lg:px-6">
        <div className="mx-auto flex max-w-screen-xl flex-wrap items-center justify-between">
          <Link href="/" className="flex items-center">
            <Image
              src={Logo}
              className="mr-3 h-9 w-9"
              alt="Flowbite Logo"
              sizes="24"
            />
            <span className="self-center whitespace-nowrap text-xl font-semibold dark:text-white">
              Maktab
            </span>
          </Link>
          <div className="flex items-center lg:order-2">
            <button
              onClick={openMaps}
              className="mr-2 rounded-lg bg-primary-700 px-4 py-2 text-sm font-medium text-white hover:bg-primary-800 focus:outline-none focus:ring-4 focus:ring-primary-300 dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800 lg:px-5 lg:py-2.5"
            >
              Peta
            </button>
            <button
              onClick={() => setIsMenuVisible((v) => !v)}
              data-collapse-toggle="mobile-menu-2"
              type="button"
              className="ml-1 inline-flex items-center rounded-lg p-2 text-sm text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600 lg:hidden"
              aria-controls="mobile-menu-2"
              aria-expanded="false"
            >
              <span className="sr-only">Open main menu</span>
              <svg
                className="h-6 w-6"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fill-rule="evenodd"
                  d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
                  clip-rule="evenodd"
                ></path>
              </svg>
              <svg
                className="hidden h-6 w-6"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fill-rule="evenodd"
                  d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                  clip-rule="evenodd"
                ></path>
              </svg>
            </button>
          </div>
          <div
            id="mobile-menu-2"
            className={`${
              isMenuVisible ? "" : "hidden"
            } w-full items-center justify-between lg:order-1 lg:flex lg:w-auto`}
          >
            <ul className="mt-4 flex flex-col font-medium lg:mt-0 lg:flex-row lg:space-x-8">
              <li>
                <button
                  onClick={showHelp}
                  className="block border-b border-gray-100 py-2 pr-4 pl-3 text-gray-700 hover:bg-gray-50 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white lg:border-0 lg:p-0 lg:hover:bg-transparent lg:hover:text-primary-700 lg:dark:hover:bg-transparent lg:dark:hover:text-white"
                >
                  Hubungi Koordinator Sektor
                </button>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </header>
  );
}

export default MainHeader;
