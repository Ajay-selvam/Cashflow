import { Button, Col, Input, Row, Select, Space, message } from "antd";
import axios from "axios";
import React, { useState } from "react";
import SideBar from "../Components/SideBar";

const UserEdit = () => {
  const [username, setUsername] = useState("");
  const [fullname, setFullname] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [role, setRole] = useState("");
  const [er, setErr] = useState("");
  const [messageApi, contextHolder] = message.useMessage();
  // const handleChange = (value) => {
  //   console.log(`selected ${value}`);
  // };

  const roleArray = [
    { value: "ROLE_ADMIN", label: "Admin" },
    { value: "ROLE_USER", label: "User" },
  ];

  const createNewUser = () => {
    // console.log("username",username)
    // console.log("fullname",fullname)
    // console.log("email",email)
    // console.log("password",password)
    // console.log("role",role)
    axios
      .post("http://66.85.137.50:5050/CashForecasting/api/auth/signup", {
        name: fullname,
        username: username,
        email: email,
        password: password,
        userRoles: role,
      })
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
  const resetData = () => {
    setUsername("");
    setFullname("");
    setEmail("");
    setPassword("");
    setRole("");
  };
  return (
    <div style={{
      display: "flex",
      flexDirection: "row",
    }}>
      <SideBar />

      <div
        style={{
          height: "100vh",
          width: "70%",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <div className="user-create-form">
          <center>
            <h1>Create New User</h1>
          </center>
          <Space direction="vertical" size={20}>
            <Space>
              <Input
                placeholder="fullname"
                value={fullname}
                onChange={(e) => setFullname(e.target.value)}
                size="large"
              />
              <Input
                placeholder="username"
                value={username}
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
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
              <Input
                placeholder="password"
                style={{
                  width: "26em",
                }}
                size="large"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
              <Select
                placeholder="Role"
                style={{
                  width: "26em",
                }}
                size="large"
                value={role}
                onChange={(e) => setRole(e)}
                options={roleArray}
              />
              <Space>
                <Button
                  style={{
                    width: "8em",
                  }}
                  size="large"
                  onClick={resetData}
                >
                  Reset
                </Button>
                <Button
                  type="primary"
                  style={{
                    width: "17.5em",
                  }}
                  size="large"
                  onClick={createNewUser}
                >
                  Create User
                </Button>
              </Space>
            </Space>
          </Space>
        </div>
        {contextHolder}
      </div>
    </div>
  );
};

export default UserEdit;
