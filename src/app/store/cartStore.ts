import { create } from "zustand";
import { IProduct } from "../models/Product";
import { immer } from "zustand/middleware/immer";
import { devtools } from "zustand/middleware";

interface CartProduct extends IProduct {
  quantity: number; // Ajout de la quantité pour chaque produit dans le panier
}

interface CartState {
  cart: CartProduct[];
  addToCart: (payload: IProduct) => void;
  removeFromCart: (payload: IProduct) => void;
}

export const useCartStore = create<CartState>()(
  devtools(
    immer((set) => {
      return {
        cart: [],

        addToCart: (payload) =>
         
      };
    })
  )
);
