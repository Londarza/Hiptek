"use client";
//helpers
import registerFormValidations from "@/helpers/registerFormValids";
import { IregisterForm, IregisterFormvalids } from "@/interfaces/Types";
import { registerPost } from "@/services/user.fetchFunction";
import Swal from "sweetalert2";
//components
import Link from "next/link";
// hooks
import { ChangeEvent, FormEvent, useEffect, useState } from "react";
import { useRouter } from "next/navigation";

const RegisterView: React.FC = () => {
  const initialValue = {
    email: "",
    password: "",
    name: "",
    address: "",
    phone: "",
    lastname: "",
    username: "",
    repeatPassword: "",
  };
  const [userData, setUserData] = useState<IregisterForm>(initialValue);
  const [errors, setErrors] = useState<IregisterFormvalids>(initialValue);
  const [inputBlur, setInputBlur] = useState(initialValue);
  const [isSubmitDisabled, setIsSubmitDisabled] = useState(true);
  const router = useRouter();

  const changeHandler = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setUserData({ ...userData, [name]: value });
    setErrors(registerFormValidations({ ...userData, [name]: value }));
  };

  const submitHandler = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (Object.keys(errors).length) {
      return alert("Hay errores en el formulario");
    }
    await registerPost(userData);

    Swal.fire({
      position: "top",
      icon: "success",
      title: "Register complete",
      showConfirmButton: false,
      timer: 1500,
    });
    router.push("/login");
  };
  const handleInputBlur = (event: React.FocusEvent<HTMLInputElement>) => {
    const { name } = event.target;
    setInputBlur({
      ...inputBlur,
      [name]: true,
    });
  };
  useEffect(() => {
    setIsSubmitDisabled(Object.keys(errors).length > 0);
  }, [errors]);

  return (
    <div className="flex items-center justify-center bg-gray-100 p-8 m-10">
      <div className=" margin10 flex justify-center bg-prim-bone rounded-lg shadow-lg overflow-hidden">
        {/* Imagen */}
        <div className="  mr-5 flex items-center justify-center p-4 background-image">
          {/*  */}
        </div>

        {/* Form */}
        <div className="w-1/2 p-8">
          <h2 className="text-3xl font-bold text-gray-700 mb-6">Register</h2>
          <form className="p-10" onSubmit={submitHandler}>
            <div className="mb-4">
              <label
                htmlFor="name"
                className="block text-gray-600 text-sm font-medium mb-2"
              >
                Nombre Completo
              </label>
              <input
                id="name"
                name="name"
                type="text"
                className="w-full px-4 py-2 bg-gray-100 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-400"
                placeholder="Write your full name"
                value={userData.name}
                onChange={changeHandler}
                onBlur={handleInputBlur}
              />
              <br/>
              {inputBlur.name && errors.name && (
                <p style={{ color: "red" }}>*{errors.name}</p>
              )}
            </div>

            <div className="mb-4">
              <label
                htmlFor="email"
                className="block text-gray-600 text-sm font-medium mb-2"
              >
                Email
              </label>
              <input
                id="email"
                name="email"
                type="email"
                className="w-full px-4 py-2 bg-gray-100 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-400"
                placeholder="Enter your email"
                value={userData.email}
                onChange={changeHandler}
                onBlur={handleInputBlur}
              />
              <br/>
              {inputBlur.email && errors.email && (
                <p style={{ color: "red" }}>*{errors.email}</p>
              )}
            </div>
            <div className="mb-4">
              <label
                htmlFor="address"
                className="block text-gray-600 text-sm font-medium mb-2"
              >
                Direccion
              </label>
              <input
                id="address"
                name="address"
                type="text"
                className="w-full px-4 py-2 bg-gray-100 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-400"
                placeholder="calle, altura, ciudad, provincia."
                value={userData.address}
                onChange={changeHandler}
                onBlur={handleInputBlur}
              />
              <br/>
              {inputBlur.address && errors.address && (
                <p style={{ color: "red" }}>*{errors.address}</p>
              )}
            </div>
            <div className="mb-4">
              <label
                htmlFor="phone"
                className="block text-gray-600 text-sm font-medium mb-2"
              >
                Telefono
              </label>
              <input
                id="phone"
                name="phone"
                type="number"
                className="w-full px-4 py-2 bg-gray-100 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-400"
                placeholder="11-XXXX-XXXX"
                value={userData.phone}
                onChange={changeHandler}
                onBlur={handleInputBlur}
              />
              <br/>
              {inputBlur.phone && errors.phone && (
                <p style={{ color: "red" }}>*{errors.phone}</p>
              )}
            </div>
            <div className="mb-4">
              <label
                htmlFor="username"
                className="block text-gray-600 text-sm font-medium mb-2"
              >
                Username
              </label>
              <input
                id="username"
                name="username"
                type="text"
                className="w-full px-4 py-2 bg-gray-100 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-400"
                placeholder="Username"
                value={userData.username}
                onChange={changeHandler}
                onBlur={handleInputBlur}
              />
              <br/>
              {inputBlur.username && errors.username && (
                <p style={{ color: "red" }}>*{errors.username}</p>
              )}
            </div>

            <div className="mb-6">
              <label
                htmlFor="password"
                className="block text-gray-600 text-sm font-medium mb-2"
              >
                Password
              </label>
              <input
                id="password"
                name="password"
                type="password"
                className="w-full px-4 py-2 bg-gray-100 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-400"
                placeholder="Enter your password"
                value={userData.password}
                onChange={changeHandler}
                onBlur={handleInputBlur}
              />
              <br/>
              {inputBlur.password && errors.password && (
                <p style={{ color: "red" }}>*{errors.password}</p>
              )}
            </div>
            <div className="mb-6">
              <label
                htmlFor="repeatPassword"
                className="block text-gray-600 text-sm font-medium mb-2"
              >
                Repeat password
              </label>
              <input
                id="repeatPassword"
                name="repeatPassword"
                type="password"
                className="w-full px-4 py-2 bg-gray-100 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-400"
                placeholder="repeat your password"
                value={userData.repeatPassword}
                onChange={changeHandler}
                onBlur={handleInputBlur}
              />
              <br/>
              {inputBlur.repeatPassword && errors.repeatPassword && (
                <p style={{ color: "red" }}>*{errors.repeatPassword}</p>
              )}
            </div>

            <button className="registerbutton" disabled={isSubmitDisabled}>
              Registrarse
            </button>
          </form>

          {/* Links for register and forgot password */}
          <div className="flex justify-between mt-6 text-sm">
            <Link href="/login" className="text-gray-500 hover:text-green-600">
              ¿ya estás registrado?
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

export default RegisterView;
