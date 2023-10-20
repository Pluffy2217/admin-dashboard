import Header from "../Header";
import { DataGrid } from "@mui/x-data-grid";
import { mockDataInvoices } from "../../data/mockData";
import { Box } from "@mui/material";

const Invoices = ({ theme }) => {
  const columns = [
    { field: "id", headerName: "ID" },
    {
      field: "name",
      headerName: "Name",
      flex: 1,
      cellClassName: "name-column--cell",
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
      field: "cost",
      headerName: "Cost",
      flex: 1,
      renderCell: (params) => <p>{params.row.cost}</p>,
    },
    {
      field: "date",
      headerName: "Date",
      flex: 1,
    },
  ];

  return (
    <div className="w-auto">
      <Header title="INVOICES" subTitle="List of Invoice balances" />
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
          "& .MuiCheckbox-root": {
            color: "teal !important",
          },
        }}
      >
        <DataGrid
          checkboxSelection
          rows={mockDataInvoices}
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

export default Invoices;
