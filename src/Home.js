import React from "react";
import "./Home.css";
import Product from "./Product.js";

function Home() {
  return (
    <div className="home">
      <div className="home__container">
        <img
          className="home__img"
          src="https://m.media-amazon.com/images/I/718nGM+uw6L._SX3000_.jpg"
          alt=""
        />

        <div className="home__row">
          <Product
            title="The Lean Startup: How Constant Innovation Creates Radically Successfull Businesses Paperback"
            price="11.96"
            rating={5}
            image="https://images-na.ssl-images-amazon.com/images/I/51N-u8AsmdL._SX342_SY445_QL70_ML2_.jpg"
          />
          <Product
            id="49538094"
            title="Kenwood kMix Stand Mixer for Baking, Stylish Kitchen Mixer with K-beater, Dough Hook and Whisk, 5 Litre Glass Bowl"
            price={239.0}
            rating={4}
            image="https://m.media-amazon.com/images/I/61WJrVNsajL._AC_SL1187_.jpg"
          />
        </div>

        <div className="home__row">
          <Product
            id="22538094"
            title="Apple Watch Series 7 GPS 41mm"
            price={199.99}
            rating={3}
            image="https://store.storeimages.cdn-apple.com/4668/as-images.apple.com/is/ML773_VW_34FR+watch-45-stainless-graphite-cell-7s_VW_34FR_WF_CO?wid=1400&hei=1400&trim=1%2C0&fmt=p-jpg&qlt=95&.v=1630042305000%2C1645753506827"
          />
          <Product
            id="4053802294"
            title="Amazon Echo (3rd generation) | Smart speaker woth Alexa, Charcoal Fabric"
            price={98.99}
            rating={5}
            image="http://assets.stickpng.com/thumbs/5eb156a174bb7d0004ae61b6.png"
          />
          <Product
            id="32149538094"
            title="New Apple iPad Pro (12.9-inch, Wi-Fi, 128GB) - Silver (4th Generation)"
            price={598.99}
            rating={4}
            image="https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/refurb-ipad-pro-12-wifi-silver-2020?wid=2000&hei=2000&fmt=jpeg&qlt=90&.v=1626721066000"
          />
        </div>

        <div className="home__row">
          <Product
            id="9822538094"
            title="Samsung LC9R9XSSUXEN 49' Curved LED Gaming Monitor - Super Ultra Wide Dual WQHD 5120 x 1440"
            price={1094.98}
            rating={4}
            image="https://m.media-amazon.com/images/I/818jj0DF-dL._AC_SX522_.jpg"
          />
        </div>
      </div>
    </div>
  );
}

export default Home;
