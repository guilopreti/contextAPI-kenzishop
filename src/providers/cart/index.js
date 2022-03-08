import { createContext, useState } from "react";
import { toast } from "react-toastify";

export const CartContext = createContext([]);

export const CartProvider = ({ children }) => {
  const [cart, setCart] = useState(
    JSON.parse(localStorage.getItem("@KZShop:cart")) || []
  );

  const addToCart = (product) => {
    const existProduct = cart.some(({ name }) => name === product.name);
    if (!existProduct) {
      localStorage.setItem("@KZShop:cart", JSON.stringify([...cart, product]));
      setCart([...cart, product]);
    } else {
      toast.error("Produto já está no carrinho");
    }
  };

  const removeFromCart = (product) => {
    const actualProducts = cart.filter((actualProduct) => {
      return actualProduct !== product;
    });
    localStorage.setItem("@KZShop:cart", JSON.stringify(actualProducts));
    setCart(actualProducts);
  };

  const removeAllCart = () => {
    localStorage.clear();
    setCart([]);
  };

  return (
    <CartContext.Provider
      value={{ cart, addToCart, removeFromCart, removeAllCart }}
    >
      {children}
    </CartContext.Provider>
  );
};
