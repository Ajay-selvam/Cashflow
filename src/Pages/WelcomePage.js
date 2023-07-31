import React, { useState } from "react";
import { UserOutlined } from "@ant-design/icons";
import { Button, Col, Input, Modal, Row, message } from "antd";
import { useSnackbar } from "notistack";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const WelcomePage = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [messageApi, contextHolder] = message.useMessage();
  const { enqueueSnackbar, closeSnackbar } = useSnackbar();
  const navigate = useNavigate();
  const openForm = () => {
    setIsOpen(true);
  };
  const forgotPassword = () => {
    navigate("/forgotPassword");
  };
  const sendloginData = () => {
    if (username === "" || password === "") {
      error();
    } else {
      axios
        .post("http://66.85.137.50:5050/CashForecasting/api/auth/signin", {
          usernameOrEmail: username,
          password: password,
        })
        .then((res) => {
          console.log(res.data.accessToken);
          console.log("first", res.data);
          localStorage.setItem("token", res.data.accessToken);
          message.success("Login successful!");
          navigate("/landingpage");
        })
        .catch((er) => {
          console.log("Error while signin", er);
          message.error("Incorrect username or password");
        });
    }
    console.log("username", username);
    console.log("password", password);
  };

  const error = () => {
    messageApi.open({
      type: "error",
      content: "Please fill all the fields",
    });
  };
  return (
    <div
      style={{
        height: "100vh",
        width: "100vw",
        // background: "rgb(16,197,119)",
        background:
          "linear-gradient(90deg, rgba(16,197,119,1) 0%, rgba(16,197,119,1) 38%, rgba(96,214,164,1) 100%)",
      }}
    >
      {/* header component started here */}
      <Row
        style={{
          height: "10%",
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
            src="./assets/FocusR_1000px1.png"
            alt="logo"
            width="90%"
            style={{
              marginLeft: "80px",
              marginTop: "10px",
            }}
          />
        </Col>
        <Col span={19}>{/* Just for space */}</Col>
        <Col
          span={2}
          style={{
            alignSelf: "center",
          }}
        >
          <button className="white-btn-top" onClick={openForm}>
            login
          </button>
        </Col>
      </Row>
      {/* header component ended here */}
      <Row
        style={{
          height: "90%",
        }}
      >
        <Col
          span={12}
          style={{
            paddingLeft: "5em",
            paddingRight: "5em",
            paddingBottom: "5em",
            paddingTop: "5em",
          }}
        >
          <h5
            className="top-header"
            style={{
              marginTop: "1em",
            }}
          >
            CASH MANAGEMENT SOLUTIONS
          </h5>
          <h1
            className="header-title"
            style={{
              marginTop: "1em",
            }}
          >
            CASH MANAGEMENT SOLUTIONS & SYSTEMS FOR YOUR BANK
          </h1>
          <p
            className="header-para"
            style={{
              marginTop: "1em",
            }}
          >
            On the assumption of impact of the episodic analysis, within the
            framework of the essential component indicates the importance of The
            Capability of Lucid Consequence (Kelly Marroquin in The Book of the
            Interactive Services Detection) We must bear in mind that study of
            crucial practices benefits from permanent inesult of what is
            conventionally known as existing network.
          </p>
          <button
            className="white-btn"
            style={{
              marginTop: "1em",
            }}
            onClick={openForm}
          >
            login
          </button>
        </Col>
        <Col
          span={12}
          style={{
            paddingLeft: "5em",
            paddingRight: "5em",
            paddingBottom: "5em",
            paddingTop: "5em",
          }}
        >
          <img
            width="66%"
            src="./assets/right-img-png.png"
            alt="right"
            style={{
              alignSelf: "center",
            }}
          />
        </Col>
      </Row>
      <Modal
        open={isOpen}
        onCancel={() => setIsOpen(false)}
        onOk={() => setIsOpen(false)}
        footer={[
          <center>
            <br />
            <Button
              type="primary"
              style={{
                width: "100%",
                backgroundColor: "#04AA6D",
              }}
              onClick={sendloginData}
              size="large"
            >
              Login
            </Button>
          </center>,
        ]}
        centered
      >
        <center>
          <h1>login</h1>
        </center>
        <Input
          placeholder="Enter your username"
          prefix={<UserOutlined />}
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          size="large"
        />
        <br />
        <br />
        <Input.Password
          placeholder="Enter your password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          size="large"
        />
        <br />
        <br />
        <Button
          style={{ color: "#04AA6D" }}
          onClick={forgotPassword}
          type="link"
        >
          forgot your Password ?
        </Button>
      </Modal>
      {contextHolder}
    </div>
  );
};

export default WelcomePage;
