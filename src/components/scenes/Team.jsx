import Header from "../Header";
import { DataGrid } from "@mui/x-data-grid";
import { mockDataTeam } from "../../data/mockData";
import { Box } from "@mui/material";

const Team = ({ theme }) => {
  const columns = [
    { field: "id", headerName: "ID" },
    {
      field: "name",
      headerName: "Name",
      flex: 1,
      cellClassName: "name-column--cell",
    },
    {
      field: "age",
      headerName: "Age",
      type: "number",
      headerAlign: "left",
      align: "left",
    },
    {
      field: "phone",
      headerName: "Phone Number",
      flex: 1,
    },
    {
      field: "email",
      headerName: "Email",
      flex: 1,
    },
    {
      field: "access",
      headerName: "Access Level",
      flex: 1,
      renderCell: ({ row: { access } }) => {
        return (
          <div
            className={`w-[60%]  mx-auto p-2 text-center flex justify-center ${
              access === "admin"
                ? "dark:bg-teal-700 bg-gray-300"
                : "dark:bg-teal-900 bg-gray-400"
            } rounded-sm`}
          >
            {access === "admin" && <></>}
            {access === "manager" && <></>}
            {access === "user" && <></>}
            <p>{access}</p>
          </div>
        );
      },
    },
  ];

  return (
    <div>
      <Header title="MANAGE TEAM" subTitle="Managing the Team Members" />
      <Box
        sx={{
          "& .MuiDataGrid-root": {
            border: "none",
          },
          "& .MuiDataGrid-cell": {
            borderBottom: "1",
            borderColor: "#352F44",
          },
          "& .name-column--cell": {
            color: theme === "dark" ? "#64CCC5" : "#183D3D",
          },
          "& .MuiDataGrid-columnHeaders": {
            backgroundColor: theme === "dark" ? "#12486B" : "#D8D9DA",
            borderBottom: "none",
          },
          "& .MuiDataGrid-footerContainer": {
            display: "none",
          },
        }}
      >
        <DataGrid
          rows={mockDataTeam}
          columns={columns}
          sx={{
            color: theme === "dark" ? "white" : "black",
            fontWeight: "bold",
            border: "none",
            // borderColor: theme === 'dark' ? '#232D3F' : 'yellow',
            marginLeft: "5px",
            outline: "none !important",
            width: "99%"
          }}
        />
      </Box>
    </div>
  );
};

export default Team;
