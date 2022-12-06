import Header from "../Navi/Header";
import Section from "../Products/Section";
import {BrowserRouter as Router,Routes,Route} from 'react-router-dom'
import ProductInfo from "../Products/ProductInfo";
import Cart from "../Cart/Cart";
import Orders from "../Orders/Orders";
import Login from "../Login/Login";
import Sign from "../Login/Sign";
import Profile from "../Navi/Profile";


function App() {
  return (
    <div >
      
      <Router>
      <Header/>
      <div className="bg-background-image w-screen h-screen bg-cover bg-center">
          <Routes>
            <Route path="/product" element={<ProductInfo/>}/>
            <Route path="/" element={<Section/> }/>
            <Route path="/cart" element={<Cart/>} />
            <Route path="/order" element={<Orders/>}/>
            <Route path="/login" element={<Login/>}/>
            <Route path="/sign" element={<Sign/>}/>
            <Route path="/profile" element={<Profile/>}/>
          </Routes>
        </div>
        </Router>
       
      
      
    </div>
  );
}

export default App;
