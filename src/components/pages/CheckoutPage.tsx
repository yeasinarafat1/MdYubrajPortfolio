import { publishedBooks } from "@/constant";
import React, {  useState } from "react";
import { Link, useParams } from "react-router-dom";

const Checkout: React.FC = () => {
  const id = useParams().id;
  const price = publishedBooks.find((book) => book.id === id)?.price;
  // State for form inputs
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    address: "",
    city: "",
    state: "",
    postalCode: "",
    cardholderName: "",
    cardNumber: "",
    expDate: "",
    cvv: "",
    paymentMethod: "card",
  });

  // Handle input changes
  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <div className="font-[sans-serif] bg-white">
      <div className="max-lg:max-w-xl mx-auto w-full">
        <div className="grid lg:grid-cols-3 gap-6">
          {/* Left Section - Form */}
          <div className="lg:col-span-2 max-lg:order-1 p-6 !pr-0 max-w-4xl mx-auto w-full">
            <div className="text-center max-lg:hidden">
              <h2 className="text-3xl font-bold text-gray-800 inline-block border-b-2 border-gray-800 pb-1">
                Checkout
              </h2>
            </div>

            <form className="lg:mt-16">
              {/* Shipping Info */}
              <div>
                <h2 className="text-xl font-bold text-gray-800">Shipping info</h2>
                <div className="grid sm:grid-cols-2 gap-8 mt-8">
                  <input
                    type="text"
                    name="name"
                    placeholder="Name"
                    value={formData.name}
                    onChange={handleInputChange}
                    className="px-2 pb-2 bg-white text-gray-800 w-full text-sm border-b focus:border-blue-600 outline-none"
                  />
                  <input
                    type="email"
                    name="email"
                    placeholder="Email address"
                    value={formData.email}
                    onChange={handleInputChange}
                    className="px-2 pb-2 bg-white text-gray-800 w-full text-sm border-b focus:border-blue-600 outline-none"
                  />
                  <input
                    type="text"
                    name="address"
                    placeholder="Street address"
                    value={formData.address}
                    onChange={handleInputChange}
                    className="px-2 pb-2 bg-white text-gray-800 w-full text-sm border-b focus:border-blue-600 outline-none"
                  />
                  <input
                    type="text"
                    name="city"
                    placeholder="City"
                    value={formData.city}
                    onChange={handleInputChange}
                    className="px-2 pb-2 bg-white text-gray-800 w-full text-sm border-b focus:border-blue-600 outline-none"
                  />
                  <input
                    type="text"
                    name="state"
                    placeholder="State"
                    value={formData.state}
                    onChange={handleInputChange}
                    className="px-2 pb-2 bg-white text-gray-800 w-full text-sm border-b focus:border-blue-600 outline-none"
                  />
                  <input
                    type="number"
                    name="postalCode"
                    placeholder="Postal code"
                    value={formData.postalCode}
                    onChange={handleInputChange}
                    className="px-2 pb-2 bg-white text-gray-800 w-full text-sm border-b focus:border-blue-600 outline-none"
                  />
                </div>
              </div>

              {/* Payment Method */}
              <div className="mt-16">
                <h2 className="text-xl font-bold text-gray-800">Payment method</h2>
                <div className="grid gap-4 sm:grid-cols-2 mt-4">
                  <div className="flex items-center">
                    <input
                      type="radio"
                      name="paymentMethod"
                      value="card"
                      checked={formData.paymentMethod === "card"}
                      onChange={handleInputChange}
                      className="w-5 h-5 cursor-pointer"
                    />
                    <label className="ml-4 flex gap-2 cursor-pointer">
                      <img
                        src="https://readymadeui.com/images/visa.webp"
                        className="w-12"
                        alt="Visa"
                      />
                      <img
                        src="https://readymadeui.com/images/master.webp"
                        className="w-12"
                        alt="MasterCard"
                      />
                    </label>
                  </div>

                  {/* <div className="flex items-center">
                    <input
                      type="radio"
                      name="paymentMethod"
                      value="paypal"
                      checked={formData.paymentMethod === "paypal"}
                      onChange={handleInputChange}
                      className="w-5 h-5 cursor-pointer"
                    />
                    <label className="ml-4 flex gap-2 cursor-pointer">
                      <img
                        src="https://readymadeui.com/images/paypal.webp"
                        className="w-20"
                        alt="PayPal"
                      />
                    </label>
                  </div> */}
                </div>

                {/* Card Details */}
                <div className="grid gap-8 mt-8">
                  <input
                    type="text"
                    name="cardholderName"
                    placeholder="Cardholder's Name"
                    value={formData.cardholderName}
                    onChange={handleInputChange}
                    className="px-2 pb-2 bg-white text-gray-800 w-full text-sm border-b focus:border-blue-600 outline-none"
                  />
                  <input
                    type="number"
                    name="cardNumber"
                    placeholder="Card Number"
                    value={formData.cardNumber}
                    onChange={handleInputChange}
                    className="px-2 pb-2 bg-white text-gray-800 w-full text-sm border-b focus:border-blue-600 outline-none"
                  />
                  <div className="grid grid-cols-2 gap-6">
                    <input
                      type="number"
                      name="expDate"
                      placeholder="EXP."
                      value={formData.expDate}
                      onChange={handleInputChange}
                      className="px-2 pb-2 bg-white text-gray-800 w-full text-sm border-b focus:border-blue-600 outline-none"
                    />
                    <input
                      type="number"
                      name="cvv"
                      placeholder="CVV"
                      value={formData.cvv}
                      onChange={handleInputChange}
                      className="px-2 pb-2 bg-white text-gray-800 w-full text-sm border-b focus:border-blue-600 outline-none"
                    />
                  </div>
                </div>
              </div>

              {/* Submit Button */}
              <div className="flex flex-wrap gap-4 mt-8">
              <Link to={'/'} className="cursor-pointer">
                <button type="button" className="min-w-[150px] px-6 py-3.5 text-sm bg-gray-200 text-gray-800 rounded-lg hover:bg-gray-300" >
                  
                  Back
                </button>
                  </Link>
                <button type="submit" className="min-w-[150px] px-6 py-3.5 text-sm bg-blue-600 text-white rounded-lg hover:bg-blue-700">
                  Confirm payment ${price}
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Checkout;
