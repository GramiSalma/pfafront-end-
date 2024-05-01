import React, { useState } from "react";
import { DataGrid } from "@mui/x-data-grid";
import { useTheme, Snackbar, IconButton } from "@mui/material";
import { Box, Typography } from "@mui/material";
import { rows } from "./data"; // Assurez-vous que le chemin d'importation est correct

import {
  AdminPanelSettingsOutlined,
  LockOpenOutlined,
  SecurityOutlined,
  DeleteOutline,
  EditOutlined,
  VisibilityOutlined,
} from "@mui/icons-material";
import Header from "../NavbarRh/Header";

const EditEmp = () => {
  const theme = useTheme();
  const [showSnackbar, setShowSnackbar] = useState(false);

  const handleCloseSnackbar = (event, reason) => {
    if (reason === "clickaway") {
      return;
    }
    setShowSnackbar(false);
  };

  const handleDeleteClick = () => {
    // Logique pour supprimer l'élément
    setShowSnackbar(true);
  };

  const columns = [
    {
      field: "id",
      headerName: "ID",
      width: 33,
      align: "center",
      headerAlign: "center",
    },
    {
      field: "name",
      headerName: "Name",
      align: "center",
      width: 200,
      headerAlign: "center",
    },
    {
      field: "age",
      headerName: "Age",
      align: "center",
      headerAlign: "center",
    },
    {
      field: "phone",
      headerName: "Phone",
      width: 200,
      align: "center",
      headerAlign: "center",
    },
    {
      field: "access",
      headerName: "Access",
      align: "center",
      renderCell: ({ row: { access } }) => (
        <Box
          sx={{
            p: "5px",
            width: "99px",
            borderRadius: "3px",
            textAlign: "center",
            display: "flex",
            justifyContent: "space-evenly",
            backgroundColor:
              access === "Admin"
                ? theme.palette.primary.dark
                : access === "Manager"
                ? theme.palette.secondary.dark
                : "#3da58a",
            marginTop: "10px",
          }}
        >
          {access === "Admin" && (
            <AdminPanelSettingsOutlined
              sx={{ color: "#fff" }}
              fontSize="small"
            />
          )}

          {access === "Manager" && (
            <SecurityOutlined sx={{ color: "#fff" }} fontSize="small" />
          )}

          {access === "User" && (
            <LockOpenOutlined sx={{ color: "#fff" }} fontSize="small" />
          )}

          <Typography sx={{ fontSize: "13px", color: "#fff" }}>
            {access}
          </Typography>
        </Box>
      ),
    },
    {
      field: "email",
      headerName: "Email",
      width: 200,
      align: "center",
      headerAlign: "center",
    },
    {
      field: "actions",
      headerName: "Actions",
      width: 200,
      align: "center",
      headerAlign: "center",
      renderCell: () => (
        <Box sx={{ display: "flex", justifyContent: "space-around" }}>
          <IconButton>
            <DeleteOutline onClick={handleDeleteClick} />
          </IconButton>
          <IconButton>
            <EditOutlined />
          </IconButton>
          <IconButton>
            <VisibilityOutlined />
          </IconButton>
        </Box>
      ),
    },
  ];

  return (
    <Box>
      <Header title={"TEAM"} subTitle={"Managing the Team Members"} />
      <Box sx={{ height: 600, mx: "auto" }}>
        <DataGrid rows={rows} columns={columns} />
      </Box>
      <Snackbar
        open={showSnackbar}
        autoHideDuration={6000}
        onClose={handleCloseSnackbar}
        message="Deleted successfully!"
      />
    </Box>
  );
};

export default EditEmp;
