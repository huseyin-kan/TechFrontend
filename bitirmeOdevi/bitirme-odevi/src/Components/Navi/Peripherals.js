import React from "react";

const Peripherals =({open})=>{
    return (
        <div
          className={
            open
              ? " z-10 w-44 bg-white absolute  left-120 top-20 rounded divide-y divide-gray-100 shadow dark:bg-gray-700/90 " 
              : "hidden"
          }
        >
            
          <ul
            className="py-1 text-sm text-gray-700 dark:text-gray-200 "
          >
            <li>
              <a
                href="/"
                className="block py-2 px-4 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
              >
                Klavye
              </a>
            </li>
            <li>
              <a
                href="/"
                className="block py-2 px-4 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
              >
                Mouse
              </a>
            </li>
            <li>
              <a
                href="/"
                className="block py-2 px-4 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
              >
                Klavye Mouse Set
              </a>
            </li>
          </ul>
        </div>
      );
}

export default Peripherals