import React from "react";
import emptyCart from "../../assets/empty-cart.png";
import { Link } from "react-router-dom";

const EmptyCartPage = () => {
  return (
    <div className='grid justify-items-center'>
      <img className="grid center" alt="empty cart image" src={emptyCart} />
      <h1 className="grid justify-items-center">Your Cart is Currently Empty</h1>
      <p className='grid justify-items-center'>
        Looks like you haven't added any product to your cart
      </p>
      <div className='mt-6'>
        <Link to="/">
          <button
            className=" focus: outline-none p-2 text-xs 
                md:text-sm  bg-gradient-to-b  from-yellow-200 
                to-yellow-400  border-yellow-300  rounded-sm
                focus:ring-2 focus:ring-yellow-500 active:from-yellow-500"
          >
            Add to Cart
          </button>
        </Link>
      </div>
    </div>
  );
};

export default EmptyCartPage;
