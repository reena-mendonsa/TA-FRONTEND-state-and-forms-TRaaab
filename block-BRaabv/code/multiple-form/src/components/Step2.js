import React from "react";

function Step2(props) {
  if (props.currentStep !== 2) {
    return null;
  }
  return (
    <div className="form-group">
      <h6>Step 2/3</h6>
      <h2>Message</h2>
      <div>
        <label className="block" htmlFor="message">
          Message
        </label>
        <textarea
          className="full-width"
          id="message"
          name="message"
          type="text"
          rows="10"
          value={props.message}
          onChange={props.handleChange}
        />
      </div>
      <div className="choice">
        <label className="contain">
          The number one choice
          <input type="checkbox" id="choice" name="choice" value="One" />
          <span className="checkmark"></span>
        </label>
        <label className="contain">
          The number two choice
          <input type="checkbox" id="choice" name="choice" value="Two" />
          <span className="checkmark"></span>
        </label>
      </div>
      <hr />
    </div>
  );
}

export default Step2;
