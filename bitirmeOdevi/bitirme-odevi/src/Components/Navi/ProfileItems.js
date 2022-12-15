import React from "react";
import CloseIcon from "@mui/icons-material/Close";
import { Link } from "react-router-dom";

const ProfileItems = (props) => {
  return (
    <div>
      <ul
        className={
          props.isOpen
            ? "flex flex-col items-center fixed mt-9 justify-center right-0 w-64 h-64 gap-y-4 bg-gray-500/60 rounded-md shadow-gray-800/50 shadow-xl"
            : "hidden"
        }
      >
        <CloseIcon onClick={props.showProfile} className="absolute inset-2" />
        <li>
          <Link to={"/profile"}>Hesap</Link>
        </li>
        <li>
          <Link to={"/order"}>Siparişler</Link>
        </li>
        <li>
          <Link to={"/order"}>Kartlar</Link>
        </li>
        <br className=""></br>
        <li className="pt-4  hover:cursor-pointer" onClick={props.signOut}>
          <Link to={"/"} >Çıkış Yap</Link>
        </li>
      </ul>
    </div>
  );
};

export default ProfileItems;
