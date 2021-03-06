import { createAction } from "@reduxjs/toolkit";

const fetchContactsRequest = createAction("contacts/fetchRequest");
const fetchContactsSuccess = createAction("contacts/fetchSuccess");
const fetchContactsError = createAction("contacts/fetchError");

const addContactsRequest = createAction("contacts/addRequest");
const addContactsSuccess = createAction("contacts/addSuccess");
const addContactsError = createAction("contacts/addError");

const removeContactsRequest = createAction("contacts/removeRequest");
const removeContactsSuccess = createAction("contacts/removeSuccess");
const removeContactsError = createAction("contacts/removeError");

const changeFilter = createAction("contact/changeFilter");

export default {
  fetchContactsRequest,
  fetchContactsSuccess,
  fetchContactsError,
  addContactsRequest,
  addContactsSuccess,
  addContactsError,
  removeContactsRequest,
  removeContactsSuccess,
  removeContactsError,

  changeFilter,
};
