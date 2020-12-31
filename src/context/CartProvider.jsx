import { createContext, useState } from "react";

export const CartContext = createContext();

const CartProvider = ({ children }) => {
  const [totalPrice, setTotalPrice] = useState(0);
  const [countCart, setCountCart] = useState(0);

  const addListShop = (id, name, image, price, quantity) => {
    const oldItems = JSON.parse(localStorage.getItem("itemsCart")) || [];
    const totalItems = price * quantity;
    const newItem = {
      id: id,
      name: name,
      image: image,
      price: price,
      quantity: quantity,
      total: totalItems,
    };
    oldItems.push(newItem);
    localStorage.setItem("itemsCart", JSON.stringify(oldItems));
    quantityTotal();
  };

  const deleteProduct = (id) => {
    const oldItems = JSON.parse(localStorage.getItem("itemsCart"));
    const arrayfiltrado = oldItems.filter((item, index) => index !== id);
    localStorage.setItem("itemsCart", JSON.stringify(arrayfiltrado));
    const product = document.querySelector(".product" + id);
    product.remove();
    calculateTotal();
  };

  const calculateTotal = () => {
    const oldItems = JSON.parse(localStorage.getItem("itemsCart"));
    if (oldItems) {
      const totalItems = Object.values(oldItems).reduce(
        (t, { total }) => t + total,
        0
      );
      oldItems == null ? setTotalPrice(0) : setTotalPrice(totalItems);
    } else {
      setTotalPrice(0);
    }
  };

  const quantityTotal = () => {
    const oldItems = JSON.parse(localStorage.getItem("itemsCart"));
    if (oldItems) {
      const quantityItems = Object.values(oldItems).reduce(
        (t, { quantity }) => t + quantity,
        0
      );
      oldItems == null ? setCountCart(0) : setCountCart(quantityItems);
    } else {
      setCountCart(0);
    }
  };

  return (
    <CartContext.Provider
      value={{
        addListShop,
        deleteProduct,
        calculateTotal,
        totalPrice,
        countCart,
        setCountCart,
        quantityTotal,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};

export default CartProvider;