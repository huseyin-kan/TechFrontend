import Header from "./Components/Header";
import Section from "./Components/Section";
import {BrowserRouter as Router,Routes,Route} from 'react-router-dom'
import ProductInfo from "./Components/ProductInfo";


function App() {
  return (
    <div >
      
      <Router>
      <Header/>
      <div className="bg-background-image w-screen h-screen bg-cover bg-center">
          <Routes>
            <Route path="/product" element={<ProductInfo/>}/>
            <Route path="/" element={<Section/> }/>
          </Routes>
        </div>
        </Router>
       
      
      
    </div>
  );
}

export default App;
