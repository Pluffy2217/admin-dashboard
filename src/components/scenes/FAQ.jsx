import { Box } from "@mui/material";
import Header from "../Header";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import { MdExpandMore } from "react-icons/md";

const FAQ = ({ theme }) => {
  return (
    <Box className="m-10">
      <Header title="FAQ" subTitle="Frequently Asked Questions Page" />

      <Accordion
        defaultExpanded
        sx={{ backgroundColor: theme === "dark" ? "#232D3F" : "#F5F5F5" }}
      >
        <AccordionSummary
          expandIcon={<MdExpandMore className="dark:text-white" size={20} />}
        >
          <p className="font-semibold dark:text-white">An Important Question</p>
        </AccordionSummary>
        <AccordionDetails>
          <p className="dark:text-white">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </p>
        </AccordionDetails>
      </Accordion>
      <Accordion
        defaultExpanded
        sx={{ backgroundColor: theme === "dark" ? "#232D3F" : "#F5F5F5" }}
      >
        <AccordionSummary
          expandIcon={<MdExpandMore className="dark:text-white" size={20} />}
        >
          <p className="font-semibold dark:text-white">
            Another Important Question
          </p>
        </AccordionSummary>
        <AccordionDetails>
          <p className="dark:text-white">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </p>
        </AccordionDetails>
      </Accordion>
      <Accordion
        defaultExpanded
        sx={{ backgroundColor: theme === "dark" ? "#232D3F" : "#F5F5F5" }}
      >
        <AccordionSummary
          expandIcon={<MdExpandMore className="dark:text-white" size={20} />}
        >
          <p className="font-semibold dark:text-white">
            Your Favourite Question
          </p>
        </AccordionSummary>
        <AccordionDetails>
          <p className="dark:text-white">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </p>
        </AccordionDetails>
      </Accordion>
      <Accordion
        defaultExpanded
        sx={{ backgroundColor: theme === "dark" ? "#232D3F" : "#F5F5F5" }}
      >
        <AccordionSummary
          expandIcon={<MdExpandMore className="dark:text-white" size={20} />}
        >
          <p className="font-semibold dark:text-white">Some Random Question</p>
        </AccordionSummary>
        <AccordionDetails>
          <p className="dark:text-white">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </p>
        </AccordionDetails>
      </Accordion>
    </Box>
  );
};

export default FAQ;
