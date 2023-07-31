import React from "react";
import jwtDecode from "jwt-decode";
import SideBar from "../Components/SideBar";
import { Grid, Stack, Typography } from "@mui/material";
import { Col } from "antd";
// import Tablenav from "../tables/Tablenav";
// import WhiteFooter from "../../components/WhiteFooter";
const LandingPage = () => {
  console.log("JWt returned data", jwtDecode(localStorage.getItem("token")));
  const data = jwtDecode(localStorage.getItem("token"));
  console.log("role", data.role);
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
          height: "100vh",
          width: "100vw",
        }}
      >
         <Col
        span={3}
        style={{
          alignSelf: "center",
          alignItems: "center",
        }}
      >
        <img
          src="./assets/FocurR_arrow.png"
          // alt="logo"
          width="30%"
          style={{
            marginLeft: "990px",
            marginTop: "20px",
            marginBottom: "-40px"
          }}
        />
        </Col>
        <Grid
          container
          xs={5}
          md={20}
          xl={20}
          sm={20}
          sx={{
            height: "50%",
            // backgroundImage:
            //   "linear-gradient(to bottom right, #AD1616, #1D0202)",
          }}
        >
          {/* <Tablenav /> */}
          <Grid
            xs={12}
            md={12}
            xl={12}
            sm={12}
            display="flex"
            flexDirection="row"
          >
            <Grid
              md={6}
              xs={12}
              sm={6}
              xl={6}
              alignItems="center"
              height="100%"
              p={12}
            >
              <Stack spacing={2} alignItems="center">
                <Typography
                  variant="h5"
                  component="p"
                  sx={{
                    marginTop: "100",
                    alignItems: "flex-start",
                    textAlign: "left",
                    width: "120%",
                  }}
                  color="secondary"
                >
                  Hi
                </Typography>

                <Typography
                  variant="h4"
                  component="p"
                  sx={{
                    alignItems: "flex-start",
                    textAlign: "left",
                    width: "120%",
                  }}
                  color="#04AA6D"
                >
                  Welcome Admin
                </Typography>

                <Typography
                  component="p"
                  sx={{
                    alignItems: "flex-start",
                    textAlign: "left",
                    width: "120%",
                  }}
                  color=""
                >
                  Don't spend many time to manage your invoice. Instead, let us
                  take care of the leg work so You can spend your time on what
                  really matters....
                </Typography>
                <h1
                  className="header-title"
                  style={{
                    textAlign: "left",
                    marginLeft: "-1em",
                    marginTop: "1em",
                    color: "#04AA6D",
                  }}
                >
                  CASH MANAGEMENT SOLUTIONS & SYSTEMS FOR YOUR BANK
                </h1>
              </Stack>
            </Grid>

            <Grid
              md={6}
              xs={12}
              sm={6}
              xl={6}
              display="flex"
              justifyContent="flex-end"
              alignItems="center"
            >
              <img
                src="/assets/welcome.jpg"
                width="120%"
                height="70%"
                alt="adminuser"
              />
            </Grid>
          </Grid>
          {/* <WhiteFooter /> */}
        </Grid>
      </div>
    </div>
  );
};

export default LandingPage;
