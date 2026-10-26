
import { Routes, Route } from "react-router-dom";
import Navbar from "./Navbar";

import Home from "../../Page/Home";
import Men from "../../Page/Men";
import Women from "../../Page/Women";
import Kids from "../../Page/Kids";
import Productdetail from "../Productdetail";
import Menproductdetail from "../Menproductdetail";

function Nabar1() {
  return (
    <>
      <Navbar />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/men" element={<Men />} />
        <Route path="/women" element={<Women />} />
        <Route path="/kids" element={<Kids />} />
        <Route
          path="/products/:id"
          element={<Productdetail />}
          
        />
        <Route
          path="/meproducts/:id"
          element={<Menproductdetail />}

        />
      </Routes>
    </>
  );
}

export default Nabar1;
