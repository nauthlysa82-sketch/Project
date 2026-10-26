
import React from "react";
import { Link } from "react-router-dom";
import {
  Sparkles,
  ArrowRight,
  ShoppingBag,
} from "lucide-react";

import womenproducts from "./assets/WomenProduct";

function WomenProduct() {
  return (
    <div className="min-h-screen bg-blue-50/50">

      {/* Hero Banner */}
      <section className="relative overflow-hidden">
        <img
          src="https://i.pinimg.com/1200x/56/48/e4/5648e46e5e6c60ed427307e989aca097.jpg"
          alt="Women Fashion Collection"
          className="absolute inset-0 h-full w-full object-cover"
        />

        {/* Dark Overlay */}
        <div className="absolute inset-0 bg-gradient-to-r from-slate-950/90 via-slate-900/60 to-transparent" />

        {/* Banner Content */}
        <div className="relative mx-auto flex min-h-[420px] max-w-7xl items-center px-6 py-16 sm:min-h-[500px] lg:px-10">
          <div className="max-w-xl text-white">

            <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-white/30 bg-white/10 px-4 py-2 text-sm backdrop-blur">
              <Sparkles size={16} />
              Women's New Collection
            </div>

            <h1 className="text-4xl font-black leading-tight sm:text-5xl lg:text-6xl">
              Discover Your
              <span className="block text-blue-400">
                Beautiful Style
              </span>
            </h1>

            <p className="mt-5 max-w-md leading-7 text-slate-200 sm:text-lg">
              Explore elegant, modern, and comfortable fashion
              designed to make you feel confident every day.
            </p>

            <a
              href="#womenproducts"
              className="mt-8 inline-flex items-center gap-3 rounded-xl bg-blue-600 px-6 py-3.5 font-bold text-white transition hover:bg-blue-500"
            >
              Explore Collection
              <ArrowRight size={19} />
            </a>

          </div>
        </div>
      </section>

      {/* Product Section */}
      <section
        id="womenproducts"
        className="mx-auto max-w-7xl px-4 py-14 sm:px-6 lg:px-8 lg:py-20"
      >
        {/* Section Heading */}
        <div className="mb-10 flex flex-wrap items-end justify-between gap-4">
          <div>
            <p className="text-sm font-bold uppercase tracking-[0.2em] text-blue-600">
              LysaFashion Collection
            </p>

            <h2 className="mt-2 text-3xl font-black text-slate-900 sm:text-4xl">
              Women's Fashion
            </h2>

            <p className="mt-3 text-slate-500">
              Find your favorite outfit and express your style.
            </p>
          </div>

          <span className="rounded-full bg-blue-100 px-4 py-2 text-sm font-semibold text-blue-700">
            {womenproducts.length} Products
          </span>
        </div>

        {/* Product Grid */}
        <div className="grid grid-cols-2 gap-4 sm:gap-6 md:grid-cols-3 lg:grid-cols-4">
          {womenproducts.map((pr) => (
            <article
              key={pr.id}
              className="group overflow-hidden rounded-2xl border border-slate-200 bg-white transition duration-300 hover:-translate-y-1 hover:border-blue-200 hover:shadow-xl hover:shadow-blue-100/70"
            >
              {/* Product Image */}
              <Link
                to={`/products/women/${pr.id}`}
                className="relative block overflow-hidden bg-slate-100"
              >
                <img
                  src={pr.image || pr.img}
                  alt={pr.name}
                  loading="lazy"
                  className="h-48 w-full object-cover transition duration-500 group-hover:scale-105 sm:h-60 lg:h-64"
                />

                <span className="absolute left-3 top-3 rounded-lg bg-white/95 px-3 py-1.5 text-xs font-bold text-blue-700 shadow-sm">
                  {pr.category || "Women"}
                </span>

                <span className="absolute bottom-3 right-3 flex h-10 w-10 translate-y-2 items-center justify-center rounded-full bg-white text-blue-600 opacity-0 shadow-lg transition group-hover:translate-y-0 group-hover:opacity-100">
                  <ArrowRight size={19} />
                </span>
              </Link>

              {/* Product Details */}
              <div className="p-3 sm:p-5">
                <p className="text-xs font-semibold uppercase tracking-wider text-slate-400">
                  WomenProduct #{pr.id}
                </p>

                <Link to={`/products/women/${pr.id}`}>
                  <h3 className="mt-2 truncate font-bold text-slate-800 transition hover:text-blue-600">
                    {pr.name}
                  </h3>
                </Link>

                {/* Price and View Button */}
                <div className="mt-4 flex flex-wrap items-center justify-between gap-2">
                  <p className="text-lg font-extrabold text-blue-600">
                    $
                    {Number(
                      pr.price ?? pr.newPrice ?? 0
                    ).toFixed(2)}
                  </p>

                  <Link
                    to={`/products/women/${pr.id}`}
                    aria-label={`View ${pr.name}`}
                    className="inline-flex items-center gap-1.5 rounded-lg bg-slate-900 px-3 py-2 text-xs font-bold text-white transition hover:bg-blue-600 sm:text-sm"
                  >
                    Add to Cart
                  </Link>
                </div>
              </div>
            </article>
          ))}
        </div>

        {/* Empty State */}
        {womenproducts.length === 0 && (
          <div className="rounded-2xl border border-dashed border-slate-300 bg-white py-16 text-center">
            <ShoppingBag
              size={42}
              className="mx-auto text-slate-400"
            />

            <h3 className="mt-4 text-xl font-bold text-slate-800">
              No products available
            </h3>

            <p className="mt-2 text-slate-500">
              Please add products to your WomenProduct file.
            </p>
          </div>
        )}
      </section>

    </div>
  );
}

export default WomenProduct;