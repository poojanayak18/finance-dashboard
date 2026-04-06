import { createContext, useState, useEffect } from "react";
import { transactions as initialData } from "../data/mockData";

export const AppContext = createContext();

export const AppProvider = ({ children }) => {
  const [transactions, setTransactions] = useState(() => {
    const saved = localStorage.getItem("transactions");
    return saved ? JSON.parse(saved) : initialData;
  });

  const [role, setRole] = useState("viewer");
  const [filter, setFilter] = useState("");

  const [darkMode, setDarkMode] = useState(() => {
    return localStorage.getItem("theme") === "dark";
  });

  useEffect(() => {
    localStorage.setItem("transactions", JSON.stringify(transactions));
  }, [transactions]);

  useEffect(() => {
    localStorage.setItem("theme", darkMode ? "dark" : "light");
    document.documentElement.classList.toggle("dark", darkMode);
  }, [darkMode]);

  const addTransaction = (tx) => {
    setTransactions([...transactions, { ...tx, id: Date.now() }]);
  };

  return (
    <AppContext.Provider
      value={{
        transactions,
        role,
        setRole,
        filter,
        setFilter,
        addTransaction,
        darkMode,
        setDarkMode,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};