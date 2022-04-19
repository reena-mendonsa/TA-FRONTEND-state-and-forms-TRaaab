import React from "react";
import data from "./data.json";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      dish: "",
    };
  }
  handleClick = (category) => {
    this.setState({
      dish: category,
    });
  };
  handleAllClick = () => {
    this.setState({
      dish: "",
    });
  };
  render() {
    var category = data.map((eachCategory) => eachCategory.category);
    let array = [];
    if (!this.state.dish) {
      array = data;
    } else {
      data.forEach((elem) => {
        if (elem.category === this.state.dish) {
          array.push(elem);
        }
      });
    }
    var each = Array.from(new Set(category));
    return (
      <React.Fragment>
        <section className="buttons">
          <h2>OUR MENU</h2>
          <button onClick={this.handleAllClick}>All</button>
          {each.map((category) => (
            <button
              onClick={() => this.handleClick(category)}
              key={category}
              id={category === this.state.categoryName ? "active" : ""}
            >
              {category}
            </button>
          ))}
        </section>
        <section className="item__section">
          {array.map((elem) => (
            <React.Fragment>
              <article className="articles">
                <div className="item" key={elem.id}>
                  <h2>{elem.title}</h2>
                  <img src={elem.img} alt={elem.title} />
                  <p>{elem.category}</p>
                  <p>Price: ${elem.price}</p>
                  <p>{elem.desc}</p>
                </div>
              </article>
            </React.Fragment>
          ))}
        </section>
      </React.Fragment>
    );
  }
}
export default App;
