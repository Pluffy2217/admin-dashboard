import { useState } from "react";
import { Sidebar, Menu, MenuItem } from "react-pro-sidebar";
import { Link } from "react-router-dom";
import {
  AiOutlineHome,
  AiOutlineContacts,
  AiOutlineUser,
  AiOutlineQuestionCircle,
  AiOutlinePieChart,
  AiOutlineMenu,
} from "react-icons/ai";
import { BsPeople, BsBarChartFill, BsMap } from "react-icons/bs";
import { LiaFileInvoiceSolid } from "react-icons/lia";
import { SlCalender, SlGraph } from "react-icons/sl";
import avatar from "/assets/akiyama.png";

const Item = ({ title, to, icon, selected, setSelected }) => {
  return (
    <Link to={to}>
      <MenuItem
        active={selected === title}
        onClick={() => setSelected(title)}
        icon={icon}
        className="text-sm"
      >
        <p>{title}</p>
      </MenuItem>
    </Link>
  );
};

const SidebarComponent = ({ theme }) => {
  const [isCollapesed, setIsCollapsed] = useState(false);
  const [selected, setSelected] = useState("Dashboard");

  return (
    <div className="overflow-hidden min-h-screen">
      <Sidebar
        collapsed={isCollapesed}
        className={`${
          selected === "Dashboard" ? "h-full" : "h-screen"
        } text-black dark:text-white`}
        backgroundColor={theme === "dark" ? "#232D3F" : "#D8D9DA"}
      >
        <Menu
          menuItemStyles={{
            button: {
              backgroundColor: "",
              "&:hover": {
                backgroundColor: `${theme === "dark" ? "#4D4C7D" : "#B4B4B3"}`,
              },
            },
          }}
        >
          <MenuItem
            onClick={() => {
              setIsCollapsed(!isCollapesed);
            }}
            icon={isCollapesed ? <AiOutlineMenu /> : undefined}
            MenuItem
          >
            {!isCollapesed && (
              <div className="flex justify-between items-center ml-15 pt-3">
                <p className="text-xl">ADMINIS</p>
                <button
                  className={selected === 'Dashboard' ? "mr-8" : "mr-5"}
                  onClick={() => setIsCollapsed(!isCollapesed)}
                >
                  <AiOutlineMenu />
                </button>
              </div>
            )}
          </MenuItem>

          {!isCollapesed && (
            <div className={`flex flex-col items-center text-center p-8 ${selected === 'Dashboard' ? "-ml-8" : "-ml-4"}`}>
              <div>
                <img
                  alt="avatar"
                  src={avatar}
                  className="rounded-full w-24 h-24"
                />
              </div>
              <div className="mt-3">
                <p className="text-3xl font-bold">Akiyama</p>
                <p className="text-sm text-teal-700 dark:text-teal-500">
                  Owner of Sky Finance
                </p>
              </div>
            </div>
          )}
          {/* MENU ITEMS */}

          <div>
            <Item
              title="Dashboard"
              to="/"
              icon={<AiOutlineHome />}
              selected={selected}
              setSelected={setSelected}
            />
            <p
              className={`mt-2 mb-1 ${isCollapesed ? "ml-6" : "ml-7"} text-sm ${
                theme === "dark" ? "text-gray-400" : "text-gray-600"
              } text-opacity-70 font-semibold`}
            >
              Data
            </p>
            <Item
              title="Manage Team"
              to="/team"
              icon={<BsPeople />}
              selected={selected}
              setSelected={setSelected}
            />
            <Item
              title="Contacts"
              to="/contacts"
              icon={<AiOutlineContacts />}
              selected={selected}
              setSelected={setSelected}
            />
            <Item
              title="Invoices Balances"
              to="/invoices"
              icon={<LiaFileInvoiceSolid />}
              selected={selected}
              setSelected={setSelected}
            />
            <p
              className={`mt-2 mb-1 ${isCollapesed ? "ml-5" : "ml-7"} text-sm ${
                theme === "dark" ? "text-gray-400" : "text-gray-600"
              } text-opacity-70 font-semibold`}
            >
              Pages
            </p>
            <Item
              title="Profile Form"
              to="/form"
              icon={<AiOutlineUser />}
              selected={selected}
              setSelected={setSelected}
            />
            <Item
              title="Calender"
              to="/calender"
              icon={<SlCalender />}
              selected={selected}
              setSelected={setSelected}
            />
            <Item
              title="FAQ Page"
              to="/faq"
              icon={<AiOutlineQuestionCircle />}
              selected={selected}
              setSelected={setSelected}
            />
            <p
              className={`mt-2 mb-1 ${isCollapesed ? "ml-5" : "ml-7"} text-sm ${
                theme === "dark" ? "text-gray-400" : "text-gray-600"
              } text-opacity-70 font-semibold`}
            >
              Charts
            </p>
            <Item
              title="Bar Chart"
              to="/bar"
              icon={<BsBarChartFill />}
              selected={selected}
              setSelected={setSelected}
            />
            <Item
              title="Pie Chart"
              to="/pie"
              icon={<AiOutlinePieChart />}
              selected={selected}
              setSelected={setSelected}
            />
            <Item
              title="Line Chart"
              to="/line"
              icon={<SlGraph />}
              selected={selected}
              setSelected={setSelected}
            />
            <Item
              title="Geography Chart"
              to="/geography"
              icon={<BsMap />}
              selected={selected}
              setSelected={setSelected}
            />
          </div>
        </Menu>
      </Sidebar>
    </div>
  );
};

export default SidebarComponent;
