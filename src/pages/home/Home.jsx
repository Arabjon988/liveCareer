import React from "react";
// Components
import Hero from "../../components/hero/Hero";
import Product from "../../components/product/Product";
import Rek from "../../components/rek/Rek";
import Text from "../../components/text/Text";
import Free from "../../components/free/Free";

const Home = () => {
  return (
    <div>
      <Hero />
      <Rek />
      <Text />
      <Product />
      <Free />
    </div>
  );
};

export default Home;
