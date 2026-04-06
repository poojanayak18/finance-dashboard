import RoleSwitcher from "./RoleSwitcher";
import ThemeToggle from "./ThemeToggle";
import ExportButton from "./ExportButton";

const Navbar = () => {
  return (
    <div className="flex justify-between items-center px-6 py-4 rounded-2xl 
    bg-white/70 dark:bg-gray-800 backdrop-blur-lg shadow-md border border-gray-200 dark:border-gray-700">
      
      <h1 className="text-xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
        💸 Finance Dashboard
      </h1>

      <div className="flex items-center gap-3">
        <ExportButton />
        <ThemeToggle />
        <RoleSwitcher />
      </div>
    </div>
  );
};

export default Navbar;