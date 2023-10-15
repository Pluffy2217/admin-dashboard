import { useEffect, useState } from "react";
import { Routes, Route } from "react-router-dom";
import Topbar from "./components/global/Topbar";
import SidebarComponent from "./components/global/Sidebar";
import Dashboard from "./components/scenes/Dashboard";
import Team from "./components/scenes/Team";
import Invoices from "./components/scenes/Invoices";
import Contacts from "./components/scenes/Contacts";
import Bar from "./components/scenes/Bar";
import Form from "./components/scenes/Form";
import Line from "./components/scenes/Line";
import Pie from "./components/scenes/Pie";
import FAQ from "./components/scenes/FAQ";
import Geography from "./components/scenes/Geography";
import Calender from "./components/scenes/Calender";

const App = () => {
  const [theme, setTheme] = useState("dark");

  useEffect(() => {
    if (theme === "light") {
      document.documentElement.classList.remove("dark");
    } else {
      document.documentElement.classList.add("dark");
    }
  }, [theme]);

  const handleThemeSwitch = () => {
    setTheme(theme === "dark" ? "light" : "dark");
  };

  return (
    <div className="w-full h-full bg-[#F1EFEF] dark:bg-[#131923] flex">
      <SidebarComponent theme={theme} />
      <div className="w-full">
        <Topbar changeTheme={handleThemeSwitch} />
        <Routes>
          <Route path="/" element={<Dashboard />} />
          <Route path="/team" element={<Team theme={theme} />} />
          <Route path="/contacts" element={<Contacts />} />
          <Route path="/invoices" element={<Invoices />} />
          <Route path="/form" element={<Form />} />
          <Route path="/bar" element={<Bar />} />
          <Route path="/pie" element={<Pie />} />
          <Route path="/line" element={<Line />} />
          <Route path="/faq" element={<FAQ />} />
          <Route path="/geography" element={<Geography />} />
          <Route path="/calender" element={<Calender />} />
        </Routes>
      </div>
    </div>
  );
};

export default App;