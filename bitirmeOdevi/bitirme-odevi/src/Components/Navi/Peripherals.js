import React from "react";
import { Link } from "react-router-dom";

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
              <Link
              to={"/8"}
              reloadDocument
                className="block py-2 px-4 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
              >
                Mouse Padler
              </Link>
            </li>
            <li>
              <Link
              to={"/5"}
              reloadDocument
                className="block py-2 px-4 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
              >
                Klavye
              </Link>
            </li>
            <li>
              <Link
                reloadDocument
                to={"/7"}
                className="block py-2 px-4 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
              >
                Mouse
              </Link>
            </li>
            <li>
              <Link
                reloadDocument
                to={"/6"}
                className="block py-2 px-4 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
              >
                Klavye Mouse Set
              </Link>
            </li>
          </ul>
        </div>
      );
}

export default Peripherals