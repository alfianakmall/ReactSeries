import React, { Children } from "react";

import Button from "../Elements/Button";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { addToCart } from "../redux/slice/cartSlice";

const CardProducts = (props) => {
  const { children } = props;
  return (
    <div className="w-full max-w-xs  bg-gray-900 border border-gray-200 rounded-lg shadow my-2 mx-2">
      {children}
    </div>
  );
};

const Header = (props) => {
  const { images, id } = props;
  return (
    <Link to={`/product/${id}`}>
      <img
        src={images}
        alt="products"
        className="p-2 rounded-t-lg object-center w-full h-60 object-cover"
      />
    </Link>
  );
};

const Body = (props) => {
  const { children, title } = props;

  return (
    <div className="px-5 pb-5">
      <a href="">
        <h5 className="text-xl font-semibold tracking-tight text-white">
          {title.substring(0, 20)}...
        </h5>
        <p className="text-s text-white">{children.substring(0, 50)}</p>
      </a>
    </div>
  );
};

const Footer = (props) => {
  const { price, id } = props;
  const dispatch = useDispatch();

  return (
    <div className="flex items-center justify-between px-5 pb-5">
      <span className="text-3xl font-bold text-white">${price}</span>
      <Button
        variant="bg-blue-600"
        onClick={() => dispatch(addToCart({ id, qty: 1 }))}
      >
        Add To Cart
      </Button>
    </div>
  );
};

CardProducts.Header = Header;
CardProducts.Body = Body;
CardProducts.Footer = Footer;

export default CardProducts;
