import React from "react";
import { CSSTransition } from "react-transition-group";
import { connect } from "react-redux";

import "./alert.css";

const Alert = ({ text }) => (
  <CSSTransition
    in={true}
    appear={true}
    timeout={500}
    classNames="anim"
    unmountOnExit
  >
    <div className="alert">{text}</div>
  </CSSTransition>
);

const mapStateToProps = (state, prop) => {
  const { items } = state.contacts;

  if (items.length > 4) {
    return { isContact: true, nameContact: 10 };
  }
  return { isContact: false };
};

export default connect(mapStateToProps, null)(Alert);
