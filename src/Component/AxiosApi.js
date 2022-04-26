import React from "react";
import axios from "axios";
import "../Style/LoginPageStyles.css";
import { useState } from "react";

export default function AxiosApi() {
  let [Name, setName] = useState("");
  let [Email, setEmail] = useState("");
  let [Place, setPlace] = useState("");

  async function HandleLogin(e) {
    e.preventDefault();

    let response = await axios
      .post("http://restapi.adequateshop.com/api/Tourist", {
        tourist_name: Name,
        tourist_email: Email,
        tourist_location: Place,
      })
      .then((res) => {
        console.log("post data", res);
      })
      .catch((error) => {
        console.log("error");
      });
  }
  return (
    <div className="Form-Main-Container Axios-continer">
      <form className="form-el">
        <h1>Axios Method</h1>
        <label htmlFor="User-Name">user Name</label>
        <input
          type="text"
          id="User-Name"
          placeholder="Name"
          onChange={(e) => setName(e.target.value)}
        />
        <label htmlFor="User-Email">User Email</label>
        <input
          type="text"
          id="User-Email"
          placeholder="Enter User Email"
          required
          onChange={(e) => setEmail(e.target.value)}
        />
        <label htmlFor="UserPass">Place</label>
        <input
          type="text"
          id="UserPass"
          placeholder="Enter Password"
          required
          onChange={(e) => setPlace(e.target.value)}
        />
        <button className="button" onClick={HandleLogin}>
          Login
        </button>
      </form>
    </div>
  );
}
