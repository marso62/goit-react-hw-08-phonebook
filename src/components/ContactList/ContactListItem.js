import React from "react";
import { connect } from "react-redux";

import contactOperation from "../../services/fetchContacts";
import contactSelectors from "../../redux/contacts/contactSelectors";
import "./ContacList.css";

const ContactListItem = ({ name, number, onDeleteContact }) => (
  <li className="phone_Item">
    <span className="phone_name">{name}</span>
    <span className="phone_number">{number}</span>
    <button type="button" onClick={onDeleteContact}></button>
  </li>
);

const mapStateToProps = (state, { id }) => ({
  ...contactSelectors.getContactByID(state, id),
});

const mapDispatchToProps = (dispatch, { id }) => ({
  onDeleteContact: () => dispatch(contactOperation.removeContacts(id)),
});

export default connect(mapStateToProps, mapDispatchToProps)(ContactListItem);
