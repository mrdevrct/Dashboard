import React from "react";
// data
import { xAxisData } from "../../data/data";
// styeles
import "./Home.css";
// components
import Features from "../../components/features/Feature";
import Chart from "../../components/chart/Chart";
import WidgeteSm from "../../components/widgeteSm/WidgeteSm";
import WidgeteLg from "../../components/widgeteLg/widgeteLg";

function Home() {
  return (
    <div className="home">
      <Features />
      <Chart title="Sale Month" data={xAxisData} dataKey="sale" grid />
      <div className="homeWighets">
        <WidgeteSm />
        <WidgeteLg />
      </div>
    </div>
  );
}

export default Home;
