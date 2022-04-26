import React from "react";
import { useState } from "react";
import "../Style/Form.css";

function FormComponet() {
  const [FullName, setName] = useState("please Enter");
  const [Age, setAge] = useState("20");
  const [Gender, setGender] = useState("male");
  const [Pets, setPets] = useState([]);
  const [experience, setExperience] = useState("0");
  const [skilScore, setScore] = useState("0");
  const [self, setSelf] = useState("please Enter");
  const [visable, setVisable] = useState(false);

  function handleGender(e) {
    setGender(e.target.value);
  }

  function handleAge(e) {
    setAge(e.target.value);
  }

  function handleDog(e) {
    Pets.push(e.target.value + " ");
    setPets(Pets);
  }

  function handleBird(e) {
    Pets.push(e.target.value + " ");
    setPets(Pets);
  }

  function handleCat(e) {
    Pets.push(e.target.value + " ");
    setPets(Pets);
  }

  function handelExp(e) {
    setExperience(e.target.value);
  }

  function handleScroe(e) {
    setScore(e.target.value);
  }

  function handleSelf(e) {
    setSelf(e.target.value);
  }

  function FromSubmit(e) {
    e.preventDefault();
    if (!visable) {
      setVisable(true);
    } else {
      setVisable(false);
    }
  }

  return (
    <div className="input-MainContainer">
      <form className="form-container">
        <h1 className="Main-heading top-bott">Function Component</h1>
        <div className="Personal-Details">
          {/* text */}
          <label htmlFor="Full-Name" className="side-heading">
            First Name
          </label>
          <input
            type="text"
            placeholder="Full Name"
            id="Full-Name"
            className="top-bott"
            required
            onChange={(e) => setName(e.target.value)}
          />
          {/* radio */}
          <div>
            <p className="side-heading extr-mar">Gender</p>
            <div className="Gender-container">
              <label htmlFor="Male">Male</label>
              <input
                type="radio"
                name="Gender"
                id="Male"
                className="left"
                value="Male"
                onChange={handleGender}
              />
              <label htmlFor="Female" className="right">
                Female
              </label>
              <input
                type="radio"
                name="Gender"
                id="Female"
                className="left"
                value="Female"
                onChange={handleGender}
              />
              <label htmlFor="transgenderEl" className="right">
                transgender
              </label>
              <input
                type="radio"
                name="Gender"
                id="transgenderEl"
                className="left"
                value="Transgender"
                onChange={handleGender}
              />
            </div>
          </div>

          {/* slection */}
          <label htmlFor="Age" className="side-heading top-bott">
            Select Your Age
          </label>
          <select id="Age" name="Age" onChange={handleAge} className="extr-mar">
            <option value="20">20</option>
            <option value="21">21</option>
            <option value="22">22</option>
            <option value="23">23</option>
            <option value="24">24</option>
            <option value="25">25</option>
          </select>

          {/* checkbox */}

          <p className="side-heading top-bott">What is Your Favorite Pet?</p>
          <div>
            <input
              type="checkbox"
              name="favorite_pet"
              value="Cats"
              onChange={handleCat}
            />
            Cats
            <br />
            <input
              type="checkbox"
              name="favorite_pet"
              value="Dogs"
              onChange={handleDog}
            />
            Dogs
            <br />
            <input
              type="checkbox"
              name="favorite_pet"
              value="Birds"
              onChange={handleBird}
            />
            Birds
          </div>

          {/* number  input*/}
          <p className="side-heading top-bott">
            How many years of Work experience you have ?
          </p>
          <input type="number" onChange={handelExp} />

          {/* range input */}

          <label className="side-heading top-bott" for="points">
            React Your Rating(between 0 and 10):
          </label>
          <input
            type="range"
            id="points"
            name="points"
            min="0"
            max="10"
            onChange={handleScroe}
          ></input>

          <label htmlFor="TellSelf" className="side-heading top-bott">
            Tell Me About Your Self
          </label>
          <textarea
            type="textarea"
            id="TellSelf"
            rows="4"
            cols="50"
            onChange={handleSelf}
          />
        </div>

        {/* Contact Container */}

        {/* <h1 className="Main-heading top-bott">Contact Details</h1>
        <div className="Personal-Details">
          <label htmlFor="Phone-No" className="side-heading">
            Phone No
          </label>
          <input
            type="phone"
            placeholder="Phone No"
            id="Phone-No"
            className="top-bott"
            required
          />
          <label htmlFor="Email" className="side-heading">
            Email
          </label>
          <input
            type="text"
            placeholder="Email"
            id="Email"
            className="top-bott"
            required
          />
        </div> */}
        <button className="button" onClick={FromSubmit}>
          Submitted
        </button>
        <p>
          <span className="Note">Note: </span>please Filled the Form and Click
          Submit Button
        </p>
      </form>

      {/* result continer */}

      <div>
        {visable ? (
          <div className="resultContiner">
            <p>Name:-{FullName}</p>
            <p>Age:-{Age}</p>
            <p>Gender:-{Gender}</p>
            <p>Pets:- {Pets}</p>
            <p>Work Experience:-{experience}</p>
            <p>Rating:-{skilScore}</p>
            <p>Self:-{self}</p>
          </div>
        ) : (
          ""
        )}
      </div>
    </div>
  );
}

export default FormComponet;
