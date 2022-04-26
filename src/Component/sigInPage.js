import React from "react";
import { useState } from "react";
import { useHistory } from "react-router-dom";
import "../Style/sigIn.scss";

export default function SigIn() {
  let [userId, setUserId] = useState("");
  let [userPassword, setUserPassword] = useState("");

  let history = useHistory();

  //get data from LocalStorage
  function getDataFromLocalStorage() {
    let getDataItem = localStorage.getItem("userDetails");
    let parseData = JSON.parse(getDataItem);
    if (parseData === null) {
      return [];
    } else {
      return parseData;
    }
  }

  let userDataList = getDataFromLocalStorage();
  //console.log(userDataList[0].userId);
  let userCount = userDataList.length - 1;

  function handelUserID(e) {
    let userInput = e.target.value;
    setUserId(userInput);
  }

  function handelUserPassword(e) {
    let userInput = e.target.value;
    setUserPassword(userInput);
  }

  function handelSigning() {
    let userIdUniqe = true;

    // user id is presenting or not
    for (let i = 0; i < userDataList.length; i++) {
      if (userDataList[i].userId === userId) {
        userIdUniqe = false;
      }
    }

    if (userIdUniqe === false) {
      alert("try another Mail");
    } else if (userId === "" || userPassword === "") {
      alert("Plz Enter two fields");
    } else {
      //add Local Storage
      userCount += 1;
      let newUser = {
        userCount,
        userId,
        userPassword,
      };
      userDataList.push(newUser);
      localStorage.setItem("userDetails", JSON.stringify(userDataList));
      history.push("/logIn");
    }
  }

  return (
    <div className="SinInPage">
      <h3>SigIn</h3>
      <label htmlFor="sigInEmailId">Enter Email</label>
      <input
        type="text"
        placeholder="Enter MailId"
        onChange={handelUserID}
        id="sigInEmailId"
      />
      <label htmlFor="sigInPass"> Enter Password</label>
      <input
        type="password"
        placeholder="Password"
        onChange={handelUserPassword}
        id="sigInPass"
      />

      <button onClick={handelSigning}>Signing</button>
    </div>
  );
}
