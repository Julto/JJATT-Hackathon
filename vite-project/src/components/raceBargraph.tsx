import "./styles.css";
import { useState, useEffect } from "react";
import axios from "axios"
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend
} from "recharts";

const data = [
  {
    name: "Asian",
    uv: 6969,
    pv: 4200,
    amt: 2400
  },
  {
    name: "Latino",
    uv: 4200,
    pv: 7272,
    amt: 2210
  },
  {
    name: "Aaroh",
    uv: 2000,
    pv: 9800,
    amt: 2290
  },
  {
    name: "Tak",
    uv: 2780,
    pv: 3908,
    amt: 2000
  },
  {
    name: "Trash",
    uv: 1890,
    pv: 4800,
    amt: 2181
  },
  {
    name: "HAHAHA",
    uv: 2390,
    pv: 3800,
    amt: 2500
  },
];

export default function RaceBargraph() {
    
  return (
    <BarChart
      width={500}
      height={300}
      data={data}
      margin={{
        top: 5,
        right: 30,
        left: 20,
        bottom: 5
      }}
    >
      <CartesianGrid strokeDasharray="3 3" />
      <XAxis dataKey="name" />
      <YAxis />
      <Tooltip />
      <Legend />
      <Bar dataKey="pv" fill="#8884d8" />

    </BarChart>
  );
}