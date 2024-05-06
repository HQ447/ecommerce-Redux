import { useState } from "react";
import Data from "../component/Assets/Data";
import Card from "../component/Card/Card";
import { CiFilter } from "react-icons/ci";
import { RxCross2 } from "react-icons/rx";
import "../App.css";

function Product({ setDisplay }) {
  const [searchInp, setSearchInp] = useState("");
  const [filter, setfilter] = useState("all");
  const [brand, setBrand] = useState("all");
  const [priceRange, setPriceRange] = useState(100);

  const [showSidebar, setshowSidebar] = useState(false);

  function clearFilter() {
    setPriceRange(100);
    setSearchInp("");
    setBrand("all");
    setfilter("all");
  }

  function render() {
    if (filter == "all") return "Our";
    if (filter == "women") return "Women's";
    if (filter == "men") return "Men's";
    if (filter == "kid") return "Kid's";
  }

  return (
    <div className="flex px-12 -lg:px-8 -sm:px-0 w-full relative">
      <div
        onClick={() => setshowSidebar(true)}
        className="-lg:left-0 transition-all flex justify-center items-center z-10 border-2 bg-white box-shadow py-2 px-2 rounded-md absolute -left-44 top-20"
      >
        <CiFilter className="text-3xl " />
        <p>Filter Products</p>
      </div>

      <div
        className={` ${
          showSidebar ? "-lg:left-2" : ""
        } sidebar -lg:fixed -lg:-left-80 -lg:w-64 -lg:h-screen -lg:z-20 transition-all  box-shadow w-1/4 bg-white rounded-xl gap-3 my-6 py-4 flex flex-col  items-center relative`}
      >
        <RxCross2
          className="
        hidden -lg:flex text-2xl "
          onClick={() => setshowSidebar(false)}
        />
        <input
          type="text"
          placeholder="Search Your Item"
          className=" w-11/12 px-3 py-2 rounded-md  bg-transparent border-2"
          value={searchInp}
          onChange={(e) => setSearchInp(e.target.value)}
          name=""
          id=""
        />
        <div className="w-full flex flex-col gap-2 px-2  ">
          <h1 className="w-full py-3 rounded-lg ccf0e7 px-3 font-bold">
            Category
          </h1>
          <h1
            onClick={() => setfilter("all")}
            className=" cursor-pointer  ml-3 hover:font-bold"
          >
            All
          </h1>
          <h1
            onClick={() => setfilter("men")}
            className=" cursor-pointer  ml-3 hover:font-bold"
          >
            Men's
          </h1>
          <h1
            onClick={() => setfilter("women")}
            className=" cursor-pointer  ml-3 hover:font-bold"
          >
            Women's
          </h1>
          <h1
            onClick={() => setfilter("kid")}
            className=" cursor-pointer  ml-3 hover:font-bold"
          >
            Kid's
          </h1>
        </div>
        <div className="company w-full my-3 flex flex-col px-2 gap-4  items-center">
          <h1 className="w-full  py-3 ccf0e7 rounded-lg px-3 font-bold">
            Brand
          </h1>

          <select
            name="select-company"
            id=""
            className=" w-full border-2 px-3 py-2 rounded-md"
            onChange={(e) => setBrand(e.target.value)}
          >
            <option value="all">All</option>
            <option value="j.">Brand A</option>
            <option value="ndure">Brand B</option>
            <option value="gucci">Brand C</option>
          </select>
        </div>
        <div className="  w-full px-3">
          <h1 className="w-full  ccf0e7 py-3 rounded-lg px-3 font-bold">
            Price Range
          </h1>
          <p className="ml-4 my-2"> Less than ${priceRange}</p>
          <input
            type="range"
            name=""
            value={priceRange}
            onChange={(e) => setPriceRange(e.target.value)}
            maxLength={100}
            minLength={0}
            id=""
            className="mr-3 w-full slider"
          />
        </div>
        <button
          className="w-11/12 transition-all hover:scale-95 active:bg-red-700 px-3 py-2 bg-red-600 rounded-md text-white absolute bottom-3"
          onClick={clearFilter}
        >
          Clear Filter
        </button>
      </div>
      <div
        className="flex h-full overflow-auto flex-col items-center -xsm:px-1  py-7 lg:w-full"
        onClick={() => setshowSidebar(false)}
      >
        <h1 className="pb-8 text-3xl -xsm:text-2xl font-bold relative">
          {render()} <span className="span-line text-red-600">products</span>
        </h1>
        <div className="products w-full flex flex-wrap justify-center gap-6">
          {Data.filter((obj) => {
            if (
              searchInp === "" &&
              filter == "all" &&
              brand == "all" &&
              obj.new_price <= priceRange
            ) {
              return obj;
            } else if (
              obj.category == filter &&
              brand == "all" &&
              obj.name.toLowerCase().includes(searchInp.toLowerCase()) &&
              obj.new_price <= priceRange
            ) {
              return obj;
            } else if (
              filter == "all" &&
              obj.brand == brand &&
              obj.name.toLowerCase().includes(searchInp.toLowerCase()) &&
              obj.new_price <= priceRange
            ) {
              return obj;
            } else if (
              obj.category == filter &&
              obj.brand == brand &&
              obj.name.toLowerCase().includes(searchInp.toLowerCase()) &&
              obj.new_price <= priceRange
            ) {
              return obj;
            } else if (
              filter == "all" &&
              brand == "all" &&
              obj.name.toLowerCase().includes(searchInp.toLowerCase()) &&
              obj.new_price <= priceRange
            ) {
              return obj;
            }
          }).map((obj) => {
            return <Card obj={obj} key={obj.id} setDisplay={setDisplay} />;
          })}
        </div>
      </div>
    </div>
  );
}

export default Product;
