import React from "react";
import Wrapper from "../assets/wrapper/DetailsPage";
import Announcement from "../components/Announcement";
import Navbar from "../components/Navbar";
import SelectBox from "../components/SelectBox";
import Newsletter from "../components/Newsletter";
import Footer from "../components/Footer";

function DetailsPage() {
  return (
    <Wrapper>
      <Navbar />
      <Announcement />
      <div className="details-board">
        <div className="image">
          <img
            src="https://static.jaypore.com/tr:w-500,h-662,e-sharpen/media/catalog/product/8/4/840018373-1_1.jpg"
            alt=""
          />
        </div>
        <div className="product-details">
          <h1>Denim Jumpsuit</h1>
          <p>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ipsum
            illum corporis tempore, inventore ullam esse, quibusdam laboriosam
            sed dolore dolores repellendus. Omnis tempore nisi quas praesentium
            architecto, magni repellat, eius blanditiis cum ipsum ipsa iste
            quidem eligendi nobis consequatur modi voluptatibus maxime, nostrum
            molestiae. Minima necessitatibus sit totam excepturi hic.
          </p>
          <p className="price">$ 20</p>
          <div className="row">
            <div className="color">
              <p>Color</p>
            </div>
            <div className="size">
              <SelectBox name="size" list={["XS"]} />
            </div>
          </div>
          <div className="row">
            <div className="quantity">
              <button>-</button>
              <input type="number" name="quant" id="quant" placeholder="1" />
              <button>+</button>
            </div>
            <div className="add-to-cart">
              <button>Add to cart</button>
            </div>
          </div>
        </div>
      </div>
      <Newsletter />
      <Footer />
    </Wrapper>
  );
}

export default DetailsPage;
