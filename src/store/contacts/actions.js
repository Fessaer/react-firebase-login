/* eslint-disable no-undef */
import { createAction } from "@reduxjs/toolkit";
const axios = require("axios");

export const getContacts = createAction("GET_CONTACTS");
export const setContacts = createAction("SET_CONTACTS");
export const deleteContacts = createAction("DEL_CONTACTS");

export const getData = () => {
  return async (dispatch) => {
    await fetch(`http://localhost:3000/users`)
      .then((response) => response.json())
      .then((json) => dispatch(getContacts(json)));
  };
};
export const setData = (data) => {
  return async (dispatch) => {
    console.log(data, "setData");
    await axios
      .post(`http://localhost:3000/users`, data)
      .then((response) => dispatch(setContacts(response.data)));
  };
};
export const deleteData = (id) => {
  return async (dispatch) => {
    await fetch(`http://localhost:3000/users`, {
      method: "DELETE",
      body: id,
    })
      .then((response) => response.json())
      .then((json) => dispatch(deleteContacts(json)));
  };
};
