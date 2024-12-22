const APIURL = process.env.NEXT_PUBLIC_API_URL;

export const ordersPost = async (products: number[], token: string) => {
  try {
    const response = await fetch(`${APIURL}/orders`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        authorization: token,
      },
      body: JSON.stringify({ products }),
    });
    if (response.status === 200) {
      const orders = await response.json();
      console.log(orders);

      return orders;
    } else {
      // Manejar otros códigos de estado
      throw new Error(`Error:  failed to register`);
    }
  } catch (error: any) {
    throw new Error(error);
  }
};

export const ordersGet = async (token: string) => {
  try {
    const response = await fetch(`${APIURL}/users/orders`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        authorization: token,
      },
    });
    const orders = await response.json();

    return orders;
  } catch (error: any) {
    throw new Error(error);
  }
};
