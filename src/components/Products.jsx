import React from "react";
import data from "../data";

const Products = () => {
  const cardItem = (items) => {
    return (
      <div class="card" style={{ width: "18rem" }}>
        <img src={items.image} class="card-img-top" alt={items.title} />
        <div class="card-body">
          <h5 class="card-title">{items.title}</h5>
          <p class="lead">${items.price}</p>
          <a href="#" class="btn btn-outline-primary">
            Go somewhere
          </a>
        </div>
      </div>
    );
  };
  return (
    <div>
      <div className=" py-5 bg-slate-100 w-full h-screen">
        <div className="flex flex-row">
          <div className="w-full text-center">
            <h1>Product</h1>
            <hr />
          </div>
        </div>
      </div>
      <div className="w-screen h-screen">
        <div className="row">{data.map(cardItem)}</div>
      </div>
    </div>
  );
};

export default Products;
