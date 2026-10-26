
import React from "react";
import { Link, useParams } from "react-router-dom";
import { ShoppingBag, ArrowLeft } from "lucide-react";
import menproducts from "./assets/MenProduct";

function Menproductdetail() {
  const { id } = useParams();

  const productmen = menproducts.find(
    (item) => item.id === Number(id)
  );

  if (!productmen) {
    return (
      <div className="p-12 text-center">
        
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-blue-50/50 px-6 py-12">
      <div className="mx-auto max-w-6xl">
        <Link
          to="/men"
          className="mb-8 inline-flex items-center gap-2 text-blue-700 hover:underline"
        >
          <ArrowLeft size={18} />
          Back to Home
        </Link>

        <div className="grid gap-10 rounded-3xl bg-white p-6 shadow-lg md:grid-cols-2 md:p-10">
          <div className="overflow-hidden rounded-2xl bg-gray-50">
            <img
              src={productmen.image}
              alt={productmen.name}
              className="h-[350px] w-full object-contain md:h-[500px]"
            />
          </div>

          <div className="flex flex-col justify-center">
            <p className="mb-3 font-semibold uppercase tracking-widest text-blue-600">
              {productmen.category} Collection
            </p>

            <h1 className="text-3xl font-bold text-gray-900 md:text-4xl">
              {productmen.name}
            </h1>

            <p className="mt-5 text-3xl font-bold text-blue-700">
              ${productmen.price.toFixed(2)}
            </p>

            <p className="mt-5 leading-7 text-gray-600">
              Discover stylish fashion with {product.name}.
              A great choice for your everyday look.
            </p>

            <button
              onClick={() =>
                alert(`${menproducts.name} selected!`)
              }
              className="mt-8 flex items-center justify-center gap-3 rounded-xl bg-blue-600 px-6 py-4 font-semibold text-white transition hover:bg-blue-700"
            >
              <ShoppingBag size={20} />
              {productmen.addToCart}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Menproductdetail;