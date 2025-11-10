import React, { use } from "react";
import CountCard from "./CountCard";
import OrderCard from "./OrderCard";

const OrderContainer = ({ dataPromise }) => {
  const theData = use(dataPromise);
  console.log(theData);
  return (
    <div>
      <CountCard></CountCard>
      <div className="w-11/12 mx-auto flex flex-col lg:flex-row">
        <div className="grid  card  p-5 gap-5">
          {theData.map((data) => (
            <OrderCard data={data}></OrderCard>
          ))}
        </div>
        <div className="">
          <h1 className="text-center">Hello</h1>
        </div>
      </div>
    </div>
  );
};

export default OrderContainer;
