import React from "react";
import { xAxisData } from "../../data/data";
import Features from "../../components/features/Feature";
import Chart from "../../components/chart/Chart";
import "./Home.css";

function Home() {
  return (
    <div className="home">
      <Features />
      <Chart title="Sale Month" data={xAxisData} dataKey="sale" grid/>
    </div>
  );
}

export default Home;
