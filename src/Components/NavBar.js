import { useNavigate } from "react-router-dom";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import IconButton from "@mui/material/IconButton";
import LogoutIcon from "@mui/icons-material/Logout";

export default function NavBar() {
  const navigate = useNavigate();
  const signinClick = () => {
    navigate("/user-list");
  };
  return (
    <Box sx={{ flexGrow: 1 }}>
      <Toolbar>
        <IconButton
          size="large"
          edge="start"
          color="#04AA6D"
          aria-label="menu"
          sx={{
            mr: {
              md: 2,
              xs: 0,
              xl: 2,
            },
            display: {
              md: "none",
              xs: "block",
              xl: "none",
            },
          }}
        ></IconButton>
        <Button
          onClick={signinClick}
          endIcon={<LogoutIcon color="#04AA6D" />}
          sx={{
            display: {
              md: "flex",
              xs: "none",
              xl: "block",
            },
            textTransform: "capitalize",
            borderRadius: "1px",
            marginRight: "0.2%",
            marginLeft: "1000%",
          }}
        >
          <Typography color="#04AA6D" component="p" style={{ fontSize: "120%", fontWeight: "bold"}}>
            Logout
          </Typography>
        </Button>
        {/* <Button onClick={adminClick} endIcon={<AdminPanelSettingsIcon color="secondary"/>} variant='contained' color="buttonsColor" sx={{
             display:{
              md:'flex',
              xs:'none',
              xl:'flex'
            }, marginRight:'1%',
              textTransform:"capitalize"
          }}>
              <Typography component='p' color='secondary'>
                 Admin
              </Typography>
          </Button> */}
      </Toolbar>
    </Box>
  );
}
