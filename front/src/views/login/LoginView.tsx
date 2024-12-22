"use client";
//interfaces
import { IloginForm, IloginFormValidation } from "@/interfaces/Types";
// next/react
import Link from "next/link";
import { ChangeEvent, FormEvent, useEffect, useState } from "react";
import { useRouter } from "next/navigation";
// helpers
import loguinFormValidations from "@/helpers/loguinFormValidations";
import { loginPost } from "@/services/user.fetchFunction";
import Swal from "sweetalert2";
import { useAuth } from "@/context/AuthContext";
import Cookies from "js-cookie";

const LoginView: React.FC = () => {
  //states
  const initialValue = { email: "", password: "" };

  const [loginForm, setLoginForm] = useState<IloginForm>(initialValue);
  const [errors, setErrors] = useState<IloginFormValidation>(initialValue);
  const [inputBlur, setInputBlur] = useState(initialValue);
  const [isSubmitDisabled, setIsSubmitDisabled] = useState(true);
  const { setUserData } = useAuth();

  const router = useRouter();
  //handlers

  const changeHandler = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setLoginForm({ ...loginForm, [name]: value });
    setErrors(loguinFormValidations({ ...loginForm, [name]: value }));
  };

  const submitHandler = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (Object.keys(errors).length) {
      return Swal.fire({
        icon: "error",
        title: "Oops...",
        text: "Hay errores en el formulario!",
      });
    }

    const userloged = await loginPost(loginForm);
    if (userloged) {
      const { token, user } = userloged;
      setUserData({ token, user });
      Cookies.set("userCookies", token);
      Swal.fire({
        position: "top",
        icon: "success",
        title: "Login success",
        showConfirmButton: false,
        timer: 1500,
      });
      router.push("/dashboard");
    }
  };

  const handleInputBlur = (event: React.FocusEvent<HTMLInputElement>) => {
    const { name } = event.target;
    setInputBlur({
      ...inputBlur,
      [name]: true,
    });
  };
  //effects
  useEffect(() => {
    setIsSubmitDisabled(Object.keys(errors).length > 0);
  }, [errors]);

  return (
    <div className="flex items-center justify-center bg-gray-100 p-8 m-10">
      <div className=" margin10 flex justify-center bg-prim-bone rounded-lg shadow-lg overflow-hidden">
        {/* Imagen */}
        <div className="  mr-5 flex items-center justify-center p-4 background-logimage">
          {/*  */}
        </div>

        {/* Form */}
        <div className="w-1/2 p-8">
          <h2 className="text-3xl font-bold text-gray-700 mb-6">Login</h2>
          <form onSubmit={submitHandler}>
            <div className="mb-4">
              <label
                className="block text-gray-600 text-sm font-medium mb-2"
                htmlFor="email"
              >
                Email
              </label>
              <input
                id="email-input"
                name="email"
                type="email"
                className="w-full px-4 py-2 bg-gray-100 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-400"
                placeholder="yourmail@mail.com"
                onChange={changeHandler}
                value={loginForm.email}
                onBlur={handleInputBlur}
              />
              {inputBlur.email && errors.email && (
                <p style={{ color: "red" }}>*{errors.email}</p>
              )}
            </div>

            <div className="mb-6">
              <label
                className="block text-gray-600 text-sm font-medium mb-2"
                htmlFor="password"
              >
                Password
              </label>
              <input
                id="password-input"
                name="password"
                type="password"
                className="w-full px-4 py-2 bg-gray-100 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-400"
                placeholder="********"
                onChange={changeHandler}
                value={loginForm.password}
                onBlur={handleInputBlur}
              />
              {inputBlur.password && errors.password && (
                <p style={{ color: "red" }}>*{errors.password}</p>
              )}
            </div>

            <button
              className="registerbutton"
              type="submit"
              disabled={isSubmitDisabled}
            >
              Login
            </button>
          </form>

          {/* Links for register and forgot password */}
          <div className="flex justify-between mt-6 text-sm">
            <Link
              href="/register"
              className="text-gray-500 hover:text-green-600"
            >
              ¿No estás registrado?
            </Link>
            <Link
              href="/forgot-password"
              className="text-gray-500 hover:text-green-600"
            >
              ¿Olvidaste tu password?
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoginView;
