import React from "react";
import { Outlet } from "react-router-dom";
import Footer from "../footer/Footer";
import Header from "../header/Header";
import { Root } from "./Layout.styled";
import HeaderNavigation from "../navigation/Navigation";

const Layout: React.FC = () => {
  return (
    <Root>
      <Header />
      <HeaderNavigation />
      <main>
        <Outlet />
      </main>
      <Footer />
    </Root>
  );
};

export default Layout;
