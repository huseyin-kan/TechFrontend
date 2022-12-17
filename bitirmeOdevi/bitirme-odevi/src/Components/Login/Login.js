import React from 'react'
import * as yup from "yup";
import { Formik, Form, Field, ErrorMessage } from "formik";
import UserService from '../../Services/userService';
import { useNavigate } from 'react-router-dom';
import { toast } from "react-toastify";


const Login =()=> {
    const navigate=useNavigate()
    const initialValues={
        userEmail:"",
        userPassword:""
    }
    const schema=yup.object({
        userEmail:yup.string().email("Email girmek zorundasınız").required("Email girmek zorundasınız"),
        userPassword:yup.string().required("Şifre girmek zorundasınız")
    })

    const submitHandler=(values)=>{
        let userService= new UserService()
        userService.login(values).then(response=>{
            
            if(response.data.data.İsAdmin){
                
                localStorage.setItem("admin",response.data.data.userId)

            }
            else{
                console.log(response.data.data)
                localStorage.setItem("customer",response.data.data.userId)
            }
            navigate("/");
            window.location.reload();  
        })
         .catch(err=>toast.error(err.response.data.message))

    }

    return (
      <div >
        <section className="">
  <div className="flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0">
    <Formik
    initialValues={initialValues}
    validationSchema={schema}
    onSubmit={(values)=>{
        submitHandler(values)
    }}
    >
    <div className="w-full bg-white rounded-lg shadow dark:border md:mt-0 sm:max-w-md xl:p-0 dark:bg-gray-800 dark:border-gray-700">
          <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
              <h1 className="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-white">
                  Giriş Yapınız
              </h1>
              <Form className="space-y-4 md:space-y-6" >
                  <div>
                      <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Email</label>
                      <Field 
                      name="userEmail" 
                      className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                      type="email"
                      ></Field>
                     <ErrorMessage
                    name="userEmail"
                    render={msg => <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded relative -z-5" role="alert">
                    <span className="block sm:inline">{msg}.</span>
                    </div>}
                    ></ErrorMessage>
                  </div>
                  <div>
                      <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Şifre</label>
                      <Field 
                      name="userPassword" 
                      className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                      type="password"
                      ></Field>
                     <ErrorMessage
                    name="userPassword"
                    render={msg => <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded relative -z-5" role="alert">
                    <span className="block sm:inline">{msg}.</span>
                    </div>}
                    ></ErrorMessage>
                  </div>
                  <div className="flex items-center justify-between">
                      <div className="flex items-start">
                          <div className="flex items-center h-5">
                            <input  aria-describedby="remember" type="checkbox" className="w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-primary-300 dark:bg-gray-700 dark:border-gray-600 dark:focus:ring-primary-600 dark:ring-offset-gray-800" required=""/>
                          </div>
                          <div className="ml-3 text-sm">
                            <label  className="text-gray-500 dark:text-gray-300">Beni Hatırla</label>
                          </div>
                      </div>
                      <a href="/" className="text-sm font-medium text-primary-600 hover:underline dark:text-primary-500">Şifreni mi unuttun?</a>
                  </div>
                  <button type="submit" className="w-full text-white bg-primary-600 hover:bg-primary-700 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800">Giriş Yap</button>
                  <p className="text-sm font-light text-gray-500 dark:text-gray-400">
                      Hesabın yok mu ?<a href="/sign" className="font-medium text-primary-600 hover:underline dark:text-primary-500">Kayıt Ol</a>
                  </p>
              </Form>
          </div>
      </div>
    </Formik>
  </div>
</section>
        
      </div>
    )

}
export default Login
