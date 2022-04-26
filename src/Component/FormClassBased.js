import { Component } from "react";

import "../Style/Form.css";

class FormClassBase extends Component {
  state = {
    userValue: {
      Name: "",
      Gender: "",
      Age: "",
      Experience: "",
      Rating: "",
      About: "",
    },
    Viable: false,
    Reactchecked: false,
    Nodejschecked: false,
    sqlchecked: false,
    StackList: [],
  };

  handelFirstName = (e) => {
    let Value1 = e.target.value;
    this.setState({
      userValue: {
        ...this.state.userValue,
        Name: Value1,
      },
    });
  };

  //   MangeGender

  handleGender = (e) => {
    let Value1 = e.target.value;
    this.setState({
      userValue: {
        ...this.state.userValue,
        Gender: Value1,
      },
    });
  };

  //MangeAge

  handleAge = (e) => {
    let Value1 = e.target.value;
    this.setState({
      userValue: {
        ...this.state.userValue,
        Age: Value1,
      },
    });
  };

  //   ManageExperience
  handelExp = (e) => {
    let Value1 = e.target.value;
    this.setState({
      userValue: {
        ...this.state.userValue,
        Experience: Value1,
      },
    });
  };

  // handelRating

  handRating = (e) => {
    let Value1 = e.target.value;
    this.setState({
      userValue: {
        ...this.state.userValue,
        Rating: Value1,
      },
    });
  };

  //handel AboutSelf

  handAboutself = (e) => {
    let Value1 = e.target.value;
    this.setState({
      userValue: {
        ...this.state.userValue,
        About: Value1,
      },
    });
  };

  //   handel Skill

  handReactSkil = (e) => {
    let value = e.target.value + " ";

    if (this.state.Reactchecked === false) {
      this.state.StackList.push(value);
      this.setState({ StackList: this.state.StackList });
      this.setState({ Reactchecked: true });
    } else {
      this.setState({
        StackList: this.state.StackList.filter(function (person) {
          return person !== value;
        }),
      });
      this.setState({ Reactchecked: false });
    }
  };

  handNodeSkil = (e) => {
    let value = e.target.value + " ";

    if (this.state.Nodejschecked === false) {
      this.state.StackList.push(value);
      this.setState({ StackList: this.state.StackList });
      this.setState({ Nodejschecked: true });
    } else {
      this.setState({
        StackList: this.state.StackList.filter(function (person) {
          return person !== value;
        }),
      });
      this.setState({ Nodejschecked: false });
    }
  };

  handSqlSkil = (e) => {
    let value = e.target.value + " ";

    if (this.state.sqlchecked === false) {
      this.state.StackList.push(value);
      this.setState({ StackList: this.state.StackList });
      this.setState({ sqlchecked: true });
    } else {
      this.setState({
        StackList: this.state.StackList.filter(function (person) {
          return person !== value;
        }),
      });
      this.setState({ sqlchecked: false });
    }
  };

  SubmitFun = (e) => {
    e.preventDefault();
    if (!this.state.Viable) {
      this.setState({ Viable: true });
    } else {
      this.setState({ Viable: false });
    }
  };
  render() {
    const { Name, Gender, Age, Experience, Rating, About } =
      this.state.userValue;
    const { StackList, Viable } = this.state;
    return (
      <div className="input-MainContainer classbasedContiner">
        <form className="form-container">
          <h1 className="Main-heading top-bott">Class Component</h1>
          <div className="Personal-Details">
            {/* text input */}
            <label htmlFor="Full-Name" className="side-heading">
              First Name
            </label>
            <input
              type="text"
              placeholder="Full Name"
              id="Full-Name"
              className="top-bott"
              required
              onChange={this.handelFirstName}
            />
            {/* radio  input*/}
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
                  onChange={this.handleGender}
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
                  onChange={this.handleGender}
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
                  onChange={this.handleGender}
                />
              </div>
            </div>

            {/* slection input */}
            <label htmlFor="Age" className="side-heading top-bott">
              Select Your Age
            </label>
            <select
              id="Age"
              name="Age"
              className="top-bott"
              onChange={this.handleAge}
            >
              <option value="20">20</option>
              <option value="21">21</option>
              <option value="22">22</option>
              <option value="23">23</option>
              <option value="24">24</option>
              <option value="25">25</option>
            </select>

            {/* checkbox input */}

            <p className="side-heading top-bott">
              What is Your Favorite Stack?
            </p>
            <div>
              <input
                type="checkbox"
                name="favorite_Stack"
                value="React"
                onChange={this.handReactSkil}
              />
              React
              <br />
              <input
                type="checkbox"
                name="favorite_Stack"
                value="Nodejs"
                onChange={this.handNodeSkil}
              />
              Nodejs
              <br />
              <input
                type="checkbox"
                name="favorite_Stack"
                value="Sql"
                onChange={this.handSqlSkil}
              />
              Sql
            </div>

            {/* number  input*/}
            <p className="side-heading top-bott">
              How many years of Work experience you have ?
            </p>
            <input type="number" onChange={this.handelExp} />

            {/* range input */}

            <label className="side-heading top-bott" htmlFor="points">
              React Your Rating(between 0 and 10):
            </label>
            <input
              type="range"
              id="points"
              name="points"
              min="0"
              max="10"
              onChange={this.handRating}
            ></input>

            <label htmlFor="TellSelf" className="side-heading top-bott">
              Tell Me About Your Self
            </label>

            {/* text input */}
            <textarea
              type="textarea"
              id="TellSelf"
              rows="4"
              cols="50"
              onChange={this.handAboutself}
            />
          </div>

          <button className="button" onClick={this.SubmitFun}>
            Submitted
          </button>
          <p>
            <span className="Note">Note: </span>please Filled the Form and Click
            Submit Button
          </p>
        </form>
        {Viable ? (
          <div className="resultContiner">
            <p> Name: {Name}</p>
            <p>Gender: {Gender}</p>
            <p>Age: {Age}</p>
            <p>Stack: {StackList}</p>
            <p>Experience:{Experience}</p>
            <p>Rating: {Rating}</p>
            <p>About: {About}</p>
          </div>
        ) : (
          ""
        )}
      </div>
    );
  }
}

export default FormClassBase;
