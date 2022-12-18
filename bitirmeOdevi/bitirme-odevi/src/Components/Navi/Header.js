import React, {  useState,useEffect  } from "react";
import { Link,  useNavigate} from "react-router-dom";
import MenuItems from "./MenuItems";
import MenuIcon from '@mui/icons-material/Menu';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import ProfileItems from "./ProfileItems";
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import Peripherals from "./Peripherals";
import SignOutProfileItems from "./SignOutProfileItems";
import { useDispatch, useSelector } from "react-redux/es/exports";
import {searchItem} from "../../Store/Actions/searchAction"


 const Header =()=> {
  const {cartItems}=useSelector(state=>state.cart)
  const [open,setOpen]=useState(false);
  const dispatch=useDispatch()
  const[search,setSearch]=useState("")

  const submitHandler =(event)=>{
    event.preventDefault()

      dispatch(searchItem(search))    
  }
  const [isAdmin,setAdmin]=useState(false)
    useEffect(() => {
        if(localStorage.getItem("customer")){
          handleSignIn()
          
        }
        else if(localStorage.getItem("admin")){
          handleSignIn()
            setAdmin(true)
        }
    }, [])
    

    const [active,setActive]=useState(false)
    const [isOpen,setIsOpen]=useState(false)
    const [isAuthenticated, setIsAuthenticated] = useState(false)
    const navigate = useNavigate()
    const  showProfile=()=>{
      setIsOpen(!isOpen)
      
    }
    const showMenu=()=>{
      setActive(!active)
    }
    const showPeripheral = ()=>{
    setOpen(!open)
  }
    function handleSignOut() {
      setIsAuthenticated(false);
      if(isAdmin){
        localStorage.removeItem("admin")
        
      }else{
        localStorage.removeItem("customer")
      }
      navigate("/")
    }
    function handleSignIn() {
      setIsAuthenticated(true);
    }
    return (
      <div className="fixed w-full text-white justify-between p-2 z-20 items-center flex bg-gray-700 shadow shadow-gray-700">
        <div className=" font-bold text-center uppercase">
          <h1>
            <Link reloadDocument to={"/"}>e<span className="text-sky-800">Ticaret</span></Link>
          </h1>

        </div>
        <nav>
          <ul className="hidden md:flex gap-8 p-4 bg-gray-700/20">
            <li className="hover:text-slate-200">
              <Link reloadDocument to={"/1"}>Laptop</Link>
            </li>
            <li className="hover:text-slate-200">
              <Link reloadDocument to={"/3"}>Televizyon</Link>
            </li>
            <li className="hover:text-slate-200">
              <Link reloadDocument to={"/4"}> Kulaklık</Link>
            </li>
            <li className="hover:text-slate-200 hover:cursor-pointer">
              Çevre Birimleri <button
              onClick={showPeripheral}
            >
              <KeyboardArrowDownIcon />
            </button>
            <Peripherals showPeripherals={showPeripheral} open={open}/>
            </li>
            <li className="hover:text-slate-200">
              <Link reloadDocument to={"/2"}>Telefon</Link>
            </li>
            <li className="hover:text-slate-200">
              <Link reloadDocument to={"/9"}>Konsol</Link>
            </li>
          </ul>
        </nav>
        <div className="flex items-center">
          <form className="max-w-sm px-4" onSubmit={submitHandler}>
            <div className="relative ">
              <button type="submit">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="absolute top-0 bottom-0 w-6 h-6 my-auto text-gray-400 left-3"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                />
              </svg>
              </button>
              
              <input
                type="text"
                placeholder="Search"
                className="w-full py-3 pl-12 pr-4 text-white-500 border rounded-md outline-none bg-transparent focus:bg-transparent border-gray-600"
                value={search}
                onChange={(e)=>setSearch(e.target.value)}
              />
            </div>
          </form>
          <div className="px-2 md:hidden">
          <MenuIcon onClick={showMenu} />
          </div>
          <MenuItems showMenu={showMenu} active={active}/>
          <Link to={"/cart"}><ShoppingCartOutlinedIcon/>{cartItems.length>0&&<span className="absolute top-4 leading-3 right-8 bg-red-600 items-start flex justify-center p-1 w-5 h-5 rounded-full text-xs">{cartItems.length}</span> }</Link>
          <div className="ml-2">
            <AccountCircleIcon onClick={showProfile} className="hover:cursor-pointer"/>
          </div>
          {isAuthenticated?<ProfileItems signOut={handleSignOut} showProfile={showProfile} isAdmin={isAdmin} isOpen={isOpen} />:<SignOutProfileItems showProfile={showProfile} isOpen={isOpen} />}
          
        </div>
      </div>
    );
  }
export default Header;

