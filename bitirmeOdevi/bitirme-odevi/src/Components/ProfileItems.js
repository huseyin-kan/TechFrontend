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
          <Link>Hesap</Link>
        </li>
        <li>
          <Link>Siparişler</Link>
        </li>
        <br className=""></br>
        <li className="pt-4">
          <Link>Çıkış Yap</Link>
        </li>
      </ul>
    </div>
  );
};

export default ProfileItems;
