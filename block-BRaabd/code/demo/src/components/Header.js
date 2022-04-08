import React from "react";

class Avatar extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      photoUrl: "/images/basketball.jpg",
    };
  }
  handleChange = (e) => {
    this.setState({
      photoUrl: `/images/${e.target.innerText}.jpg`,
    });
  };
  render() {
    return (
      <section class="section">
        <div>
          <button onClick={this.handleChange}>basketball</button>
          <button onClick={this.handleChange}>pubg</button>
          <button onClick={this.handleChange}>tiger</button>
          <button onClick={this.handleChange}>phone</button>
          <button onClick={this.handleChange}>laptop</button>
          <button onClick={this.handleChange}>cricket</button>
        </div>
        <img className="avatar" src={this.state.photoUrl} alt="" />
      </section>
    );
  }
}
export default Avatar;
