import React from "react";

function Step3(props) {
  if (props.currentStep !== 3) {
    return null;
  }
  return (
    <React.Fragment>
      <div className="form-group">
        <h6>Step 3/3</h6>
        <h2>Checkbox</h2>
        <label className="contain">
          I want to add this option
          <input type="checkbox" id="check" name="check" value="Add" />
          <span className="checkmark"></span>
        </label>
        <label className="contain">
          Let me click on the checkbox and choose some cool stuff
          <input type="checkbox" id="check" name="check" value="Click" />
          <span className="checkmark"></span>
        </label>
      </div>
      <hr />
      <button className="btn btn-success btn-block">Sumbit</button>
    </React.Fragment>
  );
}

export default Step3;
