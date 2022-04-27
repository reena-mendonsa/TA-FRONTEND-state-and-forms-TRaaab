import React from "react";

function Step1(props) {
  if (props.currentStep !== 1) {
    return null;
  }
  return (
    <div className="form-group">
      <h6>Step 1/3</h6>
      <h2>Sign UP</h2>
      <div className="menu">
        <div>
          <label className="block" htmlFor="firstname">
            First Name
          </label>
          <input
            className="input"
            id="firstname"
            name="firstname"
            type="text"
            value={props.firstname}
            onChange={props.handleChange}
          />
        </div>
        <div>
          <label className="block" htmlFor="lastname">
            Last Name
          </label>
          <input
            className="input"
            id="lastname"
            name="lastname"
            type="text"
            value={props.lname}
            onChange={props.handleChange}
          />
        </div>
        <div>
          <label className="block" htmlFor="dob">
            Date of Birth
          </label>
          <input
            className="input"
            id="dob"
            name="dob"
            type="date"
            value={props.dob}
            onChange={props.handleChange}
          />
        </div>
        <div>
          <label className="block" htmlFor="email">
            Email Address
          </label>
          <input
            className="input"
            id="email"
            name="email"
            type="text"
            value={props.email}
            onChange={props.handleChange}
          />
        </div>
        <div>
          <label className="block" htmlFor="address">
            Address
          </label>
          <input
            className="input full-width"
            id="address"
            name="address"
            type="text"
            value={props.address}
            onChange={props.handleChange}
          />
        </div>
      </div>
    </div>
  );
}

export default Step1;
