import { createReducer } from "@reduxjs/toolkit";
import {
  getContacts,
  setContacts,
  deleteContacts,
  changeContact,
  getSearchContact,
} from "./actions";

export default createReducer([], {
  [getContacts.type]: (contacts, actions) => {
    return actions.payload;
  },
  [setContacts.type]: (contacts, actions) => {
    contacts.push(actions.payload);
  },
  [deleteContacts.type]: (contacts, actions) => {
    const newContacts = actions.payload.data.filter(
      (item) => item.id !== actions.payload.id
    );
    return newContacts;
  },
  [changeContact.type]: (contacts, actions) => {
    return contacts.map((item) => {
      if (item.id === actions.payload.id) {
        return actions.payload;
      } else {
        return item;
      }
    });
  },
  [getSearchContact.type]: (contacts, actions) => {
    return actions.payload;
  },
});
