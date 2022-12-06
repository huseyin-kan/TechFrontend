import React, { useState } from "react";
import CloseOutlinedIcon from "@mui/icons-material/CloseOutlined";
import { Link } from "@mui/material";
import NavigateNextIcon from "@mui/icons-material/NavigateNext";
import BorderColorIcon from "@mui/icons-material/BorderColor";

const Profile = () => {
  const [active, setActive] = useState(false);

  const isActive = () => {
    setActive(!active);
    console.log(active);
  };
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
            <span className={active ? "text-gray-300" : "hidden"}>Hüseyin</span>{" "}
            <input type="text" className={active ? "hidden":"w-3/4 rounded shadow text-white bg-gray-400 p-2 ml-4"} placeholder="Hüseyin"></input>
          </label>
        </div>
        <div className="relative ">
          <button onClick={isActive} className="absolute right-2 top-2">
            <BorderColorIcon className="transition hover:text-yellow-600 duration-300" />
          </button>
        </div>
        <div className="bg-gray-500/30 rounded shadow p-4 transition hover:bg-gray-700 duration-200 ">
          <label className="text-md">
            Soyad :{" "}
            <span className={active ? "text-gray-300" : "hidden"}>Kan</span>
          </label>
          <input type="text" className={active ? "hidden":"w-3/4 rounded shadow text-white bg-gray-400 p-2 ml-4"} placeholder="Kan"></input>
        </div>
        <div className="bg-gray-500/30 rounded shadow p-4 transition hover:bg-gray-700 duration-200 ">
          <label className="text-md">
            Telefon :{" "}
            <span className={active ? "text-gray-300" : "hidden"}>
              05302323232
            </span>
          </label>
          <input type="text" className={active ? "hidden":"w-3/4 rounded shadow text-white bg-gray-400 p-2 ml-4"} placeholder="05302323232"></input>
        </div>
        <div className="bg-gray-500/30 rounded shadow p-4 transition hover:bg-gray-700 duration-200 ">
          <label className="text-md">
            Adres :{" "}
            <span className={active ? "text-gray-300" : "hidden"}>
              Güzelyalı mah 19051 sk no 22 kat 3 Çukurova/Adana
            </span>
            <input type="text" className={active ? "hidden":"w-3/4 rounded shadow text-white bg-gray-400 p-2 ml-4"} placeholder="Güzelyalı mah 19051 sk no 22 kat 3 Çukurova/Adana"></input>
          </label>
        </div>
        <div className="bg-gray-500/30 rounded shadow p-4 transition flex justify-center items-center hover:bg-gray-700 duration-200 hover:cursor-pointer">
          <label className="text-md">Siparişler : </label>
          <Link to="/order">
            <NavigateNextIcon />
          </Link>{" "}
        </div>
        <div className={ active ?"hidden":"col-span-2 flex justify-between p-4 items-center shadow"}><button  className="p-4 flex items-center justify-center rounded bg-green-700 transition hover:bg-green-600 duration-300">Düzenle</button> <button className="p-4 flex items-center justify-center rounded bg-red-700 transition hover:bg-red-600 duration-300">Hesabı Sil</button></div>
      </div>
      <button className="w-full h-12 px-6 text-indigo-100 my-4 transition-colors duration-150 bg-orange-400 rounded-lg focus:shadow-outline hover:bg-red-800">
        Kart ekle
      </button>
    </div>
  );
};
export default Profile;
