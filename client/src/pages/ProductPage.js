import React from "react";
import Navbar from "../components/Navbar";
import Announcement from "../components/Announcement";
import SelectBox from "../components/SelectBox";
import { popularProducts } from "../data";
import Wrapper from "../assets/wrapper/ProductPage";
import Product from "../components/Product";

function ProductPage() {
  return (
    <Wrapper>
      <Navbar />
      <Announcement />
      <h1>Dresses</h1>
      <div className="options">
        <div className="filter">
          <SelectBox label="Filter Products:" name="filter" list={["Yellow"]} />
          <select name="size" id="size">
            <option value="m">M</option>
          </select>
        </div>
        <div className="sortProducts">
          <SelectBox label="sort products:" name="sort" list={["Price(asc)"]} />
        </div>
      </div>
      <div className="showCase">
        {popularProducts.map((item) => (
          <div className="rit">
            <Product item={item} />
          </div>
        ))}
      </div>
    </Wrapper>
  );
}

export default ProductPage;
