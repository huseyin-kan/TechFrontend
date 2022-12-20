import React, { useState,useEffect } from "react";
import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";
import CloseOutlinedIcon from "@mui/icons-material/CloseOutlined";
import DeleteIcon from '@mui/icons-material/Delete';
import { useDispatch, useSelector } from "react-redux/es/exports";
import { removeFromCart } from "../../Store/Actions/cartAction";
import { Link } from "react-router-dom";
import OrderService from "../../Services/orderService";
import OrderDetailService from "../../Services/orderDetailService";
import ProductService from "../../Services/productService";
import moment from "moment";


const Cart = () => {
  const orderService=new OrderService()
  const orderDetailService= new OrderDetailService()
  const productService= new ProductService()
  const {cartItems}=useSelector(state=>state.cart)
  const dispatch = useDispatch();
  const id=localStorage.getItem("customer")
  const [loggedIn,setLoggedIn]=useState(false)
  const handleToCart = (product) => {
    dispatch(removeFromCart(product));
    
  };
  useEffect(() => {
    if(id){
      setLoggedIn(true)
    }  
    console.log(moment().format())
  }, [])
 
  const checkOutCart =(cartItems)=>{
      setTimeout(() => {
        orderService.addOrder({customerId:id})
      }, 1000);
  }
  console.log(loggedIn)
  let total=0;
  cartItems.map((cartItem)=>(total+=(cartItem.product.productPrice)*(cartItem.quantity)))
  return (
    <div className="container absolute top-1/4 left-60 w-2/3 bg-gray-600/90 rounded -z-10">
      <div className="p-4 flex justify-between items-center">
        <h1 className="text-2xl">
          Sepet <ShoppingCartOutlinedIcon />
        </h1>
        <h1 className={loggedIn?"hidden":"text-2xl text-red-700/60 "}>
          Önce giriş Yapmalısınız
        </h1>
        <Link to="/" className="hover:cursor-pointer">
          <CloseOutlinedIcon />
        </Link>
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
                Renk
              </th>
              <th scope="col" className="py-3 px-6">
                Fİyat
              </th>
              <th>

              </th>
            </tr>
          </thead>
          {cartItems.map((cartItem)=>(
          <tbody key={cartItem.product.productId}>
            
                          <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                          <th
                            scope="row"
                            className="py-4 px-6 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                          >
                            {cartItem.product.productBrand} {cartItem.product.productName}
                          </th>
                          <td className="py-4 px-6">{cartItem.quantity}</td>
                          <td className="py-4 px-6">{cartItem.product.productColor}</td>
                          <td className="py-4 px-6">{(cartItem.product.productPrice*cartItem.quantity).toFixed(2)}</td>
                          <td className="hover:cursor-pointer"><button onClick={()=>{handleToCart(cartItem.product)}}><DeleteIcon className="hover:text-red-500"/></button></td>
                        </tr>
                        
            
          </tbody>))}
        </table>
      </div>
      <div className="flex justify-between items-center">
          <label className="ml-2 p-4 uppercase text-xl">Toplam ücret : <span className="text-gray-900 ml-4"> {total.toFixed(2)}₺</span></label>

          <button disabled={!loggedIn} onClick={()=>console.log("tıkladı")}  className={ loggedIn?"rounded border-2 border-yellow-200 bg-yellow-300 py-2 px-6 mr-2 transition hover:bg-transparent duration-300 hover:border-gray-700 hover:cursor-pointer ":"rounded border-2 border-yellow-200 bg-yellow-300/50 py-2 px-6 mr-2  hover:cursor-not-allowed "}>Öde</button>
        
      </div>
    </div>
  );
};

export default Cart;
