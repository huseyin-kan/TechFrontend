import React from "react";

const Filtering = () => {
  return (
    <div>
      <h1 className="text-2xl font-bold ">Filtreleme</h1>
      <div>
        <h2 className="underline my-2">Ram Miktarı</h2>
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
                4GB RAM
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
                8GB RAM
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
                16GB RAM
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
                32GB RAM
              </label>
            </div>
            </li>
        </ul>
      </div>
      
      <div>
        <h2 className="underline my-2">Kapasite</h2>
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
                128GB
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
                256GB
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
                500GB
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
                512GB
              </label>
            </div>
            </li>
        </ul>
      </div>
      
      <div>
        <h2 className="underline my-2">Ekran kartı</h2>
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
                Dahili
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
                1650
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
                3050
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
                3070
              </label>
            </div>
            </li>
        </ul>
      </div>
    </div>
  );
};
export default Filtering;
