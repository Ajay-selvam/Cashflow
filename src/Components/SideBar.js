/* eslint-disable eqeqeq */
import { TextField, Typography } from "@mui/material";
import React from "react";
import { useNavigate } from "react-router-dom";
// import $ from 'jquery'
const SideBar = () => {
  // $('.one').on('click',() => {
  //     window.location.href('/user-edit')
  // })
  // console.log("bhiv",window.location.href)
  const navigate = useNavigate();
  const goToUserList = () => {
    navigate("/user-list");
  };
  const gotToUserCreate = () => {
    navigate("/user-create");
  };
  const goToUserEdit = () => {
    navigate("/user-edit");
  };
  const goToInFlow = () => {
    navigate("/inflow");
  };
  const goToDummy = () => {
    navigate("/dummy");
  };
  const goToOutFlow = () => {
    navigate("/outflow");
  };
  const logout = () => {
    navigate("/");
  };
  const changepwd = () => {
    navigate("/changePassword");
  };
  return (
    <div
      style={{
        width: "19vw",
        backgroundColor: "#fff",
        height: "100vh",
        display: "flex",
        flexDirection: "column",
        boxShadow: "2px 2px 12px #dedede",
      }}
    >
      <h5
        style={{
          textAlign: "center",
          color: "#04AA6D",
        }}
      >
        ADMINSTRATOR
      </h5>
      <button
        className="a-link"
        style={{
          backgroundColor:
            window.location.href === "http://localhost:3000/user-list"
              ? "#cafae1"
              : "#fff",
        }}
        onClick={goToUserList}
      >
        User list
        <i class="bi bi-person-lines-fill"></i>
      </button>
      <button
        className="a-link"
        style={{
          backgroundColor:
            window.location.href === "http://localhost:3000/user-create"
              ? "#cafae1"
              : "#fff",
        }}
        onClick={gotToUserCreate}
      >
        User Create
        <i class="bi bi-person-fill-add"></i>
      </button>
      <button
        className="a-link"
        style={{
          backgroundColor:
            window.location.href === "http://localhost:3000/changePassword"
              ? "#cafae1"
              : "#fff",
        }}
        onClick={changepwd}
      >
        Update Password
        <i class="bi bi-person-fill-add"></i>
      </button>

      {/* <button className="a-link" style={{
        backgroundColor: window.location.href === "http://localhost:3000/user-edit" ? "#cafae1" : "#fff"
      }} onClick={goToUserEdit}>
        User Edit
        <i class="bi bi-person-fill-gear"></i>
      </button> */}
      <h5
        style={{
          textAlign: "center",
          color: "#04AA6D",
        }}
      >
        CASH MANAGEMENT
      </h5>
      <button
        className="a-link"
        style={{
          backgroundColor:
            window.location.href === "http://localhost:3000/inflow"
              ? "#cafae1"
              : "#fff",
        }}
        onClick={goToInFlow}
      >
        In Flow
        <i class="bi bi-cash-stack"></i>
      </button>
      <button
        className="a-link"
        style={{
          backgroundColor:
            window.location.href === "http://localhost:3000/outflow"
              ? "#cafae1"
              : "#fff",
        }}
        onClick={goToOutFlow}
      >
        Out Flow
        <i class="bi bi-cash"></i>
      </button>
      <button
        onClick={logout}
        style={{
          textAlign: "center",
          fontSize: "130%",
          border: "none",
          backgroundColor: "#e8f5e9",
          cursor: "pointer",
          color: "#04AA6D",
          marginTop: "10%",
        }}
      >
        Logout
      </button>
    </div>
  );
};

export default SideBar;
