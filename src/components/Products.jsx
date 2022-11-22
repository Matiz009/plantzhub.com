import React from "react";
import TopMenu from "./TopMenu";
import data from "./PlantsData.json";
import Product from "./Product";

const Products = () => {
  return (
    <div>
      <TopMenu />
      <br />
      <br />
      {data.map((record) => {
        return (
          <div className="col md-4">
            <Product
              title={record.title}
              price={record.price}
              type={record.type}
              img={record.img}
            />{" "}
          </div>
        );
      })}
    </div>
  );
};

export default Products;
