import { useState } from "react";
import { IoCartOutline } from "react-icons/io5";
import { useDispatch, useSelector } from "react-redux";
import { addToCart, addToTempArr } from "../../store/cartSlice";

import { ToastContainer, toast } from "react-toastify";

function Card({ obj, setDisplay }) {
  const [istrue, setistrue] = useState(false);
  const dispatch = useDispatch();

  const cart = useSelector((state) => state.cart.cart);

  function handleClick(obj) {
    if (cart.indexOf(obj) !== -1) return;
    else {
      dispatch(addToCart(obj));
    }
  }

  function updateTempArr(obj) {
    dispatch(addToTempArr(obj));
    setDisplay(true);
  }

  return (
    <div
      onMouseEnter={() => setistrue(true)}
      onMouseLeave={(prev) => setistrue(!prev)}
      className="flex flex-col p-3 transition-all box-shadow hover:scale-95 -xsm:w-36  w-48 bg-white   rounded-md cursor-pointer relative overflow-hidden"
    >
      <div
        style={istrue ? { right: "0" } : { right: "-40px" }}
        className="absolute  top-7 bg-white text-black p-1 text-3xl rounded-tl-md rounded-bl-md transition-all "
      >
        <IoCartOutline onClick={() => handleClick(obj)} />
      </div>

      <img
        src={obj.image}
        alt="loading error"
        className=" h-44 -xsm:h-32 rounded-md"
        onClick={() => updateTempArr(obj)}
      />
      <h1 className="flex text-sm" onClick={() => updateTempArr(obj)}>
        {obj.name}
      </h1>
      {/* <p className="px-2" onClick={() => updateTempArr(obj)}>
        <del className="text-red-700 font-bold text-sm">${obj.old_price}</del>
      </p> */}
      <p className=" my-1 text-lg" onClick={() => updateTempArr(obj)}>
        Price ${obj.new_price}
      </p>
      <button
        className=" text-sm w-full py-2 text-white bg-red-600 active:bg-red-700 "
        onClick={() => handleClick(obj)}
      >
        ADD TO CART
      </button>
      <ToastContainer />
    </div>
  );
}

export default Card;
