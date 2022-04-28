import React from "react";
import data from "../data.json";
import Products from "./Products";

class Aside extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      size: "",
      order: "select",
    };
  }

  handleChange = (event) => {
    this.setState({ order: event.target.value });
  };

  handleClick = (size) => {
    this.setState({
      size: size,
    });
  };

  render() {
    let products = data.products;
    let sizes = products.reduce((acc, size) => {
      acc = acc.concat(size.availableSizes);
      return acc;
    }, []);
    let unique = [...new Set(sizes)];
    let item;
    if (this.state.size) {
      item = [...products].filter((product) =>
        product.availableSizes.find((size) => size === this.state.size)
      );
    } else if (this.state.order === "select") {
      item = products;
    } else if (this.state.order === "lowest") {
      item = [...products]
        .filter((product) => product.price)
        .sort(function (a, b) {
          return a - b;
        });
      console.log(item);
    } else if (this.state.order === "highest") {
      item = [...products]
        .filter((product) => product.price)
        .sort(function (a, b) {
          return b - a;
        });
    } else {
      item = products;
    }
    return (
      <React.Fragment>
        <div className="flex evenly">
          <h3>{item.length} Products found</h3>
          <form>
            <label htmlFor="order">Order By: </label>
            <select onChange={this.handleChange}>
              <option value="select">Select</option>
              <option value="lowest">Lowest to Highest</option>
              <option value="highest">Highest to Lowest</option>
            </select>
          </form>
        </div>
        <div className="flex">
          <aside className="flex-30">
            <div className="grid">
              {unique.map((size, i) => (
                <p
                  key={i}
                  className={
                    this.state.size === size ? "circle active" : "circle"
                  }
                  onClick={() => this.handleClick(size)}
                >
                  {size}
                </p>
              ))}
            </div>
          </aside>

          <Products item={item} />
        </div>
      </React.Fragment>
    );
  }
}

export default Aside;
