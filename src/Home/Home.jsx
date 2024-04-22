import React from "react";

import Header from "./Header";
import Footer from "./Footer";
import Calculator from "../components/Calculator";
import Quote from "../Quote/Quote";

const Home = () => {
  return (
    <div>
      <Header />
      <Quote />
      <Calculator />
      <Footer />
    </div>
  );
};

export default Home;
