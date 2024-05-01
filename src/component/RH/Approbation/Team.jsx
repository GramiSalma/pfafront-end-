import React, { useState } from "react";
import { DataGrid } from "@mui/x-data-grid";
import { rows } from "./data";
import { useTheme } from "@mui/material";
import { IconButton, Box, Typography, Snackbar } from "@mui/material";
import {
  AdminPanelSettingsOutlined,
  LockOpenOutlined,
  SecurityOutlined,
  CheckCircleOutlineOutlined,
  CancelOutlined,
} from "@mui/icons-material";
import Header from "../NavbarRh/Header";

const Team = () => {
  const theme = useTheme();
  const [showSnackbar, setShowSnackbar] = useState(false);
  const [snackbarMessage, setSnackbarMessage] = useState("");

  const columns = [
    {
      field: "id",
      headerName: "ID",
      align: "center",
      headerAlign: "center",
    },
    {
      field: "name",
      headerName: "name",
      align: "center",
      headerAlign: "center",
      width: 200,
    },
    {
      field: "email",
      headerName: "email",
      width: 300,
      align: "center",
      headerAlign: "center",
    },
    { field: "age", headerName: "age", align: "center", headerAlign: "center" },
    {
      field: "phone",
      headerName: "phone",
      width: 170,
      align: "center",
      headerAlign: "center",
    },
    {
      field: "access",
      headerName: "access",
      width: 120,
      align: "center",
      renderCell: ({ row: { access } }) => {
        return (
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
        );
      },
    },
    {
      field: "actions",
      headerName: "Actions",
      width: 120,
      align: "center",
      renderCell: () => (
        <Box sx={{ display: "flex", justifyContent: "space-around" }}>
          <IconButton onClick={handleApproveClick}>
            <CheckCircleOutlineOutlined />
          </IconButton>
          <IconButton onClick={handleRejectClick}>
            <CancelOutlined />
          </IconButton>
        </Box>
      ),
    },
  ];

  const handleApproveClick = () => {
    // Logique pour approuver l'action
    setSnackbarMessage("Approved successfully!");
    setShowSnackbar(true);
  };

  const handleRejectClick = () => {
    // Logique pour rejeter l'action
    setSnackbarMessage("Rejected successfully!");
    setShowSnackbar(true);
  };

  const handleCloseSnackbar = (event, reason) => {
    if (reason === "clickaway") {
      return;
    }
    setShowSnackbar(false);
  };

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
        message={snackbarMessage}
      />
    </Box>
  );
};

export default Team;
