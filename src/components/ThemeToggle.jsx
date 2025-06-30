import { Moon, Sun } from "lucide-react";
import { useEffect } from "react";
import { useState } from "react";
import { cn } from "@/lib/utils";

export const ThemeToggle = () => {
  const [isDarkMode, setIsDarkMode] = useState(false);

  useEffect(() => {
    const storedTheme = localStorage.getItem("theme");
    if (storedTheme === "dark") {
      setIsDarkMode(true);
      document.documentElement.classList.add("dark");
    } else {
      localStorage.setItem("theme", "light");
      setIsDarkMode(false);
    }
  }, []); // 42:15

  const toogleTheme = () => {
    if (isDarkMode) {
      document.documentElement.classList.remove("dark"); // ?
      localStorage.setItem("theme", "light");
      setIsDarkMode(false);
    } else {
      document.documentElement.classList.add("dark");
      localStorage.setItem("theme", "dark"); // 41:40 (it ensures dark would be there even if I refresh page) Q can be asked from here
      setIsDarkMode(true);
    }
  };

  return (
    <button 
     onClick={toogleTheme}
     className={cn(
         "fixed max-sm:hidden top-5  right-5 z-50 p-2 rounded-full transition-colors duration-300",
         "focus-outlin-hidden"
     )}
     
    >
      {isDarkMode ? (
        <Sun className="h-6 w-6 text-yellow-300" />
      ) : (
        <Moon className="h-6 w-6 text-blue-900" />
      )}
    </button>
  );
};
