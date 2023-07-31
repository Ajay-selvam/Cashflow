/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect, useState } from "react";
import SideBar from "../Components/SideBar";
import axios from "axios";
import APIURL from "../APIURL..json";

const InFlow = () => {
  // const [showDialog, setShowDialog] = useState(false);

  const [showDialogActual, setShowDialogActual] = useState(false);
  const [ouname, setOuname] = useState("");
  // const [ponumber, setPonumber] = useState("");
  // const [fromDate, setFromDate] = useState("");
  const [toDate, setToDate] = useState("");
  const [actualArrayData, setActualArrayData] = useState([]);
  const [balance, setBalance] = useState("");
  const [invoice, setInvoice] = useState("");
  const [receipt, setReceipt] = useState("");
  const [receiptClear, setReceiptClear] = useState("");
  const [shipped, setShipped] = useState("");
  const [jantoFeb, setJantoFeb] = useState("");
  const [febtoMar, setFebtoMar] = useState("");
  const [martoApr, setMartoApr] = useState("");
  const [month, setMonth] = useState("");
  const [foreCast, setForecast] = useState("");
  const [total, setTotal] = useState("");
  const [jantoFeb1, setJantoFeb1] = useState("");
  const [febtoMar1, setFebtoMar1] = useState("");
  const [martoApr1, setMartoApr1] = useState("");
  const [month1, setMonth1] = useState("");
  const [paymentData, setPaymentData] = useState("");
  const [payForecast, setPayForecast] = useState("");

  const token = localStorage.getItem("token");

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
    if (ouname === "" || fromDate === "" || toDate === "") {
      alert("Please fill all fields");
    } else {
      axios
        .get(
          `${APIURL.url}/api/actualInflows/details?fromDate=${fromDate}&toDate=${toDate}`,
          {
            headers: {
              "Content-Type": "application/json", // eslint-disable-next-line prefer-template
              Authorization: "Bearer " + token,
            },
          }
        )
        .then((res) => {
          console.log("response data", res.data);
          setBalance(res.data["shipped_amount"]);
          setInvoice(res.data["invoiced_amount"]);
          setReceipt(res.data["receipted_amount"]);
          setReceiptClear(res.data["receipt_cleared_amount"]);
          setShipped(res.data["balance_amount"]);
          setShowDialogActual(true);
          // if (res.status === 200 || res.status === 201) {
          //   setActualArrayData(res.data);
          //   setShowDialogActual(true);
          // }
        })
        .catch((err) => {
          console.log("Error", err);
        });

      axios
        .get(`${APIURL.url}/api/actualInflows/payments`, {
          headers: {
            "Content-Type": "application/json", // eslint-disable-next-line prefer-template
            Authorization: "Bearer " + token,
          },
        })
        .then((res1) => {
          console.log("response data", res1.data);
          setJantoFeb(res1.data["date1"]);
          setFebtoMar(res1.data["date2"]);
          setMartoApr(res1.data["date3"]);
          setMonth(res1.data["fromDate4"]);
          setPaymentData(res1.data);
          console.log("first", res1.data);
        })
        .catch((err) => {
          console.log("Error", err);
        });
    }

    // []);

    // Forecast both api start here

    axios
      .get(
        `${APIURL.url}/api/forecastInflows/details?fromDate=${fromDate}&toDate=${toDate}`,
        {
          headers: {
            "Content-Type": "application/json", // eslint-disable-next-line prefer-template
            Authorization: "Bearer " + token,
          },
        }
      )
      .then((res) => {
        console.log("response data", res.data);
        setForecast(res.data["forecast_amount"]);
        setTotal(res.data["total_amount"]);

        // if (res.status === 200 || res.status === 201) {
        //   setActualArrayData(res.data);
        //   setShowDialogActual(true);
        // }
      })
      .catch((err) => {
        console.log("Error", err);
      });

    axios
      .get(`${APIURL.url}/api/forecastInflows/payments`, {
        headers: {
          "Content-Type": "application/json", // eslint-disable-next-line prefer-template
          Authorization: "Bearer " + token,
        },
      })
      .then((res) => {
        console.log("response data", res.data);
      })
      .catch((err) => {
        console.log("Error", err);
      });
    axios
      .get(`${APIURL.url}/api/forecastInflows/payments`, {
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
        setPayForecast(res1.data);
        // if (res1.status === 200 || res1.status === 201) {
        //   setpaymentArrayData(res1.data);
        //   console.log("actual payment", paymentArrayData);
        // }
      })
      .catch((err) => {
        console.log("Error", err);
      });

    // []);
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
          padding: "1em",
        }}
      >
        {/* <table id="users">
          <tr>
            <th className="table-header">Name</th>
            <th className="table-header">Username</th>
            <th className="table-header">Fullname</th>
            <th className="table-header">Email</th>
            <th className="table-header">Status</th>
            <th className="table-header">CreatedAt</th>
            <th className="table-header">Edit</th>
          </tr>

          <tr>
            <td></td>
          </tr>
        </table> */}
        <div className="form-wrapper-inflow">
          <h2>InFlow Actual & Forecast</h2>
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
          </div>
          <div className="row2">
            <label for="#fromdate" className="label">
              Sys Date
              <br />
              <input
                id="fromdate"
                type="date"
                disablePast
                className="date-input"
                value={fromDate}
                // onChange={(e) => setFromDate(e.target.value)}
              />
            </label>
            <label for="#todate" className="label">
              To Date
              <br />
              <input
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
      </div>
      {showDialogActual ? (
        <div className="dialog-box">
          <div className="dialog-close-div">
            <button
              className="close-btn"
              onClick={() => setShowDialogActual(false)}
              style={{ marginLeft: "95%" }}
            >
              X &nbsp;close
            </button>
          </div>

          {/* Actual sum Table started here */}

          <center>
            <h1 style={{ textAlign: "center" }}>Actual</h1>
          </center>
          <table id="actual">
            <tr style={{ fontWeight: "bold" }}>
              <th className="table-header">Shipped Amount</th>
              <th className="table-header">Invoiced Amount</th>
              <th className="table-header">Receipted Amount</th>
              <th className="table-header">Receipt Cleared Amount</th>
              <th className="table-header">Balance Amount</th>
            </tr>

            <tr style={{ textAlign: "center", fontWeight: "bold" }}>
              <td>{balance}</td>
              <td>{invoice}</td>
              <td>{receipt}</td>
              <td>{receiptClear}</td>
              <td>{shipped}</td>
            </tr>
          </table>
          {/* Actual sum Table end here */}

          {/* Actual payment start here */}
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

            <tr style={{ textAlign: "center", fontWeight: "bold" }}>
              <td>{paymentData.paymentDueAmount1.prepay_amount}</td>
              <td>{paymentData.paymentDueAmount1.amount_paid}</td>
              <td>{paymentData.paymentDueAmount2.prepay_amount}</td>
              <td>{paymentData.paymentDueAmount2.amount_paid}</td>
              <td>{paymentData.paymentDueAmount3.prepay_amount}</td>
              <td>{paymentData.paymentDueAmount3.amount_paid}</td>
              <td>{paymentData.paymentDueAmount4.prepay_amount}</td>
              <td>{paymentData.paymentDueAmount4.amount_paid}</td>
            </tr>
          </table>

          {/* Actual Both table end here */}

          {/* Forecast sum table start here */}
          <center>
            <h1 style={{ textAlign: "center" }}>ForeCast</h1>
          </center>
          <table id="actual">
            <tr>
              <th className="table-header">Forecast Shipment</th>
              <th className="table-header">Balance Amount</th>
              <th className="table-header">{jantoFeb1}</th>
              <th className="table-header">{febtoMar1}</th>
              <th className="table-header">{martoApr}</th>
              <th className="table-header">{month1}</th>
            </tr>
            <tr>
              <th></th>
              <th></th>
              {/* <th className="table-header">Pre Payment</th>
              <th className="table-header">Balance Payment</th> */}
              <th className="table-header">Payment</th>
              <th className="table-header">Payment</th>
              <th className="table-header">Payment</th>
              <th className="table-header">Payment</th>
            </tr>

            <tr style={{ fontWeight: "bold", textAlign: "center" }}>
              <td>{foreCast}</td>
              <td>{total}</td>
              <td>{payForecast.paymentDueAmount1}</td>
              <td>{payForecast.paymentDueAmount2}</td>
              <td>{payForecast.paymentDueAmount3}</td>
              <td>{payForecast.paymentDueAmount4}</td>
            </tr>
          </table>
        </div>
      ) : null}
    </div>
  );
};

export default InFlow;
