import { useContext } from "react";
import { AppContext } from "../context/AppContext";

const Insights = () => {
  const { transactions } = useContext(AppContext);

  const highest = transactions.reduce((max, t) =>
    t.amount > max.amount ? t : max
  );

  return (
    <div className="card">
      <h2 className="font-semibold">💡 Insights</h2>
      <p className="mt-2 text-gray-600 dark:text-gray-300">
        Highest transaction: ₹{highest.amount} in{" "}
        <span className="font-semibold">{highest.category}</span>
      </p>
    </div>
  );
};

export default Insights;