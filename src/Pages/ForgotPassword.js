import React, { useState } from "react";
import { Typography, Container, Box, TextField, Stack } from "@mui/material";
import { LoadingButton } from "@mui/lab";
import { Button, Input, Row, Select, Space, message } from "antd";
import { useNavigate } from "react-router-dom";
import { Col } from "antd";

export default function ForgotPassword() {
  const [email, setEmail] = useState("");
  const navigate = useNavigate();
  // const [message, successAlert] = useState("");
  const [messageApi, contextHolder] = message.useMessage();

  const logout = () => {
    navigate("/");
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // call forgot password API
    fetch("http://66.85.137.50:5050/CashForecasting/api/auth/forgetPassword", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ email }),
    })
      .then((response) => response.json())
      .then((data) => {
        message.success("Mail send Successfully!");
        setEmail("");
      })
      .catch((error) => {
        message.error("Incorrect username or password");
      });
  };

  const errorAlert = (msg) => {
    messageApi.open({
      type: "error",
      content: `${msg}`,
    });
  };
  const successAlert = () => {
    messageApi.open({
      type: "success",
      content: "Mail Send Successfully",
    });
  };

  return (
    <div className="forgot-password-container">
      <Col
        span={3}
        style={{
          alignSelf: "center",
          alignItems: "center",
        }}
      >
        <img
          src="./assets/FocusR_1000px1.png"
          alt="logo"
          width="90%"
          style={{
            marginLeft: "20px",
            marginTop: "20px",
          }}
        />
      </Col>
      <Container style={{ marginTop: 110, marginRight: 140, color: "black" }}>
        <Box sx={{ maxWidth: 480, mx: "auto" }}>
          <>
            <Typography variant="h4" paragraph style={{ fontWeight: "bold" }}>
              Forgot your password?
            </Typography>
            <Typography sx={{ color: "text.secondary", mb: 5 }}>
              Please enter the email address associated with your account and We
              will email you a link to reset your password.
            </Typography>

            <form onSubmit={handleSubmit}>
              <div className="form-group">
                {/* <label htmlFor="email">Email Address</label>
              <input
                type="email"
                id="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="form-control"
                required
              /> */}
                <Stack spacing={3}>
                  <TextField
                    fullWidth
                    value={email}
                    type="email"
                    label="Email address"
                    onChange={(e) => setEmail(e.target.value)}
                  />
                </Stack>
              </div>
              {/* <button
                size="large"
                variant="contained"
                type="submit"
                className="btn btn-primary"
              >
                Submit
              </button> */}
              <LoadingButton
                sx={{ marginTop: "3%", backgroundColor: "#04AA6D" }}
                fullWidth
                size="large"
                type="submit"
                variant="contained"
              >
                Reset Password
              </LoadingButton>
              <LoadingButton
                sx={{ marginTop: "3%", color: "#04AA6D" }}
                fullWidth
                size="large"
                type="submit"
                // variant="contained"
                onClick={logout}
              >
                Back
              </LoadingButton>
            </form>
            {/* {message && <p className="message">{message}</p>} */}
          </>
        </Box>
      </Container>
    </div>
  );
}
