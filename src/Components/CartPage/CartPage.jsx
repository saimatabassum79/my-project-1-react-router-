import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { Link } from "react-router";
import {
  removeFromCart,
  increaseQuantity,
  decreaseQuantity,
  clearCart,
} from "../../redux/cartSilec";
import { TbCurrencyTaka } from "react-icons/tb";
import { FaPlus, FaMinus, FaTrash } from "react-icons/fa";

const CartPage = () => {
  const dispatch = useDispatch();
  const { cartItems, totalPrice } = useSelector((state) => state.cart);

  if (cartItems.length === 0)
    return (
      <div className="container mx-auto px-4 sm:px-8 md:px-12 lg:px-24 pt-24 text-center">
        <h2 className="text-3xl font-semibold mb-4">Your Cart is Empty 😔</h2>
        <Link to="/shop" className="text-blue-600 underline text-lg">
          Go to Shop
        </Link>
      </div>
    );

  return (
    <div className="container mx-auto px-4 sm:px-8 md:px-12 lg:px-24 pt-24">
      <h2 className="text-3xl font-bold mb-8">Shopping Cart</h2>
      <div className="flex flex-col lg:flex-row gap-8">

        {/* Left: Cart Items */}
        <div className="flex-1 space-y-4">
          {cartItems.map((item) => (
            <div
              key={item.id}
              className="flex flex-col sm:flex-row items-center sm:items-start justify-between  rounded-lg shadow-md p-4 hover:shadow-xl transition duration-300"
            >
              {/* Image & Details */}
              <div className="flex items-center gap-4 sm:gap-6 w-full sm:w-1/2">
                <img
                  src={item.image}
                  alt={item.name}
                  className="w-24 h-24 sm:w-32 sm:h-32 object-cover rounded-md"
                />
                <div>
                  <h3 className="font-semibold text-lg">{item.name}</h3>
                  <p className="text-gray-500">{item.categoryName}</p>
                  <p className="font-semibold text-gray-700 flex items-center mt-1">
                    {item.price} <TbCurrencyTaka />
                  </p>
                </div>
              </div>

              {/* Quantity */}
              <div className="flex items-center gap-2 mt-4 sm:mt-0">
                <button
                  onClick={() => dispatch(decreaseQuantity(item.id))}
                  className="px-3 py-1 bg-gray-200 rounded-md hover:bg-gray-300"
                >
                  <FaMinus />
                </button>
                <span className="px-3 font-semibold">{item.quantity}</span>
                <button
                  onClick={() => dispatch(increaseQuantity(item.id))}
                  className="px-3 py-1 bg-gray-200 rounded-md hover:bg-gray-300"
                >
                  <FaPlus />
                </button>
              </div>

              {/* Subtotal & Remove */}
              <div className="flex flex-col items-center mt-4 sm:mt-0">
                <p className="font-semibold text-lg flex items-center">
                  {item.subtotal} <TbCurrencyTaka />
                </p>
                <button
                  onClick={() => dispatch(removeFromCart(item.id))}
                  className="mt-2 flex items-center gap-1 text-red-600 hover:text-red-800"
                >
                  <FaTrash /> Remove
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Right: Summary & Checkout */}
        <div className="w-full lg:w-1/3 border border-gray-100 rounded-lg shadow-md p-6 flex flex-col gap-4 h-fit sticky top-24">
          <h3 className="text-2xl font-bold mb-4">Order Summary</h3>
          <div className="flex justify-between">
            <span className="font-medium">Subtotal:</span>
            <span className="font-semibold">
              {totalPrice} <TbCurrencyTaka />
            </span>
          </div>
          <div className="flex justify-between">
            <span className="font-medium">Shipping:</span>
            <span className="font-semibold">Free</span>
          </div>
          <hr className="my-2" />
          <div className="flex justify-between text-xl font-bold">
            <span>Total:</span>
            <span>
              {totalPrice} <TbCurrencyTaka />
            </span>
          </div>
          <Link to="/check"><button className="mt-4 px-28 bg-green-600 text-white py-3 rounded-md hover:bg-green-700 transition duration-200 font-semibold">
            Proceed to Checkout
          </button></Link>
          <button
            onClick={() => dispatch(clearCart())}
            className="mt-2 bg-red-500 text-white py-2 rounded-md hover:bg-red-600 transition duration-200 font-medium"
          >
            Clear Cart
          </button>
        </div>
      </div>
    </div>
  );
};

export default CartPage;
