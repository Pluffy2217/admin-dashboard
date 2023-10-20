import Header from "../Header";
import { DataGrid } from "@mui/x-data-grid";
import { mockDataContacts } from "../../data/mockData";
import { Box } from "@mui/material";

const Contacts = ({ theme }) => {
  const columns = [
    { field: "id", headerName: "ID", flex: 0.5 },
    { field: "registrarId", headerName: "Registrar ID" },
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
      field: "address",
      headerName: "Address",
      flex: 1,
    },
    {
      field: "city",
      headerName: "City",
      flex: 1,
    },
    {
      field: "zipCode",
      headerName: "ZipCode",
      flex: 1,
    },
  ];

  return (
    <div className="w-auto">
      <Header
        title="CONTACTS"
        subTitle="List of Contacts for Future Reference"
      />
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
            "& .MuiDataGrid-toolbarContainer .MuiButton-text": {
              color: "green !important",
            },
          }}
      >
        <DataGrid
          rows={mockDataContacts}
          columns={columns}
          sx={{
            color: theme === "dark" ? "white" : "black",
            fontWeight: "bold",
            border: "none",
            marginLeft: "5px",
            outline: "none !important",
            width: "99%"
          }}
        />
      </Box>
    </div>
  );
};

export default Contacts;
