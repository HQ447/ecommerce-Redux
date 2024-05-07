import React from "react";
import { FaTruck } from "react-icons/fa";
import { RxCrossCircled } from "react-icons/rx";
import "../../App.css";

function Badge({ setshowBadge }) {
  return (
    <div className="w-100 badge-bg py-3 -xsm:py-2 text-white flex justify-center items-center  ">
      <span className="flex justify-center items-center text-xl -xsm:text:lg gap-3">
        <FaTruck className="-xsm:text:sm" />
        <h1 className="-xsm:text:sm">Free Delivery for first 3 Orders</h1>
      </span>
      <RxCrossCircled
        className="absolute right-8 -xsm:right-4 text-3xl -xsm:text-2xl"
        onClick={() => setshowBadge(false)}
      />
    </div>
  );
}

export default Badge;
