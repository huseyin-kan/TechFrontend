import React from "react";
import { Link } from "react-router-dom";
import CloseIcon from "@mui/icons-material/Close";

const ProfileItems = ({ isOpen, showProfile }) => {
  return (
    <div>
      <ul
        className={
          isOpen
            ? "flex flex-col items-center fixed mt-9 justify-center right-0 w-64 h-64 gap-y-4 bg-gray-500/60 rounded-md shadow-gray-800/50 shadow-xl"
            : "hidden"
        }
      >
        <CloseIcon onClick={showProfile} className="absolute inset-2" />
        <li>
          <a href="/profile">Hesap</a>
        </li>
        <li>
          <a href="/order">Siparişler</a>
        </li>
        <br className=""></br>
        <li className="pt-4">
          <a href="/login">Giriş Yap</a>
        </li>
      </ul>
    </div>
  );
};

export default ProfileItems;
