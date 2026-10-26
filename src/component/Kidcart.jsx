
import React from "react";
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import Kidproducts from "./assets/KidProduct .js";

function Kidcart() {
  return (
    <div >
      <div className="">

        {/* Banner Image */}
        <div className="text-center">
          <img
            src="https://i.pinimg.com/1200x/d7/01/c5/d701c5a9f982760b833b1b25d2bf791d.jpg"
            alt="Kids Fashion"
            className="block h-[300px] w-full  object-cover sm:h-[400px] lg:h-[450px]"
          />

         
      
        </div>

        {/* Section Heading */}
        <div className="mb-8 mt-12 flex flex-wrap items-end justify-between gap-4 mx-auto max-w-7xl">
          <div>
            <p className="text-sm font-semibold text-blue-600">
              KIDS COLLECTION
            </p>

            <h2 className="mt-2 text-2xl font-extrabold text-slate-900 sm:text-3xl">
              Kids' Products
            </h2>
          </div>

          <p className="rounded-full border border-blue-100 bg-white px-4 py-2 text-sm font-medium text-blue-700">
            {Kidproducts.length} Products
          </p>
        </div>

        {/* Kids Product Cards */}
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 mx-auto max-w-7xl">
          {Kidproducts.map((pr) => (
            <div
              key={pr.id}
              className="group overflow-hidden rounded-2xl border border-blue-100 bg-white shadow-sm transition duration-300 hover:-translate-y-2 hover:border-blue-300 hover:shadow-xl hover:shadow-blue-100"
            >
              {/* Product Image */}
              <Link
                to={`/products/kids/${pr.id}`}
                className="relative block overflow-hidden bg-blue-50"
              >
                <img
                  src={pr.image || pr.img}
                  alt={pr.name}
                  loading="lazy"
                  className="h-64 w-full object-cover transition duration-500 group-hover:scale-105"
                />

                <span className="absolute left-3 top-3 rounded-full bg-white/95 px-3 py-1.5 text-xs font-bold text-blue-700 shadow-sm">
                  {pr.category || "Kids"}
                </span>
              </Link>

              {/* Product Details */}
              <div className="p-5">
                <p className="text-xs font-medium uppercase tracking-wider text-blue-400">
                  Kids Product #{pr.id}
                </p>

                <Link to={`/products/kids/${pr.id}`}>
                  <h3 className="mt-2 truncate text-lg font-bold text-slate-800 transition group-hover:text-blue-600">
                    {pr.name}
                  </h3>
                </Link>

                <div className="mt-4 flex items-center justify-between gap-3">
                  <p className="text-xl font-extrabold text-blue-600">
                    $
                    {Number(
                      pr.price ?? pr.newPrice ?? 0
                    ).toFixed(2)}
                  </p>

                  <Link
                    to={`/products/kids/${pr.id}`}
                    className="inline-flex items-center gap-1 rounded-lg bg-blue-600 px-3 py-2.5 text-sm font-bold text-white transition hover:bg-blue-700"
                  >
                    Details
                    <ArrowRight size={16} />
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Empty Products */}
        {Kidproducts.length === 0 && (
          <div className="rounded-2xl border border-blue-100 bg-white px-4 py-16 text-center">
            <h3 className="text-xl font-bold text-slate-800">
              No Kids Products Available
            </h3>

            <p className="mt-2 text-slate-500">
              Kids' products will appear here soon.
            </p>
          </div>
        )}
      </div>
    </div>
  );
}

export default Kidcart;
