import { UtensilsCrossed } from "lucide-react";
import React from "react";

const OrderCard = ({ data }) => {
  const {
    id,
    order_no,
    order_title,
    table_no,
    quantity,
    special_instruction,
    waiterId,
  } = data;
  return (
    <div className="">
      {/* <span>{id}</span>
      <span>{order_no}</span>
      <span>{order_title}</span>
      <span>{table_no}</span>
      <span>{special_instruction}</span>
      <span>{waiterId}</span>
      <span>{quantity}</span> */}

      <div className="card shadow-sm w-full bg-base-100 h-full p-3">
        <span className="badge badge-warning">{order_no}</span>
        <span className="flex">
          <UtensilsCrossed />
          {quantity} {order_title}
        </span>
        <span className="text-yellow-500">Special Instruction</span>
        <p>{special_instruction}</p>
      </div>
    </div>
  );
};

export default OrderCard;
