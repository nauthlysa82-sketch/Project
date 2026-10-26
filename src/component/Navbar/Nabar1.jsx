
import { Routes, Route } from "react-router-dom";
import Navbar from "./Navbar";

import Home from "../../Page/Home";
import Men from "../../Page/Men";
import Women from "../../Page/Women";
import Kids from "../../Page/Kids";

import Productdetail from "../Productdetail";
import Menproductdetail from "../Menproductdetail";
import Womenproductdetail from "../Womenproductdetail";
import Kidproductdetail from "../Kidproductdetail";

function Nabar1() {
  return (
    <>
      <Navbar />

      <Routes>
        {/* Main pages */}
        <Route path="/" element={<Home />} />
        <Route path="/men" element={<Men />} />
        <Route path="/women" element={<Women />} />
        <Route path="/kids" element={<Kids />} />

        {/* General product details */}
        <Route
          path="/products/:id"
          element={<Productdetail />}
        />

        {/* Men product details */}
        <Route
          path="/products/men/:id"
          element={<Menproductdetail />}
        />

        {/* Women product details */}
        <Route
          path="/products/women/:id"
          element={<Womenproductdetail />}
        />

        {/* Kids product details */}
        <Route
          path="/products/kids/:id"
          element={<Kidproductdetail />}
        />
      </Routes>
    </>
  );
}

export default Nabar1;
