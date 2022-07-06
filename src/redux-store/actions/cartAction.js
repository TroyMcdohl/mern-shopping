export const addToCart =
  (productId, productImg, productName, productQuantity, productPrice) =>
  async (dispatch) => {
    const res = await fetch(
      `https://mern-shopping-api.herokuapp.com/api/v1/products/${productId}/cart`,
      {
        method: "POST",
        credentials: "include",
        headers: { "Content-type": "application/json" },
        body: JSON.stringify({
          productName,
          productImg,
          productPrice,
          quantity: productQuantity,
          total: productPrice * productQuantity,
        }),
      }
    );
  };
