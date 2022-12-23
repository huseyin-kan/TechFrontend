import React, { useState,useEffect } from 'react'
import { Link ,useParams} from "react-router-dom";
import CloseOutlinedIcon from "@mui/icons-material/CloseOutlined";
import ProductService from '../../Services/productService';

const OrderDetails = ()=>{
    let {id}=useParams()
    const [orderDetails,setOrderDetails]=useState([])

    useEffect(() => {
    let productService= new ProductService()

    productService.getProductDetailsByOrderId(id).then(response=>setOrderDetails(response.data))

    }, [])
    

    return(
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
                  Ürün Adı
                </th>
                <th scope="col" className="py-3 px-6">
                 Ürün Miktarı
                </th>
                <th scope="col" className="py-3 px-6">
                  Ürün Rengi
                </th>
                <th scope="col" className="py-3 px-6">
                  Ürün Fiyatı
                </th>
              </tr>
            </thead>
            <tbody>
                {orderDetails.map((order)=>(
                <tr key={order.orderDetailsId}
                className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-700 hover:cursor-pointer">
                <th
                  scope="row"
                  className="py-4 px-6 font-medium text-gray-900 whitespace-nowrap  dark:text-white"
                >{order.productBrand}-{order.productName}
                </th>
                <td className="py-4 px-6">{order.quantity}</td>
                <td className="py-4 px-6">{order.productColor}</td>
                <td className="py-4 px-6">{order.productPrice.toFixed(2)}₺</td>
                </tr>  
               ))}                
            </tbody>
            </table>
            </div>
        </div>
    )
}

export default OrderDetails;