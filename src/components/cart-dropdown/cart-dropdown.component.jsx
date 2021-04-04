import React from "react";
import { withRouter } from "react-router-dom";
import CustomButton from "../custom-button/custom-bottom.component";
import CartItem from "../cart-item/cart-item.component";

import { useSelector, useDispatch } from "react-redux";
import { toggleCartHidden } from "../../redux/cart/cart.actions";
import CartActionTypes from "../../redux/cart/cart.types";

import "./cart-dropdown.styles.scss";

const CartDropdown = ({ history }) => {
  const cartItems = useSelector((state) => state.cart.cartItems);
  const dispatch = useDispatch();

  return (
    <div className="cart-dropdown">
      <div className="cart-items">
        {cartItems.length ? (
          cartItems.map((cartItem) => (
            <CartItem key={cartItems.id} item={cartItem} />
          ))
        ) : (
          <span className="empty-message">Your cart is empty</span>
        )}
      </div>
      <CustomButton
        onClick={() => {
          dispatch(toggleCartHidden());
          history.push("/checkout");
        }}
      >
        GO TO CHECKOUT
      </CustomButton>
    </div>
  );
};

export default withRouter(CartDropdown);
