import React from "react";

class Multiple extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      innerText: "",
      date: "",
      file: "",
      copied: "",
      message: "",
    };
  }

  handleChange = ({ target }) => {
    let { name, value } = target;

    this.setState({
      [name]: value,
    });
  };

  handleSubmit = () => {
    alert(
      this.state.innerText +
        this.state.message +
        this.state.date +
        this.state.copied
    );
  };
  render() {
    return (
      <div className="container">
        <h2>Multiple Events</h2>
        <form onSubmit={this.handleSubmit}>
          <input
            type="text"
            value={this.state.innerText}
            name="innerText"
            onChange={this.handleChange}
          />
          <input
            type="date"
            value={this.state.date}
            name="date"
            onChange={this.handleChange}
          />
          <input
            type="file"
            value={this.state.file}
            name="file"
            onChange={this.handleChange}
          />
          <input
            type="  text"
            value={this.state.copied}
            name="copied"
            placeholder="Ths can only be copied "
            onChange={this.handleChange}
          />
          <input type="text" readOnly onChange={this.handleChange} />
          <textarea
            name="message"
            value={this.state.message}
            id=""
            cols="30"
            rows="4"
            onChange={this.handleChange}
          ></textarea>

          <textarea name="" id="" cols="30" rows="4" readOnly></textarea>
          <input type="submit" />
        </form>
      </div>
    );
  }
}

export default Multiple;
