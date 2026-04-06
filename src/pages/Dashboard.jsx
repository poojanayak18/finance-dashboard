import { useContext } from "react";
import { AppContext } from "../context/AppContext";
import Navbar from "../components/Navbar";
import SummaryCard from "../components/SummaryCard";
import BalanceChart from "../charts/BalanceChart";
import CategoryChart from "../charts/CategoryChart";
import TransactionTable from "../components/TransactionTable";
import Insights from "../components/Insights";
import AddTransaction from "../components/AddTransaction";

const Dashboard = () => {
  const { transactions } = useContext(AppContext);

  const income = transactions.filter(t => t.type === "income")
    .reduce((a, b) => a + b.amount, 0);

  const expense = transactions.filter(t => t.type === "expense")
    .reduce((a, b) => a + b.amount, 0);

  return (
    <div className="min-h-screen p-6 bg-gray-100 dark:bg-gray-900 transition-all duration-500">
      <div className="max-w-6xl mx-auto space-y-6">

        <Navbar />

        <h1 className="text-3xl font-bold text-gray-800 dark:text-white">
          Welcome back 👋
        </h1>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <SummaryCard title="Income" value={income} color="text-green-500" />
          <SummaryCard title="Expenses" value={expense} color="text-red-500" />
          <SummaryCard title="Balance" value={income - expense} color="text-blue-600" />
        </div>

        <AddTransaction />
        <BalanceChart />
        <CategoryChart />
        <TransactionTable />
        <Insights />

      </div>
    </div>
  );
};

export default Dashboard;