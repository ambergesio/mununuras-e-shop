import { createContext } from "react";

const CartContext = createContext();

export const { Consumer, Provider } = CartContext;

export default CartContext;