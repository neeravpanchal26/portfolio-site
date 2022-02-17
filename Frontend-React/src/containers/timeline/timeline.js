// Default imports
import React, { Component } from "react";
import Nav from "../navbar/navbar";
import Footer from "../../components/footer/footer";

// Custom imports
import "./timeline.css";
import Loader from "../../components/loader/loader";
import { connect } from "react-redux";
import Modal from "../../components/modal/modal";
import { GetEvents } from "../../actions/action";

class Timeline extends Component {
  // Form load
  componentDidMount() {
    this.props.GetEvents();
  }

  renderLoader = () => {
    const { events } = this.props;
    if (events.length === 0) {
      return <Loader />;
    } else {
      return null;
    }
  };

  renderEvents = () => {
    const { events } = this.props;
    return events.map(
      ({
        id,
        title,
        eventNameTwo,
        eventFrom,
        eventTo,
        eventType,
        eventDescription,
        eventIcon,
      }) => {
        if (eventDescription === "") {
          return (
            <div className="timeline-event" id={id}>
              <div className="card timeline-content">
                <div className="card-content">
                  <span className="card-title">{title}</span>
                  <p>{eventNameTwo}</p>
                  <div className="card-action">
                    <span>
                      {eventFrom.toUpperCase()} - {eventTo.toUpperCase()} •{" "}
                      {eventType}
                    </span>
                  </div>
                </div>
              </div>
              <div className="timeline-badge white-text z-depth-2">
                <i className="material-icons">{eventIcon}</i>
              </div>
            </div>
          );
        } else {
          return (
            <div className="timeline-event" id={id}>
              <div className="card timeline-content">
                <div className="card-content">
                  <span className="card-title">
                    {title}
                    <i
                      className="material-icons right modal-trigger"
                      data-target={title}
                    >
                      more_horiz
                    </i>
                  </span>
                  <p>{eventNameTwo}</p>
                  <div className="card-action">
                    <span>
                      {eventFrom.toUpperCase()} - {eventTo.toUpperCase()} •{" "}
                      {eventType}
                    </span>
                  </div>
                </div>
                <Modal ID={title} Heading={title} Content={eventDescription} />
              </div>
              <div className="timeline-badge white-text z-depth-2">
                <i className="material-icons">{eventIcon}</i>
              </div>
            </div>
          );
        }
      }
    );
  };

  render() {
    return (
      // HTML here
      <div>
        <Nav />
        {this.renderLoader()}
        <div className="container">
          <div className="section">
            <div className="row">
              <h4>Progress...</h4>
            </div>
          </div>
          <div className="divider"></div>
          <div className="timeline"> {this.renderEvents()}</div>
        </div>
        <Footer />
        <Modal />
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return state;
};
// Default export
export default connect(mapStateToProps, { GetEvents })(Timeline);
