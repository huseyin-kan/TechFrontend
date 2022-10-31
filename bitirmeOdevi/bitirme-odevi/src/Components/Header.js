import React, { Component } from "react";
import { Link } from "react-router-dom";
import MenuItems from "./MenuItems";
import MenuIcon from '@mui/icons-material/Menu';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';

export default class Header extends Component {
  render() {
    return (
      <div className="fixed w-full text-white justify-between p-3 items-center flex bg-gray-700">
        <div className=" font-bold text-center uppercase">
          <h1>
            e<span className="">Commerce</span>
          </h1>
        </div>
        <nav>
          <ul className="hidden md:flex gap-8 p-4 bg-gray-700/20">
            <li>
              <Link>Laptop</Link>
            </li>
            <li>
              <Link>Televizyon</Link>
            </li>
            <li>
              <Link>Kulaklık</Link>
            </li>
            <li>
              <Link>Çevre Birimleri</Link>
            </li>
            <li>
              <Link>Telefon</Link>
            </li>
            <li>
              <Link>Konsol</Link>
            </li>
          </ul>
          {/* <MenuItems /> */}
        </nav>
        <div className="flex items-center">
          <form className="max-w-sm px-4">
            <div className="relative ">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="absolute top-0 bottom-0 w-6 h-6 my-auto text-gray-400 left-3"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                />
              </svg>
              <input
                type="text"
                placeholder="Search"
                className="w-full py-3 pl-12 pr-4 text-white-500 border rounded-md outline-none bg-transparent focus:bg-transparent border-gray-600"
              />
            </div>
          </form>
          <div className="px-3">
          <MenuIcon/>
          </div>
          <div className="">
            <AccountCircleIcon />
          </div>
        </div>
      </div>
    );
  }
}
