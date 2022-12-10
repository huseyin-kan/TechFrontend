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


function App() {
  return (
    <div >
      
      <Router>
      <Header/>
      <div className="">
          <Routes>
            <Route path="/product/:id" element={<ProductInfo/>}/>
            <Route  path="/" element={<Section/> }/>
            {/* <Route  path="category/:categoryid" element={<Section/> }/> */}
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
