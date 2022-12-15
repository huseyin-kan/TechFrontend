import React from "react";
import CloseIcon from "@mui/icons-material/Close";
import { Link } from "react-router-dom";

const SignOutProfileItems = (props) => {
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
        <li onClick={props.signIn} >
          <Link to={"/login"}>Giriş Yap</Link>
        </li>
        <br className=""></br>
        <li className="pt-4">
          <Link to={"/sign"}><span className="text-gray-700 underline decoration-gray-700 underline-offset-4 lowercase">Hesabın yok mu?</span> Kayıt ol</Link>
        </li>
      </ul>
    </div>
  );
};

export default SignOutProfileItems;