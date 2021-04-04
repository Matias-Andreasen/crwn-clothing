import React from "react";
import { useSelector } from "react-redux";
import { createSelector } from "reselect";

// The below two functions handle memoization - meaning we avoid rerendering the component if the quantity value hasn't been changed
const selectCartItemsQuantity = createSelector(
  (state) => state.cart.cartItems,
  (cartItems) =>
    cartItems.reduce(
      (accumulated, cartItem) => accumulated + cartItem.quantity,
      0
    )
);

const selectCartItemsTotal = createSelector(
  (state) => state.cart.cartItems,
  (cartItems) =>
    cartItems.reduce(
      (accumulated, cartItem) =>
        accumulated + cartItem.quantity * cartItem.price,
      0
    )
);

export const CartItemsQuantityCounter = () => {
  const cartItemsQuantity = useSelector(selectCartItemsQuantity);
  return cartItemsQuantity;
};

export const GetCartItemsTotal = () => {
  console.log("wow");
  const cartItemsTotal = useSelector(selectCartItemsTotal);
  return cartItemsTotal;
};
