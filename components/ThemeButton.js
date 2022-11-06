import { useTheme } from "next-themes";
import { CiDark } from "react-icons/ci";
import { FiSun } from "react-icons/fi";

const ThemeButton = () => {
  const { resolvedTheme, setTheme } = useTheme();

  return (
    <button
      type="button"
      aria-label="Toggle Light & Dark Mode"
      className="flex items-center rounded-md bg-indigo-800 p-2 text-gray-100"
      onClick={() => setTheme(resolvedTheme === "dark" ? "light" : "dark")}
    >
      {resolvedTheme === "dark" ? (
        <CiDark className="h-6 w-6" />
      ) : (
        <FiSun className="h-6 w-6" />
      )}
    </button>
  );
};

export default ThemeButton;
