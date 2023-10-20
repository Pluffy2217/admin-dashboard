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
  const [isSidebar, setIsSidebar] = useState(true);  

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
    <div className="w-full min-h-screen object-cover bg-[#F1EFEF] dark:bg-[#131923] flex">
      <SidebarComponent theme={theme} isSidebar={isSidebar} />
      <div className="w-full">
        <Topbar changeTheme={handleThemeSwitch} setIsSidebar={setIsSidebar} />
        <Routes>
          <Route path="/" element={<Dashboard theme={theme} />} />
          <Route path="/team" element={<Team theme={theme} />} />
          <Route path="/contacts" element={<Contacts theme={theme} />} />
          <Route path="/invoices" element={<Invoices theme={theme} />} />
          <Route path="/form" element={<Form theme={theme} />} />
          <Route path="/bar" element={<Bar theme={theme} />} />
          <Route path="/pie" element={<Pie theme={theme} />} />
          <Route path="/line" element={<Line theme={theme} />} />
          <Route path="/faq" element={<FAQ theme={theme} />} />
          <Route path="/geography" element={<Geography theme={theme} />} />
          <Route path="/calender" element={<Calender theme={theme} />} />
        </Routes>
      </div>
    </div>
  );
};

export default App;
