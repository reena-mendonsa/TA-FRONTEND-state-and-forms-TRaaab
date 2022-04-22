import React from "react";

class Billing extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    console.log(this.props.exportObj);
    return (
      <div className="billing__section">
        <h2>Billing Address</h2>
        <form action="">
          <label htmlFor="Address">Address</label>
          <input
            type="text"
            value={this.props.exportObj.address}
            name="address"
            onChange={this.props.fn}
          />
          <label htmlFor="Zip">Zip</label>
          <input type="text" name="zip" value={this.props.exportObj.zip} />
          <label htmlFor="City">City</label>
          <input type="text" name="city" value={this.props.exportObj.city} />
          <label htmlFor="Country">Country</label>
          <input
            type="text"
            name="country"
            value={this.props.exportObj.country}
          />
        </form>
      </div>
    );
  }
}
export default Billing;
