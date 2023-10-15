import { BsMoon, BsPerson } from "react-icons/bs";
import { AiOutlineBell } from "react-icons/ai";
import { FiSettings } from "react-icons/fi";

const Topbar = ({ changeTheme }) => {
  return (
    <div className="flex items-center justify-between p-2 text-black dark:text-white mx-2 pt-3">
      <div>
        <input
          className="dark:bg-[#2e437475] bg-[#dfe0e0] pl-4 py-2 rounded-sm outline-none"
          placeholder="Search"
        />
      </div>
      <div className="flex gap-5">
        <BsMoon onClick={changeTheme} size={20} className="cursor-pointer" />
        <AiOutlineBell size={20} />
        <FiSettings size={20} />
        <BsPerson size={20} />
      </div>
    </div>
  );
};

export default Topbar;
