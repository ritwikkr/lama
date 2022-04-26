import React from "react";
import Wrapper from "../assets/wrapper/Categories";
import { categories } from "../data";

function Categories() {
  return (
    <Wrapper>
      {categories.map((item) => (
        <div className="card">
          <div className="image">
            <div className="darkOverlay"></div>
            <img src={item.img} alt={item.title} />
          </div>
          <div className="title">
            <h1>{item.title}</h1>
            <button>SHOP NOW</button>
          </div>
        </div>
      ))}
    </Wrapper>
  );
}

export default Categories;
