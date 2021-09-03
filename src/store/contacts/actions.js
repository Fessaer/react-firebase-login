/* eslint-disable no-undef */
import { createAction } from "@reduxjs/toolkit";
const axios = require("axios");

export const getContacts = createAction("GET_CONTACTS");
export const setContacts = createAction("SET_CONTACTS");
export const deleteContacts = createAction("DEL_CONTACTS");
export const changeContact = createAction("CHANGE_CONTACT");
export const getSearchContact = createAction("SEARCH_CONTACT");

export const getData = () => {
  return async (dispatch) => {
    await fetch(`http://localhost:4000/users`)
      .then((response) => response.json())
      .then((json) => dispatch(getContacts(json)));
  };
};
export const setData = (data) => {
  return async (dispatch) => {
    await axios
      .post(`http://localhost:4000/users`, data)
      .then((response) => dispatch(setContacts(response.data)));
  };
};
export const deleteData = (data, id) => {
  return async (dispatch) => {
    await axios
      .delete(`http://localhost:4000/users/${id}`)
      .then(() => dispatch(deleteContacts({ data: data, id: id })));
  };
};
export const changeData = (item, id) => {
  return async (dispatch) => {
    await axios
      .patch(`http://localhost:4000/users/${id}`, item)
      .then((response) => dispatch(changeContact(response.data)));
  };
};

export const getSearch = (value) => {
  return async (dispatch) => {
    await axios
      .get(`http://localhost:4000/users?name=${value}`)
      .then((response) => dispatch(getSearchContact(response.data)));
  };
};
