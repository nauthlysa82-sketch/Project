
import React from "react";
import { Link, useParams } from "react-router-dom";
import { ShoppingBag, ArrowLeft } from "lucide-react";
import products from "./assets/Product";

function Productdetail() {
  const { id } = useParams();

  const product = products.find(
    (item) => item.id === Number(id)
  );

  if (!product) {
    return (
      <div className="p-12 text-center">
        
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-blue-50/50 px-6 py-12">
      <div className="mx-auto max-w-6xl">
        <Link
          to="/"
          className="mb-8 inline-flex items-center gap-2 text-blue-700 hover:underline"
        >
          <ArrowLeft size={18} />
          Back to Home
        </Link>

        <div className="grid gap-10 rounded-3xl bg-white p-6 shadow-lg md:grid-cols-2 md:p-10">
          <div className="overflow-hidden rounded-2xl bg-gray-50">
            <img
              src={product.image}
              alt={product.name}
              className="h-[350px] w-full object-contain md:h-[500px]"
            />
          </div>

          <div className="flex flex-col justify-center">
            <p className="mb-3 font-semibold uppercase tracking-widest text-blue-600">
              {product.category} Collection
            </p>

            <h1 className="text-3xl font-bold text-gray-900 md:text-4xl">
              {product.name}
            </h1>

            <p className="mt-5 text-3xl font-bold text-blue-700">
              ${product.price.toFixed(2)}
            </p>

            <p className="mt-5 leading-7 text-gray-600">
              Discover stylish fashion with {product.name}.
              A great choice for your everyday look.
            </p>

            <button
              onClick={() =>
                alert(`${product.name} selected!`)
              }
              className="mt-8 flex items-center justify-center gap-3 rounded-xl bg-blue-600 px-6 py-4 font-semibold text-white transition hover:bg-blue-700"
            >
              <ShoppingBag size={20} />
              {product.addToCart}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Productdetail;