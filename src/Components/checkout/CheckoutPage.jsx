import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { clearCart } from "../../redux/cartSilec";
import { TbCurrencyTaka } from "react-icons/tb";
import { Link, useNavigate } from "react-router";

const CheckoutPage = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { cartItems, totalPrice } = useSelector((state) => state.cart);

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [address, setAddress] = useState("");
  const [phone, setPhone] = useState("");
  const [success, setSuccess] = useState(false);

  if (cartItems.length === 0 && !success)
    return (
      <div className="container mx-auto px-4 sm:px-8 md:px-12 lg:px-24 pt-24 text-center">
        <h2 className="text-3xl font-semibold mb-4">Your Cart is Empty 😔</h2>
        <Link to="/shop" className="text-blue-600 underline text-lg">
          Go to Shop
        </Link>
      </div>
    );

  const handleConfirmOrder = () => {
    // Normally API call to backend to place order goes here
    dispatch(clearCart());
    setSuccess(true);
  };

  return (
    <div className="container mx-auto px-4 sm:px-8 md:px-12 lg:px-24 pt-24">
      {!success ? (
        <div className="flex flex-col lg:flex-row gap-8">
          {/* Left: Form */}
          <div className="flex-1 space-y-6">
            <h2 className="text-3xl font-bold mb-4">Checkout</h2>

            <div className="flex flex-col gap-4">
              <input
                type="text"
                placeholder="Full Name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                className="border rounded-md px-4 py-2 w-full"
              />
              <input
                type="email"
                placeholder="Email Address"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="border rounded-md px-4 py-2 w-full"
              />
              <input
                type="text"
                placeholder="Phone Number"
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
                className="border rounded-md px-4 py-2 w-full"
              />
              <textarea
                placeholder="Shipping Address"
                value={address}
                onChange={(e) => setAddress(e.target.value)}
                className="border rounded-md px-4 py-2 w-full"
              />
            </div>
          </div>

          {/* Right: Summary */}
          <div className="w-full lg:w-1/3 border rounded-lg shadow-md p-6 flex flex-col gap-4 h-fit sticky top-24">
            <h3 className="text-2xl font-bold mb-4">Order Summary</h3>
            {cartItems.map((item) => (
              <div key={item.id} className="flex justify-between">
                <span>{item.name} x {item.quantity}</span>
                <span>
                  {item.subtotal} <TbCurrencyTaka />
                </span>
              </div>
            ))}
            <hr className="my-2" />
            <div className="flex justify-between text-xl font-bold">
              <span>Total:</span>
              <span>
                {totalPrice} <TbCurrencyTaka />
              </span>
            </div>
            <button
              onClick={handleConfirmOrder}
              className="mt-4 bg-green-600 text-white py-3 rounded-md hover:bg-green-700 transition duration-200 font-semibold"
            >
              Confirm Order
            </button>
          </div>
        </div>
      ) : (
        <div className="text-center py-20">
          <h2 className="text-3xl font-bold mb-4 text-green-600">Order Placed Successfully! ✅</h2>
          <p className="mb-6">Thank you for shopping with us, {name}.</p>
          <Link
            to="/shop"
            className="bg-blue-600 text-white px-6 py-3 rounded-md hover:bg-blue-700 transition duration-200"
          >
            Continue Shopping
          </Link>
        </div>
      )}
    </div>
  );
};

export default CheckoutPage;
