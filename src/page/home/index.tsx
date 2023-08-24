import React from "react";
import Details from "../../components/details/Details";
import About from "../../components/about/About";
import Constructor from "../../components/conctructor";
import "../home/HomePage.css";

const HomePage: React.FC = () => {
  return (
    <>
      <Details />
      <div className="main-container">
        <About />
        <Constructor />
      </div>
    </>
  );
};

export default HomePage;
