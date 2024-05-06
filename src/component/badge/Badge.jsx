import React from "react";
import { FaTruck } from "react-icons/fa";
import { RxCrossCircled } from "react-icons/rx";
import "../../App.css";

function Badge({ setshowBadge }) {
  return (
    <div className="w-100 badge-bg py-3 text-white flex justify-center items-center  ">
      <span className="flex justify-center items-center text-xl gap-3">
        <FaTruck />
        <h1 className="">Free Delivery for first 3 Orders</h1>
      </span>
      <RxCrossCircled
        className="absolute right-8 text-3xl"
        onClick={() => setshowBadge(false)}
      />
    </div>
  );
}

export default Badge;
