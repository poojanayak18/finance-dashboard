import { useContext } from "react";
import { AppContext } from "../context/AppContext";

const ExportButton = () => {
  const { transactions } = useContext(AppContext);

  const exportCSV = () => {
    const headers = ["Date", "Category", "Amount", "Type"];

    const rows = transactions.map(t =>
      [t.date, t.category, t.amount, t.type].join(",")
    );

    const csvContent =
      "data:text/csv;charset=utf-8," +
      [headers.join(","), ...rows].join("\n");

    const link = document.createElement("a");
    link.href = encodeURI(csvContent);
    link.download = "transactions.csv";
    link.click();
  };

  return (
    <button
      onClick={exportCSV}
      className="px-4 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700 hover:scale-105 transition"
    >
      📤 Export CSV
    </button>
  );
};

export default ExportButton;