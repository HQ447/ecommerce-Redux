import "./App.css";
import Navbar from "./component/Navbar/Navbar";
import { Routes, Route } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Home from "./pages/Home";
import Product from "./pages/Product";
import Cart from "./pages/Cart";
import Badge from "./component/badge/Badge";
import { useState } from "react";
import Checkout from "./component/Checkout/Checkout";
import DisplayProduct from "./component/DisplayProduct/DisplayProduct";
import Invoice from "./component/Invoice/Invoice";
import Account from "./component/account/Account";
function App() {
  const [isDisplay, setDisplay] = useState(false);
  // const [displayData, setDisplayData] = useState([]);
  const [checkout, setCheckout] = useState(false);
  const [showInvoice, setInvoice] = useState(false);
  const [showBadge, setshowBadge] = useState(true);
  const [showAccount, setshowAccount] = useState(false);

  setInterval(() => {
    setshowBadge(false);
  }, 2500);

  // const [subTotal, setSubTotal] = useState(0);

  //subtotal for Invoice it comes form cart component
  // function total(subtotal) {
  //   setSubTotal(subtotal);
  // }

  // function handleDisplayData(obj) {
  //   setDisplayData([obj]);
  //   setDisplay(true);
  // }

  // //increase amount of product
  // const handleChange = (item, d) => {
  //   const ind = cart.indexOf(item);
  //   const arr = cart;
  //   arr[ind].amount += d;

  //   if (arr[ind].amount === 0) arr[ind].amount = 1;
  //   setCart([...arr]);
  // };

  // function addtocart(item) {
  //   setDisplay(false);
  //   setDisplayData([]);
  //   if (cart.indexOf(item) !== -1) return toast.warn("Already added");
  //   else {
  //     setCart([...cart, item]);
  //     toast.success("Your Product is added");
  //   }
  // }
  // function handleCheckoutBtn(name, email, address) {
  //   if (name && email && address !== "") {
  //     setUserData({
  //       name: name,
  //       email: email,
  //       address: address,
  //     });
  //     setCheckout(false);
  //     setInvoice(true);
  //   } else {
  //     toast.warn("Fill the form");
  //   }
  // }

  return (
    <div className=" w-full h-screen ">
      {isDisplay ? <DisplayProduct setDisplay={setDisplay} /> : ""}

      {checkout ? (
        <Checkout setCheckout={setCheckout} setInvoice={setInvoice} />
      ) : (
        ""
      )}
      {showInvoice ? <Invoice setInvoice={setInvoice} /> : ""}
      {showAccount ? <Account setshowAccount={setshowAccount} /> : ""}

      {showBadge ? <Badge setshowBadge={setshowBadge} /> : ""}

      <Navbar setshowAccount={setshowAccount} />

      <div className="w-full flex bg-main h90vh ">
        <Routes>
          <Route index element={<Home />} />

          <Route
            path="/Product"
            element={
              <Product
                // addtocart={addtocart}
                // searchInp={searchInp}
                setDisplay={setDisplay}
                // handleDisplayData={handleDisplayData}
              />
            }
          />

          <Route
            path="/Cart"
            element={
              <Cart
                // handleDisplayData={handleDisplayData}
                // cart={cart}
                // setCart={setCart}
                // handleChange={handleChange}
                setCheckout={setCheckout}
                // total={total}
              />
            }
          />
        </Routes>
        <ToastContainer position="top-center" autoClose={2000} />
      </div>
    </div>
  );
}

export default App;
