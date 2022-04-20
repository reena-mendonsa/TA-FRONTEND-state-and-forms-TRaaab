import React from "react";
// import Modal from 'react-modal';
import data from "./data.json";
import Modal from "./Modal";
class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      ModalOpen: false,
      elem: "",
    };
  }
  handleModal = (elem) => {
    this.setState({
      ModalOpen: !this.state.ModalOpen,
      elem: elem.Title,
    });
  };
  handleClose = () => {
    this.setState({
      ModalOpen: !this.state.ModalOpen,
    });
  };
  handleDisplay = (modalOpen, stateElem, currrentElem, elem) => {
    if (modalOpen) {
      if (stateElem === currrentElem) {
        return <Modal presentElement={elem} closeFn={this.handleClose} />;
      }
    }
  };

  render() {
    var array = data.map((movie) => movie);
    return (
      <React.Fragment>
        <h1 id="go">Movie App</h1>
        <section className="full">
          <div className="movie__section">
            {array.map((elem) => (
              <React.Fragment>
                <article key={elem.title} className="articles">
                  <div className="movie">
                    <img src={elem.Images[0]} alt={elem.Title} />
                    <h2>{elem.Title}</h2>
                    <p>{elem.Released}</p>
                    <a href="#go">
                      <button onClick={() => this.handleModal(elem)}>
                        More Info
                      </button>
                    </a>

                    {this.handleDisplay(
                      this.state.ModalOpen,
                      this.state.elem,
                      elem.Title,
                      elem
                    )}
                  </div>
                </article>
              </React.Fragment>
            ))}
          </div>
        </section>
      </React.Fragment>
    );
  }
}
export default App;
