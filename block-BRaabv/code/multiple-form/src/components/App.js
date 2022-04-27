import React from "react";
import Step1 from "./Step1";
import Step2 from "./Step2";
import Step3 from "./Step3";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      currentStep: 1,
      email: "",
      firstname: "",
      lastname: "",
      dob: "",
      address: "",
      message: "",
      choice: "",
      check: "",
    };
  }

  handleChange = (event) => {
    const { name, value } = event.target;
    this.setState({
      [name]: value,
    });
  };

  handleSubmit = (event) => {
    event.preventDefault();
    alert(`You have registrated`);
  };

  _next = () => {
    let currentStep = this.state.currentStep;
    currentStep = currentStep >= 2 ? 3 : currentStep + 1;
    this.setState({
      currentStep: currentStep,
    });
  };

  _prev = () => {
    let currentStep = this.state.currentStep;
    currentStep = currentStep <= 1 ? 1 : currentStep - 1;
    this.setState({
      currentStep: currentStep,
    });
  };

  /*
   * the functions for our button
   */
  previousButton() {
    let currentStep = this.state.currentStep;
    if (currentStep !== 1) {
      return (
        <button
          className="btn btn-secondary"
          type="button"
          onClick={this._prev}
        >
          Back
        </button>
      );
    }
    return null;
  }

  nextButton() {
    let currentStep = this.state.currentStep;
    if (currentStep < 3) {
      return (
        <button className="btn btn-primary" type="button" onClick={this._next}>
          Next Step
        </button>
      );
    }
    return null;
  }

  render() {
    let serial = ["Sign Up", "Message", "Checkbox"];
    return (
      <React.Fragment>
        <div className="container">
          <form onSubmit={this.handleSubmit}>
            {/* 
        render the form steps and pass required props in
      */}
            <div className="grid">
              <div>
                <img
                  src={
                    this.state.currentStep === 1
                      ? "/images/img1.jpg"
                      : this.state.currentStep === 2
                      ? "/images/img2.jpg"
                      : "/images/img3.jpg"
                  }
                  alt="background"
                />
              </div>
              <div className="space">
                <div className="menu">
                  {serial.map((data, i) => (
                    <p className="gap" key={i}>
                      <span
                        className={
                          this.state.currentStep === i + 1
                            ? "selected-step"
                            : ""
                        }
                      >
                        {i + 1}
                      </span>{" "}
                      {data}
                    </p>
                  ))}
                </div>
                <hr />
                <Step1
                  currentStep={this.state.currentStep}
                  handleChange={this.handleChange}
                  email={this.state.email}
                />
                <Step2
                  currentStep={this.state.currentStep}
                  handleChange={this.handleChange}
                  username={this.state.username}
                />
                <Step3
                  currentStep={this.state.currentStep}
                  handleChange={this.handleChange}
                  password={this.state.password}
                />
                {this.previousButton()}
                {this.nextButton()}
              </div>
            </div>
          </form>
        </div>
      </React.Fragment>
    );
  }
}

export default App;
