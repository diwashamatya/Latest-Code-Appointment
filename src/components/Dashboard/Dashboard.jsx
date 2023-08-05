import React from "react";
import Cards from "./Cards";
import Summary from "./Summary";

const Dashboard = () => {
  return (
    <div className="bg-[#F3F7F9] w-full h-full px-[20px] md:px-[50px] py-5 md:px-10 lg:px-20">
      <h1 className="text-[27px] text-[#3F26A5] pb-3">Dashboard</h1>
      <Cards />
      <Summary/>
    </div>
  );
};

export default Dashboard;
