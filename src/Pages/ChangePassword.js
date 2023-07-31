import React, { useState } from "react";
import { Typography, Container, Box, TextField, Button } from "@mui/material";
// import { useSnackbar } from "notistack";
import axios from "axios";
import { useParams } from "react-router-dom";
import SideBar from "../Components/SideBar";

export default function ChangePassword() {
  // const [currentPassword, setCurrentPassword] = useState("");
  const [password, setNewPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  // const [confirmPassword, setConfirmNewPassword] = useState("");
  // const { enqueueSnackbar, closeSnackbar } = useSnackbar();
  const [message, setMessage] = useState("");
  const token = localStorage.getItem("token");

  const handleSubmit = (e) => {
    e.preventDefault();

    // Verify that the new password and confirm password match

    if (password !== confirmPassword) {
      setMessage("New password and confirm password do not match");
      // enqueueSnackbar("Passwords do not match", { variant: "error" });
      return;
    }

    // Make the API call to change the password

    axios
      .put(
        "http://66.85.137.50:5050/CashForecasting/api/auth/updateNewPassword",
        { password, token }
      )
      .then((response) => {
        // Handle the response from the API
        if (response.status === 200) {
          setMessage("Password changed successfully");
          setNewPassword("");
          // setConfirmPassword("");
        } else {
          setMessage("Password change failed");
        }
      })
      .catch((error) => {
        setMessage("An error occurred while changing the password");
        console.error(error);
      });
  };

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "row",
      }}
    >
      <SideBar />
      <div
        style={{
          height: "50vh",
          width: "50vw",
          margin: "1em",
          backgroundColor: "#fff",
          marginLeft: "10%",
          padding: "1em",
        }}
      >

        <Container style={{ marginTop: 110, marginRight: 140, color: "black" }}>
          <Box sx={{ maxWidth: 480, mx: "auto" }}>
          {message && <p>{message}</p>}
            <Typography
              component="h1"
              variant="h5"
              paragraph
              style={{ fontWeight: "bold" }}
            >
              Change Password
            </Typography>
            {/* <Typography variant="h4" paragraph style={{ fontWeight: "bold" }}>
          Change Password
        </Typography> */}
            <form onSubmit={handleSubmit}>
              <TextField
                variant="outlined"
                margin="normal"
                required
                fullWidth
                id="new-password"
                label="New-Password"
                name="password"
                value={password}
                autoFocus
                onChange={(e) => setNewPassword(e.target.value)}
                // onChange={(event) => setNewPassword(event.target.value)}
              />
              <TextField
                variant="outlined"
                margin="normal"
                required
                fullWidth
                name="confirmpassword"
                label="Confirm Password"
                value={confirmPassword}
                id="confirmpassword"
                onChange={(e) => setConfirmPassword(e.target.value)}
              />
              <Button
                sx={{ mt: 3 }}
                style={{ backgroundColor: "#04AA6D" }}
                type="submit"
                fullWidth
                variant="contained"
              >
                Change Password
              </Button>
            </form>
          </Box>
        </Container>
      </div>
    </div>
  );
}
