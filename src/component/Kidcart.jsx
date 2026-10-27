
import React from "react";
import { Link } from "react-router-dom";
import { ShoppingBag, ArrowRight, Sparkles } from "lucide-react";
import Kidproducts from "./assets/KidProduct .js";

function Kidcart() {
  return (
    <div className="min-h-screen bg-blue-50/50">

      {/* Hero Banner */}
      <section className="relative overflow-hidden bg-slate-900">
        <img
          src="https://i.pinimg.com/1200x/d7/01/c5/d701c5a9f982760b833b1b25d2bf791d.jpg"
          alt="Kids Fashion Collection"
          className="absolute inset-0 h-full w-full object-cover object-center opacity-60"
        />

        <div className="absolute inset-0 bg-gradient-to-r from-slate-950/85 via-slate-900/45 to-transparent" />

        <div className="relative mx-auto flex min-h-[300px] max-w-7xl items-center px-4 py-12 sm:min-h-[400px] sm:px-6 sm:py-16 lg:min-h-[450px] lg:px-10">
          <div className="max-w-xl text-white">

            <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-white/30 bg-white/10 px-3 py-2 text-xs backdrop-blur sm:mb-5 sm:px-4 sm:text-sm">
              <Sparkles size={16} />
              Cute Styles, Happy Kids
            </div>

            <h1 className="text-3xl font-black leading-tight sm:text-5xl lg:text-6xl">
              Little Fashion,
              <span className="block text-sky-300">
                Big Smiles
              </span>
            </h1>

            <p className="mt-4 max-w-md text-sm leading-6 text-slate-100 sm:mt-5 sm:text-lg sm:leading-7">
              Discover adorable, comfortable, and stylish
              outfits for your little ones at LysaFashion.
            </p>

            <a
              href="#kid-products"
              className="mt-6 inline-flex items-center gap-2 rounded-xl bg-sky-500 px-5 py-3 text-sm font-bold text-white transition hover:bg-sky-400 sm:mt-8 sm:gap-3 sm:px-6 sm:py-3.5 sm:text-base"
            >
              Explore Collection
              <ArrowRight size={19} />
            </a>

          </div>
        </div>
      </section>

      {/* Kids Products */}
      <section
        id="kid-products"
        className="mx-auto max-w-7xl px-3 py-10 sm:px-6 sm:py-14 lg:px-8 lg:py-20"
      >

        {/* Section Heading */}
        <div className="mb-7 flex flex-wrap items-end justify-between gap-3 sm:mb-9">
          <div>
            <p className="text-xs font-bold uppercase tracking-[0.2em] text-sky-600 sm:text-sm">
              LysaFashion Collection
            </p>

            <h2 className="mt-2 text-2xl font-black text-slate-900 sm:text-4xl">
              Kids' Collection
            </h2>

            <p className="mt-3 text-sm text-slate-500 sm:text-base">
              Adorable outfits for every little adventure.
            </p>
          </div>

          <span className="rounded-full bg-sky-100 px-3 py-1.5 text-xs font-bold text-sky-700 sm:text-sm">
            {Kidproducts.length} Products
          </span>
        </div>

        {/* Product Grid */}
        {Kidproducts.length > 0 ? (
          <div className="grid grid-cols-2 gap-3 sm:gap-5 md:grid-cols-3 lg:grid-cols-4 lg:gap-6">

            {Kidproducts.map((pr) => (
              <article
                key={pr.id}
                className="group min-w-0 overflow-hidden rounded-xl border border-sky-100 bg-white transition duration-300 hover:-translate-y-1 hover:border-sky-200 hover:shadow-xl hover:shadow-sky-100/70 sm:rounded-2xl sm:hover:-translate-y-1.5"
              >

                {/* Product Image */}
                <Link
                  to={`/products/kids/${pr.id}`}
                  className="relative block overflow-hidden bg-sky-50"
                >
                  <img
                    src={pr.image || pr.img}
                    alt={pr.name}
                    loading="lazy"
                    className="h-36 w-full object-cover transition duration-500 group-hover:scale-105 sm:h-52 lg:h-60"
                  />

                  <span className="absolute left-2 top-2 rounded-md bg-white/95 px-2 py-1 text-[9px] font-bold uppercase tracking-wide text-sky-700 shadow-sm sm:left-3 sm:top-3 sm:rounded-lg sm:px-2.5 sm:py-1.5 sm:text-xs">
                    {pr.category || "Kids"}
                  </span>

                  <span className="absolute bottom-3 right-3 hidden h-10 w-10 translate-y-3 items-center justify-center rounded-full bg-white text-sky-600 opacity-0 shadow-lg transition duration-300 group-hover:translate-y-0 group-hover:opacity-100 sm:flex">
                    <ArrowRight size={19} />
                  </span>
                </Link>

                {/* Product Details */}
                <div className="p-3 sm:p-5">

                  <p className="text-[9px] font-semibold uppercase tracking-wider text-slate-400 sm:text-xs">
                    Kids Product #{pr.id}
                  </p>

                  <Link to={`/products/kids/${pr.id}`}>
                    <h3 className="mt-2 truncate text-sm font-bold text-slate-800 transition group-hover:text-sky-600 sm:text-base">
                      {pr.name}
                    </h3>
                  </Link>

                  <div className="mt-3 flex flex-col gap-2 sm:flex-row sm:flex-wrap sm:items-center sm:justify-between">

                    <p className="text-base font-extrabold text-sky-600 sm:text-lg">
                      ${Number(
                        pr.price ?? pr.newPrice ?? 0
                      ).toFixed(2)}
                    </p>

                    <Link
                      to={`/products/kids/${pr.id}`}
                      aria-label={`View ${pr.name} details`}
                      className="inline-flex w-full items-center justify-center gap-1 rounded-lg bg-slate-900 px-2 py-2 text-[11px] font-semibold text-white transition hover:bg-sky-500 sm:w-auto sm:gap-1.5 sm:px-3 sm:py-2.5 sm:text-sm"
                    >
                      <span>Add to Cart</span>
                    </Link>

                  </div>
                </div>
              </article>
            ))}

          </div>
        ) : (

          /* Empty Products */
          <div className="rounded-2xl border border-sky-100 bg-white px-4 py-16 text-center">
            <ShoppingBag
              size={42}
              className="mx-auto text-sky-400"
            />

            <h3 className="mt-4 text-xl font-bold text-slate-800">
              No Kids Products Available
            </h3>

            <p className="mt-2 text-sm text-slate-500">
              Little fashion styles will appear here soon.
            </p>
          </div>

        )}
      </section>
    </div>
  );
}

export default Kidcart;
