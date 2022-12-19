import React from "react";
import { BiListPlus } from "react-icons/bi";
import { useLocation } from "react-router-dom";
import { MdDeleteForever } from "react-icons/md";
import { useDispatch } from "react-redux";
import { AddToCard, RemoveFromCard } from "../../features/cart/cartSlice";

const ProductCard = ({ products }) => {
  const { pathname } = useLocation();
  // use redux toolkit
  const dispatch = useDispatch();
  return (
    <div className="shadow-lg relative rounded-3xl border p-3 flex flex-col text-indigo-900 ">
      {pathname.includes("cart") && (
        <div className="rounded-full grid place-items-center absolute top-2 right-2 bg-indigo-500 text-white h-8 w-8 font-bold ">
          <p> {products.quantity}</p>
        </div>
      )}
      <div className="h-52 w-52 mx-auto">
        <img className="w-full h-full" src={products.image} alt="model" />
      </div>
      <h1 className="font-bold text-center">{products.model}</h1>
      <p className="text-center font-semibold mb-3">Rating: 04</p>
      <div className=" flex-1">
        <ul className="space-y-2">
          {products.keyFeature.map((data, id) => {
            return (
              <li key={id} className="text-sm ">
                {data.slice(0, 50)}...
              </li>
            );
          })}
        </ul>
      </div>
      <div className="flex gap-2 mt-5">
        {!pathname.includes("cart") && (
          <button
            onClick={() => dispatch(AddToCard(products))}
            className="bg-indigo-500 rounded-full py-1 px-2 flex-1 text-white text-bold"
          >
            Add to cart
          </button>
        )}

        {!pathname.includes("cart") && (
          <button
            title="Add to wishlist"
            className="bg-indigo-500  py-1 px-2 rounded-full"
          >
            <BiListPlus className="text-white" />
          </button>
        )}
        {pathname.includes("cart") && (
          <button
            onClick={() => dispatch(RemoveFromCard(products))}
            title="Remove"
            className="flex justify-between px-3 bg-red-500 text-white p-1 rounded-full flex-1"
          >
            <p>Remove</p>
            <MdDeleteForever size="25" />
          </button>
        )}
      </div>
    </div>
  );
};

export default ProductCard;
