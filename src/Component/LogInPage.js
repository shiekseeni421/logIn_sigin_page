import React from "react";
import { useState } from "react";
import { useHistory } from "react-router-dom";
import "../Style/sigIn.scss";

function LoginPage() {
  let [userEmail, setuserEmail] = useState("");
  let historyEl = useHistory();

  function handelValue(e) {
    setuserEmail(e.target.value);
  }

  function getDataFromLocalStorage() {
    let getDataItem = localStorage.getItem("userDetails");
    let parseData = JSON.parse(getDataItem);
    if (parseData === null) {
      return [];
    } else {
      return parseData;
    }
  }

  function handelSigning() {
    let userDataList = getDataFromLocalStorage();
    let userIdUniqe = false;

    // user id is presenting or not
    for (let i = 0; i < userDataList.length; i++) {
      if (userDataList[i].userId === userEmail) {
        userIdUniqe = true;
      }
    }

    if (userIdUniqe === true) {
      historyEl.push("/calculator");
    } else {
      alert("please signIn");
      historyEl.push("/signIn");
    }
  }

  return (
    <div className="SinInPage">
      <h1>LogIn</h1>
      <label htmlFor="LoginUserName">Enter Email</label>
      <input
        type="text"
        placeholder="Email"
        id="LoginUserName"
        onChange={handelValue}
      />

      <label htmlFor="LoginPass">Enter Password</label>
      <input type="password" placeholder="Enter PassWord" id="LoginPass" />

      <button onClick={handelSigning}>Login</button>
    </div>
  );
}

export default LoginPage;
