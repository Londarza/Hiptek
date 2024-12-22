import { IRegisterUser, ILoginUser } from "@/interfaces/Types";
import Swal from "sweetalert2";
const APIURL = process.env.NEXT_PUBLIC_API_URL;

export const registerPost = async (userData: IRegisterUser) => {
  try {
    const response = await fetch(`${APIURL}/users/register`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(userData),
    });
    if (response.status === 201) {
      const responseData = await response.json();
      return responseData;
    } else {
      // Manejar otros códigos de estado
      throw new Error(`Error:  failed to register`);
    }
  } catch (error: any) {
    throw new Error(error);
  }
};

export const loginPost = async (userData: ILoginUser) => {
  try {
    const response = await fetch(`${APIURL}/users/login`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(userData),
    });
    const data = await response.json();

    if (response.status === 400) {
      Swal.fire({
        icon: "error",
        title: "Oops...",
        text: data.message,
      });
      throw new Error(data.message);
    } else {
      return data;
    }
  } catch (error: any) {
    throw new Error(error);
  }
};
