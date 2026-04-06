import { useContext } from "react";
import { AppContext } from "../context/AppContext";

const RoleSwitcher = () => {
  const { role, setRole } = useContext(AppContext);

  return (
    <select
      value={role}
      onChange={(e) => setRole(e.target.value)}
      className="px-3 py-2 rounded-lg border bg-white shadow-sm"
    >
      <option value="viewer">Viewer</option>
      <option value="admin">Admin</option>
    </select>
  );
};

export default RoleSwitcher;