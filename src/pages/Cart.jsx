import { RiDeleteBin5Line } from "react-icons/ri";
import { IoAddCircle } from "react-icons/io5";
import { IoRemoveCircleSharp } from "react-icons/io5";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "../App.css";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import {
  removeFromCart,
  updateCartItem,
  updateDeliveryCharges,
} from "../store/cartSlice";
import { useEffect, useState } from "react";

function Cart({ setCheckout }) {
  const [grandTotal, setgrandTotal] = useState(0);
  const [deliveryType, setDeliveryType] = useState(3);
  const dispatch = useDispatch();

  const cart = useSelector((state) => state.cart.cart);
  const devliveryCharges = useSelector((state) => state.cart.devliveryCharges);

  function removeItem(id) {
    dispatch(removeFromCart(id));
    handleTotalPrice();
  }

  function handleChange(obj, d) {
    const updatedAmount = obj.amount + d;
    if (updatedAmount >= 1) {
      const updatedItem = { ...obj, amount: updatedAmount };
      dispatch(updateCartItem(updatedItem));
    }
  }

  function handleTotalPrice() {
    let p = 0;
    {
      cart.map((item) => (p += item.new_price * item.amount));
    }
    setgrandTotal(p);
  }

  function handleClick() {
    if (cart.length !== 0) {
      setCheckout(true);
    } else {
      toast.error("Cart is empty!");
    }
  }

  function handleDeliveryType(e) {
    const newDeliveryType = e.target.value; // Get the updated delivery type directly from the event
    setDeliveryType(newDeliveryType); // Update local state with the new delivery type
    dispatch(updateDeliveryCharges(newDeliveryType)); // Dispatch the updated delivery type
  }

  useEffect(() => {
    handleTotalPrice();
  });

  return (
    <div className="flex w-full -md:flex-wrap">
      <div className=" w-full px-10 -lg:px-4 py-8 gap-3 overflow-auto flex flex-col ">
        <h1 className="w-full text-2xl flex justify-center items-center">
          {cart.length == 0 ? "No Product in the List" : ""}
        </h1>
        {cart.map((obj) => (
          <div
            key={obj.id}
            className="flex py-2 px-8 -xsm:px-2 -xsm:flex-wrap border-2 -lg:px-4  gap-7 relative rounded-md "
          >
            <div className="flex -xsm:flex-wrap -xsm:text-center -xsm:mx-auto w-full gap-3  justify-center items-center">
              <img
                src={obj.image}
                alt=""
                style={{ border: `7px solid #fffffffc` }}
                className=" w-25 h-28 -xsm:w-5/6 -xsm:h-40"
              />
              <h1 className=" text-lg ">{obj.name}</h1>
            </div>

            <div className="flex w-full justify-center  gap-3 items-center ">
              <IoRemoveCircleSharp
                className="text-3xl text-red-600"
                onClick={() => handleChange(obj, -1)}
              />
              <p>{obj.amount}</p>
              <IoAddCircle
                className="text-3xl text-green-700"
                onClick={() => handleChange(obj, 1)}
              />
            </div>
            <h1 className="text-xl font-bold w-full   justify-center flex items-center">
              ${obj.new_price * obj.amount}
            </h1>

            <div className="text-3xl -xsm:absolute -xsm:top-4 -xsm:right-3 -xsm:z-10 justify-center flex items-center">
              <RiDeleteBin5Line
                onClick={() => removeItem(obj.id)}
                className="  text-3xl text-red-500 cursor-pointer"
              />
            </div>
          </div>
        ))}
      </div>
      <div className="sidebar -md:w-full -md:justify-center -md:items-center  background flex flex-col py-10  relative -lg:px-7 px-10  ">
        <div className="w-full flex flex-col gap-8 -md:w-1/2 -sm:w-3/4 -xsm:w-11/12">
          <h1 className="text-3xl font-bold ">Summary</h1>

          <div className="flex  justify-between">
            <h1 className="text-lg font-bold">ITEMS {cart.length}</h1>
            <h1 className="font-bold">$ {grandTotal}</h1>
          </div>

          <div className="flex flex-col  gap-4">
            <h1 className="font-bold text-lg">SHIPPING</h1>
            <select
              name="shipping-type"
              onChange={handleDeliveryType}
              id=""
              className="py-3 px-4 lg:w-80 "
            >
              <option value="3">Normal-Delivery-$3.00</option>
              <option value="5">Standard-Delivery-$5.00</option>
              <option value="10">Urgent-Delivery-$10.00</option>
            </select>
          </div>
          <div className="flex flex-col gap-4">
            <h1 className="font-bold text-lg">GIVE CODE</h1>
            <input
              type="number"
              className="p-3 px-4 bg-white "
              placeholder="Enter Your Code"
            />
          </div>

          <div className="flex flex-col gap-4 mt-20">
            <div className="flex w-full text-xl font-bold  justify-between">
              <h1>TOTAL PRICE</h1>
              <h1>$ {grandTotal + devliveryCharges * cart.length}</h1>
            </div>
            <div className="">
              <button
                className=" bg-black py-3 w-full rounded-sm text-white hover:scale-95 transition-all"
                onClick={handleClick}
              >
                PROCEED TO CHECKOUT
              </button>
            </div>
          </div>
        </div>
      </div>
      <ToastContainer position="top-center" autoClose={2000} />
    </div>
  );
}

export default Cart;
