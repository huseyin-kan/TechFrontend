import { Formik, Form, Field, ErrorMessage } from "formik";
import React from "react";
import { Link ,useNavigate} from "react-router-dom";
import * as yup from "yup";
import UserService from "../../Services/userService";
import { toast } from "react-toastify";
const Sign = () => {
  const navigate=useNavigate()
  const initialValues = {
    userEmail: "",
    userName: "",
    userSurName: "",
    userPhone: "",
    userAddress: "",
    isAdmin: false,
    userPassword: "",
  };
  const submitHandler = (values) => {
    let userService = new UserService()
    userService.addUser(values)
    .then(response=>{
        toast.success("Başarıyla Kayıt oldundu")
        navigate("/login");
    })
    .catch(err=>toast.error(err.response.data.message))
  };

  const schema = yup.object({
    userEmail: yup
      .string()
      .email("lütfen mailinizi düzgün yazınız")
      .required("email gerekli"),
    userName: yup.string().required("isim gereklidir"),
    userSurName: yup.string().required("Soyisim gereklidir"),
    userPhone: yup
      .string()
      .min(10,"Numara 10 karakterden oluşmalıdır")
      .max(10,"Numara 10 karakterden oluşmalıdır")
      .required("Numara gereklidir"),
    userAddress: yup.string().required("adres gereklidir"),
    userPassword: yup
      .string()
      .min(5, "şifre en az 5 karakterden oluşmalıdır")
      .required("Şifre gereklidir")
      .matches(/[a-zA-Z]/, 'Password can only contain Latin letters.'),
    confirmPassword: yup
      .string()
      .oneOf(
        [yup.ref("userPassword"), null],
        "şifreler birbiriyle aynı olmalıdır"
      )
  });

  return (
    <div>
      <section className="pt-16">
        <div className="flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0">
          <div className="w-full bg-white rounded-lg shadow dark:border md:mt-0 sm:max-w-md xl:p-0 dark:bg-gray-800 dark:border-gray-700">
            <div className="p-6 space-y-1  sm:p-8">
              <h1 className="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-white">
                Hesap oluştur
              </h1>
              <Formik
                initialValues={initialValues}
                validationSchema={schema}
                onSubmit={(values)=>{
                    submitHandler(values)
                }}
              >
                <Form className="space-y-2 ">
                  <div>
                    <label
                      className="block mb-1 text-sm font-medium text-gray-900 dark:text-white"
                    >
                      Email
                    </label>
                    <Field 
                    type="email"
                    name="userEmail"
                    className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
                    </Field>
                    <ErrorMessage
                        name="userEmail"
                        render={msg => <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded relative -z-5" role="alert">
                        <span className="block sm:inline">{msg}.</span></div>}
                    ></ErrorMessage>
                  </div>
                  <div>
                    <label
                      className="block mb-1 text-sm font-medium text-gray-900 dark:text-white"
                    >
                      Ad
                    </label>
                    <Field 
                    type="text"
                    name="userName"
                    className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
                    </Field>
                    <ErrorMessage
                        name="userName"
                        render={msg => <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded relative -z-5" role="alert">
                        <span className="block sm:inline">{msg}.</span></div>}
                    ></ErrorMessage>
                  </div>
                  <div>
                    <label
                      className="block mb-1 text-sm font-medium text-gray-900 dark:text-white"
                    >
                      Soyad
                    </label>
                    <Field 
                    type="text"
                    name="userSurName"
                    className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
                    </Field>
                    <ErrorMessage
                        name="userSurName"
                        render={msg => <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded relative -z-5" role="alert">
                        <span className="block sm:inline">{msg}.</span></div>}
                    ></ErrorMessage>
                  </div>
                  <div>
                    <label
                      className="block mb-1 text-sm font-medium text-gray-900 dark:text-white"
                    >
                      Şifre
                    </label>
                    <Field 
                    type="password"
                    name="userPassword"
                    className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
                    </Field>
                    <ErrorMessage
                        name="userPassword"
                        render={msg => <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded relative -z-5" role="alert">
                        <span className="block sm:inline">{msg}.</span></div>}
                    ></ErrorMessage>
                  </div>
                  <div>
                    <label
                      className="block mb-1 text-sm font-medium text-gray-900 dark:text-white"
                    >
                      Şifreyi doğrula
                    </label>
                    <Field 
                    type="password"
                    name="confirmPassword"
                    className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
                    </Field>
                    <ErrorMessage
                        name="confirmPassword"
                        render={msg => <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded relative -z-5" role="alert">
                        <span className="block sm:inline">{msg}.</span></div>}
                    ></ErrorMessage>
                  </div>
                  <div>
                    <label
                      className="block mb-1 text-sm font-medium text-gray-900 dark:text-white"
                    >
                      Adres
                    </label>
                    <Field 
                    type="text"
                    name="userAddress"
                    className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
                    </Field>
                    <ErrorMessage
                        name="userAddress"
                        render={msg => <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded relative -z-5" role="alert">
                        <span className="block sm:inline">{msg}.</span></div>}
                    ></ErrorMessage>
                  </div>
                  <div>
                    <label
                      className="block mb-1 text-sm font-medium text-gray-900 dark:text-white"
                    >
                      Telefon Numarası
                    </label>
                    <Field 
                    type="text"
                    name="userPhone"
                    className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
                    </Field>
                    <ErrorMessage
                        name="userPhone"
                        render={msg => <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded relative -z-5" role="alert">
                        <span className="block sm:inline">{msg}.</span></div>}
                    ></ErrorMessage>
                  </div>
                  <button
                    type="submit"
                    className="w-full text-white bg-primary-600 hover:bg-primary-700 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800 transition hover:bg-gray-100 duration-300"
                  >
                    Hesap oluştur
                  </button>
                  </Form>
                  </Formik>
                  <p className="text-sm font-light text-gray-500 dark:text-gray-400">
                    Hesabın var mı?{" "}
                    <Link
                      to={"/login"}
                      className="font-medium text-primary-600 hover:underline dark:text-primary-500"
                    >
                      Giriş Yap
                    </Link>
                  </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Sign;
