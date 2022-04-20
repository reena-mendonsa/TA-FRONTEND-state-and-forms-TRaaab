import React from "react";
import EachCard from "./EachCard";

class Fonts extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      innerText: "",
      innerRange: 0,
    };
  }

  handleChange = (event) => {
    this.setState({
      innerText: event.target.value,
    });
  };

  changeRange = (event) => {
    this.setState({
      innerRange: event.target.value,
    });
  };

  render() {
    console.log(this.state.innerRange);
    var fontsArray = [
      "ubuntu",
      "Azeret Mono",
      "Allison",
      "Rampart One",
      "nunito",
      "besley",
      "worksans",
      "mukta",
      "alumnisans",
      "Roboto",
    ];
    return (
      <div className="container">
        <header className="flex justify_between items_center header_animate ">
          <div className="input_div">
            <select className="select">
              <option value="Custom">Custom</option>
              <option value="Custom">one</option>
            </select>
            <input
              type="text"
              value={this.state.innerText}
              placeholder="Search Text Style"
              onChange={this.handleChange}
              className="inputStyle"
            />
          </div>

          <div className="flex items_center range_div">
            <p className="range_par">{this.state.innerRange}px</p>
            <input
              type="range"
              onChange={this.changeRange}
              className="input_range"
            />
          </div>
        </header>

        <div className="flex justify_between items_center family_count">
          <h3>1029 of 1029 families</h3>
          <div>
            <select name="" id="" className="select">
              <option value="">Sort By Trading</option>
            </select>
          </div>
        </div>

        <div className="allCards flex justify_between flex_wrap">
          {fontsArray.map((eachFont) => (
            <EachCard
              inner={this.state.innerText}
              fontfamily={eachFont}
              range={this.state.innerRange}
            />
          ))}
        </div>
      </div>
    );
  }
}
export default Fonts;
