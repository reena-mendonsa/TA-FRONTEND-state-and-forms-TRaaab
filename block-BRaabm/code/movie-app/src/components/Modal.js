import React from "react";
// import Modal from 'react-modal';
// import data from './data.json';

class Modal extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    console.log(this.props.presentElement);
    return (
      <React.Fragment>
        <section className="modal__styles">
          <p className="cross" onClick={this.props.closeFn}>
            X
          </p>
          <h2>Movie Title : {this.props.presentElement.Title}</h2>
          <img
            src={this.props.presentElement.Images[0]}
            alt={this.props.presentElement.Title}
          />
          <p>Genre :{this.props.presentElement.Genre}</p>
          <p>Released Date : {this.props.presentElement.Released}</p>
          <p>Director : {this.props.presentElement.Director}</p>
          <p>Writer : {this.props.presentElement.Writer}</p>
          <p>Actors : {this.props.presentElement.Actors}</p>
          <p>Plot : {this.props.presentElement.Plot}</p>
          <p>imdbRating : {this.props.presentElement.imdbRating}</p>
          <div className="gallery">
            <img
              src={this.props.presentElement.Images[0]}
              alt={this.props.presentElement.Title}
            />
            <img
              src={this.props.presentElement.Images[1]}
              alt={this.props.presentElement.Title}
            />
            <img
              src={this.props.presentElement.Images[2]}
              alt={this.props.presentElement.Title}
            />
          </div>
        </section>
      </React.Fragment>
    );
  }
}
export default Modal;
