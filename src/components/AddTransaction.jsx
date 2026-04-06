import { useState, useContext } from "react";
import { AppContext } from "../context/AppContext";

const AddTransaction = () => {
  const { addTransaction, role } = useContext(AppContext);

  const [form, setForm] = useState({
    amount: "",
    category: "",
    type: "expense",
    date: "",
  });

  if (role !== "admin") return null;

  const handleSubmit = (e) => {
    e.preventDefault();
    addTransaction(form);
    setForm({ amount: "", category: "", type: "expense", date: "" });
  };

  return (
    <form onSubmit={handleSubmit} className="card space-y-4">
      <h2 className="font-semibold">➕ Add Transaction</h2>

      <input
        placeholder="Amount"
        className="w-full p-2 border rounded"
        value={form.amount}
        onChange={(e) => setForm({ ...form, amount: Number(e.target.value) })}
      />

      <input
        placeholder="Category"
        className="w-full p-2 border rounded"
        value={form.category}
        onChange={(e) => setForm({ ...form, category: e.target.value })}
      />

      <select
        className="w-full p-2 border rounded"
        value={form.type}
        onChange={(e) => setForm({ ...form, type: e.target.value })}
      >
        <option value="expense">Expense</option>
        <option value="income">Income</option>
      </select>

      <input
        type="date"
        className="w-full p-2 border rounded"
        value={form.date}
        onChange={(e) => setForm({ ...form, date: e.target.value })}
      />

      <button className="bg-blue-600 text-white px-4 py-2 rounded">
        Add Transaction
      </button>
    </form>
  );
};

export default AddTransaction;