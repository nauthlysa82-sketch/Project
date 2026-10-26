
import React from "react";
import { Link } from "react-router-dom";
import { ArrowRight, Sparkles, ShoppingBag } from "lucide-react";
import menproducts from "./assets/MenProduct.js";

function Mencart() {
  return (
    <div className="min-h-screen bg-slate-50">
      {/* Hero Banner */}
      <section className="relative overflow-hidden">
        <img
          src="https://i.pinimg.com/1200x/49/cc/bd/49ccbd63962e528f93f6f65401fd0ba4.jpg"
          alt="Men's Fashion Collection"
          className="absolute inset-0 h-full w-full object-cover"
        />

        <div className="absolute inset-0 bg-gradient-to-r from-slate-950/90 via-slate-900/60 to-transparent" />

        <div className="relative mx-auto flex min-h-[420px] max-w-7xl items-center px-6 py-16 sm:min-h-[500px] lg:px-10">
          <div className="max-w-xl text-white">
            <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-white/30 bg-white/10 px-4 py-2 text-sm backdrop-blur">
              <Sparkles size={16} />
              Men's New Collection
            </div>

            <h1 className="text-4xl font-black leading-tight sm:text-5xl lg:text-6xl">
              Upgrade Your
              <span className="block text-blue-400">
                Everyday Style
              </span>
            </h1>

            <p className="mt-5 max-w-md leading-7 text-slate-200 sm:text-lg">
              Discover stylish, comfortable, and modern outfits
              designed for every occasion.
            </p>

            <a
              href="#menproducts"
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
        id="products"
        className="mx-auto max-w-7xl px-4 py-14 sm:px-6 lg:px-8 lg:py-20"
      >
        <div className="mb-10 flex flex-wrap items-end justify-between gap-4">
          <div>
            <p className="text-sm font-bold uppercase tracking-[0.2em] text-blue-600">
              LysaFashion Collection
            </p>

            <h2 className="mt-2 text-3xl font-black text-slate-900 sm:text-4xl">
              Men's Fashion
            </h2>

            <p className="mt-3 text-slate-500">
              Find your favorite outfit and express your style.
            </p>
          </div>

          <span className="rounded-full bg-blue-100 px-4 py-2 text-sm font-semibold text-blue-700">
            {menproducts.length} Products
          </span>
        </div>

        {/* Product Grid */}
        <div className="grid grid-cols-2 gap-4 sm:gap-6 md:grid-cols-3 lg:grid-cols-4">
          {menproducts.map((pr) => (
            <article
              key={pr.id}
              className="group overflow-hidden rounded-2xl border border-slate-200 bg-white transition duration-300 hover:-translate-y-1 hover:border-blue-200 hover:shadow-xl hover:shadow-blue-100/70"
            >
              {/* Product Image */}
              <Link
                to={`/products/${pr.id}`}
                className="relative block overflow-hidden bg-slate-100"
              >
                <img
                  src={pr.image || pr.img}
                  alt={pr.name}
                  loading="lazy"
                  className="h-48 w-full object-cover transition duration-500 group-hover:scale-105 sm:h-60 lg:h-64"
                />

                <span className="absolute left-3 top-3 rounded-lg bg-white/95 px-3 py-1.5 text-xs font-bold text-blue-700 shadow-sm">
                  {pr.category || "Men"}
                </span>

                <span className="absolute bottom-3 right-3 flex h-10 w-10 translate-y-2 items-center justify-center rounded-full bg-white text-blue-600 opacity-0 shadow-lg transition group-hover:translate-y-0 group-hover:opacity-100">
                  <ArrowRight size={19} />
                </span>
              </Link>

              {/* Product Details */}
              <div className="p-3 sm:p-5">
                <p className="text-xs font-semibold uppercase tracking-wider text-slate-400">
                  Product #{pr.id}
                </p>

                <Link to={`/products/${pr.id}`}>
                  <h3 className="mt-2 truncate font-bold text-slate-800 transition hover:text-blue-600">
                    {pr.name}
                  </h3>
                </Link>

                <div className="mt-4 flex flex-wrap items-center justify-between gap-2">
                  <p className="text-lg font-extrabold text-blue-600">
                    $
                    {Number(
                      pr.price ?? pr.newPrice ?? 0
                    ).toFixed(2)}
                  </p>

                  <Link
                    to={`/menproducts/${pr.id}`}
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

        
      </section>
    </div>
  );
}

export default Mencart;
