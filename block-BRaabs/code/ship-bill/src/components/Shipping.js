import React from "react";
import Billing from "./Billing";
class Shipping extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      address: "",
      zip: "",
      city: "",
      country: "",
      checked: false,
    };
  }

  handleChange = ({ target }) => {
    var { name, value } = target;
    this.setState({
      [name]: value,
    });
  };
  handleCheck = () => {
    this.setState({
      checked: true,
    });
  };

  render() {
    let exportObj = {
      checked: this.state.checked,
      address: this.state.address,
      zip: this.state.zip,
      city: this.state.city,
      country: this.state.country,
    };
    return (
      <div className="container flex justify_between">
        <section className="shipping">
          <h2>Shipping Address</h2>
          <form action="">
            <label htmlFor="Address">Address</label>
            <input
              type="text"
              value={this.state.address}
              name="address"
              onChange={this.handleChange}
            />

            <label htmlFor="Zip">Zip</label>
            <input
              type="text"
              value={this.state.zip}
              name="zip"
              onChange={this.handleChange}
            />
            <label htmlFor="City">City</label>
            <input
              type="text"
              value={this.state.city}
              name="city"
              onChange={this.handleChange}
            />
            <label htmlFor="Country">Country</label>
            <input
              type="text"
              value={this.state.country}
              name="country"
              onChange={this.handleChange}
            />
          </form>
        </section>
        <section className="billing">
          <h2>Billing Address</h2>
          <form className="checkboxForm flex">
            <input type="checkbox" onChange={this.handleCheck} />
            <label>Same as the Shipping Address?</label>
          </form>

          {this.state.checked ? (
            <Billing exportObj={exportObj} />
          ) : (
            <Billing exportObj="" />
          )}
        </section>
      </div>
    );
  }
}
export default Shipping;
