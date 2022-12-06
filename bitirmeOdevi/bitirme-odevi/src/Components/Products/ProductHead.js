import React from "react";

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
          <a
            href="/"
            className="block py-2 px-4 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
          >
            Fiyata göre önce yüksek
          </a>
        </li>
        <li>
          <a
            href="/"
            className="block py-2 px-4 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
          >
            Fiyata göre önce düşük
          </a>
        </li>
        <li>
          <a
            href="/"
            className="block py-2 px-4 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
          >
            Tarihe göre önce ilk
          </a>
        </li>
        <li>
          <a
            href="/"
            className="block py-2 px-4 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
          >
            Tarihe göre önce son
          </a>
        </li>
      </ul>
    </div>
  );
};

export default ProductHead;
