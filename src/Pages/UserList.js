/* eslint-disable eqeqeq */
/* eslint-disable react-hooks/exhaustive-deps */
import { Col, Input, Row, Select, Space, message } from "antd";
import { Button, IconButton, ButtonGroup, TextField } from "@mui/material";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";
import ModeEditOutlineIcon from "@mui/icons-material/ModeEditOutline";
import React, { useEffect, useState } from "react";
import SideBar from "../Components/SideBar";
import APIURL from "../APIURL..json";
import axios from "axios";

const UserList = () => {
  const [open, setOpen] = React.useState(false);
  const [username, setUsername] = useState("");
  const [fullname, setFullname] = useState("");
  const [arr, setArr] = useState([]);
  const [id, setId] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [role, setRole] = useState("");
  const [er, setErr] = useState("");
  const [messageApi, contextHolder] = message.useMessage();

  const roleArray = [
    { value: "ROLE_ADMIN", label: "Admin" },
    { value: "ROLE_USER", label: "User" },
  ];

  const [editValue, setEditValues] = useState({
    id: "",
    name: "",
    username: "",
    email: "",
    password: "",
    userRoles: "",
  });

  const token = localStorage.getItem("token");
  const [arrayData, setArrayData] = React.useState();
  useEffect(() => {
    axios
      .get(`${APIURL.url}/api/Users/Service/getListOfUsers`, {
        headers: {
          "Content-Type": "application/json", // eslint-disable-next-line prefer-template
          Authorization: "Bearer " + token,
        },
      })
      .then((res) => {
        console.log("response data", res.data);
        setArrayData(res.data);
        console.log("first", arrayData);
      })
      .catch((err) => {
        console.log("Error", err);
      });
  }, []);
  const handleClickOpen = () => {
    setOpen(true);
  };
  const createNewUser = () => {
    // console.log("username",username)
    // console.log("fullname",fullname)
    // console.log("email",email)
    // console.log("password",password)
    // console.log("role",role)
    axios.post("http://66.85.137.50:5050/CashForecasting/api/auth/signup", {
      id: editValue.id,
      name: editValue.fullname,
      username: editValue.username,
      email: editValue.email,
      password: editValue.password,
      userRoles: editValue.role,
    });
    let temp = [...arr];

    let index = temp.findIndex((a) => a.id === editValue.id);
    temp.splice(index, 1);
    temp
      .push(createNewUser)
      .then((res) => {
        console.log("send res", res.status);
        if (res.status == 201 || res.status == "201") {
          successAlert();
        }
      })
      .catch((err) => {
        console.log("Error while create user", err.response.data.message);
        setErr(err.response.data.message);
        errorAlert(er);
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
      content: "User created successfully",
    });
  };

  const handleClose = () => {
    setOpen(false);
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
          height: "94vh",
          width: "80vw",
          margin: "1em",
          backgroundColor: "#fff",
          padding: "1em",
        }}
      >
        <h2>User Management</h2>
        <table id="users">
          <tr>
            <th className="table-header">Name</th>
            <th className="table-header">Username</th>
            {/* <th className="table-header">Fullname</th> */}
            <th className="table-header">Email</th>
            <th className="table-header">Status</th>
            <th className="table-header">CreatedAt</th>
            {/* <th className="table-header">Edit</th> */}
          </tr>

          {arrayData &&
            arrayData.map((x, i) => {
              return (
                <tr key={i}>
                  <td>{x.name}</td>
                  <td>{x.username}</td>
                  {/* <td>{x.fullname == null ? "-" : x.fullname}</td> */}
                  <td>{x.email}</td>
                  <td
                    style={{
                      borderRadius: 18,
                      color: x.is_Active == "Y" ? "green" : "red",
                      textAlign: "center",
                      fontWeight: "bold",
                    }}
                  >
                    {x.is_Active == "Y" ? "Active" : "Inactive"}
                  </td>
                  <td>{String(x.createdAt).slice(0, 10)}</td>
                  {/* <td>
                    <ButtonGroup
                      variant="contained"
                      aria-label="outlined buttonsColor button group"
                      disableElevation
                      onClick={handleClickOpen}
                    >
                      <IconButton>
                        <ModeEditOutlineIcon color="buttonsColor" />
                      </IconButton>
                    </ButtonGroup>

                    <Dialog open={open} onClose={handleClose}>
                      <DialogTitle>Edit User</DialogTitle>
                      <DialogContent>
                        <Space direction="vertical" size={20}>
                          <Space>
                            <Input
                              placeholder="fullname"
                              value={editValue.fullname}
                              onChange={(e) => setFullname(e.target.value)}
                              size="large"
                            />
                            <Input
                              placeholder="username"
                              value={editValue.username}
                              onChange={(e) => setUsername(e.target.value)}
                              size="large"
                            />
                          </Space>

                          <Space direction="vertical" size={20}>
                            <Input
                              placeholder="email"
                              style={{
                                width: "26em",
                              }}
                              size="large"
                              value={editValue.email}
                              onChange={(e) => setEmail(e.target.value)}
                            />
                            <Input
                              placeholder="password"
                              style={{
                                width: "26em",
                              }}
                              size="large"
                              value={editValue.password}
                              onChange={(e) => setPassword(e.target.value)}
                            />
                            <Select
                              placeholder="Role"
                              style={{
                                width: "26em",
                              }}
                              size="large"
                              value={editValue.role}
                              onChange={(e) => setRole(e)}
                              options={roleArray}
                            />
                            <Space>
                              <DialogActions>
                                <Button></Button>
                                <Button></Button>
                                <Button></Button>
                                <Button onClick={handleClose}>Cancel</Button>
                                <Button
                                  type="primary"
                                  style={{
                                    justifyContent: "left",
                                    alignItems: "end",
                                    width: "6.5em",
                                    backgroundColor: "#b2ead5",
                                    color: "black",
                                  }}
                                  size="large"
                                  onClick={createNewUser}
                                >
                                  Updated
                                </Button>
                              </DialogActions>
                            </Space>
                          </Space>
                        </Space>
                      </DialogContent>
                    </Dialog>
                  </td> */}
                </tr>
              );
            })}
        </table>
      </div>
    </div>
  );
};

export default UserList;
