import React from "react";

function Footer() {
  const handleSubscribe = (e) => {
    e.preventDefault();
    alert("Thank you for subscribing!");
  };

  return (
    <footer className="mt-16 bg-white text-gray-700">
      <div className="mx-auto max-w-7xl px-6 py-12">

        <div className="grid grid-cols-1 gap-10 sm:grid-cols-2 lg:grid-cols-5">

          {/* Brand */}
          <div className="lg:col-span-2">
            <a href="/" className="text-3xl font-bold text-gray-900">
              Lysa<span className="text-blue-500">Fashion</span>
            </a>

            <p className="mt-4 max-w-sm leading-7 text-gray-500">
              Discover your style with modern fashion.
              Find your favorite outfits, shoes, and
              accessories for every occasion.
            </p>

            {/* Social Media */}
            <div className="mt-5 flex flex-wrap gap-3">
              <a
                href="https://www.instagram.com/"
                target="_blank"
                rel="noreferrer"
                className="rounded-full bg-gray-100 px-4 py-3 transition hover:bg-blue-600 hover:text-white"
              >
              Instagram
              </a>

              <a
                href="https://www.facebook.com/"
                target="_blank"
                rel="noreferrer"
                className="rounded-full bg-gray-100 px-4 py-3 transition hover:bg-blue-600 hover:text-white"
              >
              Facebook
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="mb-5 text-lg font-semibold text-gray-900">
              Quick Links
            </h3>

            <ul className="space-y-3">
              <li><a href="/" className="hover:text-blue-500">Home</a></li>
              <li><a href="/men" className="hover:text-blue-500">Men</a></li>
              <li><a href="/women" className="hover:text-blue-500">Women</a></li>
              <li><a href="/kids" className="hover:text-blue-500">Kids</a></li>
              <li><a href="/products" className="hover:text-blue-500">All Products</a></li>
            </ul>
          </div>

          {/* Customer Service */}
          <div>
            <h3 className="mb-5 text-lg font-semibold text-gray-900">
              Customer Service
            </h3>

            <ul className="space-y-3">
              <li><a href="/contact" className="hover:text-blue-500">Contact Us</a></li>
              <li><a href="#shipping" className="hover:text-blue-500">Shipping Information</a></li>
              <li><a href="#returns" className="hover:text-blue-500">Returns & Exchanges</a></li>
              <li><a href="#faq" className="hover:text-blue-500">FAQs</a></li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="mb-5 text-lg font-semibold text-gray-900">
              Contact Us
            </h3>

            <ul className="space-y-4 text-gray-600">
              <li> support@lysafashion.com</li>
              <li> Contact our support team</li>
              <li> Cambodia</li>
            </ul>
          </div>

        </div>

        {/* Newsletter */}
        <div className="mt-12 rounded-2xl bg-gray-100 p-6 md:flex md:items-center md:justify-between md:gap-8">
          <div>
            <h3 className="text-xl font-bold text-gray-900">
              Subscribe to Our Newsletter
            </h3>

            <p className="mt-2 text-gray-500">
              Get updates about new collections and special offers.
            </p>
          </div>

          <form
            onSubmit={handleSubscribe}
            className="mt-5 flex w-full flex-col gap-3 sm:flex-row md:mt-0 md:max-w-md"
          >
            <input
              type="email"
              required
              placeholder="Enter your email"
              className="min-w-0 flex-1 rounded-lg border border-gray-300 bg-white px-3 py-2 text-gray-900 outline-none focus:border-blue-500"
            />

            <button
              type="submit"
              className="rounded-lg bg-blue-600 px-5 py-3 font-semibold text-white transition hover:bg-blue-700"
            >
              Subscribe
            </button>
          </form>
        </div>
        <div className="mt-8 flex flex-col justify-between gap-4 border-t border-gray-200 pt-6 text-sm text-gray-500 sm:flex-row sm:items-center">
          <p>
            © {new Date().getFullYear()} LysaFashion. All rights reserved.
          </p>

          <p>Designed with love for your style.</p>
        </div>

      </div>
    </footer>
  )
}

export default Footer;