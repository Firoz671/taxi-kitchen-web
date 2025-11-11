import React, { use, useState } from "react";
import CountCard from "./CountCard";
import OrderCard from "./OrderCard";
import Cooking from "./Cooking";
import Cooked from "./Cooked";
import { toast } from "react-toastify";
const OrderContainer = ({ dataPromise }) => {
  const theData = use(dataPromise);

  const [cooking, setCooking] = useState([]);

  const [cooked, setCooked] = useState([]);

  const handleClick = (data) => {
    const isExist = cooking.find((item) => item.id === data.id);

    if (isExist) {
      toast.error("Already in cooking list");
      return;
    }
    const newCooking = [...cooking, data];
    setCooking(newCooking);
    console.log(newCooking);
  };

  const handleCooked = (data) => {
    const newCooked = [...cooked, data];
    setCooked(newCooked);

    const remaining = cooking.filter((item) => item.id !== data.id);
    setCooking(remaining);
  };
  return (
    <div>
      <CountCard
        cooked={cooked}
        cooking={cooking}
        theData={theData}
      ></CountCard>
      <div className="w-11/12 mx-auto flex flex-col lg:flex-row">
        <div className="grid w-[70%]  card  p-5 gap-5">
          {theData.map((data) => (
            <OrderCard
              handleClick={handleClick}
              key={data.id}
              data={data}
            ></OrderCard>
          ))}
        </div>
        <div className="w-[30%] flex flex-col">
          <div>
            <h1 className="text-center">Cooking</h1>
            {cooking.map((item, index) => (
              <Cooking
                key={index}
                item={item}
                handleCooked={handleCooked}
              ></Cooking>
            ))}
          </div>
          <div>
            <h1 className="text-center py-10">Ready</h1>
            {cooked.map((item, index) => (
              <Cooked key={index} item={item}></Cooked>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default OrderContainer;
