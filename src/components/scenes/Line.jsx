import { Box } from "@mui/material";
import Header from "../Header";
import LineChart from "../charts/LineChart";

const Line = ({ theme }) => {
  return (
    <Box className="m-10">
      <Header title="LINE CHART" subTitle="Simple Line Chart" />
      <Box className height="70vh">
        <LineChart theme={theme} />
      </Box>
    </Box>
  );
};

export default Line;
