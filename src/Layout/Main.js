import React from "react";
import { Outlet } from "react-router-dom";
import Footer from "../Pages/Shared/Footer/Footer";
import Navbars from "../Pages/Shared/Navbar/Navbars";

const Main = () => {
  return (
    <div>
      <Navbars></Navbars>
      <div className="min-vh-100">
      <Outlet></Outlet>
      </div>
      <Footer></Footer>
    </div>
  );
};

export default Main;
