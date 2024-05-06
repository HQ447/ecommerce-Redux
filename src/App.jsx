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
            element={<Product setDisplay={setDisplay} />}
          />

          <Route path="/Cart" element={<Cart setCheckout={setCheckout} />} />
        </Routes>
        <ToastContainer position="top-center" autoClose={2000} />
      </div>
    </div>
  );
}

export default App;
