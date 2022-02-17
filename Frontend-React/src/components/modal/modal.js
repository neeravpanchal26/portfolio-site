// Default imports
import React, { Component } from "react";

// Custom imports
import M from "materialize-css/dist/js/materialize.min.js";

class Modal extends Component {
  // Component load
  componentDidMount() {
    M.Modal.init(this.Modal, {});
  }

  render() {
    const { Heading, Content, ID } = this.props;
    return (
      <div>
        <div
          ref={(Modal) => {
            this.Modal = Modal;
          }}
          id={ID}
          className="modal"
        >
          <div className="modal-content">
            <h5>
              {Heading}
              <i className="modal-close material-icons right">close</i>
            </h5>
            <div className="divider"></div>
            <span dangerouslySetInnerHTML={{ __html: Content }}></span>
          </div>
        </div>
      </div>
    );
  }
}

export default Modal;
