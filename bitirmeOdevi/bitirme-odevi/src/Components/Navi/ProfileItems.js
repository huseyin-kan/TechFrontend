import React from "react";
import CloseIcon from "@mui/icons-material/Close";

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
          <a href="/profile">Hesap</a>
        </li>
        <li>
          <a href="/order">Siparişler</a>
        </li>
        <li>
          <a href="/order">Kartlar</a>
        </li>
        <br className=""></br>
        <li className="pt-4  hover:cursor-pointer" onClick={props.signOut}>
          <a href="/" >Çıkış Yap</a>
        </li>
      </ul>
    </div>
  );
};

export default ProfileItems;
