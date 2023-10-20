import { Box } from "@mui/material";
import Header from "../Header";
import PieChart from "../charts/PieChart";

const Pie = ({ theme }) => {
  return (
    <Box className="m-10">
      <Header title="PIE CHART" subTitle="Simple Pie Chart" />
      <Box className height="70vh" width="80vw">
        <PieChart theme={theme} />
      </Box>
    </Box>
  );
};

export default Pie;
