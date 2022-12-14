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
              img={record.img}
              quantity={record.Quantity}
            />{" "}
          </div>
        );
      })}
    </div>
  );
};

export default Products;
