import React, { useState,useEffect } from "react";
import CloseOutlinedIcon from "@mui/icons-material/CloseOutlined";
import { Link } from "react-router-dom";
import NavigateNextIcon from "@mui/icons-material/NavigateNext";
import BorderColorIcon from "@mui/icons-material/BorderColor";
import UserService from "../../Services/userService";

const Profile = () => {
  const [user,setUser]=useState({})
  

  useEffect(() => {
    let id=localStorage.getItem("customer")
    let userService= new UserService()
    userService.getUserById(id).then((result)=> setUser(result.data.data))
      
  }, [])
  

  return (
    <div className="container h-full mx-auto pt-16 w-2/3 bg-gray-600/90">
      <div className="p-4 flex justify-between items-center">
        <h1 className="text-2xl ">Kullanıcı Bilgileri</h1>
        <Link to="/" className="hover:cursor-pointer ">
          <CloseOutlinedIcon />
        </Link>
      </div>
      <div className="bg-gray-700/90 rounded mx-2 grid grid-cols-2 gap-6 p-8 shadow my-12">
        <div className="bg-gray-500/30 rounded shadow p-4 transition hover:bg-gray-700 duration-200 ">
          <label className="text-md">
            Ad :{" "}
            <span className="text-gray-300">{user.userName}</span>{" "}
            </label>
        </div>
        <div className="bg-gray-500/30 rounded shadow p-4 transition hover:bg-gray-700 duration-200  ">
        <label className="text-md">
            Mail :{" "}
            <span className="text-gray-300" >{user.userEmail}</span>
          </label>
        </div>
        <div className="bg-gray-500/30 rounded shadow p-4 transition hover:bg-gray-700 duration-200 ">
          <label className="text-md">
            Soyad :{" "}
            <span className="text-gray-300">{user.userSurName}</span>
          </label>
        </div>
        <div className="bg-gray-500/30 rounded shadow p-4 transition hover:bg-gray-700 duration-200 ">
          <label className="text-md">
            Telefon :{" "}
            <span className="text-gray-300">
              {user.userPhone}
            </span>
          </label>
        </div>
        <div className="bg-gray-500/30 rounded shadow p-4 transition hover:bg-gray-700 duration-200 ">
          <label className="text-md">
            Adres :{" "}
            <span className="text-gray-300" >
              {user.userAddress}
            </span>
          </label>
        </div>
        <div className="bg-gray-500/30 rounded shadow p-4 transition flex justify-center items-center hover:bg-gray-700 duration-200 hover:cursor-pointer">
          <label className="text-md">Siparişler : </label>
          <Link to="/order">
            <NavigateNextIcon />
          </Link>{" "}
        </div>
       </div>
      <div className="w-full flex justify-between items-center px-6">
      <button className=" w-1/3 h-12 px-6 text-indigo-100 my-4 transition-colors duration-150 bg-blue-800 rounded-lg focus:shadow-outline hover:bg-blue-400">
        Kart ekle
      </button>
      <Link to={`/updateProfile/${user.userId}`} className=" flex justify-center items-center w-1/3 h-12 px-6 text-indigo-100 my-4 transition-colors duration-150 bg-orange-800 rounded-lg focus:shadow-outline hover:bg-orange-400">
        Hesabı Düzenle
      </Link>
      </div>

    </div>
  );
};
export default Profile;
