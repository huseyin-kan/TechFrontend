import { Link,useParams } from "react-router-dom";
import React, { useEffect, useState } from "react";
import ProductService from "../../Services/productService";
import { useDispatch,useSelector } from "react-redux";
import { addToCart } from "../../Store/Actions/cartAction";
import { toast } from "react-toastify";
import DeleteIcon from '@mui/icons-material/Delete';
import SettingsIcon from '@mui/icons-material/Settings';
import 'alertifyjs/build/css/alertify.css';
import alertify from 'alertifyjs';

const Products = () => {
  const [products, setProducts] = useState([]);
  const filter =useSelector(state=>state.filter)
  const dispatch = useDispatch();
  const productService= new ProductService()

  const filterText=filter.searchFilter

  
  let {categoryId}=useParams()

  const handleToCart = (product) => {
    dispatch(addToCart(product));
    toast.success(`${product.productName} sepete eklendi`);
  };
  const getProductsByDescending =(event)=>{
    switch (event.target.value) {
      case "desceId":
        productService.getProducts("desc").then((result)=>setProducts(result.data))
        break;
      case "descePrice":
        productService.getProductsByUnitPrice("desc").then((result)=>setProducts(result.data))
        break;
      case "ascePrice":
        productService.getProductsByUnitPrice("asce").then((result)=>setProducts(result.data))
        break;
      default:
        productService.getProducts().then((result)=>setProducts(result.data.data))
        break;
    }
  }
  const [isAdmin,setAdmin]=useState(false)
  useEffect(() => {
      if(localStorage.getItem("customer")){

        
      }
      else if(localStorage.getItem("admin")){
          
          setAdmin(true)
      }
  }, [])
  useEffect(() => {
    if(categoryId){
      productService.getProductsByCategoryId(categoryId).then((result)=>setProducts(result.data.data))
    }
    else{
      productService
      .getProducts()
      .then((result) => setProducts(result.data.data));
    }
    
  },[]);

  return (
    <div className="">
      <div className="flex justify-between">
        <h1 className="text-2xl font-bold ">Ürünler</h1>
        <div className="relative w-50 lg:max-w-sm">
            <select onChange={getProductsByDescending} className="w-full p-2.5 text-gray-500 bg-white border rounded-md shadow-sm outline-none appearance-none focus:border-indigo-600 hover:cursor-pointer">
                <option value={"asceId"}>Tarihe göre ilk eklenen</option>
                <option value={"desceId"}>Tarihe göre son eklenen</option>
                <option value={"descePrice"}>Pahalıdan ucuza</option>
                <option value={"ascePrice"}>Ucuzdan pahalıya</option>
            </select>
        </div>
      </div>

      <div  className="h-60 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-3  py-4 ">
                  <div
            className={ isAdmin?"w-full max-w-sm bg-white flex justify-center items-center rounded-lg shadow-md dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-600":"hidden"}
          >

            <div className="px-5 pb-4 shadow-md w-2/3 h-2/3 flex justify-center items-center ">
              <Link to={"/addProduct"}>
                {" "}
                <img src="https://www.freepnglogos.com/uploads/plus-icon/plus-icon-plus-math-icon-download-icons-9.png"/>
                
              </Link>

            </div>
          </div>
        {products.filter((product)=>{
          return filterText.trim().toLowerCase()===""
          ? product
          :product.productName.toLowerCase().includes(filterText.trim())||product.productBrand.toLowerCase().includes(filterText.trim())
        }).map((product) => (
          
          <div
            key={product.productId}
            className={product.unitsInStock>0?"w-full max-w-sm bg-white rounded-lg shadow-md dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-600":"w-full max-w-sm bg-white rounded-lg shadow-md dark:bg-gray-700/80 dark:border-gray-600/80"}
          >
            <div className={isAdmin?"flex justify-between  items-center w-full":"hidden"}>
              <Link to={`updateProduct/${product.productId}`} className=" flex items-center justify-center p-2 hover:cursor-pointer hover:text-blue-400/80"><SettingsIcon/></Link>
              <span
              onClick={()=>alertify.confirm('Ürünü Silme', 'Seçili ürün silinsin mi', function(){ productService.deleteProduct(product).then(response=>{toast.success("Ürün silindi");window.location.reload()}) }
              , function(){ toast.error('İşlem geri alındı')}).set('labels', {ok:'Ürünü Sil', cancel:'Vazgeç'})}  
              className=" flex items-center justify-center p-2 hover:cursor-pointer hover:text-red-400/80"
              ><DeleteIcon/></span>
            </div>   
            <img
              className="p-8 rounded-t-lg h-80 w-full"
              src={product.İmageUrl}
              alt="product"
            />
              
            <div className="px-5 pb-4">
              <Link to={`product/${product.productId}`}>
                {" "}
                <h6 className="text-l font-bold tracking-tight text-gray-900 dark:text-white py-4">
                  {product.productBrand}-{product.productName}
                </h6>
              </Link>
              <div className="h-20">
                <a href="/" className="">
                  <h6 className="text-l font-semibold tracking-tight text-gray-900 dark:text-white py-4">
                    {product.productDescription}
                  </h6>
                </a>
              </div>

              <div className="flex justify-between items-center ">
                <span className="text-md md:text-l font-bold text-gray-900 dark:text-white">
                  {product.productPrice}₺
                </span>
                <button
                  onClick={() => {
                    handleToCart(product);
                  }}
                  disabled={product.unitsInStock===0}
                  className={product.unitsInStock===0?"text-white bg-sky-700 hover:bg-sky-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-800":"text-white bg-sky-700 hover:bg-sky-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg  text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-sky-700 dark:focus:ring-blue-800"}
                >
                  {product.unitsInStock===0?"Stok Dışı":"Sepete Ekle"}
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Products;
