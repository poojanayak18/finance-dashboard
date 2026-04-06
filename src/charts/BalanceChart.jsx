import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
  CartesianGrid,
} from "recharts";
import { useContext } from "react";
import { AppContext } from "../context/AppContext";

const BalanceChart = () => {
  const { transactions } = useContext(AppContext);

  return (
    <div className="p-6 rounded-2xl bg-white/70 backdrop-blur-md shadow-md border">
      <h2 className="font-semibold mb-4 text-gray-700">
        📈 Balance Trend
      </h2>

      <ResponsiveContainer width="100%" height={300}>
        <LineChart data={transactions}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="date" />
          <YAxis />
          <Tooltip />
          <Line
            type="monotone"
            dataKey="amount"
            stroke="#6366f1"
            strokeWidth={3}
          />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
};

export default BalanceChart;