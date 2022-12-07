import React from "react";

const ProductInfo = () => {
  return (
    <div className="container absolute top-32 left-60 w-2/3 bg-gray-600/90 pb-8 rounded">
      <div className="p-4">
        <h1 className="text-2xl">Ürün Bilgisi</h1>
      </div>
      <div className="flex flex-row w-11/12 bg-gray-500/70 rounded p-4 h-[28rem] mx-auto">
        <div className="basis-2/5 p-4 shadow">
          <img
            className="rounded-t-lg object-contain w-full h-full"
            src="https://cdn.vatanbilgisayar.com/Upload/PRODUCT/huawei/thumb/130999-1_large.jpg"
            alt="info"
          />
        </div>
        <div className="basis-3/5 shadow mx-2 p-2">
          <div className="justify-center align-center flex">
            <h1 className="text-xl">Huawei Matebook D15</h1>
          </div>
          <div className="flex flex-col gap-8 my-2 ">
            <div className="p-2 ">
              <label className="text-lg text-gray-100">İşlemci : <span className="text-lg text-gray-700 ml-4"> Intel i5-1010H </span></label>
            </div>
            <div className="p-2">
              <label className="text-lg text-gray-100">Ram : <span className="text-lg text-gray-700 ml-4"> 8GB RAM</span></label>
            </div>
            <div className="p-2">
              <label className="text-lg text-gray-100">Kapasite : <span className="text-lg text-gray-700 ml-4"> 256GB SSD</span></label>
            </div>
            <div className="p-2">
              <label className="text-lg text-gray-100">Ekran Kartı : <span className="text-lg text-gray-700 ml-4"> Intel UHD Graphics </span> </label>
            </div>
          </div>
          <div className="flex justify-end items-center">
                <div><button className="border-2 px-4 py-2 rounded border-yellow-200 bg-yellow-300 transition hover:bg-transparent duration-300 hover:text-gray-200 hover:border-gray-200">11500₺</button></div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default ProductInfo;
