import React from "react";

import { client } from "../lib/client";
import { Product, HeroBanner, FooterBanner } from "../componets";

const Home = ({ products, bannerData }) => (
  <div>
    <HeroBanner heroBanner={bannerData.length && bannerData[0]} />
    {/* {console.log(bannerData[0].image[0].asset._ref)} */}
    <div className="products-heading">
      <h2>Best Selling Products</h2>
      <p>Pictures of many variations</p>
    </div>
    <div className="products-container">
      {products?.map((product) => (
        <Product key={product._id} product={product} />
      ))}
    </div>
    <FooterBanner footerBanner={bannerData && bannerData[0]} />
  </div>
);

export const getServerSideProps = async () => {
  const query = `*[_type == 'product']`;
  const products = await client.fetch(query);

  const bannerQuery = `*[_type == 'banner']`;
  const bannerData = await client.fetch(bannerQuery);

  return {
    props: { products, bannerData },
  };
};

export default Home;
