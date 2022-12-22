import React, { useState,useEffect } from 'react'
import CloseOutlinedIcon from "@mui/icons-material/CloseOutlined";
import { Link } from "@mui/material";
import OrderService from '../../Services/orderService';
import moment from 'moment';
import "moment/locale/tr"

const Orders =()=>{
  const [orders,setOrders]=useState([])
  useEffect(() => {
    let orderService= new OrderService()

    orderService.getOrdeByCustomerId(localStorage.getItem("customer")).then(response=>setOrders(response.data.data))
  

  }, [])
  

    return (
        <div className="container h-screen mx-auto pt-16 p-8 w-2/3 bg-gray-600/90">
        <div className="p-4 flex justify-between items-center">
          <h1 className="text-2xl">
           Siparişler
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
                  Sipariş Zamanı
                </th>
                <th scope="col" className="py-3 px-6">
                  Teslim Zamanı-Tahmini 
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
              {orders.map((order)=>(
              <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-700 hover:cursor-pointer">
                <th
                  scope="row"
                  className="py-4 px-6 font-medium text-gray-900 whitespace-nowrap  dark:text-white"
                >
                  {moment(order.orderDate).locale("tr").calendar()}
                </th>
                <td className="py-4 px-6">{moment(order.requiredDate).locale("tr").calendar()}</td>
                <td className="py-4 px-6">{order.orderTotal}₺</td>
                <td className="py-4 px-6">{moment().isAfter(moment(order.requiredDate))?"Teslim edildi":"Kargoda"}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    )
  
}
export default Orders
