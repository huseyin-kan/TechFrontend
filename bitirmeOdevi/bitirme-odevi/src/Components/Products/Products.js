import KeyboardArrowDownRoundedIcon from "@mui/icons-material/KeyboardArrowDownRounded";
import { Link } from "react-router-dom";
import React, { useEffect, useState } from "react";
import ProductService from "../../Services/productService";
import ProductHead from "./ProductHead";
import { useDispatch } from "react-redux";
import { addToCart } from "../../Store/Actions/cartAction";
import { toast } from "react-toastify";

const Products = () => {
  const [products, setProducts] = useState([]);
  const dispatch = useDispatch();

  const handleToCart = (product) => {
    dispatch(addToCart(product));
    toast.success(`${product.productName} sepete eklendi`);
  };

  useEffect(() => {
    let productService = new ProductService();
    productService
      .getProducts()
      .then((result) => setProducts(result.data.data));
  }, []);

  const [active, setActive] = useState(false);
  const showMenu = () => {
    setActive(!active);
  };
  return (
    <div className="">
      <div className="flex justify-between">
        <h1 className="text-2xl font-bold ">Ürünler</h1>
        <button
          className="text-white bg-cyan-800 hover:bg-cyan-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2.5 text-center inline-flex items-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
          type="button"
          onClick={showMenu}
        >
          Sırala
          <KeyboardArrowDownRoundedIcon />
        </button>
        <ProductHead showMenu={showMenu} active={active} />
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-3 py-4 ">
        {products.map((product) => (
          <div
            key={product.productId}
            className="w-full max-w-sm bg-white rounded-lg shadow-md dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-600"
          >
            <img
              className="p-8 rounded-t-lg"
              src="https://store.storeimages.cdn-apple.com/4668/as-images.apple.com/is/apple-watch-ultra-og-202209_GEO_TR?wid=1200&hei=630&fmt=jpeg&qlt=95&.v=1661384392247"
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

              <div className="flex justify-between items-center">
                <span className="text-md md:text-l font-bold text-gray-900 dark:text-white">
                  {product.productPrice}₺
                </span>
                <button
                  onClick={() => {
                    handleToCart(product);
                  }}
                  className="text-white bg-sky-700 hover:bg-sky-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-sky-700 dark:focus:ring-blue-800"
                >
                  Sepete ekle{" "}
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
