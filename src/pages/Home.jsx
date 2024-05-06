import "../App.css";
import { NavLink } from "react-router-dom";

function Home() {
  return (
    <div className="flex flex-col justify-center px-10 -sm:px-3 w-full home">
      <div className="products w-fit gap-8 -sm:w-full -sm:items-center flex flex-col text-white ">
        <h5 className="text-xl">TRENDY TREASURES</h5>
        <h1 className="text-6xl -lg:text-5xl -md:text-4xl -sm:text-3xl -sm:text-center  font-bold tracking-wider">
          Elevate Your Look{" "}
          <span className="text-yellow-400">
            With <br />
            Every Click.
          </span>{" "}
          Shop Today
        </h1>
        <p className="-sm:text-center">
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Tenetur,
          error!
        </p>
        <NavLink to={"/Product"}>
          <button className=" hover:scale-95 bg-white text-black font-bold rounded-md py-4 w-2/6 -sm:w-40 ">
            SHOP NOW
          </button>
        </NavLink>
      </div>
    </div>
  );
}
export default Home;
