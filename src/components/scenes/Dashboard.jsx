import Header from "../Header";
import { Box, IconButton, Button } from "@mui/material";
import { mockTransactions } from "../../data/mockData";
import { AiOutlineDownload, AiFillMail } from "react-icons/ai";
import { BsFillPersonPlusFill } from "react-icons/bs";
import { BiSolidTraffic } from "react-icons/bi";
import { IoMdStats } from "react-icons/io";
import LineChart from "../charts/LineChart";
import BarChart from "../charts/BarChart";
import PieChart from "../charts/PieChart";
import GeographyChart from "../charts/GeographyChart";
import StatBox from "../StatBox";
import ProgressCircle from "../ProgressCircle";

const Dashboard = ({ theme }) => {
  return (
    <Box className="m-5">
      <Box className="flex justify-between items-center">
        <Header title="DASHBOARD" subTitle="Welcome to your Dashboard" />
        <Box>
          <Button
            sx={{
              backgroundColor: theme === "dark" ? "#363062" : "#B4B4B3",
              color: theme === "dark" ? "white" : "black",
              fontSize: "14px",
              fontWeight: "900",
              padding: "10px 20px",
            }}
          >
            <AiOutlineDownload className="mr-[10px]" s />
            Download Reports
          </Button>
        </Box>
      </Box>

      <Box
        display="grid"
        gridTemplateColumns="repeat(12, 1fr)"
        gridAutoRows="140px"
        gap="20px"
      >
        {/* ROW 1 */}
        <Box
          gridColumn="span 3"
          backgroundColor={theme === "dark" ? "#232D3F" : "#D8D9DA"}
          display="flex"
          alignItems="center"
          justifyContent="space-between"
        >
          <StatBox
            theme={theme}
            title="12,361"
            subtitle="Emails Sent"
            progress="0.75"
            increase="+14%"
            icon={
              <AiFillMail
                className="dark:text-teal-500 text-teal-600"
                size={23}
              />
            }
          />
        </Box>

        <Box
          gridColumn="span 3"
          backgroundColor={theme === "dark" ? "#232D3F" : "#D8D9DA"}
          display="flex"
          alignItems="center"
          justifyContent="space-between"
        >
          <StatBox
            theme={theme}
            title="431,225"
            subtitle="Sales Obtained"
            progress="0.5"
            increase="+21%"
            icon={
              <IoMdStats
                className="dark:text-teal-500 text-teal-600"
                size={23}
              />
            }
          />
        </Box>

        <Box
          gridColumn="span 3"
          backgroundColor={theme === "dark" ? "#232D3F" : "#D8D9DA"}
          display="flex"
          alignItems="center"
          justifyContent="space-between"
        >
          <StatBox
            theme={theme}
            title="32,441"
            subtitle="New Clients"
            progress="0.30"
            increase="+5%"
            icon={
              <BsFillPersonPlusFill
                className="dark:text-teal-500 text-teal-600"
                size={23}
              />
            }
          />
        </Box>

        <Box
          gridColumn="span 3"
          backgroundColor={theme === "dark" ? "#232D3F" : "#D8D9DA"}
          display="flex"
          alignItems="center"
          justifyContent="space-between"
        >
          <StatBox
            theme={theme}
            title="1,325,134"
            subtitle="Traffic Inbound"
            progress="0.80"
            increase="+43%"
            icon={
              <BiSolidTraffic
                className="dark:text-teal-500 text-teal-600"
                size={23}
              />
            }
          />
        </Box>

        {/* ROW 2 */}

        <Box
          gridColumn="span 8"
          gridRow="span 2"
          backgroundColor={theme === "dark" ? "#232D3F" : "#D8D9DA"}
        >
          <Box
            mt="25px"
            p="0 30px"
            display="flex"
            justifyContent="space-between"
            alignItems="center"
          >
            <Box>
              <p className="font-semibold dark:text-white">Revenue Generated</p>
              <p className="font-medium dark:text-teal-500 text-teal-600 text-xl">
                $59,342,32
              </p>
            </Box>
            <Box>
              <IconButton>
                <AiOutlineDownload className="dark:text-white" size={25} />
              </IconButton>
            </Box>
          </Box>
          <Box height="250px" mt="-20px">
            <LineChart isDashboard={true} theme={theme} />
          </Box>
        </Box>
        {/* TRANSACTIONS */}

        <Box
          gridColumn="span 4"
          gridRow="span 2"
          backgroundColor={theme === "dark" ? "#232D3F" : "#D8D9DA"}
          overflow="auto"
        >
          <Box
            display="flex"
            justifyContent="space-between"
            alignItems="center"
            borderBottom={`3px solid ${
              theme === "dark" ? "#131923" : "#73777B"
            }`}
            color="white"
            p="15px"
          >
            <p className="font-semibold dark:text-white text-black">
              Recent Transactions
            </p>
          </Box>
          {mockTransactions.map((item, index) => (
            <Box
              key={`${item.txId}-${index}`}
              display="flex"
              justifyContent="space-between"
              alignItems="center"
              borderBottom={`3px solid ${
                theme === "dark" ? "#131923" : "#73777B"
              }`}
              p="15px"
            >
              <Box>
                <p className="font-semibold dark:text-teal-500 text-teal-600">
                  {item.txId}
                </p>
              </Box>
              <Box color={theme === "dark" ? "white" : "black"}>
                {item.date}
              </Box>
              <Box
                backgroundColor={
                  theme === "dark" ? "rgb(20 184 166)" : "rgb(13 148 136)"
                }
                p="5px 10px"
                borderRadius="4px"
                color="white"
              >
                {item.cost}
              </Box>
            </Box>
          ))}
        </Box>
        {/* ROW 3 */}

        <Box
          gridColumn="span 4"
          gridRow="span 2"
          backgroundColor={theme === "dark" ? "#232D3F" : "#D8D9DA"}
          p="30px"
        >
          <p className="font-bold dark:text-white">Campaign</p>
          <Box
            display="flex"
            flexDirection="column"
            alignItems="center"
            mt="25px"
          >
            <ProgressCircle size="125" theme={theme} />
            <p className="dark:text-teal-500 text-teal-600 mt-4">
              $48,352 revenue generated
            </p>
            <p className="font-bold dark:text-white">
              Includes extra misc expenditures and costs
            </p>
          </Box>
        </Box>

        {/*  */}

        <Box
          gridColumn="span 4"
          gridRow="span 2"
          backgroundColor={theme === "dark" ? "#232D3F" : "#D8D9DA"}
        >
          <p className="font-bold dark:text-white px-7 pt-7">Sales Quantity</p>
          <Box height="250px" mt="-20px">
            <BarChart isDashboard={true} theme={theme} />
          </Box>
        </Box>

        {/*  */}

        <Box
          gridColumn="span 4"
          gridRow="span 2"
          backgroundColor={theme === "dark" ? "#232D3F" : "#D8D9DA"}
          p="30px"
        >
          <p className="font-bold dark:text-white mb-4">
            Geography Based Traffic
          </p>
          <Box height="200px">
            <GeographyChart isDashboard={true} theme={theme} />
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default Dashboard;
