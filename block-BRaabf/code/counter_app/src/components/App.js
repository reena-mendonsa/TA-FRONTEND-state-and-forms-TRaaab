import React from "react";
import ReactDOM from "react-dom";
class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 0,
      step: 0,
      maxValue: Infinity,
    };
  }
  handleStep = (step) => {
    this.setState({
      step: step,
    });
  };
  handleMaxValue = (max) => {
    this.setState({
      maxValue: max,
    });
  };
  handleIncrement = (e) => {
    if (this.state.count < this.state.maxValue) {
      if (this.state.step != 0) {
        this.setState({
          count: this.state.count + Number(this.state.step),
        });
      } else {
        this.setState({
          count: this.state.count + 1,
        });
      }
    }
  };
  handleDecrement = (e) => {
    if (this.state.count <= this.state.maxValue) {
      if (this.state.step != 0) {
        this.setState({
          count: this.state.count - Number(this.state.step),
        });
      } else {
        this.setState({
          count: this.state.count - 1,
        });
      }
    }
  };
  handleReset = (e) => {
    this.setState({
      count: 0,
      step: 0,
      maxValue: Infinity,
    });
  };
  render() {
    return (
      <section className="section">
        <h3>Counter App</h3>
        <h3>{this.state.count}</h3>
        <article className="flex limits">
          <div className="step">
            <h5>Steps</h5>
            {[5, 10, 15].map((step) => (
              <button
                onClick={() => this.handleStep(step)}
                className={this.state.step === step ? "active" : ""}
              >
                {step}
              </button>
            ))}
          </div>
          <div className="maxValue">
            <h5>Max Value</h5>
            {[15, 100, 200].map((maxValue) => (
              <button
                onClick={() => this.handleMaxValue(maxValue)}
                className={this.state.maxValue === maxValue ? "active" : ""}
              >
                {maxValue}
              </button>
            ))}
          </div>
        </article>

        <div className="buttons">
          <button onClick={this.handleIncrement}>Increment</button>
          <button onClick={this.handleDecrement}>Decrement</button>
          <button onClick={this.handleReset}>Reset</button>
        </div>
      </section>
    );
  }
}
export default App;
