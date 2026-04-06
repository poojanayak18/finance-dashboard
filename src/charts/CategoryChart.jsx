import {
  PieChart,
  Pie,
  Cell,
  Tooltip,
  ResponsiveContainer,
  Legend,
} from "recharts";
import { useContext } from "react";
import { AppContext } from "../context/AppContext";

const COLORS = ["#6366f1", "#22c55e", "#ef4444", "#f59e0b", "#06b6d4"];

const CategoryChart = () => {
  const { transactions } = useContext(AppContext);

  // Only expenses
  const expenses = transactions.filter((t) => t.type === "expense");

  // Group by category
  const data = Object.values(
    expenses.reduce((acc, curr) => {
      if (!acc[curr.category]) {
        acc[curr.category] = {
          name: curr.category,
          value: 0,
        };
      }
      acc[curr.category].value += curr.amount;
      return acc;
    }, {})
  );

  return (
    <div className="p-6 rounded-2xl bg-white/70 backdrop-blur-md shadow-md border">
      
      <h2 className="font-semibold mb-4 text-gray-700">
        🥧 Spending Breakdown
      </h2>

      {data.length === 0 ? (
        <p className="text-gray-400">No expense data available</p>
      ) : (
        <ResponsiveContainer width="100%" height={300}>
          <PieChart>
            <Pie
              data={data}
              dataKey="value"
              nameKey="name"
              outerRadius={100}
              label
            >
              {data.map((entry, index) => (
                <Cell
                  key={index}
                  fill={COLORS[index % COLORS.length]}
                />
              ))}
            </Pie>

            <Tooltip />
            <Legend />
          </PieChart>
        </ResponsiveContainer>
      )}

    </div>
  );
};

export default CategoryChart;