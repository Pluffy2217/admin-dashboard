import { Box } from "@mui/material";
import Header from "../Header";
import GeographyChart from "../charts/GeographyChart";

const Geography = ({ theme }) => {
  return (
    <Box className="m-10">
      <Header title="GEOGRAPHY CHART" subTitle="Simple Geography Chart" />
      <Box className={`border ${theme === 'dark' ? "border-gray-200" : "border-gray-700"}`} height="70vh">
        <GeographyChart theme={theme} />
      </Box>
    </Box>
  );
};

export default Geography;
