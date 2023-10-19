import { Box } from "@mui/material";

const ProgressCircle = ({ progress = "0.75", size = "40", theme }) => {
  const angle = progress * 360;
  return (
    <Box
      sx={{
        background: `radial-gradient( ${
          theme === "dark" ? "#232D3F" : "#D8D9DA"
        } 55%, transparent 56%), conic-gradient(transparent 0deg ${angle}deg, #614BC3 ${angle}deg 360deg), #78D6C6`,
        borderRadius: "50%",
        width: `${size}px`,
        height: `${size}px`,
      }}
    />
  );
};

export default ProgressCircle;
