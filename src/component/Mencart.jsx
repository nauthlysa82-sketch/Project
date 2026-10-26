
import React from "react";
import { Link } from "react-router-dom";
import { ShoppingBag, ArrowRight, Sparkles } from "lucide-react";
import menproducts from "./assets/MenProduct";

function Mencart() {
  return (
    <div className="min-h-screen bg-slate-50">

      {/* Hero Banner */}
      <section className="relative overflow-hidden bg-slate-900">
        <img
          src="https://i.pinimg.com/1200x/c9/ee/35/c9ee3597ad9e3347662068f7ae2560fe.jpg"
          alt="Men's Fashion Collection"
          className="absolute inset-0 h-full w-full object-cover opacity-50"
        />

        <div className="absolute inset-0 bg-gradient-to-r from-slate-950/90 via-slate-900/50 to-transparent" />

        <div className="relative mx-auto flex min-h-[360px] max-w-7xl items-center px-6 py-16 sm:min-h-[430px] lg:px-10">
          <div className="max-w-xl text-white">

            <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-white/30 bg-white/10 px-4 py-2 text-sm backdrop-blur">
              <Sparkles size={16} />
              New Season Collection
            </div>

            <h1 className="text-4xl font-black leading-tight sm:text-5xl lg:text-6xl">
              Discover Men's
              <span className="block text-blue-400">
                Unique Style
              </span>
            </h1>

            <p className="mt-5 max-w-md text-base leading-7 text-slate-200 sm:text-lg">
              Explore modern men's fashion designed for
              confidence, comfort, and everyday style.
            </p>

            <a
              href="#men-products"
              className="mt-8 inline-flex items-center gap-3 rounded-xl bg-blue-600 px-6 py-3.5 font-bold text-white transition hover:bg-blue-500"
            >
              Explore Collection
              <ArrowRight size={19} />
            </a>

          </div>
        </div>
      </section>

      {/* Men's Products */}
      <section
        id="men-products"
        className="mx-auto max-w-7xl px-4 py-14 sm:px-6 lg:px-8 lg:py-20"
      >
        {/* Section Heading */}
        <div className="mb-9">
          <p className="text-sm font-bold uppercase tracking-[0.2em] text-blue-600">
            LysaFashion Collection
          </p>

          <h2 className="mt-2 text-3xl font-black text-slate-900 sm:text-4xl">
            Men's Collection
          </h2>

          <p className="mt-3 text-slate-500">
            Find your next favorite outfit.
          </p>
        </div>

        {/* Product Grid */}
        <div className="grid grid-cols-2 gap-4 sm:gap-6 md:grid-cols-3 lg:grid-cols-4">

          {menproducts.map((pr) => (
            <article
              key={pr.id}
              className="group overflow-hidden rounded-2xl border border-slate-200 bg-white transition duration-300 hover:-translate-y-1.5 hover:border-blue-200 hover:shadow-xl hover:shadow-blue-100/70"
            >

              {/* Product Image */}
              <Link
                to={`/products/men/${pr.id}`}
                className="relative block overflow-hidden bg-slate-100"
              >
                <img
                  src={pr.image}
                  alt={pr.name}
                  loading="lazy"
                  className="h-48 w-full object-cover transition duration-500 group-hover:scale-105 sm:h-60 lg:h-64"
                />

                <span className="absolute left-2 top-2 rounded-lg bg-white/95 px-2.5 py-1.5 text-[10px] font-bold uppercase tracking-wide text-blue-700 shadow-sm sm:left-3 sm:top-3 sm:text-xs">
                  {pr.category || "Men"}
                </span>

                <span className="absolute bottom-3 right-3 flex h-10 w-10 translate-y-3 items-center justify-center rounded-full bg-white text-blue-600 opacity-0 shadow-lg transition duration-300 group-hover:translate-y-0 group-hover:opacity-100">
                  <ArrowRight size={19} />
                </span>
              </Link>

              {/* Product Details */}
              <div className="p-3 sm:p-5">

                <p className="text-[10px] font-semibold uppercase tracking-wider text-slate-400 sm:text-xs">
                  Product #{pr.id}
                </p>

                <Link to={`/products/men/${pr.id}`}>
                  <h3 className="mt-2 truncate text-sm font-bold text-slate-800 transition group-hover:text-blue-600 sm:text-base">
                    {pr.name}
                  </h3>
                </Link>

                <div className="mt-3 flex flex-wrap items-center justify-between gap-2">

                  <p className="text-base font-extrabold text-blue-600 sm:text-lg">
                    ${Number(pr.price ?? pr.newPrice ?? 0).toFixed(2)}
                  </p>

                  <Link
                    to={`/products/men/${pr.id}`}
                    aria-label={`View ${pr.name} details`}
                    className="flex items-center gap-1.5 rounded-lg bg-slate-900 px-2.5 py-2 text-xs font-semibold text-white transition hover:bg-blue-600 sm:px-3 sm:text-sm"
                  >
                    <ShoppingBag size={15} />
                    <span>View Details</span>
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