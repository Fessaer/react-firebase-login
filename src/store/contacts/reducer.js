import { createReducer } from "@reduxjs/toolkit";
import { getContacts, setContacts, deleteContacts } from "./actions";

export default createReducer([], {
  [getContacts.type]: (contacts, actions) => {
    contacts.push(...actions.payload);
  },
  [setContacts.type]: (contacts, actions) => {
    console.log(actions, "actions reducer");
    contacts.push(actions.payload);
  },
  [deleteContacts.type]: (contacts, actions) => {
    contacts.push(actions.payload);
  },
});
