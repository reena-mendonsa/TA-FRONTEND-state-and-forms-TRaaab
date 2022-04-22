import React from "react";
class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      email: "",
      password: "",
      username: "",
      confirmPassword: "",
      errors: {
        email: "",
        password: "",
        username: "",
        confirmPassword: "",
      },
    };
  }
  validateEmail = (email) => {
    const re =
      /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(email);
  };

  handleInput = ({ target }) => {
    let { name, value } = target;
    let errors = this.state.errors;
    switch (name) {
      case "email":
        errors.email = this.validateEmail(value) ? "" : "Email is not valid!";
        break;
      case "password":
        errors.password =
          value.length <= 6 ? "Password cannot be less than 6 characters" : "";
        break;
      case "confirmPassword":
        errors.confirmPassword =
          value.length < 1 ? "ReEnter password is required" : "";
        break;
      case "username":
        errors.username =
          value.length < 3 ? "Username must be at least 3 characters" : "";
        break;
      default:
        break;
    }
    this.setState({ errors, [name]: value });
  };
  handleSubmit = (event) => {
    event.preventDefault();
    alert(this.state.email + this.state.password);
  };
  render() {
    let { email, password, username, confirmPassword } = this.state.errors;
    return (
      <React.Fragment>
        <form>
          <label htmlFor="username">username</label>
          <input
            value={this.state.username}
            onChange={this.handleInput}
            type="text"
            id="username"
            name="username"
            className={username && "error"}
          />
          <span>{username}</span>
          <label htmlFor="email">email</label>
          <input
            value={this.state.email}
            onChange={this.handleInput}
            type="text"
            id="email"
            name="email"
            className={email && "error"}
          />
          <span>{email}</span>
          <label htmlFor="password">Password</label>
          <input
            value={this.state.password}
            onChange={this.handleInput}
            type="password"
            id="password"
            name="password"
            className={password && "error"}
          />
          <span>{password}</span>
          <label htmlFor="confirmPassword">Confirm Password</label>
          <input
            value={this.state.confirmPassword}
            onChange={this.handleInput}
            type="confirmPassword"
            id="confirmPassword"
            name="confirmPassword"
            className={confirmPassword && "error"}
          />
          <span>{confirmPassword}</span>
          <input onClick={this.handleSubmit} type="submit" value="Submit" />
        </form>
      </React.Fragment>
    );
  }
}
export default App;
