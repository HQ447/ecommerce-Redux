import { RxCross2 } from "react-icons/rx";
import { useDispatch } from "react-redux";
import { updateFormData } from "../../store/cartSlice";
import "../component.css";
import { useState } from "react";
import { FaRegAddressCard } from "react-icons/fa";
import { IoMdMail } from "react-icons/io";
import { FaUser } from "react-icons/fa";

function Checkout({ setCheckout, setInvoice }) {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [address, setAddress] = useState("");
  const dispatch = useDispatch();

  const handleFormSubmit = (e) => {
    e.preventDefault();
    const formData = {
      name: name,
      email: email,
      address: address,
    };
    dispatch(updateFormData(formData));
    setName("");
    setEmail("");
    setAddress("");
    setCheckout(false);
    setInvoice(true);
  };

  return (
    <div className="checkout fixed w-full h-screen -xsm:h-full flex justify-center items-center dark z-40 ">
      <form
        action="#"
        onSubmit={handleFormSubmit}
        className="w-full flex justify-center"
      >
        <div className="flex  bg-white flex-col gap-4 p-8 -xsm:p-6 -md:p-5 w-3/4 -lg:w-5/6 -md:w-11/12  relative">
          <RxCross2
            className=" absolute top-4 right-5 text-3xl cursor-pointer"
            onClick={() => setCheckout(false)}
          />
          <h1 className="font-bold text-xl w-full flex justify-center">
            Checkout Form
          </h1>
          <div className="box -sm:flex-wrap  flex gap-1">
            <div className="left w-2/4 -sm:w-full  flex flex-col px-8 -md:px-3 gap-3 -xsm:gap-2">
              <h1 className=" font-bold text-xl">Billing Address</h1>
              <div className="flex flex-col gap-1">
                <span className="  text-gray-600 flex gap-2 items-center">
                  <FaUser className="text-xl" /> Full Name
                </span>
                <input
                  type="text"
                  placeholder="john Dev"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  name=""
                  id=""
                  className=" px-3 py-2 -xsm:py-1"
                />
              </div>
              <div className="flex flex-col gap-1">
                <span className="  text-gray-600 flex gap-2 items-center">
                  <IoMdMail className="text-xl" /> Email
                </span>
                <input
                  type="email"
                  placeholder="johnDev123@gmail.com"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  name=""
                  id=""
                  className=" px-3 py-2 -xsm:py-1 bg"
                />
              </div>
              <div className="flex flex-col gap-1">
                <span className="  text-gray-600 flex gap-2 items-center">
                  <FaRegAddressCard className="text-xl" /> Address
                </span>
                <input
                  type="text"
                  placeholder="Main city newyork"
                  value={address}
                  onChange={(e) => setAddress(e.target.value)}
                  name=""
                  id=""
                  className=" px-3 py-2 -xsm:py-1"
                />
              </div>
              {/* <div className="flex flex-col gap-1">
                <span className="text-lg flex items-center gap-2">
                  <FaCity className="text-xl" /> City
                </span>
                <input
                  type="text"
                  placeholder="Newyork"
                  name=""
                  id=""
                  className=" px-3 py-2 bg"
                  required
                />
              </div> */}
            </div>
            <div className="right w-2/4 -sm:w-full   flex flex-col px-8 -md:px-3  gap-3 -xsm:gap-2">
              <h1 className=" font-bold text-xl">Payment</h1>
              <div className="flex gap-1">
                <img
                  src="https://t3.ftcdn.net/jpg/05/74/43/12/360_F_574431210_icdpLDlDxAfsNacnV56vIWb4pCRnaNBA.jpg"
                  alt=""
                  className=" w-12 hover:scale-110"
                />
                <img
                  alt=""
                  src="https://www.dynamicsinc.com/upload/banks/multi-purpose/894/896/Carousel_FuelPerks.png"
                  className=" w-12 hover:scale-110"
                />
                <img
                  alt=""
                  className=" w-12 hover:scale-110"
                  src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR3rfAwJ__c0g0bdCRZhg3dqmV_GtArfk4qMluyNVX9BUUjrwyW3ESC-iJtPDLwmN-dSDM&usqp=CAU"
                />
                <img
                  alt=""
                  className=" w-12 hover:scale-110"
                  src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR95ERnwxxB4vmPcriKA1SSZM9oawdZPmFdRBnvXQIvrtKH-qdQ7jRiOvMKungy0LZ-UL4&usqp=CAU"
                />
              </div>
              <div className="flex flex-col gap-1">
                <span className="text-md text-gray-600"> Name on Card</span>
                <input
                  type="text"
                  placeholder="john Dev"
                  name=""
                  id=""
                  className=" px-3 py-2 -xsm:py-1"
                  required
                />
              </div>
              <div className="flex flex-col gap-1">
                <span className="text-md text-gray-600">
                  Credit card number
                </span>
                <input
                  type="number"
                  placeholder="1111-2222-3333-4444"
                  name=""
                  id=""
                  className=" px-3 py-2 -xsm:py-1"
                />
              </div>
              {/* <div className="flex flex-col gap-1">
                <span className="text-md">Exp Month</span>
                <input
                  type="text"
                  placeholder="December"
                  name=""
                  id=""
                  className=" px-3 py-2"
                  required
                />
              </div> */}
              <div className="flex w-full gap-4 ">
                <div className="flex w-full  flex-col ">
                  <span className="text-md text-gray-600">Exp Year</span>
                  <input
                    type="number"
                    placeholder="2030"
                    name=""
                    id=""
                    className=" px-3 py-2 -xsm:py-1 w-full"
                    required
                  />
                </div>
                <div className="flex  w-full flex-col ">
                  <span className="text-md text-gray-600">CVV</span>
                  <input
                    type="number"
                    placeholder="123"
                    name=""
                    id=""
                    className=" px-3 py-2 -xsm:py-1 w-full "
                    required
                  />
                </div>
              </div>
            </div>
          </div>

          <button
            className=" bg-black font-bold hover:scale-95 transition-all text-white py-3 mt-4 w-full px-3 rounded-md mx-auto"
            type="submit"
          >
            CONTINUTE TO CHECKOUT
          </button>
        </div>
      </form>
    </div>
  );
}

export default Checkout;
