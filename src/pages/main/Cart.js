import React from "react";
import { useSelector } from "react-redux";
import ProductCard from "../../components/productCard/ProductCard";

const Cart = () => {
  const products = useSelector((state) => state.cart.cart);
  let content;
  if (products.length > 0) {
    content = products.map((data, id) => (
      <>
        <div key={id}>
          <ProductCard products={data} />
        </div>
      </>
    ));
  } else {
    content = (
        <p>Content Not Available!</p>
    );
  }
  return (
    <>
      <div className="max-w-7xl gap-14 mx-auto my-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-14">
          {content}
        </div>
      </div>
    </>
  );
};

export default Cart;
