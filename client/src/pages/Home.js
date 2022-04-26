import React from "react";
import Navbar from "../components/Navbar";
import styled from "styled-components";
import Announcement from "../components/Announcement";
import Slider from "../components/Slider";
import Categories from "../components/Categories";
import ProductsList from "../components/ProductsList";
import Newsletter from "../components/Newsletter";
import Footer from "../components/Footer";

function Home() {
  return (
    <Wrapper>
      <Announcement />
      <Navbar />
      <Slider />
      <Categories />
      <ProductsList />
      <Newsletter />
      <Footer />
    </Wrapper>
  );
}

export default Home;

const Wrapper = styled.div``;
