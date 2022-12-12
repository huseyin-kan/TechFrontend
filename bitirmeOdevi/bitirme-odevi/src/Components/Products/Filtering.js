import React from "react";

const Filtering = () => {
  return (
    <div>
      <h1 className="text-2xl font-bold ">Filtreleme</h1>
      <div>
        <h2 className="underline my-2">Marka</h2>
        <ul className="py-4 bg-gray-700/70 rounded px-6">
          <li className="py-1">
            <div className="flex items-center">
              <input
                id="default-checkbox"
                type="checkbox"
                value=""
                className="w-4 h-4 text-blue-600 bg-gray-100 rounded border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
              />
              <label
                className="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300"
              >
                Apple
              </label>
            </div>
          </li>
          <li className="py-1">
            <div className="flex items-center">
              <input
                id="checked-checkbox"
                type="checkbox"
                value=""
                className="w-4 h-4 text-blue-600 bg-gray-100 rounded border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
              />
              <label
                className="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300"
              >
                Logitech
              </label>
            </div></li>
          <li className="py-1">
            <div className="flex items-center">
              <input
                id="checked-checkbox"
                type="checkbox"
                value=""
                className="w-4 h-4 text-blue-600 bg-gray-100 rounded border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
              />
              <label
                className="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300"
              >
                Asus
              </label>
            </div></li>
          <li className="py-1">
            <div className="flex items-center">
              <input
                id="checked-checkbox"
                type="checkbox"
                value=""
                className="w-4 h-4 text-blue-600 bg-gray-100 rounded border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
              />
              <label
                className="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300"
              >
                Diğer
              </label>
            </div>
            </li>
        </ul>
      </div>
      
      <div>
        <h2 className="underline my-2">Renk</h2>
        <ul className="py-4 bg-gray-700/70 rounded px-6">
          <li className="py-1">
            <div className="flex items-center">
              <input
                id="default-checkbox"
                type="checkbox"
                value=""
                className="w-4 h-4 text-blue-600 bg-gray-100 rounded border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
              />
              <label
                className="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300"
              >
                Siyah
              </label>
            </div>
          </li>
          <li className="py-1">
            <div className="flex items-center">
              <input
                id="checked-checkbox"
                type="checkbox"
                value=""
                className="w-4 h-4 text-blue-600 bg-gray-100 rounded border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
              />
              <label
                className="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300"
              >
                Beyaz
              </label>
            </div></li>
          <li className="py-1">
            <div className="flex items-center">
              <input
                id="checked-checkbox"
                type="checkbox"
                value=""
                className="w-4 h-4 text-blue-600 bg-gray-100 rounded border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
              />
              <label
                className="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300"
              >
                Gri
              </label>
            </div></li>
          <li className="py-1">
            <div className="flex items-center">
              <input
                id="checked-checkbox"
                type="checkbox"
                value=""
                className="w-4 h-4 text-blue-600 bg-gray-100 rounded border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
              />
              <label
                className="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300"
              >
                Diğer
              </label>
            </div>
            </li>
        </ul>
      </div>
      
      <div>
        <h2 className="underline my-2">Fiyat aralığı</h2>
        <ul className="py-4 bg-gray-700/70 rounded px-6">
          <li className="py-1">
            <div className="flex items-center">
              <input
                id="default-checkbox"
                type="checkbox"
                value=""
                className="w-4 h-4 text-blue-600 bg-gray-100 rounded border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
              />
              <label
                className="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300"
              >
                0-5.000
              </label>
            </div>
          </li>
          <li className="py-1">
            <div className="flex items-center">
              <input
                id="checked-checkbox"
                type="checkbox"
                value=""
                className="w-4 h-4 text-blue-600 bg-gray-100 rounded border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
              />
              <label
                className="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300"
              >
                5.001-10.000
              </label>
            </div></li>
          <li className="py-1">
            <div className="flex items-center">
              <input
                id="checked-checkbox"
                type="checkbox"
                value=""
                className="w-4 h-4 text-blue-600 bg-gray-100 rounded border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
              />
              <label
                className="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300"
              >
                10.001-20.000
              </label>
            </div></li>
          <li className="py-1">
            <div className="flex items-center">
              <input
                id="checked-checkbox"
                type="checkbox"
                value=""
                className="w-4 h-4 text-blue-600 bg-gray-100 rounded border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
              />
              <label
                className="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300"
              >
                20.000+
              </label>
            </div>
            </li>
        </ul>
      </div>
    </div>
  );
};
export default Filtering;
