import React from "react";

import CustomButton from "../custom-button/custom-bottom.component";

import { useSelector, useDispatch } from "react-redux";
import CartActionTypes from "../../redux/cart/cart.types";
import { addItem } from "../../redux/cart/cart.actions";

import "./collection-item.styles.scss";

const CollectionItem = ({ item }) => {
  const { id, name, price, imageUrl } = item;
  const dispatch = useDispatch();

  return (
    <div className="collection-item">
      <div className="image" style={{ backgroundImage: `url(${imageUrl})` }} />
      <div className="collection-footer">
        <span className="name">{name}</span>
        <span className="price">{price}</span>
      </div>
      <CustomButton onClick={() => dispatch(addItem(item))} inverted>
        Add to cart
      </CustomButton>
    </div>
  );
};

export default CollectionItem;
