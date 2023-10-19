import { Box } from "@mui/material";
import ProgressCircle from "./ProgressCircle";

const StatBox = ({ title, subtitle, icon, progress, increase, theme }) => {
  return (
    <Box className="w-full mx-7">
      <Box className="flex justify-between">
        <Box>
          {icon}
          <p className="font-bold mt-2 dark:text-white">{title}</p>
        </Box>
        <Box>
          <ProgressCircle progress={progress} theme={theme} />
        </Box>
      </Box>
      <Box className="flex justify-between">
        <p className="dark:text-teal-500 text-teal-600">{subtitle}</p>
        <p className="italic dark:text-teal-500 text-teal-600">{increase}</p>
      </Box>
    </Box>
  );
};
export default StatBox;
