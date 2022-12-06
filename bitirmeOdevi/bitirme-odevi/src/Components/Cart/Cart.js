import React from "react";
import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";
import CloseOutlinedIcon from "@mui/icons-material/CloseOutlined";
import { Link } from "@mui/material";
import DeleteIcon from '@mui/icons-material/Delete';

const Cart = () => {
  return (
    <div className="container h-full mx-auto pt-16 w-2/3 bg-gray-600/90">
      <div className="p-4 flex justify-between items-center">
        <h1 className="text-2xl">
          Sepet <ShoppingCartOutlinedIcon />
        </h1>
        <a href="/"><CloseOutlinedIcon /></a>
        {/* <Link to="/" className="hover:cursor-pointer">
          
        </Link> */}
      </div>
      <div className="overflow-x-auto relative my-12">
        <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
          <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
            <tr>
              <th scope="col" className="py-3 px-6">
                İsİm
              </th>
              <th scope="col" className="py-3 px-6">
                Adet
              </th>
              <th scope="col" className="py-3 px-6">
                Kategorİ
              </th>
              <th scope="col" className="py-3 px-6">
                Fİyat
              </th>
              <th>

              </th>
            </tr>
          </thead>
          <tbody>
            <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
              <th
                scope="row"
                className="py-4 px-6 font-medium text-gray-900 whitespace-nowrap dark:text-white"
              >
                Apple MacBook Pro 17"
              </th>
              <td className="py-4 px-6">1</td>
              <td className="py-4 px-6">Laptop</td>
              <td className="py-4 px-6">20000₺</td>
              <td className="hover:cursor-pointer"><DeleteIcon className="hover:text-red-500"/></td>
            </tr>
            <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
              <th
                scope="row"
                className="py-4 px-6 font-medium text-gray-900 whitespace-nowrap dark:text-white"
              >
                Microsoft Surface Pro
              </th>
              <td className="py-4 px-6">1</td>
              <td className="py-4 px-6">Laptop</td>
              <td className="py-4 px-6">20000₺</td>
              <td className="hover:cursor-pointer"><DeleteIcon className="hover:text-red-500"/></td>
            </tr>
            <tr className="bg-white dark:bg-gray-800">
              <th
                scope="row"
                className="py-4 px-6 font-medium text-gray-900 whitespace-nowrap dark:text-white"
              >
                Magic Mouse 2
              </th>
              <td className="py-4 px-6">1</td>
              <td className="py-4 px-6">Çevre Birimleri</td>
              <td className="py-4 px-6">2500₺</td>
              <td className="hover:cursor-pointer"><DeleteIcon className="hover:text-red-500"/></td>
            </tr>
          </tbody>
        </table>
      </div>
      <div className="flex justify-between items-center">
          <label className="ml-2 p-4 uppercase text-xl">Toplam ücret : <span className="text-gray-900 ml-4"> 42500₺</span></label>

          <button className="rounded border-2 border-yellow-200 bg-yellow-300 py-2 px-6 mr-2 transition hover:bg-transparent duration-300 hover:border-gray-700 hover:cursor-pointer ">Öde</button>
        
      </div>
    </div>
  );
};

export default Cart;
