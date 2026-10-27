
import React, { useState } from "react";
import { Link, useParams } from "react-router-dom";
import {
  ShoppingBag,
  ArrowLeft,
  Minus,
  Plus,
  Check,
} from "lucide-react";

import Kidproducts from "./assets/KidProduct .js";

function Kidproductdetail() {
  const { id } = useParams();

  const productkid = Kidproducts.find(
    (item) => String(item.id) === id
  );

  const [size, setSize] = useState("M");
  const [quantity, setQuantity] = useState(1);
  const [message, setMessage] = useState("");

  if (!productkid) {
    return (
      <div className="flex min-h-screen flex-col items-center justify-center bg-slate-50 px-4 text-center">
        <h2 className="text-2xl font-bold text-slate-800">
          Product Not Found
        </h2>

        <p className="mt-2 text-slate-500">
          Sorry, this kids' product is unavailable.
        </p>

        <Link
          to="/kids"
          className="mt-5 inline-flex items-center gap-2 rounded-xl bg-blue-600 px-5 py-3 font-bold text-white transition hover:bg-blue-700"
        >
          <ArrowLeft size={18} />
          Back to Kids
        </Link>
      </div>
    );
  }

  const price = Number(
    productkid.price ?? productkid.newPrice ?? 0
  );

  const handleAddToCart = () => {
    setMessage(
      `${productkid.name} | Size: ${size} | Quantity: ${quantity}`
    );
  };

  return (
    <div className="min-h-screen bg-slate-50 px-3 py-5 sm:px-6 sm:py-8 lg:px-8 lg:py-12">
      <div className="mx-auto max-w-7xl">

        {/* Back to Kids */}
        <Link
          to="/kids"
          className="mb-5 inline-flex items-center gap-2 font-semibold text-slate-600 transition hover:text-blue-600 sm:mb-8"
        >
          <ArrowLeft size={18} />
          Back to Kids
        </Link>

        {/* Product Detail Card */}
        <div className="grid overflow-hidden rounded-2xl border border-slate-100 bg-white shadow-xl shadow-slate-200/60 sm:rounded-3xl md:grid-cols-2">

          {/* Product Image */}
          <div className="relative flex items-center justify-center overflow-hidden bg-slate-100 p-4 sm:p-6 md:p-5 lg:p-8">
            <img
              src={productkid.image || productkid.img}
              alt={productkid.name}
              className="h-64 w-full object-contain transition duration-500 hover:scale-105 sm:h-80 md:h-[480px] lg:h-[600px] xl:h-[700px]"
            />
          </div>

          {/* Product Information */}
          <div className="flex min-w-0 flex-col justify-center p-4 sm:p-7 md:p-6 lg:p-10 xl:p-12">

            <p className="text-xs font-bold uppercase tracking-[0.16em] text-blue-600 sm:text-sm sm:tracking-[0.2em]">
              LysaFashion Kids Collection
            </p>

            <h1 className="mt-3 break-words text-2xl font-black leading-tight text-slate-900 sm:mt-4 sm:text-3xl lg:text-4xl">
              {productkid.name}
            </h1>

            <p className="mt-4 text-2xl font-black text-blue-600 sm:mt-5 sm:text-3xl">
              ${price.toFixed(2)}
            </p>

            <div className="my-5 h-px bg-slate-200 sm:my-6" />

            <p className="text-sm leading-6 text-slate-500 sm:text-base sm:leading-7">
              Discover cute, comfortable, and stylish kids'
              fashion with {productkid.name}. Perfect for
              everyday wear, playtime, and special occasions.
            </p>

            {/* Select Size */}
            <div className="mt-6 sm:mt-8">
              <div className="mb-3 flex flex-wrap items-center justify-between gap-2 sm:mb-4">
                <h2 className="font-bold text-slate-900">
                  Select Size
                </h2>

                <span className="text-sm text-slate-500">
                  Selected: {size}
                </span>
              </div>

              <div className="flex flex-wrap gap-2 sm:gap-3">
                {["S", "M", "L", "XL"].map((item) => (
                  <button
                    key={item}
                    type="button"
                    onClick={() => {
                      setSize(item);
                      setMessage("");
                    }}
                    aria-pressed={size === item}
                    className={`flex h-10 w-10 items-center justify-center rounded-lg border-2 text-sm font-bold transition sm:h-12 sm:w-12 sm:rounded-xl sm:text-base ${
                      size === item
                        ? "border-blue-600 bg-blue-600 text-white shadow-lg shadow-blue-200"
                        : "border-slate-200 bg-white text-slate-700 hover:border-blue-400"
                    }`}
                  >
                    {item}
                  </button>
                ))}
              </div>
            </div>

            {/* Quantity */}
            <div className="mt-6 sm:mt-8">
              <h2 className="mb-3 font-bold text-slate-900 sm:mb-4">
                Quantity
              </h2>

              <div className="flex w-fit items-center overflow-hidden rounded-xl border border-slate-200">
                <button
                  type="button"
                  onClick={() =>
                    setQuantity((current) =>
                      Math.max(1, current - 1)
                    )
                  }
                  disabled={quantity <= 1}
                  aria-label="Decrease quantity"
                  className="flex h-10 w-10 items-center justify-center transition hover:bg-slate-100 disabled:opacity-40 sm:h-12 sm:w-12"
                >
                  <Minus size={17} />
                </button>

                <span className="min-w-12 px-2 text-center font-bold text-slate-900 sm:min-w-14">
                  {quantity}
                </span>

                <button
                  type="button"
                  onClick={() =>
                    setQuantity((current) => current + 1)
                  }
                  aria-label="Increase quantity"
                  className="flex h-10 w-10 items-center justify-center transition hover:bg-slate-100 sm:h-12 sm:w-12"
                >
                  <Plus size={17} />
                </button>
              </div>
            </div>

            {/* Total Price */}
            <div className="mt-6 flex items-center justify-between gap-3 rounded-xl bg-blue-50 p-3 sm:mt-7 sm:rounded-2xl sm:p-4">
              <span className="text-sm font-semibold text-slate-600 sm:text-base">
                Total Price
              </span>

              <span className="text-xl font-black text-blue-700 sm:text-2xl">
                ${(price * quantity).toFixed(2)}
              </span>
            </div>

            {/* Add to Cart */}
            <button
              type="button"
              onClick={handleAddToCart}
              className="mt-5 flex w-full items-center justify-center gap-2 rounded-xl bg-blue-600 px-4 py-3.5 text-sm font-bold text-white shadow-lg shadow-blue-200 transition hover:bg-blue-700 active:scale-[0.98] sm:mt-6 sm:gap-3 sm:px-6 sm:py-4 sm:text-base"
            >
              <ShoppingBag size={20} />
              Add to Cart
            </button>

            {/* Success Message */}
            {message && (
              <div
                role="status"
                className="mt-4 flex items-start gap-2 break-words rounded-xl border border-green-200 bg-green-50 p-3 text-sm font-medium text-green-700 sm:p-4"
              >
                <Check size={18} className="mt-0.5 shrink-0" />
                <span>{message}</span>
              </div>
            )}

            <p className="mt-4 text-center text-xs text-slate-400 sm:mt-5">
              Thank you for shopping with LysaFashion.
            </p>

          </div>
        </div>
      </div>
    </div>
  );
}

export default Kidproductdetail;
