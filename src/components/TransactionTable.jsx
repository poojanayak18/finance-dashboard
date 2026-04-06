import { useContext, useState } from "react";
import { AppContext } from "../context/AppContext";

const TransactionTable = () => {
  const { transactions, filter, setFilter } = useContext(AppContext);
  const [dateFilter, setDateFilter] = useState("");

  const filtered = transactions.filter((t) =>
    t.category.toLowerCase().includes(filter.toLowerCase()) &&
    (dateFilter ? t.date === dateFilter : true)
  );

  return (
    <div className="card">
      <h2 className="font-semibold mb-4">📋 Transactions</h2>

      <input
        placeholder="Search category..."
        className="mb-2 w-full p-2 border rounded"
        value={filter}
        onChange={(e) => setFilter(e.target.value)}
      />

      <input
        type="date"
        className="mb-4 w-full p-2 border rounded"
        onChange={(e) => setDateFilter(e.target.value)}
      />

      <table className="w-full text-left">
        <thead>
          <tr className="text-gray-500 dark:text-gray-300 border-b">
            <th>Date</th>
            <th>Category</th>
            <th>Amount</th>
            <th>Type</th>
          </tr>
        </thead>

        <tbody>
          {filtered.length > 0 ? (
            filtered.map((t) => (
              <tr key={t.id} className="border-b hover:bg-gray-50 dark:hover:bg-gray-700 transition">
                <td>{t.date}</td>
                <td>{t.category}</td>
                <td>₹{t.amount}</td>
                <td className={t.type === "income" ? "text-green-500" : "text-red-500"}>
                  {t.type}
                </td>
              </tr>
            ))
          ) : (
            <tr>
              <td colSpan="4" className="text-center py-6 text-gray-400">
                🚫 No transactions found
              </td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  );
};

export default TransactionTable;