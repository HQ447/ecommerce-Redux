import { RxCross2 } from "react-icons/rx";
import "../component.css";

function Account({ setshowAccount }) {
  return (
    <div className="checkout fixed w-full h-screen flex justify-center items-center dark z-30 ">
      <div className="flex  bg-white flex-col gap-4 py-16 px-10 -xsm:px-7  w-2/3 -lg:w-4/5 -md:w-11/12 relative">
        <RxCross2
          className=" absolute top-4 right-5 text-3xl cursor-pointer"
          onClick={() => setshowAccount(false)}
        />
        <h1 className=" w-full flex flex-col gap-2">
          <p className="text-2xl">Welcome! Please Login to continue </p>

          <p className=" text-blue-500">New member? Regester here</p>
        </h1>
        <div className="box -sm:flex-wrap  flex gap-1">
          <div className="left w-2/4 -sm:w-full   flex flex-col px-8 -xsm:px-2  gap-8">
            <div className="flex flex-col gap-1">
              <span className="  text-gray-600 flex gap-2 items-center">
                Phone Number or Email
              </span>
              <input
                type="text"
                placeholder="Please Enter Phone Number or Email"
                name=""
                id=""
                className=" px-3 py-2"
              />
            </div>
            <div className="flex flex-col gap-1 -sm:mb-3 ">
              <span className="  text-gray-600 flex gap-2 items-center">
                Password
              </span>
              <input
                type="password"
                placeholder="Please enter your password"
                name=""
                id=""
                className=" px-3 py-2 bg"
              />
            </div>
          </div>
          <div className="right w-2/4  -sm:w-full  flex flex-col px-8 -xsm:px-2 ">
            <div className="flex flex-col gap-4">
              <button className="border-2 hover:scale-95 transition-all bg-orange-600 rounded-md text-white py-3">
                Login
              </button>
              or Login with
              <button className="border-2 hover:scale-95 transition-all bg-blue-900 rounded-md text-white py-3">
                Facebook
              </button>
              <button className="border-2 hover:scale-95 transition-all bg-red-700 rounded-md text-white py-3">
                Google
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Account;
