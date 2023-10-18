import { Box } from "@mui/material";
import Header from "../Header";
import BarChart from "../charts/BarChart";

const Bar = ({ theme }) => {
  return (
    <Box className="m-10">
      <Header title="BAR CHART" subTitle="Simple Bar Chart" />
      <Box className height="70vh">
        <BarChart theme={theme} />
      </Box>
    </Box>
  );
};

export default Bar;
