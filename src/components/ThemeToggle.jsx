import { useContext } from "react";
import { AppContext } from "../context/AppContext";

const ThemeToggle = () => {
  const { darkMode, setDarkMode } = useContext(AppContext);

  return (
    <button
      onClick={() => setDarkMode(!darkMode)}
      className="px-4 py-2 rounded-lg bg-gray-200 dark:bg-gray-700 text-gray-800 dark:text-white transition"
    >
      {darkMode ? "☀️ Light" : "🌙 Dark"}
    </button>
  );
};

export default ThemeToggle;