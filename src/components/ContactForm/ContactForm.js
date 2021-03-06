import React, { Component } from "react";
import { connect } from "react-redux";

import contactOperations from "../../services/fetchContacts";
import contactSelectors from "../../redux/contacts/contactSelectors";
import Alert from "../Alert/Alert";

import style from "./ContactForm.module.css";

const INITIAL_CONTACT_STATE = {
  nameContact: "",
  numberContact: "",
};

class ContactForm extends Component {
  state = INITIAL_CONTACT_STATE;

  inputName = ({ target }) => {
    this.setState({
      nameContact: target.value,
    });
  };

  inputNumber = ({ target }) => {
    this.setState({
      numberContact: target.value,
    });
  };

  handleSubmit = (e) => {
    e.preventDefault();
    const { nameContact, numberContact } = this.state;
    const { onAddContact } = this.props;
    onAddContact(nameContact, numberContact);
    this.setState({ ...INITIAL_CONTACT_STATE });
  };

  render() {
    const { nameContact, numberContact } = this.state;
    const { itemsArray } = this.props;

    const filtered = itemsArray
      .map(({ name }) => name.toLowerCase())
      .includes(nameContact.toLowerCase());

    return (
      <>
        {filtered && <Alert text="Contact already exist" />}
        <form onSubmit={this.handleSubmit} className={style.Contact_form}>
          <label>
            Name
            <input
              className={style.inputName}
              type="text"
              value={nameContact}
              onChange={this.inputName}
            />
          </label>
          <label>
            Number
            <input
              placeholder="XXX-XX-XX"
              type="tel"
              pattern="[0-9]{3}-[0-9]{2}-[0-9]{2}"
              value={numberContact}
              onChange={this.inputNumber}
            />
          </label>

          <button type="submit">ADD CONTACT</button>
        </form>
      </>
    );
  }
}

const mapStateToProprs = (state) => ({
  itemsArray: contactSelectors.getContacts(state),
});

const mapDispatchToProps = (dispatch) => {
  return {
    onAddContact: (name, number) =>
      dispatch(contactOperations.addContact({ name, number })),
  };
};

export default connect(mapStateToProprs, mapDispatchToProps)(ContactForm);
