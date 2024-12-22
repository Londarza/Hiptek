export interface Iproducts {
  id: number;
  name: string;
  description: string;
  price: number;
  stock: number;
  image: string;
  categoryId: number;
}
export interface Icategory {
  id: number;
  name: string;
}
export interface Iuser {
  id: number;
  name: string;
  email: string;
  password: string;
  address: string;
  phone: string;
  role: string;
}
export interface IloginForm {
  email: string;
  password: string;
}

export interface IloginFormValidation {
  email?: string;
  password?: string;
}

export interface IregisterFormvalids {
  name?: string;
  lastname?: string;
  email?: string;
  address?: string;
  phone?: string;
  username?: string;
  password?: string;
  repeatPassword?: string;
}
export interface IRegisterUser {
  name: string;
  email: string;
  password: string;
  address: string;
  phone: string;
}
export interface ILoginUser {
  email: string;
  password: string;
}
export interface IregisterForm {
  name: string;
  lastname: string;
  email: string;
  address: string;
  phone: string;
  username: string;
  password: string;
  repeatPassword: string;
}
export interface ILoggedUser {
  token: string;
  user: {
    address: string;
    email: string;
    id: number;
    name: string;
    phone: string;
    role: string;
    orders: [];
    credential: {
      id: number;
      password: string;
    };
  };
}

export interface IOrder {
  id: number;
  date: string;
  status: string | undefined;
  products: Iproducts[];
}

export interface ProductsContainerProps {
  products: Iproducts[];
}

export interface AuthProviderProps {
  children: React.ReactNode;
}
export interface AuthContextProps {
  userData: ILoggedUser | null;
  setUserData: (userData: ILoggedUser | null) => void;
}
