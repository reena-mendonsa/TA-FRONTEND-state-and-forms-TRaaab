import React from "react";

class Products extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 0,
      cart: [],
      click: false,
    };
  }

  handleClick = (product) => {
    this.setState((previousState) => ({
      cart: [...previousState.cart, product],
    }));
    this.setState({
      count: this.state.count + 1,
    });
  };

  handleCart = () => {
    this.setState((previousState) => ({
      click: !previousState.click,
    }));
  };

  render() {
    let products = this.state.cart;
    let price = products.reduce((acc, amount) => {
      acc = Number(acc) + Number(amount.price);
      return acc;
    }, []);
    return (
      <React.Fragment>
        <div className="flex-60">
          <div className="grid">
            <button onClick={this.handleCart} className="cart-logo">
              <img src="/static/bag-icon.png" alt="cart" />
              <div
                className={
                  this.state.count === 0 ? "cart-count hidden" : "cart-count"
                }
              >
                {this.state.count}
              </div>
            </button>
            {this.props.item.map((product) => (
              <div key={product.id} className="box">
                <div className={product.isFreeShipping ? "absolute" : "hidden"}>
                  Free Shipping
                </div>
                <img
                  className="image"
                  src={`/static/products/${product.sku}_2.jpg`}
                  alt="T-Shirt"
                />
                <h3>{product.title}</h3>
                <hr />
                <h3 className="flex-1">
                  Sizes Available:{" "}
                  {product.availableSizes.map((size, i) => (
                    <p key={i} className="product-size">
                      {size}
                    </p>
                  ))}
                </h3>
                <h4>
                  {product.currencyFormat} {product.price}
                </h4>
                <button onClick={() => this.handleClick(product)}>
                  Add to Cart
                </button>
              </div>
            ))}
          </div>
        </div>
        <div className={this.state.click ? "cart-details" : "hidden"}>
          <div className="flex-1">
            <img src="/static/bag-icon.png" alt="cart" />

            <h2>Cart</h2>
          </div>
          <img
            onClick={this.handleCart}
            className="cross"
            src="\static\sprite_delete-icon.png"
            alt="cross"
          />
          <div>{this.state.count} products</div>

          {this.state.cart.map((item) => (
            <div className="cart-products flex" key={item.id}>
              <img src={item.small} alt="product" />
              <div>
                <h3>{item.title}</h3>
                <h5>{item.style}</h5>

                <h3>{item.availableSizes[0]}</h3>
              </div>
              <h4>
                {item.currencyFormat} {item.price}
              </h4>
            </div>
          ))}
          <div className="center">
            <h3>SubTotal: ${price}</h3>
          </div>
        </div>
      </React.Fragment>
    );
  }
}

export default Products;
