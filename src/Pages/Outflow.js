/* eslint-disable react-hooks/exhaustive-deps */
import React, { useState } from "react";
import SideBar from "../Components/SideBar";
import axios from "axios";
import APIURL from "../APIURL..json";

const Outflow = () => {
  const [showDialogActual, setShowDialogAtual] = useState(false);
  const [ouname, setOuname] = useState("");
  // const [ponumber, setPonumber] = useState("");
  // const [fromDate, setFromDate] = useState("");
  const [toDate, setToDate] = useState("");
  const [forCast, setForcast] = useState("");
  const [actualArrayData, setActualArrayData] = useState([]);
  const [actual1ArrayData, setActual1ArrayData] = useState([]);
  // const [paymentArrayData, setpaymentArrayData] = useState({});
  const [jantoFeb, setJantoFeb] = useState("");
  const [febtoMar, setFebtoMar] = useState("");
  const [martoApr, setMartoApr] = useState("");
  const [month, setMonth] = useState("");
  const [foreCast, setForecast] = useState("");
  const [balance, setBalance] = useState("");
  const [prepay, setPrepay] = useState("");
  const [jantoFeb1, setJantoFeb1] = useState("");
  const [febtoMar1, setFebtoMar1] = useState("");
  const [martoApr1, setMartoApr1] = useState("");
  const [month1, setMonth1] = useState("");
  const [actualOut, setActualOut] = useState("");
  const [foreOut, setForeOut] = useState("");

  const token = localStorage.getItem("token");

  /* eslint-disable */

  var d = new Date().getDate();
  var m = new Date().getMonth();
  var y = new Date().getFullYear();
  var day = new Date().getDay();
  var hr = new Date().getHours() - 12;
  var min = new Date().getMinutes();
  var str = "";
  switch (day) {
    case 0:
      str += "Sun";
      break;
    case 1:
      str += "Mon";
      break;
    case 2:
      str += "Tue";
      break;
    case 3:
      str += "Wed";
      break;
    case 4:
      str += "Thu";
      break;
    case 5:
      str += "Fri";
      break;
    case 6:
      str += "Sat";
      break;
    default:
      break;
  }
  if (m === 11) {
    m = 12;
  } else if (m === 0) {
    m = 1;
  } else if (m === 1) {
    m = 2;
  } else if (m === 2) {
    m = 3;
  } else if (m === 3) {
    m = 4;
  } else if (m === 4) {
    m = 5;
  } else if (m === 5) {
    m = 6;
  } else if (m === 6) {
    m = 7;
  } else if (m === 7) {
    m = 8;
  } else if (m === 8) {
    m = 9;
  } else if (m === 9) {
    m = 10;
  } else if (m === 10) {
    m = 11;
  }
  // console.log(d + '/' + m + '/' + y + ' - ' + str + ' - ' + hr + ':' + min);
  const fromDate = String(
    y + "-" + `${m <= 9 ? "0" + m : m}` + "-" + `${d <= 9 ? "0" + d : d}`
  );
  console.log("first", fromDate);

  const findActual = () => {
    if (ouname === "" || toDate === "") {
      alert("Please fill all fields");
    } else {
      axios
        .get(
          `${APIURL.url}/api/actualOutflows/sum?fromDate=${fromDate}&toDate=${toDate}`,
          {
            headers: {
              "Content-Type": "application/json", // eslint-disable-next-line prefer-template
              Authorization: "Bearer " + token,
            },
          }
        )
        .then((res) => {
          console.log("response data", res.data);
          if (res.status === 200 || res.status === 201) {
            setActualArrayData(res.data);
            console.log("actual sum", actual1ArrayData);
          }
        })
        .catch((err) => {
          console.log("Error", err);
        });

      axios
        .get(`${APIURL.url}/api/actualOutflows/payments`, {
          headers: {
            "Content-Type": "application/json", // eslint-disable-next-line prefer-template
            Authorization: "Bearer " + token,
          },
        })
        .then((res1) => {
          console.log("response new data", res1.data);
          setJantoFeb(res1.data["date1"]);
          setFebtoMar(res1.data["date2"]);
          setMartoApr(res1.data["date3"]);
          setMonth(res1.data["fromDate4"]);
          setActualOut(res1.data);
          // if (res1.status === 200 || res1.status === 201) {
          //   setpaymentArrayData(res1.data);
          //   console.log("actual payment", paymentArrayData);
          // }
        })
        .catch((err) => {
          console.log("Error", err);
        });
      axios
        .get(
          `${APIURL.url}/api/forecastOutflows/details?fromDate=${fromDate}&toDate=${toDate}`,
          {
            headers: {
              "Content-Type": "application/json", // eslint-disable-next-line prefer-template
              Authorization: "Bearer " + token,
            },
          }
        )
        .then((res2) => {
          console.log("response data", res2.data);
          setShowDialogAtual(true);
          setForecast(res2.data["forecast_receipted_amount"]);
          setBalance(res2.data["balance_amount"]);
          setPrepay(res2.data["prepay_amount"]);
          // if (res2.status === 200 || res2.status === 201) {
          //   setActual1ArrayData(res2.data);
          //   setShowDialogAtual(true);
          //   console.log("forecast sum", actual1ArrayData);
          // }
        })
        .catch((err) => {
          console.log("Error", err);
        });
      axios
        .get(`${APIURL.url}/api/forecastOutflows/payments`, {
          headers: {
            "Content-Type": "application/json", // eslint-disable-next-line prefer-template
            Authorization: "Bearer " + token,
          },
        })
        .then((res1) => {
          console.log("response new data", res1.data);
          setJantoFeb1(res1.data["date1"]);
          setFebtoMar1(res1.data["date2"]);
          setMartoApr1(res1.data["date3"]);
          setMonth1(res1.data["fromDate4"]);
          setForeOut(res1.data);
          // if (res1.status === 200 || res1.status === 201) {
          //   setpaymentArrayData(res1.data);
          //   console.log("actual payment", paymentArrayData);
          // }
        })
        .catch((err) => {
          console.log("Error", err);
        });
    }
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
          height: "50%",
          width: "50vw",
          margin: "1em",
          backgroundColor: "#fff",
          padding: "1em",
          display: "flex",
          marginTop: "6%",
        }}
      >
        <div className="form-wrapper-outflow">
          <h2>OutFlow Actual & ForeCast</h2>
          <div className="row1">
            <label for="#ouname" className="label">
              OU Name
              <br />
              <input
                id="ouname"
                className="text-input"
                value={ouname}
                onChange={(e) => setOuname(e.target.value)}
              />
            </label>
            {/* &nbsp;
            <label for="#ponumber" className="label">
              PO Number
              <br />
              <input
                id="ponumber"
                className="text-input"
                value={ponumber}
                onChange={(e) => setPonumber(e.target.value)}
              />
            </label> */}
            &nbsp;
            <label for="#forCast" className="label">
              ForeCast Date
              <br />
              <input
                style={{
                  width: "360px",
                }}
                id="forCast"
                // type="date"
                placeholder="30-10-2000"
                className="date-input"
                value={"30-10-2000"}
                onChange={(e) => setForcast(e.target.value)}
              />
            </label>
            &nbsp;
          </div>
          <div className="row2">
            <label for="#fromdate" className="label">
              Sys Date
              <br />
              <input
                style={{ width: "250%" }}
                id="fromdate"
                type="date"
                className="date-input"
                value={fromDate}
                onChange={(e) => setFromDate(e.target.value)}
              />
            </label>
          </div>
          <div className="row2" style={{ marginTop: "2%" }}>
            <label for="#todate" className="label">
              To Date
              <br />
              <input
                style={{ width: "250%" }}
                id="todate"
                type="date"
                className="date-input"
                value={toDate}
                onChange={(e) => setToDate(e.target.value)}
              />
            </label>
          </div>
          &nbsp;&nbsp;
          <button className="button-lite" onClick={findActual}>
            Find Actual&nbsp;<i class="bi bi-search"></i>
          </button>
        </div>
        {/* actual ended here */}
      </div>
      {showDialogActual ? (
        <div className="dialog-box">
          <div className="dialog-close-div">
            <button
              className="close-btn"
              onClick={() => setShowDialogAtual(false)}
              style={{ marginLeft: "95%" }}
            >
              X &nbsp;close
            </button>
          </div>
          <center>
            <h1>Actual</h1>
          </center>
          <table id="actual">
            <tr>
              <th className="table-header">Receipt Amount</th>
              <th className="table-header">Invoice Amount</th>
              <th className="table-header">Validated Amount</th>
              <th className="table-header">UnValidated Amount</th>
              <th className="table-header">Amount Paid</th>
              <th className="table-header">Amount Remaining</th>
            </tr>
            {actualArrayData &&
              actualArrayData.map((x, i) => {
                return (
                  <tr
                    style={{ textAlign: "center", fontWeight: "bold" }}
                    key={i}
                  >
                    <td>{x.receipted_amount}</td>
                    <td>
                      {x.invoice_amount == null ? "null" : x.invoice_amount}
                    </td>
                    <td>
                      {x.validated_amount == null ? "null" : x.validated_amount}
                    </td>
                    <td>
                      {x.unvalidated_amount == null
                        ? "null"
                        : x.unvalidated_amount}
                    </td>
                    <td>{x.amount_paid == null ? "null" : x.amount_paid}</td>
                    <td>{x.amount_remaining}</td>
                  </tr>
                );
              })}
          </table>
          <h1 style={{ textAlign: "center" }}>Actual Payment</h1>
          <table id="actual">
            <tr>
              <th className="table-header" colSpan="2">
                {jantoFeb}
              </th>
              <th className="table-header" colSpan="2">
                {febtoMar}
              </th>
              <th className="table-header" colSpan="2">
                {martoApr}
              </th>
              <th className="table-header" colSpan="2">
                {month}
              </th>
            </tr>

            <tr>
              <th className="table-header">PrePay Amount</th>
              <th className="table-header">Amount Paid</th>
              <th className="table-header">PrePay Amount</th>
              <th className="table-header">Amount Paid</th>
              <th className="table-header">PrePay Amount</th>
              <th className="table-header">Amount Paid</th>
              <th className="table-header">PrePay Amount</th>
              <th className="table-header">Amount Paid</th>
            </tr>
            <tr style={{ fontWeight: "bold" }}>
              {/* <td>
                {paymentArrayData.map((val) => {
                  return val.amount_paid;
                })}
              </td> */}
              <td>{actualOut.paymentDueAmount1.prepay_amount}</td>
              <td>{actualOut.paymentDueAmount1.amount_paid}</td>
              <td>{actualOut.paymentDueAmount2.prepay_amount}</td>
              <td>{actualOut.paymentDueAmount2.amount_paid}</td>
              <td>{actualOut.paymentDueAmount3.prepay_amount}</td>
              <td>{actualOut.paymentDueAmount3.amount_paid}</td>
              <td>{actualOut.paymentDueAmount4.prepay_amount}</td>
              <td>{actualOut.paymentDueAmount4.amount_paid}</td>
            </tr>
          </table>
          <center>
            <h1>Forecast</h1>
          </center>
          <table id="actual">
            <tr>
              <th className="table-header">Forecast Receipt Amount</th>
              <th className="table-header">Balance Amount</th>
              <th className="table-header">Prepay Amount</th>
              {/* <th className="table-header" colSpan="2"></th> */}
              <th className="table-header" colSpan="3">
                {jantoFeb1}
              </th>
              <th className="table-header" colSpan="3">
                {febtoMar1}
              </th>
              <th className="table-header" colSpan="3">
                {martoApr}
              </th>
              <th className="table-header" colSpan="3">
                {month1}
              </th>
            </tr>
            <tr>
              <th></th>
              <th></th>
              <th></th>
              {/* <th className="table-header">Pre Payment</th>
              <th className="table-header">Balance Payment</th> */}
              <th className="table-header">Receipted Amount</th>
              <th className="table-header">PrePay Amount</th>
              <th className="table-header">Amount Paid</th>
              <th className="table-header">Receipted Amount</th>
              <th className="table-header">PrePay Amount</th>
              <th className="table-header">Amount Paid</th>
              <th className="table-header">Receipted Amount</th>
              <th className="table-header">PrePay Amount</th>
              <th className="table-header">Amount Paid</th>
              <th className="table-header">Receipted Amount</th>
              <th className="table-header">PrePay Amount</th>
              <th className="table-header">Amount Paid</th>
            </tr>

            <tr style={{ backgroundColor: " #b2ead5", fontWeight: "bold" }}>
              <td>{foreCast}</td>
              <td>{balance}</td>
              <td>{prepay}</td>
              <td>{foreOut.paymentDueAmount1.forecast_receipted_amount}</td>
              <td>{foreOut.paymentDueAmount1.prepay_amount}</td>
              <td>{foreOut.paymentDueAmount1.balance_amount}</td>
              <td>{foreOut.paymentDueAmount2.forecast_receipted_amount}</td>
              <td>{foreOut.paymentDueAmount2.prepay_amount}</td>
              <td>{foreOut.paymentDueAmount2.balance_amount}</td>
              <td>{foreOut.paymentDueAmount3.forecast_receipted_amount}</td>
              <td>{foreOut.paymentDueAmount3.prepay_amount}</td>
              <td>{foreOut.paymentDueAmount3.balance_amount}</td>
              <td>{foreOut.paymentDueAmount4.forecast_receipted_amount}</td>
              <td>{foreOut.paymentDueAmount4.prepay_amount}</td>
              <td>{foreOut.paymentDueAmount4.balance_amount}</td>
            </tr>
          </table>
        </div>
      ) : null}
    </div>
  );
};

export default Outflow;
