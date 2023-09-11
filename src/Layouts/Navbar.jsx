import { useContext, useEffect, useState } from "react";
import Button from "../Elements/Button";
import useLogin from "../Hooks/useLogin";
import { useSelector } from "react-redux";
import { DarkMode } from "../context/darkmode";
import { useTotalPrice } from "../context/TotalPriceContect";

const Navbar = () => {
  const handleLogout = () => {
    console.log("Logout");
    localStorage.removeItem("token");
    window.location.href = "/login";
  };
  const username = useLogin();
  const [totalCart, setTotalCart] = useState(0);
  const { isDarkMode, setIsDarkMode } = useContext(DarkMode);
  const cart = useSelector((state) => state.cart.data);
  const { total } = useTotalPrice();

  useEffect(() => {
    const sum = cart.reduce((acc, item) => {
      return acc + item.qty;
    }, 0);
    setTotalCart(sum);
  }),
    [cart];
  return (
    <div className="flex justify-end h-20 bg-blue-700 text-white items-center px-10">
      {username}

      <Button variant="bg-red-700 ml-5" onClick={handleLogout}>
        Logout
      </Button>
      <div className="flex items-center bg-gray-800 p-2 rounded-md ml-5 mr-5">
        Item: {totalCart} | Price $ {total}
      </div>
      <Button
        className="bg-black p-2 mx-5 text-white"
        onClick={() => setIsDarkMode(!isDarkMode)}
      >
        {isDarkMode ? "Light" : "Dark"}
      </Button>
    </div>
  );
};

export default Navbar;
