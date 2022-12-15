import React from "react";
import { Link } from "react-router-dom";

const ProductHead = ({active}) => {
  return (
    <div
      className={
        active
          ? " z-10 w-44 bg-white absolute right-24 top-32 rounded divide-y divide-gray-100 shadow dark:bg-gray-700/90"
          : "hidden"
      }
    >
        
      <ul
        className="py-1 text-sm text-gray-700 dark:text-gray-200"
      >
        <li>
          <Link
            href="/"
            className="block py-2 px-4 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
          >
            Fiyata göre önce yüksek
          </Link>
        </li>
        <li>
          <Link
            href="/"
            className="block py-2 px-4 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
          >
            Fiyata göre önce düşük
          </Link>
        </li>
        <li>
          <Link
            href="/"
            className="block py-2 px-4 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
          >
            Tarihe göre önce ilk
          </Link>
        </li>
        <li>
          <Link
            href="/"
            className="block py-2 px-4 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
          >
            Tarihe göre önce son
          </Link>
        </li>
      </ul>
    </div>
  );
};

export default ProductHead;
