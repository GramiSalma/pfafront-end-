import React from "react";
import { DataGrid, GridToolbar } from "@mui/x-data-grid";
import { Box, Typography } from "@mui/material";
import { columns, rows } from "./data";
import Header from "../NavbarRh/Header";

const Ops= () => {
  return (
    <Box>
      

      <Box sx={{ height: 650, width: "99%", mx: "auto" }}>
      <Header title={"TEAM"} subTitle={"Managing the Team Members"} />

        <DataGrid
          slots={{
            toolbar: GridToolbar,
          }}
          rows={rows}
          // @ts-ignore
          columns={columns}
        />
      </Box>
    </Box>
  );
};

export default Ops;
