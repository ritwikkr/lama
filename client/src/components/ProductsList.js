import React from "react";
import Wrapper from "../assets/wrapper/ProductsList";
import { popularProducts } from "../data";
import Product from "./Product";

function ProductsList() {
  return (
    <Wrapper>
      {popularProducts.map((item) => (
        <div className="rit">
          <Product item={item} />
        </div>
      ))}
    </Wrapper>
  );
}

export default ProductsList;
