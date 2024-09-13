import React from "react";
import {
  ResponsiveContainer,
  LineChart,
  Line,
  CartesianGrid,
  Tooltip,
  XAxis,
} from "recharts";

import { AxisDataType } from "../../utils/types/Axis.types";
import "./Chart.css"
import { ProductsDataType } from "../../utils/types/ProductsData.types";


interface PropsType {
  title: string;
  data: AxisDataType | ProductsDataType;
  dataKey: string;
  grid?: boolean;
}

function Chart({ title, data, dataKey, grid = false }: PropsType) {
  return (
    <div className="chart">
      <h3 className="chart-title">{title}</h3>
      <ResponsiveContainer width="100%" aspect={4}>
        <LineChart data={data}>
          <XAxis dataKey="name" stroke="#5550bd" />
          <Line type="monotone" dataKey={dataKey} stroke="#5550bd" />
          <Tooltip />
          {grid && <CartesianGrid stroke="#e0dfdf" strokeDasharray="10" />}
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
}

export default Chart;
