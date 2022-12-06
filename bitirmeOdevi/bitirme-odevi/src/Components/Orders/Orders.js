import React from 'react'
import CloseOutlinedIcon from "@mui/icons-material/CloseOutlined";
import { Link } from "@mui/material";

const Orders =()=>{
    return (
        <div className="container h-full mx-auto pt-16 p-8 w-2/3 bg-gray-600/90">
        <div className="p-4 flex justify-between items-center">
          <h1 className="text-2xl">
            Önceki Siparişler
          </h1>
          <Link to="/" className="hover:cursor-pointer">
            <CloseOutlinedIcon />
          </Link>
        </div>
        <div className="overflow-x-auto overflow-auto relative h-96 my-12">
          <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
            <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
              <tr>
                <th scope="col" className="py-3 px-6">
                  Ürünler
                </th>
                <th scope="col" className="py-3 px-6">
                  Adet
                </th>
                <th scope="col" className="py-3 px-6">
                  Ödenen Miktar
                </th>
                <th scope="col" className="py-3 px-6">
                  Durum
                </th>

              </tr>
            </thead>
            <tbody>
              <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                <th
                  scope="row"
                  className="py-4 px-6 font-medium text-gray-900 whitespace-nowrap  dark:text-white"
                >
                  Apple MacBook Pro 17"<br/>
                  Magic Mouse 2<br/>
                  Microsoft Surface Pro<br/>
                </th>
                <td className="py-4 px-6">3</td>
                <td className="py-4 px-6">42500₺</td>
                <td className="py-4 px-6">Kargoda</td>
              </tr>
              <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
              <th
                  scope="row"
                  className="py-4 px-6 font-medium text-gray-900 whitespace-nowrap  dark:text-white"
                >
                  Apple MacBook Pro 17"<br/>
                  Magic Mouse 2<br/>
                  Microsoft Surface Pro<br/>
                </th>
                <td className="py-4 px-6">3</td>
                <td className="py-4 px-6">42500₺</td>
                <td className="py-4 px-6">Kargoda</td>
              </tr>
              <tr className="bg-white dark:bg-gray-800">
              <th
                  scope="row"
                  className="py-4 px-6 font-medium text-gray-900 whitespace-nowrap  dark:text-white"
                >
                  Apple MacBook Pro 17"<br/>
                  Magic Mouse 2<br/>
                  Microsoft Surface Pro<br/>
                </th>
                <td className="py-4 px-6">3</td>
                <td className="py-4 px-6">42500₺</td>
                <td className="py-4 px-6">Kargoda</td>
              </tr>
              <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                <th
                  scope="row"
                  className="py-4 px-6 font-medium text-gray-900 whitespace-nowrap  dark:text-white"
                >
                  Apple MacBook Pro 17"<br/>
                  Magic Mouse 2<br/>
                  Microsoft Surface Pro<br/>
                </th>
                <td className="py-4 px-6">3</td>
                <td className="py-4 px-6">42500₺</td>
                <td className="py-4 px-6">Kargoda</td>
              </tr>
              <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                <th
                  scope="row"
                  className="py-4 px-6 font-medium text-gray-900 whitespace-nowrap  dark:text-white"
                >
                  Apple MacBook Pro 17"<br/>
                  Magic Mouse 2<br/>
                  Microsoft Surface Pro<br/>
                </th>
                <td className="py-4 px-6">3</td>
                <td className="py-4 px-6">42500₺</td>
                <td className="py-4 px-6">Kargoda</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    )
  
}
export default Orders
