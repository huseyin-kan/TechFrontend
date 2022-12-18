import Header from "../Navi/Header";
import Section from "../Products/Section";
import {BrowserRouter as Router,Routes,Route} from 'react-router-dom'
import ProductInfo from "../Products/ProductInfo";
import Cart from "../Cart/Cart";
import Orders from "../Orders/Orders";
import Login from "../Login/Login";
import Sign from "../Login/Sign";
import Profile from "../Navi/Profile";
import ProductAdd from "../AdminSide/ProductAdd";
import { ToastContainer } from 'react-toastify'
import EditProfile from "../CustomerSide/EditProfile";

function App() {
  return (
    <div >
      
      <Router>
      <Header/>
      <div className="">
      <ToastContainer position="bottom-right"/>
          <Routes>
            <Route path="/product/:id" element={<ProductInfo/>}/>
            <Route path="/:categoryId/product/:id" element={<ProductInfo/>}/>
            <Route exact path="/" element={<Section/> }/>
            <Route path="/:categoryId" element={<Section/> }/>
            <Route path="/updateProfile/:userId" element={<EditProfile/> }/>
            <Route path="/cart" element={<Cart/>} />
            <Route path="/order" element={<Orders/>}/>
            <Route path="/login" element={<Login/>}/>
            <Route path="/sign" element={<Sign/>}/>
            <Route path="/profile" element={<Profile/>}/>
            <Route path="/addProduct" element={<ProductAdd/>}/>
          </Routes>
        </div>
        </Router>
       
      
      
    </div>
  );
}

export default App;
