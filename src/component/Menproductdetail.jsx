
import React, { useState } from "react";
import { Link, useParams } from "react-router-dom";
import {
  ShoppingBag,
  ArrowLeft,
  Minus,
  Plus,
  Check,
} from "lucide-react";

import menproducts from "./assets/MenProduct";

function Menproductdetail() {
  const { id } = useParams();

  const productmen = menproducts.find(
    (item) => item.id === Number(id)
  );

  const [size, setSize] = useState("M");
  const [quantity, setQuantity] = useState(1);
  const [message, setMessage] = useState("");

  if (!productmen) {
    return (
      <div >
        
      </div>
    );
  }

  const price = Number(
    productmen.price ?? productmen.newPrice ?? 0
  );

  const handleAddToCart = () => {
    setMessage(
      `${productmen.name} | Size: ${size} | Quantity: ${quantity}`
    );
  };

  return (
    <div className="min-h-screen bg-slate-50 px-4 py-8 sm:px-6 sm:py-12">
      <div className="mx-auto max-w-7xl">

        {/* Back to Men */}
        <Link
          to="/men"
          className="mb-8 inline-flex items-center gap-2 font-semibold text-slate-600 transition hover:text-blue-600"
        >
          <ArrowLeft size={18} />
          Back to Men
        </Link>

        {/* Product Detail Card */}
        <div className="grid overflow-hidden rounded-3xl border border-slate-100 bg-white shadow-xl shadow-slate-200/60 md:grid-cols-2">

          {/* Long Product Image */}
          <div className="relative flex min-h-[500px] items-center justify-center overflow-hidden bg-slate-100 p-4 sm:min-h-[600px] sm:p-8 lg:min-h-[750px]">

           

            <img
              src={productmen.image}
              alt={productmen.name}
              className="h-[480px] w-full object-contain transition duration-500 hover:scale-105 sm:h-[580px] lg:h-[700px]"
            />
          </div>

          {/* Product Information */}
          <div className="flex flex-col justify-center p-6 sm:p-10 lg:p-12">

            <p className="text-sm font-bold uppercase tracking-[0.2em] text-blue-600">
              LysaFashion Men's Collection
            </p>

            <h1 className="mt-4 text-3xl font-black leading-tight text-slate-900 sm:text-4xl">
              {productmen.name}
            </h1>

            <p className="mt-5 text-3xl font-black text-blue-600">
              ${price.toFixed(2)}
            </p>

            <div className="my-6 h-px bg-slate-200" />

            <p className="leading-7 text-slate-500">
              Discover stylish men's fashion with{" "}
              {productmen.name}. Perfect for everyday wear,
              comfort, and a modern look.
            </p>

            {/* Select Size */}
            <div className="mt-8">
              <div className="mb-4 flex items-center justify-between">
                <h2 className="font-bold text-slate-900">
                  Select Size
                </h2>

                <span className="text-sm text-slate-500">
                  Selected: {size}
                </span>
              </div>

              <div className="flex flex-wrap gap-3">
                {["S", "M", "L", "XL"].map((item) => (
                  <button
                    key={item}
                    type="button"
                    onClick={() => setSize(item)}
                    className={`flex h-12 w-12 items-center justify-center rounded-xl border-2 font-bold transition ${
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
            <div className="mt-8">
              <h2 className="mb-4 font-bold text-slate-900">
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
                  className="flex h-12 w-12 items-center justify-center transition hover:bg-slate-100 disabled:opacity-40"
                >
                  <Minus size={17} />
                </button>

                <span className="min-w-14 text-center font-bold text-slate-900">
                  {quantity}
                </span>

                <button
                  type="button"
                  onClick={() =>
                    setQuantity((current) => current + 1)
                  }
                  aria-label="Increase quantity"
                  className="flex h-12 w-12 items-center justify-center transition hover:bg-slate-100"
                >
                  <Plus size={17} />
                </button>
              </div>
            </div>

            {/* Total Price */}
            <div className="mt-7 flex items-center justify-between rounded-2xl bg-blue-50 p-4">
              <span className="font-semibold text-slate-600">
                Total Price
              </span>

              <span className="text-2xl font-black text-blue-700">
                ${(price * quantity).toFixed(2)}
              </span>
            </div>

            {/* Add to Cart */}
            <button
              type="button"
              onClick={handleAddToCart}
              className="mt-6 flex w-full items-center justify-center gap-3 rounded-xl bg-blue-600 px-6 py-4 font-bold text-white shadow-lg shadow-blue-200 transition hover:bg-blue-700 active:scale-[0.98]"
            >
              <ShoppingBag size={20} />
              Add to Cart
            </button>

            {/* Success Message */}
            {message && (
              <div
                role="status"
                className="mt-4 flex items-start gap-2 rounded-xl border border-green-200 bg-green-50 p-4 text-sm font-medium text-green-700"
              >
                <Check size={18} className="mt-0.5 shrink-0" />
                <span>{message}</span>
              </div>
            )}

            <p className="mt-5 text-center text-xs text-slate-400">
              Thank you for shopping with LysaFashion.
            </p>

          </div>
        </div>
      </div>
    </div>
  );
}

export default Menproductdetail;