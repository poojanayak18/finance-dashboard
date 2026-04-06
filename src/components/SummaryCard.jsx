const SummaryCard = ({ title, value, color }) => {
  return (
    <div className="card hover:scale-105 transition">
      <p className="text-sm text-gray-500 dark:text-gray-300">{title}</p>
      <h2 className={`text-3xl font-bold mt-2 ${color}`}>
        ₹{value}
      </h2>
    </div>
  );
};

export default SummaryCard;