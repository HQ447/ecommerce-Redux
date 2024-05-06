import { RxCross2 } from "react-icons/rx";
import "../component.css";
// import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useSelector, useDispatch } from "react-redux";
import { addToCart, clearTempArr } from "../../store/cartSlice";

function DisplayProduct({ setDisplay }) {
  const tempArr = useSelector((state) => state.cart.tempArr);
  const dispatch = useDispatch();
  const cart = useSelector((state) => state.cart.cart);

  function handleClick(item) {
    const isItemInCart = cart.some((cartItem) => cartItem.id === item.id);

    setDisplay(false);
    dispatch(clearTempArr());
    if (isItemInCart) {
      return;
    } else {
      dispatch(addToCart(item));
    }
  }

  return (
    <div className="display  w-full h-screen dark flex justify-center items-center fixed z-30">
      <div className="box boxShadow -xl:w-2/3 -lg:w-3/4 -md:w-4/5 -sm:w-11/12  flex w-2/4 -md:py-2 -md:px-4 p-6 -sm:p-4 bg-white rounded-md relative">
        <RxCross2
          className="text-3xl absolute top-2 right-3 cursor-pointer"
          onClick={() => {
            setDisplay(false);
            dispatch(clearTempArr());
          }}
        />

        {tempArr.map((item) => (
          <div
            key={item.id}
            className=" w-full flex items-center -sm:flex-wrap  "
          >
            <img
              src={item.image}
              alt=""
              className=" h-64 -sm:h-40 -sm:w-3/4 -sm:mx-auto -xsm:w-full w-2/4"
            />
            <div className="flex flex-col gap-3 p-6">
              <h1 className="text-3xl -sm:text-xl">{item.name}</h1>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis
                quidem voluptatum, fugit expedita vitae unde quae voluptate quis
                odio distinctio!
              </p>
              <h1 className="text-sm font-bold  text-red-500">
                <del>Old Price ${item.old_price}</del>
              </h1>
              <h1 className="text-xl font-bold">New Price ${item.new_price}</h1>
              <button
                className=" bg-red-500 text-white py-2"
                onClick={() => handleClick(item)}
              >
                ADD TO CART
              </button>
            </div>
          </div>
        ))}
      </div>
      {/* <ToastContainer position="top-centxer" autoClose={2000} /> */}
    </div>
  );
}

export default DisplayProduct;
