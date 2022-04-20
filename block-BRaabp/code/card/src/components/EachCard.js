import React from "react";

function EachCard(props) {
  function getStyle() {
    return `${props.fontfamily} `;
  }

  function setRange(some = Math.ceil(props.range)) {
    if (some) {
      return `${some}px`;
    }
  }

  return (
    <div className="card flex_30">
      <div className="flex justify_between items_center">
        <div className="font_family">
          <h4>{props.fontfamily}</h4>
          <p contenteditable="true">Christian {props.fontfamily}</p>
        </div>
        <p>Variables</p>
      </div>
      <h1 style={{ fontSize: setRange(), fontFamily: getStyle() }}>
        {props.inner}
      </h1>
    </div>
  );
}
export default EachCard;
