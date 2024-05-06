import { RxCross2 } from "react-icons/rx";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "../component.css";
import { useSelector } from "react-redux";
import { useState, useEffect } from "react";

function Invoice({ setInvoice }) {
  const formData = useSelector((state) => state.cart.formData);
  const cart = useSelector((state) => state.cart.cart);
  const devliveryCharges = useSelector((state) => state.cart.devliveryCharges);

  function countItems() {
    let count = 0;
    cart.map((obj) => (count += obj.amount));
    return count;
  }

  const [subtotal, settotal] = useState(0);

  function total() {
    let total = 0;
    cart.map((item) => (total += item.new_price * item.amount));
    settotal(total);
  }

  function handleClick() {
    setInvoice(false);
    toast("Order Confirmed!");
  }

  useEffect(() => {
    total();
  });

  return (
    <div className=" fixed w-full h-screen  flex justify-center items-center dark z-50 ">
      <div className="flex w-3/4 -lg:w-5/6 -md:w-11/12 -md:p-5 -sm:p-2  bg-white flex-col gap-4 p-10 relative">
        <RxCross2
          className=" absolute top-4 right-5 text-3xl cursor-pointer"
          onClick={() => setInvoice(false)}
        />
        <h1 className="font-bold text-2xl -xsm:text-xl w-full flex justify-center">
          Confirm Your Order
        </h1>
        <div className="flex -lg:flex-wrap gap-2 -xsm:text-sm">
          <table className="table w-full">
            <tr>
              <td className="-xsm:p-1">Customer Name</td>
              <td className="-xsm:p-1">{formData.name}</td>
            </tr>
            <tr>
              <td className="-xsm:p-1">Email Address</td>
              <td className="-xsm:p-1">{formData.email}</td>
            </tr>
            <tr>
              <td className="-xsm:p-1">Shipping Address</td>
              <td className="-xsm:p-1">{formData.address}</td>
            </tr>
            <tr>
              <td className="-xsm:p-1">Total items</td>
              <td className="-xsm:p-1">{cart.length}</td>
            </tr>
            <tr>
              <td className="-xsm:p-1">SubTotal</td>
              <td className="-xsm:p-1">${subtotal}</td>
            </tr>
            <tr>
              <td className="-xsm:p-1">Shipping Charges for Each Item</td>
              <td className="-xsm:p-1">${devliveryCharges}</td>
            </tr>
            <tr>
              <td className="-xsm:p-1">
                Shipping Charges for {cart.length} Item
              </td>
              <td className="-xsm:p-1">${devliveryCharges * cart.length}</td>
            </tr>
            <tr className="text-lg -xsm:text-sm font-bold last-tr">
              <td className="-xsm:p-1">With Shipping Charges</td>
              <td className="-xsm:p-1">
                ${subtotal + devliveryCharges * cart.length}
              </td>
            </tr>
          </table>

          <table className=" table w-full ">
            <h1 className="w-full text-center font-bold text-lg">
              Products Details
            </h1>

            <div className=" h-52 -xsm:h-32 py-3 overflow-auto ">
              <tr>
                <th>Product Name</th>
                <th>Quantity</th>
              </tr>
              {cart.map((obj) => (
                <tr key={obj.id} className="w-full justify-center">
                  <td className="-xsm:p-1">{obj.name}</td>
                  <td className="-xsm:p-1">{obj.amount}</td>
                </tr>
              ))}
            </div>
            <tr className="last-tr">
              <td className="-xsm:p-1">Total Items Qunatity</td>
              <td className="-xsm:p-1">{countItems()}</td>
            </tr>
          </table>
        </div>

        <button
          className=" bg-black text-white py-3 w-full px-3 rounded-md mx-auto font-bold  hover:scale-95 transition-all"
          onClick={handleClick}
        >
          CONFIRMED
        </button>
        <ToastContainer />
      </div>
    </div>
  );
}

export default Invoice;
