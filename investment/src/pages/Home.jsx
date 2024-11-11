import React from "react";
import SideBar from "./Marketing.jsx/Header/SideBar";
import Dash from "../views/DashBoard/Dash";
import CyptoMarket from "../views/DashBoard/CyptoMarket";

function Home() {
  return (
    <div className="p-6">
      <SideBar />
      <Dash />
      <CyptoMarket />
    </div>
  );
}

export default Home;
