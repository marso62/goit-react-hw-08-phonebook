import React from "react";
import { connect } from "react-redux";
import { CSSTransition, TransitionGroup } from "react-transition-group";

import ContactListItem from "./ContactListItem";
import Alert from "../Alert/Alert";

import contactSelectors from "../../redux/contacts/contactSelectors";

import "./ContacList.css";

const ContactList = ({ contacts }) => {
  const listNull = contacts.length === 0 ? true : false;
  return (
    <>
      {listNull && <Alert text="No have contact" />}
      <TransitionGroup component="ul" className="contact_list">
        {contacts.map(({ id }) => (
          <CSSTransition key={id} timeout={250} classNames="list">
            <ContactListItem id={id} />
          </CSSTransition>
        ))}
      </TransitionGroup>
    </>
  );
};

const mapStateToProps = (state) => ({
  contacts: contactSelectors.getVisibleContacts(state),
});

export default connect(mapStateToProps, null)(ContactList);
