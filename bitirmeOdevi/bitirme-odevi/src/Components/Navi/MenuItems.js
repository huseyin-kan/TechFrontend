import React from "react";
import { Link } from "react-router-dom";
import CloseIcon from "@mui/icons-material/Close";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import { useState } from "react";
import Peripherals from "./Peripherals";



const MenuItems = ({ showMenu, active }) => {
  const [open,setOpen]=useState(false);

  const showPeripheral = ()=>{
  setOpen(!open)
}
  return (
    <div>
      <ul
        className={
          active
            ? "flex flex-col items-center fixed inset-0 justify-center left-1/2 gap-8 bg-gray-700/40  md:hidden"
            : "hidden"
        }
      >
        <CloseIcon onClick={showMenu} />
        <li>
          <Link>Laptop</Link>
        </li>
        <li>
          <Link>Televizyon</Link>
        </li>
        <li>
          <Link>Kulaklık</Link>
        </li>
        <li>
          <Link>
            Çevre Birimleri
            <button
              onClick={showPeripheral}
            >
              <KeyboardArrowDownIcon />
            </button>
            <Peripherals showPeripherals={showPeripheral} open={open}/>
          </Link>

        </li>
        <li>
          <Link>Telefon</Link>
        </li>
        <li>
          <Link>Konsol</Link>
        </li>
      </ul>
    </div>
  );
};

export default MenuItems;
