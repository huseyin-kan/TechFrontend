import { Formik, Form, Field, ErrorMessage } from "formik";
import React, { Component } from "react";
import * as yup from "yup";
import { Link } from "react-router-dom";
import CloseOutlinedIcon from "@mui/icons-material/CloseOutlined";

export default class ProductAdd extends Component {
  render() {
    const initialValues = {
      productName: "",
      productPrice: 0,
      productDescription: "",
      categoryId: 0,
      categoryName: "",
      unitsInStock: 0,
      productColor: "",
      productBrand: "",
    };
    const schema = yup.object({
      productName: yup.string("Değer sayı olamaz").required("Ürün ismi zorunludur"),
      productBrand: yup.string("Değer sayı olamaz").required("Ürün markası zorunludur"),
      productColor: yup.string("Değer sayı olamaz").required("Renk zorunludur"),
      categoryName: yup.string("Değer sayı olamaz").required("Kategori ismi gereklidir"),
      productPrice: yup.number("Değer sayı olmalıdır").moreThan(0, "Ürün fiyatı girmelisiniz"),
      categoryId: yup
        .number("Değer sayı olmalıdır")
        .moreThan(0, "0'dan büyük olmalı")
        .lessThan(11, "11'den küçük olmalı"),
      productDescription: yup.string("Değer sayı olamaz").required("Ürün tanımı gereklidir"),
    });
    return (
      <div className="flex flex-col items-center justify-center px-6 py-8 mx-auto pt-20 ">
        <Formik
          initialValues={initialValues}
          validationSchema={schema}
          onSubmit={(values) => {
            console.log(values);
          }}
        >
          <Form className="w-full bg-white rounded-lg shadow dark:border  sm:max-w-md py-4 dark:bg-gray-800 dark:border-gray-700">
            <div className="flex justify-between items-center max-w-md px-2 mb-4 font-bold text-slate-700">
              <h1>Ürün Ekle</h1>
              <Link to="/" className="hover:cursor-pointer">
                <CloseOutlinedIcon />
              </Link>
            </div>
            <div className="mb-6 px-4">
              <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                Ürün ismi
              </label>
              <Field
                name="productName"
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              ></Field>
              <ErrorMessage
                name="productName"
                render={msg => <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded relative -z-5" role="alert">
                <span className="block sm:inline">{msg}.</span>
              </div>}
              ></ErrorMessage>
            </div>
            <div className="mb-6 px-4">
              <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                Ürün Markası
              </label>
              <Field
                name="productBrand"
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              ></Field>
              <ErrorMessage
                name="productBrand"
                render={msg => <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded relative -z-5" role="alert">
                <span className="block sm:inline">{msg}.</span>
              </div>}
              ></ErrorMessage>
            </div>
            <div className="mb-6 px-4">
              <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                Ürün Kategori İsmi
              </label>
              <Field
                name="categoryName"
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              ></Field>
              <ErrorMessage
                name="categoryName"
                render={msg => <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded relative -z-5" role="alert">
                <span className="block sm:inline">{msg}.</span>
              </div>}
              ></ErrorMessage>
            </div>
            <div className="mb-6 px-4">
              <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                Ürün Kategori ID
              </label>
              <Field
                name="categoryId"
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              ></Field>
              <ErrorMessage
                name="categoryId"
                render={msg => <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded relative -z-5" role="alert">
                <span className="block sm:inline">{msg}.</span>
              </div>}
              ></ErrorMessage>
            </div>
            <div className="mb-6 px-4">
              <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                Ürün Fiyatı
              </label>
              <Field
                name="productPrice"
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              ></Field>
              <ErrorMessage
                name="productPrice"
                render={msg => <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded relative -z-5" role="alert">
                <span className="block sm:inline">{msg}.</span>
              </div>}
              ></ErrorMessage>
            </div>
            <div className="mb-6 px-4">
              <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                Ürün Tanımı
              </label>
              <Field
                name="productDescription"
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              ></Field>
            </div>
            <div className="mb-6 px-4">
              <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                Renk
              </label>
              <Field
                name="productColor"
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              ></Field>
                <ErrorMessage
                name="productColor"
                render={msg => <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded relative -z-5" role="alert">
                <span className="block sm:inline">{msg}.</span>
              </div>
              }
              ></ErrorMessage>
            </div>

            <button
              type="submit"
              className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto ml-4 px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
            >
              Submit
            </button>
          </Form>
        </Formik>
      </div>
    );
  }
}
