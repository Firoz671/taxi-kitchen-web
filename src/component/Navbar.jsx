import React from "react";
import logo from "../assets/logo.png";
const Navbar = () => {
  return (
    <div className="flex justify-between items-center">
      <div className="flex gap-1 items-center">
        <img className="size-[70px]" src={logo} alt="" />
        <p className="text-2xl font-extrabold">
          Taxi <span className="text-yellow-500">Kitchen</span>
        </p>
      </div>
      <div className="">
        <ul className="flex gap-15">
          <li className="bb">Orders</li>
          <li className="bb">Food</li>
          <li className="bb">Table</li>
          <li className="bb">Layout</li>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
